import { Eye, HelpCircle, Layers, TrendingDown } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { FadeIn } from "@/components/ui/fade-in";

const icons = [Eye, HelpCircle, Layers, TrendingDown] as const;

type ProblemItem = { title: string; body: string };

export async function ProblemSection() {
  const t = await getTranslations("Problem");
  const items = t.raw("items") as ProblemItem[];

  return (
    <section className="section-flow relative py-20 md:py-28">
      <div className="section-overlay-soft" />
      <div className="relative mx-auto w-full max-w-6xl px-4 md:px-6">
        <FadeIn>
          <p className="eyebrow">{t("eyebrow")}</p>
          <h2 className="mt-3 max-w-3xl text-2xl md:text-3xl lg:text-4xl">{t("heading")}</h2>
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:gap-6">
          {items.map((item, i) => {
            const Icon = icons[i] ?? Eye;
            return (
              <FadeIn key={item.title} delayMs={i * 60}>
                <article className="surface-card group flex h-full flex-col gap-3 p-6 md:p-7">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/12 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="font-heading text-lg font-semibold">{item.title}</h3>
                  <p className="font-sans text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
