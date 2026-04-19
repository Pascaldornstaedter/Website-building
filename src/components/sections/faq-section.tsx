import { getTranslations } from "next-intl/server";
import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils";

type FaqItem = { q: string; a: string };

export async function FaqSection() {
  const t = await getTranslations("Faq");
  const items = t.raw("items") as FaqItem[];

  return (
    <section id="faq" className="section-flow relative py-20 md:py-28">
      <div className="relative mx-auto w-full max-w-3xl px-4 md:px-6">
        <FadeIn>
          <p className="eyebrow">{t("eyebrow")}</p>
          <h2 className="mt-3 text-2xl md:text-3xl lg:text-4xl">{t("heading")}</h2>
        </FadeIn>

        <FadeIn delayMs={80} className="mt-10 space-y-3">
          {items.map((item) => (
            <details
              key={item.q}
              className={cn(
                "group rounded-2xl bg-card/50 px-5 py-4 shadow-[0_0_0_1px_hsl(var(--primary)/0.16)] backdrop-blur-sm transition open:bg-card/70 open:shadow-[0_0_0_1px_hsl(var(--primary)/0.26)]"
              )}
            >
              <summary className="cursor-pointer list-none font-dm text-sm font-semibold tracking-tight text-foreground [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-3">
                  {item.q}
                  <span className="text-primary/60 transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
