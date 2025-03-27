"use client";

import { useEffect } from "react";

export default function ChatbotScript() {
  useEffect(() => {
    if (!document.getElementById("chatling-embed-script")) {
      const script = document.createElement("script");
      script.src = "https://chatling.ai/js/embed.js";
      script.async = true;
      script.setAttribute("data-id", "4247918284");
      script.id = "chatling-embed-script";

      document.body.appendChild(script);
    }
  }, []);

  return null;
}