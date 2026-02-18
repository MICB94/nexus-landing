"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Loader2, AlertTriangle } from "lucide-react";

const API_URL =
  process.env.NEXT_PUBLIC_NEXUS_API_URL || "http://localhost:8000";

function getSessionId(): string {
  if (typeof window === "undefined") return "";
  let id = sessionStorage.getItem("nexus_landing_session");
  if (!id) {
    id =
      typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : `s-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    sessionStorage.setItem("nexus_landing_session", id);
  }
  return id;
}

interface ChatMessage {
  rol: "usuario" | "asistente";
  content: string;
  needs_contact?: boolean;
}

export default function NexusChatPanel() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSessionId(getSessionId());
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    setInput("");
    setMessages((prev) => [...prev, { rol: "usuario", content: text }]);
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/chat/landing`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          session_id: sessionId || getSessionId(),
        }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.detail || "Error en el chat");
      }
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        {
          rol: "asistente",
          content: data.response || "",
          needs_contact: data.needs_contact,
        },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          rol: "asistente",
          content:
            err instanceof Error
              ? err.message
              : "No pudimos procesar tu mensaje. Intenta de nuevo.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[380px]">
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 min-h-0">
        {messages.length === 0 && !loading && (
          <p className="text-sm text-muted-foreground text-center py-4">
            Escribe un mensaje y Nexus te responderá. Si nos dejas tu teléfono,
            correo o red social, podremos seguir en contacto cuando salgas.
          </p>
        )}
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.rol === "asistente" ? "justify-start" : "justify-end"}`}
          >
            <div
              className={`max-w-[85%] px-3 py-2 rounded-2xl text-sm whitespace-pre-wrap ${
                msg.rol === "asistente"
                  ? "bg-slate-100 text-foreground rounded-bl-none border border-slate-200"
                  : "bg-blue-600 text-white rounded-br-none"
              }`}
            >
              {msg.content}
              {msg.needs_contact && (
                <div className="mt-2 pt-2 border-t border-amber-400/50 flex items-start gap-2">
                  <AlertTriangle className="h-3.5 w-3.5 text-amber-600 shrink-0 mt-0.5" />
                  <span className="text-xs text-amber-700">
                    Para seguir en contacto al salir, deja tu teléfono, correo o
                    red social. Si no, se perderá la conversación.
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-slate-100 px-3 py-2 rounded-2xl rounded-bl-none border border-slate-200 flex items-center gap-2">
              <Loader2 className="h-3.5 w-3.5 animate-spin text-slate-500" />
              <span className="text-xs text-muted-foreground">
                Nexus escribe...
              </span>
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>
      <form
        onSubmit={handleSubmit}
        className="p-3 border-t border-slate-200 bg-slate-50/80 flex gap-2"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu mensaje..."
          className="flex-1 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="rounded-xl bg-blue-600 p-2.5 text-white shadow transition hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Enviar"
        >
          {loading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <Send className="h-5 w-5" />
          )}
        </button>
      </form>
    </div>
  );
}
