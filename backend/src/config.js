/**
 * Configuración del resolver. Usar variables de entorno en Render.
 */
const allowedRedirectHosts = (process.env.ALLOWED_REDIRECT_HOSTS || "")
  .split(",")
  .map((h) => h.trim().toLowerCase())
  .filter(Boolean);

export const config = {
  port: parseInt(process.env.PORT || "3000", 10),
  supabaseUrl: process.env.SUPABASE_URL || "",
  supabaseServiceKey: process.env.SUPABASE_SERVICE_ROLE_KEY || "",
  /** Contraseña para el panel de administración (ruta /admin). Si no se define, el panel queda deshabilitado. */
  adminPassword: process.env.ADMIN_PASSWORD || "",
  /** Lista de hosts permitidos para redirect (evitar open redirect). Ej: "app.nexus.com,mic-saas-fontend.onrender.com" */
  allowedRedirectHosts:
    allowedRedirectHosts.length > 0
      ? allowedRedirectHosts
      : ["mic-saas-fontend.onrender.com", "localhost"],
};
