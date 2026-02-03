import { config } from "./config.js";

/**
 * Comprueba que la URL de redirect sea de un host permitido (evitar open redirect).
 * @param {string} urlString - URL a la que se va a redirigir
 * @returns {boolean}
 */
export function isAllowedRedirectUrl(urlString) {
  try {
    const url = new URL(urlString);
    const host = url.hostname.toLowerCase();
    return config.allowedRedirectHosts.some(
      (allowed) => host === allowed || host.endsWith("." + allowed)
    );
  } catch {
    return false;
  }
}
