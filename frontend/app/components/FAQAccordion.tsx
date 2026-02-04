"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQItem = { question: string; answer: string };

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div
          key={i}
          className="rounded-xl border border-border bg-card overflow-hidden transition-colors hover:border-slate-300"
        >
          <button
            type="button"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-foreground hover:bg-slate-50/50 transition-colors"
            aria-expanded={openIndex === i}
          >
            <span>{item.question}</span>
            <ChevronDown
              className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 ${
                openIndex === i ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === i && (
            <div className="border-t border-border px-5 py-4 text-muted">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
