"use client";

import { useEffect } from "react";

export function ScrollReset() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Prevent browser restoring old scroll position on reload/back-forward cache.
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const scrollTopNow = () => window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    // Initial page load
    scrollTopNow();

    // Covers bfcache restore (Safari/Firefox)
    const onPageShow = () => scrollTopNow();
    window.addEventListener("pageshow", onPageShow);

    return () => {
      window.removeEventListener("pageshow", onPageShow);
    };
  }, []);

  return null;
}
