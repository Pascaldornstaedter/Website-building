import { Code2, Palette, Rocket, Wrench } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { FadeIn } from "@/components/ui/fade-in";

const icons = [Code2, Palette, Rocket, Wrench] as const;

type ServiceItem = { title: string; body: string };

export async function ServicesSection() {
  const t = await getTranslations("Services");
  const services = t.raw("items") as ServiceItem[];

  return (
    <section id="services" className="section-flow relative py-20 md:py-28">
      <div className="relative mx-auto w-full max-w-6xl px-4 md:px-6">
        <FadeIn>
          <p className="eyebrow">{t("eyebrow")}</p>
          <h2 className="mt-3 max-w-3xl text-2xl md:text-3xl lg:text-4xl">{t("heading")}</h2>
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:gap-6">
          {services.map((s, i) => {
            const Icon = icons[i] ?? Code2;
            return (
              <FadeIn key={s.title} delayMs={i * 50}>
                <article className="surface-card relative h-full overflow-hidden p-6 md:p-7">
                  <div className="pointer-events-none absolute -right-6 -top-6 opacity-[0.06]">
                    <Icon className="h-28 w-28 text-primary" aria-hidden />
                  </div>
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/80 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="relative mt-4 font-heading text-lg font-semibold">{s.title}</h3>
                  <p className="relative mt-2 font-sans text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
