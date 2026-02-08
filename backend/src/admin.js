import express, { Router } from "express";
import session from "express-session";
import { config } from "./config.js";
import {
  listClients,
  createClientRow,
  updateClient,
  getClientById,
} from "./db.js";

const adminRouter = Router();

/** Sesión para /admin (solo esta ruta) */
adminRouter.use(
  session({
    name: "nexus_admin",
    secret: config.adminPassword || "change-me-in-production",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);

function escapeHtml(s) {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const LAYOUT_CSS = `
  * { box-sizing: border-box; }
  body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; min-height: 100vh; margin: 0; padding: 1.5rem; }
  a { color: #60a5fa; text-decoration: none; }
  a:hover { text-decoration: underline; }
  .card { background: #1e293b; border: 1px solid #334155; border-radius: 1rem; padding: 1.5rem 2rem; max-width: 48rem; margin: 0 auto; }
  h1 { font-size: 1.5rem; margin: 0 0 1rem; }
  h2 { font-size: 1.15rem; margin: 1.5rem 0 0.5rem; color: #94a3b8; }
  label { display: block; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #94a3b8; margin-bottom: 0.35rem; }
  input[type="text"], input[type="password"] { width: 100%; padding: 0.6rem 0.75rem; border: 1px solid #475569; border-radius: 0.5rem; background: #0f172a; color: #f8fafc; font-size: 1rem; }
  input:focus { outline: none; border-color: #3b82f6; }
  .btn { display: inline-block; padding: 0.6rem 1.2rem; border-radius: 0.5rem; font-weight: 600; font-size: 0.9rem; cursor: pointer; border: none; }
  .btn-primary { background: #2563eb; color: white; }
  .btn-primary:hover { background: #1d4ed8; }
  .btn-secondary { background: #334155; color: #f8fafc; }
  .btn-secondary:hover { background: #475569; }
  .btn-danger { background: #dc2626; color: white; }
  .btn-danger:hover { background: #b91c1c; }
  .btn-sm { padding: 0.35rem 0.75rem; font-size: 0.8rem; }
  .error { color: #f87171; font-size: 0.875rem; margin-top: 0.5rem; }
  .success { color: #4ade80; font-size: 0.875rem; margin-top: 0.5rem; }
  table { width: 100%; border-collapse: collapse; margin-top: 0.75rem; }
  th, td { text-align: left; padding: 0.5rem 0.75rem; border-bottom: 1px solid #334155; }
  th { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: #94a3b8; }
  .actions { display: flex; gap: 0.5rem; flex-wrap: wrap; }
  .badge { display: inline-block; padding: 0.2rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem; }
  .badge-active { background: #166534; color: #bbf7d0; }
  .badge-inactive { background: #991b1b; color: #fecaca; }
  .mb-1 { margin-bottom: 1rem; }
  .mt-1 { margin-top: 1rem; }
`;

/** Si no hay ADMIN_PASSWORD configurado, el panel está deshabilitado */
function requireAdminEnabled(req, res, next) {
  if (!config.adminPassword) {
    return res.status(503).send(`
      <!DOCTYPE html>
      <html lang="es"><head><meta charset="UTF-8"><title>Admin deshabilitado</title><style>${LAYOUT_CSS}</style></head>
      <body><div class="card"><h1>Panel deshabilitado</h1><p>Configura <code>ADMIN_PASSWORD</code> en las variables de entorno del backend para activar el panel de administración.</p></div></body></html>
    `);
  }
  next();
}

/** Redirige a login si no hay sesión admin */
function requireAuth(req, res, next) {
  if (req.session?.admin) return next();
  return res.redirect("/admin/login");
}

/** GET /admin/login — formulario de login */
adminRouter.get("/login", requireAdminEnabled, (req, res) => {
  if (req.session?.admin) return res.redirect("/admin");
  const msg = req.query.msg === "bad" ? '<p class="error">Contraseña incorrecta.</p>' : "";
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Admin | Nexus Resolver</title><style>${LAYOUT_CSS}</style></head>
    <body>
      <div class="card" style="max-width: 24rem;">
        <h1>Panel de administración</h1>
        <p class="mb-1">Nexus Resolver — Configuración de clientes</p>
        ${msg}
        <form method="post" action="/admin/login">
          <label for="password">Contraseña</label>
          <input type="password" id="password" name="password" required autocomplete="current-password">
          <button type="submit" class="btn btn-primary mt-1">Entrar</button>
        </form>
      </div>
    </body>
    </html>
  `);
});

/** POST /admin/login */
adminRouter.post("/login", requireAdminEnabled, (req, res) => {
  const password = req.body?.password ?? "";
  if (password !== config.adminPassword) {
    return res.redirect("/admin/login?msg=bad");
  }
  req.session.admin = true;
  return res.redirect("/admin");
});

/** GET /admin/logout */
adminRouter.get("/logout", (req, res) => {
  req.session.destroy(() => {});
  res.redirect("/admin/login");
});

/** GET /admin — listado de clientes */
adminRouter.get("/", requireAdminEnabled, requireAuth, async (req, res) => {
  const clients = await listClients();
  const flash = req.query.saved ? '<p class="success">Guardado correctamente.</p>' : req.query.created ? '<p class="success">Cliente creado.</p>' : "";
  const rows = clients
    .map(
      (c) => `
    <tr>
      <td><code>${escapeHtml(c.slug)}</code></td>
      <td><a href="${escapeHtml(c.login_url)}" target="_blank" rel="noopener">${escapeHtml(c.login_url)}</a></td>
      <td>${escapeHtml(c.name || "—")}</td>
      <td><span class="badge ${c.active ? "badge-active" : "badge-inactive"}">${c.active ? "Activo" : "Inactivo"}</span></td>
      <td class="actions">
        <a href="/admin/clients/${c.id}/edit" class="btn btn-secondary btn-sm">Editar</a>
        <form method="post" action="/admin/clients/${c.id}/toggle" style="display:inline;">
          <button type="submit" class="btn btn-sm ${c.active ? "btn-danger" : "btn-primary"}">${c.active ? "Desactivar" : "Activar"}</button>
        </form>
      </td>
    </tr>
  `
    )
    .join("");

  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Clientes | Nexus Admin</title><style>${LAYOUT_CSS}</style></head>
    <body>
      <div class="card">
        <h1>Clientes del resolver</h1>
        <p><a href="/admin/clients/new" class="btn btn-primary">+ Nuevo cliente</a> &nbsp; <a href="/admin/logout">Cerrar sesión</a></p>
        ${flash}
        <h2>Listado</h2>
        <p style="color:#94a3b8;font-size:0.875rem;">Recuerda añadir el host de cada <em>login_url</em> en <code>ALLOWED_REDIRECT_HOSTS</code> en Render.</p>
        <table>
          <thead><tr><th>Slug</th><th>URL de login</th><th>Nombre</th><th>Estado</th><th>Acciones</th></tr></thead>
          <tbody>${rows || "<tr><td colspan=\"5\">No hay clientes.</td></tr>"}</tbody>
        </table>
      </div>
    </body>
    </html>
  `);
});

/** GET /admin/clients/new */
adminRouter.get("/clients/new", requireAdminEnabled, requireAuth, (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Nuevo cliente | Nexus Admin</title><style>${LAYOUT_CSS}</style></head>
    <body>
      <div class="card">
        <h1>Nuevo cliente</h1>
        <p><a href="/admin">← Volver</a></p>
        <form method="post" action="/admin/clients" class="mt-1">
          <label for="slug">Slug (ID de organización) *</label>
          <input type="text" id="slug" name="slug" required placeholder="ej: pizzeria_roma" pattern="[a-z0-9_]+" title="Solo minúsculas, números y guión bajo">
          <label for="login_url">URL de login *</label>
          <input type="url" id="login_url" name="login_url" required placeholder="https://mi-app.onrender.com/login">
          <label for="name">Nombre (opcional)</label>
          <input type="text" id="name" name="name" placeholder="Nombre del cliente">
          <button type="submit" class="btn btn-primary mt-1">Crear cliente</button>
        </form>
      </div>
    </body>
    </html>
  `);
});

/** POST /admin/clients */
adminRouter.post("/clients", requireAdminEnabled, requireAuth, async (req, res) => {
  const slug = (req.body?.slug ?? "").toLowerCase().trim().replace(/\s+/g, "_");
  const login_url = (req.body?.login_url ?? "").trim();
  const name = (req.body?.name ?? "").trim() || null;
  if (!slug || !login_url) {
    return res.redirect("/admin/clients/new?err=1");
  }
  const result = await createClientRow({ slug, login_url, name });
  if (!result) return res.redirect("/admin/clients/new?err=1");
  return res.redirect("/admin?created=1");
});

/** GET /admin/clients/:id/edit */
adminRouter.get("/clients/:id/edit", requireAdminEnabled, requireAuth, async (req, res) => {
  const client = await getClientById(req.params.id);
  if (!client) return res.redirect("/admin");
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Editar cliente | Nexus Admin</title><style>${LAYOUT_CSS}</style></head>
    <body>
      <div class="card">
        <h1>Editar cliente</h1>
        <p><a href="/admin">← Volver</a> &nbsp; Slug: <code>${escapeHtml(client.slug)}</code> (no editable)</p>
        <form method="post" action="/admin/clients/${escapeHtml(client.id)}" class="mt-1">
          <label for="login_url">URL de login *</label>
          <input type="url" id="login_url" name="login_url" value="${escapeHtml(client.login_url)}" required>
          <label for="name">Nombre (opcional)</label>
          <input type="text" id="name" name="name" value="${escapeHtml(client.name || "")}">
          <label style="display:flex;align-items:center;gap:0.5rem;margin-top:0.5rem;">
            <input type="checkbox" name="active" value="1" ${client.active ? "checked" : ""}> Activo
          </label>
          <button type="submit" class="btn btn-primary mt-1">Guardar</button>
        </form>
      </div>
    </body>
    </html>
  `);
});

/** POST /admin/clients/:id */
adminRouter.post("/clients/:id", requireAdminEnabled, requireAuth, async (req, res) => {
  const id = req.params.id;
  const login_url = (req.body?.login_url ?? "").trim();
  const active = req.body?.active === "1";
  const name = (req.body?.name ?? "").trim() || null;
  if (!login_url) return res.redirect(`/admin/clients/${id}/edit?err=1`);
  await updateClient(id, { login_url, name, active });
  return res.redirect("/admin?saved=1");
});

/** POST /admin/clients/:id/toggle */
adminRouter.post("/clients/:id/toggle", requireAdminEnabled, requireAuth, async (req, res) => {
  const client = await getClientById(req.params.id);
  if (client) await updateClient(req.params.id, { active: !client.active });
  return res.redirect("/admin?saved=1");
});

export default adminRouter;
