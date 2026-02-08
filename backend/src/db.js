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

/**
 * Lista todos los clientes (para el panel admin).
 * @returns {Promise<Array<{ id: string, slug: string, login_url: string, name: string | null, active: boolean }>>}
 */
export async function listClients() {
  const sb = getSupabase();
  const { data, error } = await sb
    .from("client_logins")
    .select("id, slug, login_url, name, active")
    .order("slug", { ascending: true });

  if (error) {
    console.error("[db] listClients error:", error);
    return [];
  }
  return data || [];
}

/**
 * Crea un cliente en client_logins.
 * @param {{ slug: string, login_url: string, name?: string }} row
 * @returns {{ id: string } | null}
 */
export async function createClientRow(row) {
  const sb = getSupabase();
  const slug = String(row.slug || "").toLowerCase().trim();
  const login_url = String(row.login_url || "").trim();
  const name = row.name != null ? String(row.name).trim() : null;
  if (!slug || !login_url) return null;

  const { data, error } = await sb
    .from("client_logins")
    .insert({ slug, login_url, name })
    .select("id")
    .single();

  if (error) {
    console.error("[db] createClientRow error:", error);
    return null;
  }
  return data;
}

/**
 * Actualiza un cliente por id.
 * @param {string} id - UUID del cliente
 * @param {{ login_url?: string, name?: string, active?: boolean }} updates
 * @returns {boolean}
 */
export async function updateClient(id, updates) {
  const sb = getSupabase();
  const body = {};
  if (updates.login_url !== undefined) body.login_url = String(updates.login_url).trim();
  if (updates.name !== undefined) body.name = updates.name === "" ? null : String(updates.name).trim();
  if (updates.active !== undefined) body.active = Boolean(updates.active);
  body.updated_at = new Date().toISOString();
  if (Object.keys(body).length <= 1) return true; // solo updated_at

  const { error } = await sb.from("client_logins").update(body).eq("id", id);
  if (error) {
    console.error("[db] updateClient error:", error);
    return false;
  }
  return true;
}

/**
 * Obtiene un cliente por id.
 * @param {string} id
 * @returns {Promise<{ id: string, slug: string, login_url: string, name: string | null, active: boolean } | null>}
 */
export async function getClientById(id) {
  const sb = getSupabase();
  const { data, error } = await sb
    .from("client_logins")
    .select("id, slug, login_url, name, active")
    .eq("id", id)
    .maybeSingle();
  if (error) {
    console.error("[db] getClientById error:", error);
    return null;
  }
  return data;
}
