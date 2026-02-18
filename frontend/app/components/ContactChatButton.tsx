"use client";

import { useRef, useEffect } from "react";
import { MessageCircle, Lock, ChevronUp } from "lucide-react";
import { useContactChat } from "./ContactChatContext";
import NexusChatPanel from "./NexusChatPanel";

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
      {/* Popover: Chat directo con Nexus + enlaces a redes */}
      {open && (
        <div className="absolute bottom-20 right-0 mb-3 w-[360px] rounded-3xl border border-blue-200 bg-white shadow-2xl shadow-blue-500/20 ring-1 ring-blue-500/10 animate-fade-in overflow-hidden">
          <div className="border-b border-blue-100 px-4 py-3 bg-gradient-to-b from-white to-blue-50/50">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
              Chat con Nexus
            </p>
            <p className="mt-0.5 text-sm font-semibold text-foreground">
              Escribe aquí y te respondemos al instante
            </p>
          </div>
          <NexusChatPanel />
          <div className="border-t border-slate-200 px-4 py-3 bg-slate-50/80">
            <p className="text-xs font-medium text-muted-foreground mb-2">
              También nos puedes escribir por:
            </p>
            <div className="flex flex-wrap gap-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl bg-pink-500/10 px-2.5 py-1.5 text-xs font-semibold text-pink-700 transition hover:bg-pink-500/20"
                onClick={() => setOpen(false)}
              >
                <span className="font-bold">IG</span> Instagram
              </a>
              <a
                href={FACEBOOK_MESSENGER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl bg-blue-500/10 px-2.5 py-1.5 text-xs font-semibold text-blue-700 transition hover:bg-blue-500/20"
                onClick={() => setOpen(false)}
              >
                <MessageCircle className="h-3.5 w-3.5" /> Messenger
              </a>
              <span
                className="inline-flex items-center gap-1.5 rounded-xl border border-dashed border-slate-300 bg-slate-100/80 px-2.5 py-1.5 text-xs text-muted-foreground"
                title="Pronto"
              >
                <Lock className="h-3.5 w-3.5" /> WhatsApp
              </span>
            </div>
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
