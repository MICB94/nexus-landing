"use client";

import { useRef, useEffect } from "react";
import { MessageCircle, Lock, ChevronUp } from "lucide-react";
import { useContactChat } from "./ContactChatContext";

const INSTAGRAM_URL =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/mic_saas/";
const FACEBOOK_MESSENGER_URL = "https://m.me/1021247084396806";

export default function ContactChatButton() {
  const { open, setOpen } = useContactChat();
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setOpen]);

  return (
    <div ref={popoverRef} className="fixed bottom-6 right-6 z-[60]">
      {/* Popover */}
      {open && (
        <div className="absolute bottom-20 right-0 mb-3 w-72 rounded-3xl border border-blue-200 bg-gradient-to-b from-white via-blue-50/70 to-white shadow-2xl shadow-blue-500/20 ring-1 ring-blue-500/10 animate-fade-in">
          <div className="border-b border-blue-100 px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
              Contacto
            </p>
            <p className="mt-1 text-base font-semibold text-foreground">
              Elige el canal que prefieras
            </p>
            <p className="text-xs text-muted">
              Todo vive dentro de Nexus.
            </p>
          </div>
          <div className="space-y-2 px-5 py-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-pink-500/15 via-purple-500/10 to-blue-500/5 px-3.5 py-3 text-sm font-semibold text-foreground shadow-sm transition hover:shadow hover:bg-pink-500/10"
              onClick={() => setOpen(false)}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow">
                <span className="text-xs font-bold uppercase">IG</span>
              </div>
              <span>Instagram</span>
            </a>
            <a
              href={FACEBOOK_MESSENGER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl bg-blue-500/10 px-3.5 py-3 text-sm font-semibold text-foreground shadow-sm transition hover:bg-blue-500/15 hover:shadow"
              onClick={() => setOpen(false)}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow">
                <MessageCircle className="h-5 w-5" />
              </div>
              <span>Facebook Messenger</span>
            </a>
            <div
              className="flex cursor-not-allowed items-center gap-3 rounded-2xl border border-dashed border-slate-300/80 bg-white/60 px-3.5 py-3 text-sm text-muted-foreground opacity-80"
              title="Pronto"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-200 text-slate-600 shadow-inner">
                <Lock className="h-4 w-4" />
              </div>
              <span>WhatsApp</span>
              <span className="ml-auto rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold uppercase tracking-widest text-amber-700">
                Pronto
              </span>
            </div>
            <p className="text-center text-xs text-muted">
              Si prefieres un correo o llamada, cuéntanoslo cuando abras el chat.
            </p>
          </div>
        </div>
      )}

      {/* Botón principal */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:bg-blue-500 hover:scale-105"
        aria-expanded={open}
        aria-haspopup="true"
      >
        <MessageCircle className="h-5 w-5" />
        <span>Hablemos</span>
        <ChevronUp
          className={`h-4 w-4 transition-transform duration-200 ${open ? "" : "rotate-180"}`}
        />
      </button>
    </div>
  );
}
