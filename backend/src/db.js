import { createClient } from "@supabase/supabase-js";
import { config } from "./config.js";

let supabase = null;

export function getSupabase() {
  if (!supabase) {
    if (!config.supabaseUrl || !config.supabaseServiceKey) {
      throw new Error("SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required");
    }
    supabase = createClient(config.supabaseUrl, config.supabaseServiceKey);
  }
  return supabase;
}

/**
 * Busca la URL de login de un cliente por slug/org_id.
 * @param {string} slug - Identificador del cliente (ej: pizzeria_roma, mic_saas)
 * @returns {{ login_url: string } | null}
 */
export async function getLoginUrlBySlug(slug) {
  const sb = getSupabase();
  const { data, error } = await sb
    .from("client_logins")
    .select("login_url")
    .eq("slug", slug.toLowerCase().trim())
    .eq("active", true)
    .maybeSingle();

  if (error) {
    console.error("[db] getLoginUrlBySlug error:", error);
    return null;
  }
  return data;
}
