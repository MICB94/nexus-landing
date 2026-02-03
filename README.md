# Nexus SaaS — Página web de promoción

Repositorio **exclusivo** para la página web de promoción de Nexus SaaS. Un solo sitio para el producto; no hay una web por empresa (single tenant) a menos que se contrate como servicio aparte.

## Stack

- **Next.js 15** con export estático (`output: "export"`)
- **React 19** + **TypeScript**
- **Tailwind CSS 4**
- **Lucide React** (iconos)

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build estático

```bash
npm run build
```

Genera la carpeta `out/` con HTML, CSS y JS estáticos. Puedes desplegar `out/` en Vercel, Netlify, GitHub Pages o cualquier hosting estático.

## Variables de entorno (opcionales)

Crea `.env.local` si quieres personalizar URLs:

| Variable | Descripción | Por defecto |
|----------|-------------|-------------|
| `NEXT_PUBLIC_APP_LOGIN_URL` | URL del panel de clientes (login) | `https://mic-saas-fontend.onrender.com/login` |
| `NEXT_PUBLIC_CONTACT_MESSENGER` | Enlace de contacto (Messenger) | `https://m.me/1021247084396806` |

## Despliegue

- **Vercel:** Conectar el repo y desplegar; Next.js detecta `output: "export"` y genera estático.
- **Netlify:** Comando de build `npm run build`, directorio de publicación `out`.
- **GitHub Pages:** Usar la carpeta `out` como fuente o un workflow que ejecute `npm run build` y publique `out/`.

## Estructura

```
nexus-landing/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── package.json
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## Nota sobre single tenant

El **producto** Nexus SaaS es single tenant: cada cliente tiene su propia instancia y datos. Esta **web** es única: promociona el producto a todos los interesados. Si en el futuro una empresa pide su propia página de marca o repo dedicado, se puede ofrecer como servicio aparte.
