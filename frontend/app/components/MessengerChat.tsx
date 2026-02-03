"use client";

import { useEffect } from "react";

const FB_PAGE_ID =
  process.env.NEXT_PUBLIC_FB_PAGE_ID || "61586902978931";

export default function MessengerChat() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const root = document.getElementById("fb-root");
    if (!root) return;

    const chatDiv = document.createElement("div");
    chatDiv.className = "fb-customerchat";
    chatDiv.setAttribute("attribution", "setup_tool");
    chatDiv.setAttribute("page_id", FB_PAGE_ID);
    chatDiv.setAttribute("theme_color", "#2563eb");
    chatDiv.setAttribute(
      "logged_in_greeting",
      "¡Hola! ¿En qué podemos ayudarte? Escríbenos para agendar una reunión o resolver dudas."
    );
    chatDiv.setAttribute(
      "logged_out_greeting",
      "¡Hola! ¿En qué podemos ayudarte? Escríbenos para agendar una reunión o resolver dudas."
    );
    root.appendChild(chatDiv);

    (window as unknown as { fbAsyncInit?: () => void }).fbAsyncInit =
      function () {
        (window as unknown as { FB?: { init: (o: object) => void } }).FB?.init({
          xfbml: true,
          version: "v18.0",
        });
      };

    const script = document.createElement("script");
    script.src =
      "https://connect.facebook.net/es_ES/sdk/xfbml.customerchat.js";
    script.async = true;
    script.defer = true;
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

    return () => {
      chatDiv.remove();
      script.remove();
    };
  }, []);

  return <div id="fb-root" />;
}
