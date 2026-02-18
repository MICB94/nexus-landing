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
  Server,
  Brain,
  Database,
  CalendarCheck,
  Megaphone,
  Wallet,
  Users,
  LayoutDashboard,
  Code,
  CreditCard,
  Building2,
  Home,
  AlertTriangle,
  Zap,
  Award,
  Lock,
  LogIn,
  MessageSquare,
  Settings2,
  Rocket,
  Store,
  Cog,
  HeartPulse,
  GraduationCap,
  Check,
  X,
} from "lucide-react";
import AnimateInView from "./components/AnimateInView";
import ContactChatTrigger from "./components/ContactChatTrigger";
import FAQAccordion from "./components/FAQAccordion";

// URL del resolver (backend en Render): el usuario ingresa su ID de organización y es redirigido a su login
const APP_LOGIN_URL =
  process.env.NEXT_PUBLIC_APP_LOGIN_URL || "https://nexus-resolver.onrender.com";

// Canales de contacto: chat directo con Nexus (API) + Instagram/Facebook/WhatsApp en nueva pestaña
const CONTACT_INSTAGRAM = process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/mic_saas/";
const CONTACT_FACEBOOK = process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://www.facebook.com/profile.php?id=61586902978931";
const CONTACT_WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP_LINK || "";

export default function HomePage() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-md shadow-sm animate-fade-in">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg shadow-blue-500/25 transition-transform duration-300 hover:scale-105">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">
              Nexus<span className="text-blue-600">SaaS</span>
            </span>
          </div>
          <div className="hidden gap-6 md:flex">
            <a href="#como-empezar" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
              Cómo empezar
            </a>
            <a href="#plataforma" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
              Plataforma
            </a>
            <a href="#sectores" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
              Sectores
            </a>
            <a href="#beneficios" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
              Beneficios
            </a>
            <a href="#faq" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
              FAQ
            </a>
            <a href="#motivacion" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
              Motivación
            </a>
            <a href="#cta" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
              Contacto
            </a>
          </div>
          <div className="flex items-center gap-3">
            <ContactChatTrigger variant="nav" />
            <Link
              href={APP_LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md transition hover:bg-blue-600"
            >
              Iniciar sesión
            </Link>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="relative min-h-screen overflow-hidden px-4 pt-28 pb-20 sm:px-6 lg:px-8">
          <div
            className="absolute inset-0 opacity-60 animate-glow-breathe"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.08), transparent 45%),
                radial-gradient(circle at 80% 30%, rgba(99, 102, 241, 0.06), transparent 45%)`,
            }}
          />
          <div className="relative mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600 animate-fade-in-up animation-delay-0">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
                  Soluciones integrales con IA a la medida
                </div>
                <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl animate-fade-in-up animation-delay-75">
                  IA hecha a la medida{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent animate-glow-breathe">
                    para tu negocio
                  </span>
                </h1>
                <p className="max-w-xl text-lg leading-relaxed text-muted animate-fade-in-up animation-delay-150">
                  Desarrollamos <strong className="text-foreground">soluciones integrales con IA</strong> diseñadas para tu operación: mensajería unificada, CRM, inventario, finanzas y agentes con tu contexto. Cada cliente tiene su propio panel y su propia instancia.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-4 pt-2 animate-fade-in-up animation-delay-300">
                  <Link
                    href={APP_LOGIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:bg-blue-500 hover:scale-[1.02]"
                  >
                    Iniciar sesión
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <ContactChatTrigger variant="hero" />
                </div>
                <div className="flex gap-6 border-t border-border pt-8 text-muted animate-fade-in-up animation-delay-400">
                  <div className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
                    <Shield className="h-5 w-5 text-blue-600" />
                    <span className="text-sm">Seguro</span>
                  </div>
                  <div className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
                    <BarChart3 className="h-5 w-5 text-blue-600" />
                    <span className="text-sm">Reportes</span>
                  </div>
                  <div className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
                    <Bot className="h-5 w-5 text-blue-600" />
                    <span className="text-sm">IA integrada</span>
                  </div>
                </div>
              </div>
              <div className="relative animate-fade-in-up animation-delay-200 space-y-4">
                <div className="rounded-2xl border border-border bg-card p-8 shadow-xl shadow-slate-200/50 animate-float-soft">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/15">
                      <Sparkles className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Solución integral a tu medida</h3>
                      <p className="text-sm text-muted">Inbox, CRM, inventario, finanzas y agente IA</p>
                    </div>
                  </div>
                  <p className="text-muted text-sm leading-relaxed mb-6">
                    Arquitectura single-tenant: cada cliente inicia sesión y accede solo a su propio dashboard. Instancia dedicada, sin mezclar datos entre empresas.
                  </p>
                  <ul className="space-y-3 text-sm text-muted">
                    <li className="flex items-center gap-2">
                      <MessageCircle className="h-4 w-4 text-blue-600 shrink-0" />
                      Inbox unificado
                    </li>
                    <li className="flex items-center gap-2">
                      <BarChart3 className="h-4 w-4 text-blue-600 shrink-0" />
                      CRM y leads
                    </li>
                    <li className="flex items-center gap-2">
                      <Package className="h-4 w-4 text-blue-600 shrink-0" />
                      Inventario en tiempo real
                    </li>
                    <li className="flex items-center gap-2">
                      <Bot className="h-4 w-4 text-blue-600 shrink-0" />
                      Agente IA con tu contexto
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl border border-border bg-card/80 p-5 shadow-lg shadow-slate-200/40">
                  <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <LayoutDashboard className="h-4 w-4 text-blue-600" />
                    Tu instancia, tu acceso
                  </h4>
                  <div className="flex items-center justify-between gap-2 text-xs text-muted">
                    <span className="flex items-center gap-1.5">
                      <LogIn className="h-3.5 w-3.5 text-blue-500" />
                      Iniciar sesión
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
                    <span className="flex items-center gap-1.5">
                      <LayoutDashboard className="h-3.5 w-3.5 text-blue-500" />
                      Tu panel
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
                    <span className="flex items-center gap-1.5">
                      <Lock className="h-3.5 w-3.5 text-blue-500" />
                      Solo tus datos
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cómo empezar */}
        <section id="como-empezar" className="border-t border-border bg-slate-50/40 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <AnimateInView animationClass="animate-on-scroll-soft">
              <div className="mb-16 text-center">
                <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Cómo empezar</h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
                  Cuatro pasos para tener tu solución con IA operando en tu negocio.
                </p>
              </div>
            </AnimateInView>
            <AnimateInView animationClass="animate-on-scroll">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { icon: MessageSquare, title: "Conversamos", desc: "Entendemos tu negocio, tu flujo y tus metas. Sin compromiso." },
                  { icon: Settings2, title: "Configuramos", desc: "Ajustamos la plataforma a tu operación: tono, datos y procesos." },
                  { icon: Brain, title: "Entrenamos la IA", desc: "Cargamos tus conocimientos y entrenamos el agente para que hable como tú." },
                  { icon: Rocket, title: "Lanzamos", desc: "Puesta en marcha, migración de datos y soporte hasta que estés operando." },
                ].map((step, i) => (
                  <div key={i} className="relative rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-blue-500/30 animate-card-hover">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/15 text-blue-600">
                      <step.icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Paso {i + 1}</span>
                    <h3 className="mt-1 text-lg font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-sm text-muted">{step.desc}</p>
                    {i < 3 && (
                      <ArrowRight className="absolute -right-4 top-1/2 hidden h-8 w-8 -translate-y-1/2 text-slate-300 lg:block" />
                    )}
                  </div>
                ))}
              </div>
            </AnimateInView>
          </div>
        </section>

        {/* Plataforma — Inventario de soluciones */}
        <section id="plataforma" className="border-t border-border bg-background px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <AnimateInView animationClass="animate-on-scroll-soft">
              <div className="mb-16 text-center">
                <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Inventario de soluciones</h2>
                <p className="mx-auto mt-4 max-w-3xl text-lg text-muted">
                  Tres pilares que te benefician: <strong className="text-foreground">arquitectura single-tenant</strong> (tu instancia, tus datos, sin mezclar con otros), <strong className="text-foreground">personalización real</strong> (tono, flujos y conocimientos de tu negocio) e <strong className="text-foreground">IA integrada en tus procesos</strong> (no un chatbot genérico: agentes que trabajan con tu CRM, inventario y agenda).
                </p>
              </div>
            </AnimateInView>

            <AnimateInView animationClass="animate-on-scroll">
              <div className="grid gap-4 sm:gap-5 lg:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr stagger-in-view">
              <div className="rounded-xl border border-slate-300 bg-card p-5 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-slate-400/40 hover:shadow-lg hover:shadow-slate-500/10 animate-card-hover">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-500/25">
                  <Server className="h-5 w-5 text-slate-400" />
                </div>
                <h3 className="mb-1.5 text-base font-semibold text-foreground">Setup inicial single-tenant</h3>
                <p className="text-sm text-muted">
                  Infraestructura dedicada, dominio, SSL y base de datos aislada. Beneficio: seguridad y rendimiento solo para tu negocio, sin compartir recursos ni datos.
                </p>
              </div>
              <div className="rounded-2xl border border-amber-500/25 bg-amber-500/10 p-6 transition-all duration-300 hover:scale-[1.03] hover:border-amber-400/40 hover:shadow-xl hover:shadow-amber-500/15 animate-card-hover sm:col-span-2 lg:col-span-1">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/25">
                  <Brain className="h-6 w-6 text-amber-400" />
                </div>
                <h3 className="mb-1.5 text-lg font-semibold text-foreground">Entrenamiento cognitivo IA</h3>
                <p className="text-sm text-muted">
                  Prompts a tu medida, tono de voz de tu marca y carga de conocimientos de tu negocio. Beneficio: la IA habla como tú, conoce tus productos y procesos.
                </p>
              </div>
              <div className="rounded-xl border border-emerald-500/25 bg-emerald-500/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-lg hover:shadow-emerald-500/10 animate-card-hover">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/25">
                  <Database className="h-5 w-5 text-emerald-400" />
                </div>
                <h3 className="mb-1.5 text-base font-semibold text-foreground">Migración de datos</h3>
                <p className="text-sm text-muted">
                  Limpieza e importación de clientes, inventarios y agendas históricas. Beneficio: empiezas con todo tu pasado en un solo lugar, sin empezar de cero.
                </p>
              </div>
              <div className="rounded-2xl border-2 border-blue-500/30 bg-blue-500/15 p-6 transition-all duration-300 hover:scale-[1.02] hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-500/20 animate-card-hover lg:col-span-2">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/30">
                  <MessageCircle className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-1.5 text-lg font-semibold text-foreground">Core Nexus (Inbox + Bot)</h3>
                <p className="text-sm text-muted">
                  Motor de IA, inbox unificado multi-agente y WhatsApp Business API. Beneficio: una sola bandeja para atender, con IA que escala a humanos cuando hace falta.
                </p>
              </div>
              <div className="rounded-xl border border-pink-500/25 bg-pink-500/10 p-5 transition-all duration-300 hover:scale-[1.02] hover:border-pink-400/40 hover:shadow-lg hover:shadow-pink-500/10 animate-card-hover">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-pink-500/25">
                  <CalendarCheck className="h-5 w-5 text-pink-400" />
                </div>
                <h3 className="mb-1.5 text-base font-semibold text-foreground">Agenda & reservas</h3>
                <p className="text-sm text-muted">
                  Citas automatizadas, sincronización con Google Calendar, recordatorios y cancelaciones. Beneficio: menos no-shows y menos trabajo manual en la agenda.
                </p>
              </div>
              <div className="rounded-2xl border border-violet-500/30 bg-violet-500/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/45 hover:shadow-xl hover:shadow-violet-500/15 animate-card-hover">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/25">
                  <Package className="h-5 w-5 text-violet-400" />
                </div>
                <h3 className="mb-1.5 text-lg font-semibold text-foreground">POS & inventario</h3>
                <p className="text-sm text-muted">
                  Punto de venta, catálogo, stock en tiempo real, carrito y links de pago. Beneficio: control total de ventas e inventario desde el mismo panel que tu IA.
                </p>
              </div>
              <div className="rounded-xl border border-indigo-500/25 bg-indigo-500/10 p-5 transition-all duration-300 hover:scale-[1.02] hover:border-indigo-400/40 hover:shadow-lg hover:shadow-indigo-500/10 animate-card-hover">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/25">
                  <BarChart3 className="h-5 w-5 text-indigo-400" />
                </div>
                <h3 className="mb-1.5 text-base font-semibold text-foreground">CRM & leads</h3>
                <p className="text-sm text-muted">
                  Scoring de leads, historial de conversaciones, etiquetado automático y notas de seguimiento. Beneficio: la IA y tu equipo ven el mismo contexto del cliente.
                </p>
              </div>
              <div className="rounded-xl border border-rose-500/25 bg-rose-500/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-rose-400/40 hover:shadow-lg animate-card-hover">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-rose-500/25">
                  <Megaphone className="h-5 w-5 text-rose-400" />
                </div>
                <h3 className="mb-1.5 text-base font-semibold text-foreground">Marketing</h3>
                <p className="text-sm text-muted">
                  Copys para RRSS, programación de posts y respuestas automáticas a campañas. Beneficio: contenido y respuestas alineados con tu marca, con menos esfuerzo.
                </p>
              </div>
              <div className="rounded-2xl border border-amber-600/30 bg-amber-600/10 p-6 transition-all duration-300 hover:scale-[1.02] hover:border-amber-500/45 hover:shadow-xl hover:shadow-amber-500/15 animate-card-hover lg:col-span-2">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-600/25">
                  <Wallet className="h-5 w-5 text-amber-500" />
                </div>
                <h3 className="mb-1.5 text-lg font-semibold text-foreground">Finanzas & SII</h3>
                <p className="text-sm text-muted">
                  Flujo de caja, egresos y emisión de DTE. Beneficio: control financiero y cumplimiento tributario integrado al resto de tu operación.
                </p>
              </div>
              <div className="rounded-xl border border-cyan-500/25 bg-cyan-500/10 p-5 transition-all duration-300 hover:scale-[1.02] hover:border-cyan-400/40 hover:shadow-lg animate-card-hover">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/25">
                  <Users className="h-5 w-5 text-cyan-400" />
                </div>
                <h3 className="mb-1.5 text-base font-semibold text-foreground">Gestión colaboradores</h3>
                <p className="text-sm text-muted">
                  Turnos, comisiones por venta y permisos del equipo. Beneficio: RRHH simplificado y alineado con las ventas que ya registra el sistema.
                </p>
              </div>
              <div className="rounded-2xl border border-blue-600/30 bg-blue-600/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-500/20 animate-card-hover">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/25">
                  <LayoutDashboard className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="mb-1.5 text-lg font-semibold text-foreground">Administración & KPIs</h3>
                <p className="text-sm text-muted">
                  Dashboard ejecutivo: rentabilidad, rendimiento de IA y reportes exportables. Beneficio: visión gerencial en un solo lugar, con métricas que importan.
                </p>
              </div>
              <div className="rounded-xl border border-green-600/25 bg-green-600/10 p-5 transition-all duration-300 hover:scale-[1.02] hover:border-green-400/40 hover:shadow-lg animate-card-hover">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-green-600/25">
                  <CreditCard className="h-5 w-5 text-green-400" />
                </div>
                <h3 className="mb-1.5 text-base font-semibold text-foreground">Pasarela de pagos</h3>
                <p className="text-sm text-muted">
                  Conexión personalizada (Pago Único) con Webpay, MercadoPago o Fintoc en tu sitio. Beneficio: cobros integrados a tu flujo sin depender de un solo proveedor.
                </p>
              </div>

              {/* Rey de la sección: el software se adapta a ti */}
              <div className="rounded-3xl border-2 border-blue-400/40 bg-gradient-to-br from-blue-500/20 via-indigo-500/15 to-violet-500/20 p-8 transition-all duration-300 hover:scale-[1.01] hover:border-blue-400/60 hover:shadow-2xl hover:shadow-blue-500/25 animate-card-hover lg:col-span-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
                  <div className="mb-4 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500/30 to-amber-500/30 ring-2 ring-orange-400/30 sm:mb-0">
                    <Code className="h-8 w-8 text-orange-400" />
                  </div>
                  <div>
                    <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-blue-600">Lo más importante</p>
                    <h3 className="mb-2 text-2xl font-bold text-foreground sm:text-3xl">Desarrollo de soluciones a tu medida</h3>
                    <p className="max-w-3xl text-base text-muted leading-relaxed">
                      Integraciones a medida, scripts y automatizaciones. <strong className="text-foreground">El software se adapta a ti, no tú al software.</strong> Cuando el producto estándar no alcanza, extendemos la solución exactamente como tu negocio lo necesita.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </AnimateInView>
          </div>
        </section>

        {/* Sectores */}
        <section id="sectores" className="border-t border-border bg-background px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <AnimateInView animationClass="animate-on-scroll-soft">
              <div className="mb-16 text-center">
                <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Adaptamos la solución a tu sector</h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
                  Los mismos módulos se configuran según las necesidades de cada industria.
                </p>
              </div>
            </AnimateInView>
            <AnimateInView animationClass="animate-on-scroll">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-2xl border border-amber-500/25 bg-amber-500/5 p-6 transition-all duration-300 hover:border-amber-400/40 hover:shadow-lg animate-card-hover">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/20">
                    <Store className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">Comercio y retail</h3>
                  <p className="text-sm text-muted mb-3">POS, inventario, CRM de clientes frecuentes, IA para consultas de productos y reservas. Links de pago, carrito y marketing para ofertas.</p>
                  <p className="text-xs font-medium text-amber-700">Restaurantes, tiendas, e-commerce, distribuidores</p>
                </div>
                <div className="rounded-2xl border border-slate-500/25 bg-slate-500/5 p-6 transition-all duration-300 hover:border-slate-400/40 hover:shadow-lg animate-card-hover">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-500/20">
                    <Cog className="h-6 w-6 text-slate-600" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">Industria y maquinaria</h3>
                  <p className="text-sm text-muted mb-3">CRM para cotizaciones y mantenimiento, inventario de repuestos, agenda de servicios. IA para consultas técnicas, manuales y reportes de operación.</p>
                  <p className="text-xs font-medium text-slate-600">Empresas de maquinaria, construcción, manufactura</p>
                </div>
                <div className="rounded-2xl border border-emerald-500/25 bg-emerald-500/5 p-6 transition-all duration-300 hover:border-emerald-400/40 hover:shadow-lg animate-card-hover">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20">
                    <HeartPulse className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">Médico</h3>
                  <p className="text-sm text-muted mb-3">Agenda de citas, fichas de pacientes, inventario de insumos. IA para triaje básico y recordatorios de control. Single-tenant para cumplimiento y datos sensibles.</p>
                  <p className="text-xs font-medium text-emerald-700">Clínicas dentales, centros médicos, laboratorios</p>
                </div>
                <div className="rounded-2xl border border-pink-500/25 bg-pink-500/5 p-6 transition-all duration-300 hover:border-pink-400/40 hover:shadow-lg animate-card-hover">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500/20">
                    <Sparkles className="h-6 w-6 text-pink-600" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">Estética</h3>
                  <p className="text-sm text-muted mb-3">Agenda y reservas, CRM con historial de servicios, inventario de productos. IA para consultas, recordatorios y marketing de fidelización.</p>
                  <p className="text-xs font-medium text-pink-700">Salones de belleza, barberías, clínicas estéticas, spas</p>
                </div>
                <div className="rounded-2xl border border-indigo-500/25 bg-indigo-500/5 p-6 transition-all duration-300 hover:border-indigo-400/40 hover:shadow-lg animate-card-hover sm:col-span-2 lg:col-span-1">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/20">
                    <GraduationCap className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">Educación</h3>
                  <p className="text-sm text-muted mb-3">Comunicación con apoderados, agenda de reuniones, inventario de materiales. Pagos de mensualidades. IA para consultas frecuentes y avisos.</p>
                  <p className="text-xs font-medium text-indigo-700">Colegios, liceos, instituciones educativas</p>
                </div>
              </div>
            </AnimateInView>
          </div>
        </section>

        {/* Beneficios / Single tenant vs multi-tenant */}
        <section id="beneficios" className="border-t border-border bg-slate-50/60 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <AnimateInView animationClass="animate-on-scroll-soft">
              <div className="stagger-in-view flex flex-col gap-4">
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl text-center mb-4">
              Un sistema por empresa. Login y panel propios.
            </h2>
            <p className="text-center text-muted max-w-2xl mx-auto mb-12">
              ¿Single-tenant o multi-tenant? Te lo explicamos en simple.
            </p>

            <div className="grid gap-8 lg:grid-cols-2 mb-16">
              {/* Multi-tenant: brillo rojizo, peligro, anticuado */}
              <div className="rounded-2xl bg-red-50/80 p-6 sm:p-8 card-multi-tenant relative overflow-hidden transition-shadow duration-300">
                <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/20" aria-hidden>
                  <AlertTriangle className="h-4 w-4 text-red-500" />
                </div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/20 ring-2 ring-red-400/30">
                  <Building2 className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Multi-tenant (la mayoría del mercado)</h3>
                <p className="text-muted text-sm mb-4">
                  Imagina un <strong className="text-foreground">edificio con muchos departamentos</strong>: todos comparten la misma estructura, las mismas cañerías, el mismo ascensor. Cada uno tiene su llave y su espacio, pero si algo falla o hay que cambiar una regla, afecta a todos. Tus datos viven en el mismo servidor que el de otras empresas; la personalización suele tener límites.
                </p>
                <p className="text-muted text-sm">
                  Sirve para empezar rápido, pero cuando tu negocio crece o es distinto al resto, te das cuenta de que <strong className="text-foreground">tienes que adaptarte tú al software</strong>, no al revés.
                </p>
              </div>
              {/* Single-tenant: neon multicolor, moderno y accesible */}
              <div className="rounded-2xl bg-slate-50/80 p-6 sm:p-8 card-single-tenant relative overflow-hidden transition-shadow duration-300">
                <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/20" aria-hidden>
                  <Zap className="h-4 w-4 text-cyan-500" />
                </div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 via-violet-500/20 to-emerald-500/20 ring-2 ring-cyan-400/30">
                  <Home className="h-6 w-6 text-cyan-500" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Single-tenant (como Nexus)</h3>
                <p className="text-muted text-sm mb-4">
                  Es como tener <strong className="text-foreground">tu propia casa</strong>: tu terreno, tu instalación, tu llave. Nadie comparte tu base de datos ni tu configuración. Cada cliente tiene su instancia dedicada, su propio login y su propio panel. Si hay que cambiar algo, se hace solo para ti; tu información no se mezcla con la de nadie.
                </p>
                <p className="text-muted text-sm">
                  Más seguridad, más control y la posibilidad de <strong className="text-foreground">personalizar de verdad</strong> — flujos, tono de voz de la IA, integraciones — sin depender de lo que permita “el edificio”.
                </p>
              </div>
            </div>

            {/* Por qué Nexus es mejor — tarjeta premium, destaque dorado */}
            <div className="rounded-2xl p-6 sm:p-8 lg:p-10 card-value-proposition relative overflow-hidden transition-all duration-300">
              <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-amber-500/20 px-3 py-1.5 text-xs font-semibold text-amber-800" aria-hidden>
                <Award className="h-3.5 w-3.5" />
                Propuesta de valor
              </div>
              <h3 className="text-xl font-bold mb-4 card-value-title pr-32 sm:pr-40">¿Por qué Nexus y no “cualquier” single-tenant?</h3>
              <p className="text-muted mb-4 max-w-3xl">
                No importa tu sector ni el tamaño de tu operación: <strong className="text-foreground">freelancer, restaurante, clínica dental, barbería, consultoría, colegio o institución educativa, empresa de maquinaria o construcción, etc.</strong> — nos adaptamos a tu entorno y a tu contexto. No encajamos tu negocio en una plantilla: aprovechamos lo que ya tenemos, lo configuramos a tu realidad y, cuando hace falta, <strong className="text-foreground">desarrollamos herramientas exclusivas para ti</strong>. Tu proceso, tu lenguaje, tu forma de trabajar: la solución se construye alrededor de ti.
              </p>
              <p className="text-muted mb-6 max-w-3xl">
                Esa es nuestra propuesta de valor: <strong className="text-foreground">un solo equipo que entiende tu industria y te entrega una solución a medida</strong>, sin compromisos a medias ni “casi” que encaje.
              </p>
              <ul className="space-y-3 text-muted">
                {[
                  "Adaptación a tu sector y contexto (no al revés)",
                  "Configuración de lo existente + desarrollo exclusivo cuando lo necesites",
                  "Instancia dedicada, privacidad y cumplimiento por cliente",
                  "Un equipo que habla tu idioma y entiende tu operación",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full shrink-0 card-value-bullet" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
              </div>
            </AnimateInView>
          </div>
        </section>

        {/* Comparativa vs enterprise (sin nombrar) */}
        <section className="border-t border-border bg-background px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <AnimateInView animationClass="animate-on-scroll-soft">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Nexus vs. plataformas enterprise tradicionales</h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
                  Una mirada honesta: no somos un ERP gigante ni un CRM genérico. Somos otra cosa.
                </p>
              </div>
            </AnimateInView>
            <AnimateInView animationClass="animate-on-scroll">
              <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
                <table className="w-full min-w-[600px] text-sm">
                  <thead>
                    <tr className="border-b border-border bg-slate-50/80">
                      <th className="px-5 py-4 text-left font-semibold text-foreground">Característica</th>
                      <th className="px-5 py-4 text-center font-semibold text-blue-600">Nexus</th>
                      <th className="px-5 py-4 text-center font-semibold text-muted-foreground">ERP / sistemas legacy</th>
                      <th className="px-5 py-4 text-center font-semibold text-muted-foreground">CRM genéricos</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: "Arquitectura", nexus: true, erp: false, crm: false },
                      { feature: "Implementación ágil (semanas, no meses)", nexus: true, erp: false, crm: true },
                      { feature: "IA integrada en tus procesos", nexus: true, erp: false, crm: "parcial" },
                      { feature: "Personalización real (no solo campos)", nexus: true, erp: "costoso", crm: false },
                      { feature: "Sin consultores externos obligatorios", nexus: true, erp: false, crm: "variable" },
                      { feature: "Costo accesible para PYMEs", nexus: true, erp: false, crm: true },
                      { feature: "Instancia dedicada por cliente", nexus: true, erp: true, crm: false },
                      { feature: "Un solo proveedor para todo el stack", nexus: true, erp: "complejo", crm: false },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-border last:border-0 hover:bg-slate-50/50 transition-colors">
                        <td className="px-5 py-3 font-medium text-foreground">{row.feature}</td>
                        <td className="px-5 py-3 text-center">
                          {row.nexus === true ? <Check className="mx-auto h-5 w-5 text-emerald-600" /> : <span className="text-emerald-600 font-medium">{String(row.nexus)}</span>}
                        </td>
                        <td className="px-5 py-3 text-center text-muted">
                          {row.erp === false ? <X className="mx-auto h-5 w-5 text-red-500" /> : row.erp === true ? <Check className="mx-auto h-5 w-5 text-emerald-600" /> : <span>{String(row.erp)}</span>}
                        </td>
                        <td className="px-5 py-3 text-center text-muted">
                          {row.crm === false ? <X className="mx-auto h-5 w-5 text-red-500" /> : row.crm === true ? <Check className="mx-auto h-5 w-5 text-emerald-600" /> : <span>{String(row.crm)}</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimateInView>
          </div>
        </section>

        {/* CTA intermedio */}
        <section className="border-t border-border bg-blue-600/10 px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg font-semibold text-foreground">
              ¿Quieres ver cómo funcionaría en tu negocio?
            </p>
            <p className="mt-1 text-muted">Una conversación sin compromiso.</p>
            <div className="mt-6 flex justify-center">
              <ContactChatTrigger variant="cta" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-t border-border bg-slate-50/40 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <AnimateInView animationClass="animate-on-scroll-soft">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Preguntas frecuentes</h2>
                <p className="mt-4 text-muted">Respuestas breves a dudas comunes.</p>
              </div>
            </AnimateInView>
            <AnimateInView animationClass="animate-on-scroll">
              <FAQAccordion items={[
                { question: "¿Qué es single-tenant?", answer: "Significa que cada cliente tiene su propia instancia del sistema: su propia base de datos, configuración y dominio. Tus datos no se mezclan con los de otras empresas. Es como tener tu propia casa frente a vivir en un edificio con muchos departamentos." },
                { question: "¿Cuánto tarda la implementación?", answer: "Depende del alcance: un proyecto básico puede estar operativo en pocas semanas; uno más complejo con integraciones a medida puede llevar unos meses. En la primera conversación te damos una estimación realista." },
                { question: "¿Hay contrato a largo plazo?", answer: "Nos adaptamos a tu situación. Trabajamos con acuerdos flexibles que priorizan la relación a largo plazo sin atarte a compromisos rígidos desde el primer día." },
                { question: "¿Necesito tener WhatsApp Business API?", answer: "Para el módulo de mensajería unificada y bot de WhatsApp sí. Te guiamos en el proceso de obtención si aún no lo tienes. Para otros módulos (CRM, inventario, agenda, etc.) no es obligatorio." },
                { question: "¿La IA habla solo o hay humanos?", answer: "Ambos. La IA atiende consultas automáticamente y escala a humanos cuando hace falta: por complejidad, sensibilidad o porque tú lo configuras así. Tú defines los flujos." },
                { question: "¿Funciona en Chile? ¿Y en otros países?", answer: "Sí. Desarrollamos pensando en el mercado latinoamericano: SII, DTE, idioma español, monedas locales. La arquitectura permite operar en múltiples países según tu necesidad." },
              ]} />
            </AnimateInView>
          </div>
        </section>

        {/* Motivación */}
        <section id="motivacion" className="relative border-t border-border overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: `radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.06), transparent 50%),
                radial-gradient(circle at 70% 80%, rgba(99, 102, 241, 0.05), transparent 50%),
                radial-gradient(circle at 50% 50%, rgba(148, 163, 184, 0.03), transparent 70%)`,
            }}
          />
          <div className="relative mx-auto max-w-3xl">
            <AnimateInView animationClass="animate-on-scroll-soft">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Motivación</h2>
                <p className="mt-4 text-muted">Lo que nos mueve.</p>
              </div>
            </AnimateInView>
            <AnimateInView animationClass="animate-on-scroll">
              <div className="stagger-in-view rounded-2xl border border-border border-l-4 border-l-blue-500 bg-card p-8 sm:p-10 shadow-xl shadow-slate-200/50 transition-all duration-300 hover:shadow-blue-500/5 hover:border-blue-500/30">
                <div className="mb-10 flex flex-col items-center text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 ring-2 ring-blue-500/30 animate-pulse-soft">
                    <span className="text-2xl font-bold text-blue-600">MI</span>
                  </div>
                  <p className="text-lg font-semibold text-foreground">Miguel Ignacio</p>
                  <p className="mt-1 rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-700">Fundador de Nexus SaaS</p>
                </div>
                <div className="space-y-6 text-muted leading-relaxed">
                  <p className="text-foreground animate-fade-in-up">
                    Desde la universidad me enamoré de la consultoría. Incluso antes de terminar la carrera ya estaba trabajando con PYMES de Puerto Montt y alrededores, entendiendo sus dificultades de cerca. Esa experiencia me marcó: empecé a identificarme con sus problemas.
                  </p>
                  <p className="animate-fade-in-up animation-delay-75">
                    Las pequeñas y medianas empresas suelen tener una montaña de dolores de cabeza manejando la información de sus negocios: gestión de clientes, inventario, finanzas, todo. Y cuando finalmente adquieren software para mejorar, muchas veces termina siendo un sistema genérico que no se adapta a su realidad: anticuado, caro, difícil de implementar, con mal soporte y poco intuitivo. Al final usan menos de la mitad de lo que el software ofrece porque no fue diseñado para ellos. <strong className="text-foreground">Son los empresarios los que terminan adaptándose al software, y no al revés.</strong>
                  </p>
                  <p className="animate-fade-in-up animation-delay-150">
                    Después de titularme trabajé como ejecutivo comercial: pasé por brokers de derivados financieros como ejecutivo de inversiones y por la banca como agente de seguros. Nuestro día a día exigía hacer muchas llamadas y agendar reuniones; la tarea en sí no era difícil. Lo que lo complicaba eran los CRMs que usábamos: perdías más tiempo actualizando perfiles de clientes que haciendo llamadas y atendiendo reuniones con prospectos y clientes. En el tiempo que te demorabas gestionando el pipeline y los leads, podrías haber hecho el triple de contactos. Ahí empecé a pensar en cómo automatizar esos procesos para que los ejecutivos pudieran dedicarse a lo que realmente importa: conectar con clientes.
                  </p>
                  <p className="animate-fade-in-up animation-delay-225">
                    Hoy la IA nos permite automatizar gran parte de eso. Por eso existe Nexus: para que tu equipo trabaje en lo importante, y la tecnología trabaje para ti. <strong className="text-foreground">Soluciones que se adaptan a tu negocio, no tu negocio al software.</strong>
                  </p>
                </div>
              </div>
            </AnimateInView>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="border-t border-border bg-gradient-to-b from-blue-50 via-white to-indigo-50 px-4 py-24 sm:px-6 lg:px-8">
          <AnimateInView animationClass="animate-on-scroll-soft">
            <div className="mx-auto max-w-4xl">
              <div className="rounded-3xl border border-border bg-white/95 p-8 sm:p-12 shadow-2xl shadow-blue-500/10">
                <div className="text-center space-y-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Contacto</p>
                  <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">¿Listo para conversar?</h2>
                  <p className="text-lg text-muted">
                    Usa el botón <strong className="text-foreground">Hablemos</strong> y chatea directo con Nexus sin salir de la página, o escríbenos por Instagram o Facebook. Todo en un mismo punto de contacto.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm font-medium">
                  <div className="flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-blue-700">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-blue-600 shadow">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </div>
                    Instagram
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-blue-700">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-blue-600 shadow">
                      <MessageCircle className="h-4 w-4" />
                    </div>
                    Facebook Messenger
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-slate-500">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-500 shadow">
                      <Lock className="h-4 w-4" />
                    </div>
                    WhatsApp <span className="text-xs uppercase tracking-widest text-amber-600">Pronto</span>
                  </div>
                </div>
                <p className="mt-4 text-center text-xs text-muted">
                  Todos estos canales viven dentro del botón Hablemos para que la conversación sea simple.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
                  <ContactChatTrigger variant="cta" />
                  <Link
                    href={APP_LOGIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white px-6 py-3 font-semibold text-foreground shadow-sm transition-all duration-300 hover:shadow-lg hover:border-blue-200"
                  >
                    Iniciar sesión
                  </Link>
                </div>
              </div>
            </div>
          </AnimateInView>
        </section>

        <footer className="border-t border-border px-4 py-12 text-center text-sm text-muted sm:px-6 animate-fade-in animation-delay-200">
          <div className="mx-auto max-w-6xl space-y-3">
            <p>© {new Date().getFullYear()} Nexus SaaS. Soluciones integrales con IA a la medida. Single-tenant.</p>
            <p>
              Contacto:{" "}
              <ContactChatTrigger variant="footer" />
              {" · "}
              <a href={CONTACT_INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition underline underline-offset-2">Instagram</a>
              {" · "}
              <a href={CONTACT_FACEBOOK} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition underline underline-offset-2">Facebook</a>
              {CONTACT_WHATSAPP ? (
                <>
                  {" · "}
                  <a href={CONTACT_WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition underline underline-offset-2">WhatsApp</a>
                </>
              ) : null}
            </p>
            <p>
              <a href={`${APP_LOGIN_URL}/admin`} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-700 transition underline underline-offset-2 text-xs">Administración de la página</a>
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
