import { Eye, HelpCircle, Layers, TrendingDown } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

const items = [
  {
    icon: Eye,
    title: "Outdated First Impression",
    body: "If your site looks old or inconsistent, prospects may assume your service quality is the same.",
  },
  {
    icon: HelpCircle,
    title: "Unclear Value",
    body: "Visitors leave when they cannot quickly understand what you do and why they should choose you for thein specific needs.",
  },
  {
    icon: Layers,
    title: "Limited Platforms",
    body: "Basic builder setups often restrict performance, flexibility and long-term growth.",
  },
  {
    icon: TrendingDown,
    title: "Weak Conversion Flow",
    body: "A website that only exists online is not enough - it should guide users toward inquiry.",
  },
];

export function ProblemSection() {
  return (
    <section className="section-flow relative py-20 md:py-28">
      <div className="section-overlay-soft" />
      <div className="relative mx-auto w-full max-w-6xl px-4 md:px-6">
        <FadeIn>
          <p className="eyebrow">The Business Problem</p>
          <h2 className="mt-3 max-w-3xl text-2xl md:text-3xl lg:text-4xl">
            Your website may be costing you trust before you even talk to a client.
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:gap-6">
          {items.map((item, i) => (
            <FadeIn key={item.title} delayMs={i * 60}>
              <article className="surface-card group flex h-full flex-col gap-3 p-6 md:p-7">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/12 text-primary">
                  <item.icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="font-heading text-lg font-semibold">{item.title}</h3>
                <p className="font-sans text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
