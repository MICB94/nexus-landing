import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ContactChatProvider } from "./components/ContactChatContext";
import ContactChatButton from "./components/ContactChatButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nexus SaaS | Soluciones integrales con IA a la medida",
  description:
    "Desarrollamos soluciones integrales con IA hechas a la medida para tu negocio. Single-tenant: cada cliente inicia sesión y accede a su propio dashboard.",
  openGraph: {
    title: "Nexus SaaS | Soluciones integrales con IA a la medida",
    description:
      "Soluciones integrales con IA hechas a la medida para tu negocio. Login y panel propios.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-background text-foreground min-h-screen antialiased`}>
        <ContactChatProvider>
          {children}
          <ContactChatButton />
        </ContactChatProvider>
      </body>
    </html>
  );
}
