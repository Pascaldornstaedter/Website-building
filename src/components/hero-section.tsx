"use client";

import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

const SPLINE_SCENE =
  "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";

export function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <section className="relative w-full">
      <Spotlight className="-top-40 left-0 opacity-70 md:left-40 md:-top-24" fill="#00FF66" />

      <div className="relative grid min-h-[min(90vh,640px)] gap-10 py-6 md:gap-12 md:py-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,1.05fr)] lg:items-center lg:gap-14 lg:py-10">
        <div className="relative z-10 flex flex-col justify-center gap-6">
          <p className="eyebrow">{t("eyebrow")}</p>
          <h1 className="max-w-xl text-3xl font-bold leading-[1.1] tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground to-primary/90 md:text-4xl lg:text-5xl">
            {t("title")}
          </h1>
          <p className="max-w-lg font-sans text-sm leading-relaxed text-muted-foreground md:text-base">
            {t("subtitle")}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={{ pathname: "/", hash: "inquiry" }}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-dm text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition hover:brightness-95 active:brightness-90"
            >
              {t("ctaPrimary")}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href={{ pathname: "/", hash: "process" }}
              className="font-dm text-sm font-medium text-link underline-offset-4 transition hover:text-foreground hover:underline"
            >
              {t("ctaSecondary")}
            </Link>
          </div>

          <p
            className="max-w-lg font-sans text-xs leading-relaxed text-muted-foreground md:text-sm [&_strong]:font-medium [&_strong]:text-foreground/95"
            dangerouslySetInnerHTML={{ __html: t.raw("footnoteHtml") as string }}
          />
        </div>

        <div className="hero-spline relative min-h-[300px] w-full lg:min-h-[min(520px,55vh)]">
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-20 bg-gradient-to-t from-background via-background/75 to-transparent" />
          <div className="pointer-events-none absolute inset-x-[10%] bottom-1 z-10 h-8 rounded-full bg-black/25 blur-xl" />
          <SplineScene
            scene={SPLINE_SCENE}
            className="h-full min-h-[300px] w-full lg:min-h-[min(520px,55vh)]"
          />
        </div>
      </div>
    </section>
  );
}
