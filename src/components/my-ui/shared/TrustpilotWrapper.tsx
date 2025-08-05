"use client";
import Script from "next/script";
import { useEffect, useState } from "react";

export default function TrustpilotWrapper() {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldRender(true);
    }, 2000); // delay in milliseconds

    return () => clearTimeout(timer);
  }, []);

  if (!shouldRender) return null;

  return (
    <Script
      strategy="afterInteractive"
      src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
    />
  );
}
