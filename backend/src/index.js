import express from "express";
import { getLoginUrlBySlug } from "./db.js";
import { isAllowedRedirectUrl } from "./redirect.js";
import { config } from "./config.js";
import adminRouter from "./admin.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("trust proxy", 1);

/** Panel de administración (clientes del resolver). Protegido con ADMIN_PASSWORD. */
app.use("/admin", adminRouter);

/** Health check para Render */
app.get("/health", (_, res) => {
  res.status(200).json({ ok: true, service: "nexus-resolver" });
});

const FORM_HTML = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Acceso al panel | Nexus</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; min-height: 100vh; display: flex; align-items: center; justify-content: center; margin: 0; padding: 1rem; }
    .card { background: #1e293b; border: 1px solid #334155; border-radius: 1rem; padding: 2rem; max-width: 24rem; width: 100%; }
    h1 { font-size: 1.25rem; margin: 0 0 0.5rem; }
    p { color: #94a3b8; font-size: 0.875rem; margin: 0 0 1.5rem; }
    label { display: block; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #94a3b8; margin-bottom: 0.5rem; }
    input { width: 100%; padding: 0.75rem 1rem; border: 1px solid #475569; border-radius: 0.5rem; background: #0f172a; color: #f8fafc; font-size: 1rem; }
    input:focus { outline: none; border-color: #3b82f6; }
    button { width: 100%; margin-top: 1rem; padding: 0.75rem 1rem; background: #2563eb; color: white; border: none; border-radius: 0.5rem; font-weight: 600; cursor: pointer; font-size: 1rem; }
    button:hover { background: #1d4ed8; }
    .error { color: #f87171; font-size: 0.875rem; margin-top: 0.5rem; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Acceso al panel</h1>
    <p>Ingresa el ID de tu organización para ir a tu login.</p>
    <form method="get" action="/entrar">
      <label for="org">ID de organización</label>
      <input type="text" id="org" name="org" placeholder="Ej: mic_saas" required autocomplete="organization">
      <button type="submit">Entrar</button>
    </form>
    <p id="error" class="error" style="display:none"></p>
  </div>
</body>
</html>
`;

/**
 * Resolver: redirige al login del cliente.
 * - GET / o GET /entrar sin org -> muestra formulario "ID de organización"
 * - GET /?org=SLUG  o GET /entrar?org=SLUG  -> redirect a login_url del cliente
 * - POST /entrar  body: { org: "SLUG" }  -> redirect
 */
async function handleResolve(req, res) {
  const slug =
    req.query.org ||
    req.body?.org ||
    (req.query.slug ? req.query.slug : null);
  if (!slug || typeof slug !== "string") {
    return res.status(200).send(FORM_HTML);
  }

  const row = await getLoginUrlBySlug(slug);
  if (!row || !row.login_url) {
    return res.status(404).send(`
      <!DOCTYPE html>
      <html><body>
        <h1>Organización no encontrada</h1>
        <p>No existe un acceso configurado para <strong>${escapeHtml(slug)}</strong>.</p>
      </body></html>
    `);
  }

  if (!isAllowedRedirectUrl(row.login_url)) {
    console.error("[resolve] URL no permitida:", row.login_url);
    return res.status(500).send(`
      <!DOCTYPE html>
      <html><body>
        <h1>Error de configuración</h1>
        <p>La URL de login de esta organización no está en la lista de dominios permitidos.</p>
      </body></html>
    `);
  }

  return res.redirect(302, row.login_url);
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

app.get("/", handleResolve);
app.get("/entrar", handleResolve);
app.post("/entrar", handleResolve);

const port = config.port;
app.listen(port, () => {
  console.log(`Nexus Resolver listening on port ${port}`);
});
