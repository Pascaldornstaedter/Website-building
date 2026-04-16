"use client";

import { useState } from "react";
import { ClipboardCheck, MessageSquareText, Rocket, Wrench } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

const steps = [
  {
    num: "01",
    title: "Inquiry",
    body: "Share your current website situation, goals and priorities.",
    icon: MessageSquareText,
  },
  {
    num: "02",
    title: "Concept / Review",
    body: "Define structure, direction and the right approach for your business.",
    icon: ClipboardCheck,
  },
  {
    num: "03",
    title: "Build / Redesign",
    body: "Implement a polished, conversion-oriented website experience.",
    icon: Wrench,
  },
  {
    num: "04",
    title: "Launch / Optimize",
    body: "Go live confidently and improve continuously where it matters.",
    icon: Rocket,
  },
];

export function ProcessSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      id="process"
      className="section-flow relative overflow-x-clip overflow-y-visible py-20 md:py-28"
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 md:px-6">
        <FadeIn>
          <p className="eyebrow">Simple Process</p>
          <h2 className="mt-3 max-w-3xl text-2xl md:text-3xl lg:text-4xl">
            A clear path from inquiry to launch.
          </h2>
        </FadeIn>

        <div
          className="mt-12 flex flex-col gap-5 md:grid md:grid-cols-2 md:gap-5 lg:flex lg:flex-row lg:items-stretch lg:gap-2 lg:px-1"
          onMouseLeave={() => setActiveIndex(null)}
        >
          {steps.map((step, i) => (
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
              <div className="relative w-full aspect-[4/3] min-h-[220px] md:min-h-[250px]">
                <article
                  className={[
                    "surface-card absolute inset-0 flex h-full flex-col bg-card/50 p-6 backdrop-blur-[2px]",
                    "origin-center transform-gpu transition-[transform,box-shadow] duration-300 ease-out will-change-transform",
                    activeIndex === i
                      ? "lg:z-30 lg:scale-[1.085] lg:shadow-[0_0_0_1px_hsl(var(--primary)/0.18),0_28px_60px_-20px_rgba(0,0,0,0.66)]"
                      : "lg:scale-100",
                  ].join(" ")}
                  onMouseEnter={() => setActiveIndex(i)}
                >
                  <span className="font-dm text-xs font-bold tracking-[0.2em] text-primary/80">
                    {step.num}
                  </span>
                  <h3 className="mt-3 font-heading text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 flex-1 font-sans text-sm leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                  <div className="mt-4 flex justify-center">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/12 text-primary shadow-[0_0_0_1px_hsl(var(--primary)/0.18)]">
                      <step.icon className="h-5 w-5" aria-hidden />
                    </span>
                  </div>
                </article>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
