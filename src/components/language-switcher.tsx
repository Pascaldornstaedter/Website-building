"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("Nav");

  return (
    <div
      className="flex items-center gap-0.5 rounded-full border border-primary/20 bg-background/40 px-1 py-0.5 text-[11px] font-dm font-semibold shadow-[0_0_0_1px_hsl(var(--primary)/0.08)] backdrop-blur-sm sm:text-xs"
      aria-label="Language"
    >
      <Link
        href={pathname}
        locale="de"
        className={cn(
          "rounded-full px-2 py-1 transition",
          locale === "de" ? "bg-primary/15 text-foreground" : "text-link hover:text-foreground"
        )}
      >
        {t("langDe")}
      </Link>
      <span className="text-muted-foreground/60">|</span>
      <Link
        href={pathname}
        locale="en"
        className={cn(
          "rounded-full px-2 py-1 transition",
          locale === "en" ? "bg-primary/15 text-foreground" : "text-link hover:text-foreground"
        )}
      >
        {t("langEn")}
      </Link>
    </div>
  );
}
