import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nexus SaaS | Sistema de Gestión Inteligente",
  description:
    "Centraliza WhatsApp, Instagram y Facebook. ERP, CRM, inventario, finanzas y agente IA en un solo panel. Single tenant, personalizable.",
  openGraph: {
    title: "Nexus SaaS | Sistema de Gestión Inteligente",
    description:
      "Centraliza redes sociales, ERP, CRM y agente IA en un solo panel.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.className} bg-background text-foreground min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
