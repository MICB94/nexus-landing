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
} from "lucide-react";
import AnimateInView from "./components/AnimateInView";

// URL del resolver (backend en Render): el usuario ingresa su ID de organización y es redirigido a su login
const APP_LOGIN_URL =
  process.env.NEXT_PUBLIC_APP_LOGIN_URL || "https://nexus-resolver.onrender.com";

// Canales de contacto con Nexus (chat embebido es Messenger; Instagram/Facebook/WhatsApp abren en nueva pestaña)
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
          <div className="hidden gap-8 md:flex">
            <a href="#plataforma" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
              Plataforma
            </a>
            <a href="#beneficios" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
              Beneficios
            </a>
            <a href="#cta" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
              Contacto
            </a>
          </div>
          <Link
            href={APP_LOGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md transition hover:bg-blue-600"
          >
            Iniciar sesión
          </Link>
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
                <div className="flex flex-col gap-4 sm:flex-row pt-2 animate-fade-in-up animation-delay-300">
                  <Link
                    href={APP_LOGIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:bg-blue-500 hover:scale-[1.02]"
                  >
                    Iniciar sesión
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
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
                No importa tu sector ni el tamaño de tu operación: <strong className="text-foreground">frelancer, restaurante, clínica dental, barbería, consultoría, colegio o institución educativa, empresa de maquinaria o construcción, etc.</strong> — nos adaptamos a tu entorno y a tu contexto. No encajamos tu negocio en una plantilla: aprovechamos lo que ya tenemos, lo configuramos a tu realidad y, cuando hace falta, <strong className="text-foreground">desarrollamos herramientas exclusivas para ti</strong>. Tu proceso, tu lenguaje, tu forma de trabajar: la solución se construye alrededor de ti.
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

        {/* CTA */}
        <section id="cta" className="border-t border-border px-4 py-24 sm:px-6 lg:px-8">
          <AnimateInView animationClass="animate-on-scroll-soft">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
              ¿Listo para una solución con IA a tu medida?
            </h2>
            <p className="mt-4 text-lg text-muted">
              Chatea con nosotros sin salir de la página: usa el botón de Messenger (abajo a la derecha) para agendar una reunión o resolver dudas.
            </p>
            <p className="mt-2 text-sm text-muted">
              También puedes escribirnos por:
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-6 text-sm">
              <a
                href={CONTACT_INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200 underline underline-offset-4"
              >
                Instagram
              </a>
              <a
                href={CONTACT_FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200 underline underline-offset-4"
              >
                Facebook
              </a>
              {CONTACT_WHATSAPP ? (
                <a
                  href={CONTACT_WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200 underline underline-offset-4"
                >
                  WhatsApp
                </a>
              ) : null}
            </div>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={APP_LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card/50 px-6 py-3 font-semibold text-foreground transition-all duration-300 hover:bg-card hover:scale-[1.02]"
              >
                Iniciar sesión
              </Link>
            </div>
          </div>
          </AnimateInView>
        </section>

        <footer className="border-t border-border px-4 py-12 text-center text-sm text-muted sm:px-6 animate-fade-in animation-delay-200">
          <div className="mx-auto max-w-6xl space-y-3">
            <p>© {new Date().getFullYear()} Nexus SaaS. Soluciones integrales con IA a la medida. Single-tenant.</p>
            <p>
              Contacto:{" "}
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
          </div>
        </footer>
      </main>
    </>
  );
}
