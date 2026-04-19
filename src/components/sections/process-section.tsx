"use client";

import { useState } from "react";
import { ClipboardCheck, MessageSquareText, Rocket, Wrench } from "lucide-react";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/ui/fade-in";

const icons = [MessageSquareText, ClipboardCheck, Wrench, Rocket] as const;

type ProcessStep = { num: string; title: string; body: string };

export function ProcessSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const t = useTranslations("Process");
  const steps = t.raw("steps") as ProcessStep[];

  return (
    <section
      id="process"
      className="section-flow relative overflow-x-clip overflow-y-visible py-20 md:py-28"
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 md:px-6">
        <FadeIn>
          <p className="eyebrow">{t("eyebrow")}</p>
          <h2 className="mt-3 max-w-3xl text-2xl md:text-3xl lg:text-4xl">{t("heading")}</h2>
        </FadeIn>

        <div
          className="mt-10 flex flex-col gap-4 md:mt-12 md:grid md:grid-cols-2 md:gap-4 lg:flex lg:flex-row lg:items-stretch lg:gap-2 lg:px-1"
          onMouseLeave={() => setActiveIndex(null)}
        >
          {steps.map((step, i) => {
            const Icon = icons[i] ?? MessageSquareText;
            return (
              <FadeIn
                key={step.num}
                delayMs={i * 70}
                className={[
                  "lg:relative lg:z-10 lg:w-1/4 lg:px-1",
                  "lg:transition-transform lg:duration-300 lg:ease-out lg:will-change-transform",
                  activeIndex !== null && i < activeIndex ? "lg:-translate-x-2.5" : "",
                  activeIndex !== null && i > activeIndex ? "lg:translate-x-2.5" : "",
                ].join(" ")}
              >
                <div className="relative w-full lg:aspect-[4/3] lg:min-h-[250px]">
                  <article
                    className={[
                      "surface-card relative flex h-full flex-col bg-card/50 p-5 backdrop-blur-[2px] sm:p-6 lg:absolute lg:inset-0",
                      "origin-center transform-gpu transition-[transform,box-shadow] duration-300 ease-out will-change-transform",
                      activeIndex === i
                        ? "lg:z-30 lg:scale-[1.085] lg:shadow-[0_0_0_1px_hsl(var(--primary)/0.18),0_28px_60px_-20px_rgba(0,0,0,0.66)]"
                        : "lg:scale-100",
                    ].join(" ")}
                    onMouseEnter={() => setActiveIndex(i)}
                  >
                    <span className="font-dm text-xs font-bold tracking-[0.2em] text-primary/80">{step.num}</span>
                    <h3 className="mt-2.5 font-heading text-lg font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground lg:flex-1">{step.body}</p>
                    <div className="mt-3 flex justify-center sm:mt-4 lg:mt-5">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/12 text-primary shadow-[0_0_0_1px_hsl(var(--primary)/0.18)] sm:h-10 sm:w-10">
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden />
                      </span>
                    </div>
                  </article>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
