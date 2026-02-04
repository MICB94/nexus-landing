"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type ContactChatContextType = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const ContactChatContext = createContext<ContactChatContextType | null>(null);

export function ContactChatProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <ContactChatContext.Provider value={{ open, setOpen }}>
      {children}
    </ContactChatContext.Provider>
  );
}

export function useContactChat() {
  const ctx = useContext(ContactChatContext);
  if (!ctx) throw new Error("useContactChat must be used within ContactChatProvider");
  return ctx;
}
