"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/#services", label: "Services" },
  { href: "/#why", label: "Why Work With Us" },
  { href: "/#process", label: "Process" },
  { href: "/#faq", label: "FAQ" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-primary/[0.16] bg-background/90 shadow-[0_1px_0_0_hsl(var(--primary)/0.08)] backdrop-blur-xl supports-[backdrop-filter]:bg-background/65">
      <div className="mx-auto flex h-[72px] w-full max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
        <Link
          href="/"
          className="group flex items-center gap-2 font-heading font-semibold tracking-tight md:gap-2.5"
        >
          <span className="bg-gradient-to-br from-primary to-secondary bg-clip-text text-base font-bold text-transparent md:text-lg">
            ED
          </span>
          <span className="hidden font-dm text-sm font-medium text-foreground/90 sm:inline">
            Eurolux Digital
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-dm text-sm font-medium text-link transition hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#inquiry"
            className="rounded-full bg-primary px-4 py-2 font-dm text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 transition hover:brightness-95"
          >
            Request a Website Inquiry
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/[0.04] text-foreground shadow-[0_0_0_1px_hsl(var(--primary)/0.2)] backdrop-blur-sm md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "absolute left-0 right-0 top-full border-t border-primary/[0.16] bg-background/95 px-4 py-3 shadow-[0_20px_44px_-12px_rgba(0,0,0,0.7)] backdrop-blur-xl md:hidden",
          open ? "block" : "hidden"
        )}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-dm rounded-lg px-3 py-2.5 text-sm font-medium text-link transition hover:bg-primary/[0.06] hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#inquiry"
            className="mt-2 rounded-full bg-primary px-4 py-2.5 text-center font-dm text-sm font-semibold text-primary-foreground"
            onClick={() => setOpen(false)}
          >
            Request a Website Inquiry
          </Link>
        </div>
      </div>
    </header>
  );
}
