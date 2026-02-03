-- Tabla de URLs de login por cliente (single-tenant).
-- Solo admins deben insertar/actualizar; el resolver solo lee.

create table if not exists public.client_logins (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  login_url text not null,
  name text,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_client_logins_slug on public.client_logins (slug);
create index if not exists idx_client_logins_active on public.client_logins (active) where active = true;

-- RLS: solo el backend (service_role) debe leer; anon/authenticated sin política = sin acceso.
alter table public.client_logins enable row level security;

-- Sin política pública: solo service_role (backend) puede leer (Supabase bypass RLS con service_role).

-- Ejemplo de datos (ejecutar después de crear la tabla):
-- insert into public.client_logins (slug, login_url, name) values
--   ('mic_saas', 'https://mic-saas-fontend.onrender.com/login', 'MIC SaaS'),
--   ('admin', 'https://whtsp-saas-1.onrender.com', 'Admin');
