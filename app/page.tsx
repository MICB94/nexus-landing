import Link from "next/link";
import {
  MessageCircle,
  BarChart3,
  Package,
  CalendarDays,
  Sparkles,
  Shield,
  ArrowRight,
  Bot,
} from "lucide-react";

const APP_LOGIN_URL =
  process.env.NEXT_PUBLIC_APP_LOGIN_URL || "https://mic-saas-fontend.onrender.com/login";
const CONTACT_MESSENGER = process.env.NEXT_PUBLIC_CONTACT_MESSENGER || "https://m.me/1021247084396806";

export default function HomePage() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 shadow-lg shadow-blue-900/30">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">
              Nexus<span className="text-blue-400">SaaS</span>
            </span>
          </div>
          <div className="hidden gap-8 md:flex">
            <a href="#plataforma" className="text-sm font-medium text-muted hover:text-foreground transition">
              Plataforma
            </a>
            <a href="#beneficios" className="text-sm font-medium text-muted hover:text-foreground transition">
              Beneficios
            </a>
            <a href="#cta" className="text-sm font-medium text-muted hover:text-foreground transition">
              Contacto
            </a>
          </div>
          <Link
            href={APP_LOGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-background shadow-lg transition hover:bg-slate-100"
          >
            Acceso clientes
          </Link>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="relative min-h-screen overflow-hidden px-4 pt-28 pb-20 sm:px-6 lg:px-8">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15), transparent 40%),
                radial-gradient(circle at 80% 30%, rgba(99, 102, 241, 0.1), transparent 40%)`,
            }}
          />
          <div className="relative mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-400">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
                  Sistema de gestión single tenant
                </div>
                <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  El cerebro digital{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                    de tu negocio
                  </span>
                </h1>
                <p className="max-w-xl text-lg leading-relaxed text-muted">
                  Centraliza <strong className="text-foreground">WhatsApp, Instagram y Facebook</strong>.
                  Gestiona inventario, finanzas, clientes y agenda desde un solo panel. Agente IA con tu contexto.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row pt-2">
                  <Link
                    href={CONTACT_MESSENGER}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-500"
                  >
                    Solicitar demo
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link
                    href={APP_LOGIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card/50 px-8 py-4 font-semibold text-foreground transition hover:bg-card"
                  >
                    Ir al panel
                  </Link>
                </div>
                <div className="flex gap-6 border-t border-border/50 pt-8 text-muted">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-blue-400" />
                    <span className="text-sm">Seguro</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-blue-400" />
                    <span className="text-sm">Reportes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bot className="h-5 w-5 text-blue-400" />
                    <span className="text-sm">IA integrada</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-2xl border border-border/50 bg-card/50 p-8 shadow-2xl backdrop-blur-sm">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20">
                      <Sparkles className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Todo en un solo lugar</h3>
                      <p className="text-sm text-muted">Inbox, CRM, ERP y agente IA</p>
                    </div>
                  </div>
                  <p className="text-muted text-sm leading-relaxed">
                    Cada cliente tiene su propia instancia, configurada a medida. Sin compartir datos entre empresas.
                    Desplegado en la nube, con soporte y evolución continua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Plataforma */}
        <section id="plataforma" className="border-t border-border/50 bg-background px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Suite integral</h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted">Más que un bot. Un sistema operativo para tu empresa.</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-border/50 bg-card/40 p-8 transition hover:border-blue-500/40 hover:bg-card/60">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20">
                  <MessageCircle className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">Mensajería unificada</h3>
                <p className="text-sm text-muted">
                  WhatsApp, Instagram y Facebook en una sola bandeja. Respuestas con IA y escalado a humanos cuando haga falta.
                </p>
              </div>
              <div className="rounded-2xl border border-border/50 bg-card/40 p-8 transition hover:border-blue-500/40 hover:bg-card/60">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/20">
                  <BarChart3 className="h-6 w-6 text-indigo-400" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">CRM y pipeline</h3>
                <p className="text-sm text-muted">
                  Clientes, historial, etapas de venta y notificaciones. Todo el contexto en un solo lugar.
                </p>
              </div>
              <div className="rounded-2xl border border-border/50 bg-card/40 p-8 transition hover:border-blue-500/40 hover:bg-card/60">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/20">
                  <Package className="h-6 w-6 text-violet-400" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">Inventario y finanzas</h3>
                <p className="text-sm text-muted">
                  Stock, movimientos, reportes y exportación. Control en tiempo real.
                </p>
              </div>
              <div className="rounded-2xl border border-border/50 bg-card/40 p-8 transition hover:border-blue-500/40 hover:bg-card/60">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500/20">
                  <CalendarDays className="h-6 w-6 text-pink-400" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">Agenda y marketing</h3>
                <p className="text-sm text-muted">
                  Calendario, eventos y programación de publicaciones. Automatización de presencia en redes.
                </p>
              </div>
              <div className="rounded-2xl border border-border/50 bg-card/40 p-8 transition hover:border-blue-500/40 hover:bg-card/60 sm:col-span-2">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/20">
                  <Sparkles className="h-6 w-6 text-amber-400" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">Agente IA con tu contexto</h3>
                <p className="max-w-2xl text-sm text-muted">
                  Entiende audios, sugiere productos, agenda reuniones y responde con el tono de tu negocio. No es un chatbot de botones: es un agente configurado con tu información.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Beneficios / Single tenant */}
        <section id="beneficios" className="border-t border-border/50 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
                  Un sistema por empresa. Sin mezclar datos.
                </h2>
                <p className="mt-6 text-lg text-muted">
                  Nexus SaaS es <strong className="text-foreground">single tenant</strong>: cada cliente tiene su propia instancia, su propia base de datos y su propia configuración. No compartimos información entre empresas. Tu panel, tus reglas, tu agente IA.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "Instancia y base de datos dedicada",
                    "Personalización a medida (flujos, prompts, integraciones)",
                    "Cumplimiento y privacidad por cliente",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted">
                      <span className="h-2 w-2 rounded-full bg-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-border/50 bg-card/40 p-8">
                <p className="text-sm text-muted">
                  Si en el futuro una empresa necesita su propia página web de marca o un repo específico, se puede ofrecer como <strong className="text-foreground">servicio aparte</strong>. Por defecto, una sola web de producto para todos los interesados.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="border-t border-border/50 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
              ¿Listo para centralizar tu operación?
            </h2>
            <p className="mt-4 text-lg text-muted">
              Solicita una demo o accede al panel si ya eres cliente.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href={CONTACT_MESSENGER}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-blue-500"
              >
                Hablar con ventas
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href={APP_LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-card/50 px-8 py-4 font-semibold text-foreground transition hover:bg-card"
              >
                Acceso al panel
              </Link>
            </div>
          </div>
        </section>

        <footer className="border-t border-border/50 px-4 py-12 text-center text-sm text-muted sm:px-6">
          <div className="mx-auto max-w-6xl">
            <p>© {new Date().getFullYear()} Nexus SaaS. Sistema de gestión single tenant.</p>
          </div>
        </footer>
      </main>

      {/* Botón flotante contacto */}
      <a
        href={CONTACT_MESSENGER}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl shadow-blue-600/30 transition hover:scale-110 hover:bg-blue-500"
        aria-label="Abrir chat de contacto"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </>
  );
}
