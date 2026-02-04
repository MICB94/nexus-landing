"use client";

import { useContactChat } from "./ContactChatContext";
import { MessageCircle } from "lucide-react";

type Variant = "nav" | "hero" | "cta" | "footer";

const variantStyles: Record<Variant, string> = {
  nav: "rounded-lg border border-border bg-transparent px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-slate-100 hover:border-slate-300",
  hero: "inline-flex items-center justify-center gap-2 rounded-xl border-2 border-border bg-card/50 px-6 py-4 font-semibold text-foreground transition-all duration-300 hover:bg-card hover:border-slate-400 hover:scale-[1.02]",
  cta: "inline-flex items-center justify-center gap-2 rounded-xl border-2 border-border bg-card/50 px-6 py-3 font-semibold text-foreground transition-all duration-300 hover:bg-card hover:scale-[1.02]",
  footer: "inline text-blue-600 hover:text-blue-700 transition underline underline-offset-2 cursor-pointer",
};

export default function ContactChatTrigger({ variant = "nav" }: { variant?: Variant }) {
  const { setOpen } = useContactChat();
  const className = variantStyles[variant];
  const isLinkStyle = variant === "footer";
  return (
    <button
      type="button"
      onClick={() => setOpen(true)}
      className={`${isLinkStyle ? "" : "flex items-center gap-2"} ${className}`}
      aria-label="Hablemos por chat"
    >
      {!isLinkStyle && <MessageCircle className="h-5 w-5 text-blue-600 shrink-0" />}
      <span>Hablemos</span>
    </button>
  );
}
