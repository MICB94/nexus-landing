# Nexus SaaS — Landing + Resolver de acceso

Repositorio con **frontend** (landing de promoción) y **backend** (resolver de acceso para Render que redirige a cada cliente a su login según su ID de organización, usando Supabase).

## Estructura

```
nexus-landing/
├── frontend/          # Landing Next.js (soluciones integrales con IA, single-tenant)
│   ├── app/
│   ├── package.json
│   ├── next.config.ts
│   └── ...
├── backend/           # Resolver Node/Express para Render + Supabase
│   ├── src/
│   ├── supabase/
│   │   └── schema.sql # Tabla client_logins
│   ├── package.json
│   └── .env.example
├── package.json       # Scripts que delegan a frontend/backend
└── README.md
```

## Frontend (landing)

- **Next.js 15** con export estático (`output: "export"`)
- **React 19** + **TypeScript** + **Tailwind CSS 4**
- El botón **"Iniciar sesión"** apunta al **resolver** (backend). El usuario no va directo al login de una app; va al resolver, ingresa su ID de organización y es redirigido a la URL de login de ese cliente (guardada en Supabase).

### Desarrollo

```bash
cd frontend
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

### Variables (opcionales)

En `frontend/.env.local`:

| Variable | Descripción |
|----------|-------------|
| `NEXT_PUBLIC_APP_LOGIN_URL` | URL del resolver (por defecto: `https://nexus-resolver.onrender.com`) |
| `NEXT_PUBLIC_FB_PAGE_ID` | Facebook Page ID para Messenger |
| `NEXT_PUBLIC_INSTAGRAM_URL`, `NEXT_PUBLIC_FACEBOOK_URL`, `NEXT_PUBLIC_WHATSAPP_LINK` | Enlaces de contacto |

### Build estático

```bash
cd frontend
npm run build
```

Genera `frontend/out/`. Despliega en Vercel, Netlify, etc.

---

## Backend (resolver para Render)

- **Node.js** + **Express**
- **Supabase**: tabla `client_logins` (slug, login_url, name, active)
- Rutas: `GET /`, `GET /entrar`, `POST /entrar`. Con `?org=SLUG` o body `{ org: "SLUG" }` redirige a la `login_url` del cliente. Sin `org` muestra un formulario para ingresar el ID de organización.
- Validación de dominios con `ALLOWED_REDIRECT_HOSTS` para evitar open redirect.

### Supabase

1. Crea un proyecto en [supabase.com](https://supabase.com).
2. En SQL Editor ejecuta el contenido de `backend/supabase/schema.sql` para crear la tabla `client_logins` y RLS.
3. Inserta clientes, por ejemplo:

```sql
insert into public.client_logins (slug, login_url, name) values
  ('mic_saas', 'https://mic-saas-fontend.onrender.com/login', 'MIC SaaS'),
  ('admin', 'https://whtsp-saas-1.onrender.com', 'Admin');
```

### Desarrollo local

```bash
cd backend
cp .env.example .env
# Edita .env con SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, ALLOWED_REDIRECT_HOSTS
npm install
npm run dev
```

### Despliegue en Render

1. Nuevo **Web Service**, repo conectado, raíz del repo.
2. **Root Directory**: `backend`
3. **Build Command**: (vacío o `npm install`)
4. **Start Command**: `npm start`
5. **Environment**: `PORT` (automático), `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `ALLOWED_REDIRECT_HOSTS`

Después de desplegar, actualiza en el frontend `NEXT_PUBLIC_APP_LOGIN_URL` con la URL del servicio en Render (ej. `https://nexus-resolver.onrender.com`).

---

## Flujo de acceso (single-tenant)

1. Usuario entra a la landing y hace clic en **"Iniciar sesión"**.
2. Va al **resolver** (backend en Render).
3. Si no envía `org`, ve un formulario para ingresar su **ID de organización**.
4. Al enviar el ID (ej. `mic_saas`), el resolver consulta Supabase, obtiene la `login_url` del cliente y redirige allí (solo si el host está en `ALLOWED_REDIRECT_HOSTS`).
5. El usuario termina en el login de su instancia (su dashboard).

## Nota sobre single tenant

El **producto** Nexus SaaS es single-tenant: cada cliente tiene su propia instancia y datos. La **landing** es única y promociona el producto. El **resolver** es el punto de entrada común: según el ID de organización, cada cliente es enviado a su propio login.
