import Image from "next/image";
import { Check } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { FadeIn } from "@/components/ui/fade-in";

export async function WhySection() {
  const t = await getTranslations("Why");
  const benefits = t.raw("benefits") as string[];

  return (
    <section id="why" className="section-flow relative py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_64%_at_88%_20%,hsl(144_100%_50%_/_0.06),transparent_56%),linear-gradient(to_bottom,hsl(144_85%_18%_/_0.2),transparent_36%,hsl(144_85%_18%_/_0.09)_100%)]" />
      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-4 md:grid-cols-2 md:items-end md:gap-16 md:px-6">
        <FadeIn>
          <p className="eyebrow">{t("eyebrow")}</p>
          <h2 className="mt-3 text-2xl md:text-3xl lg:text-4xl">{t("heading")}</h2>
          <p className="mt-4 font-sans text-sm leading-relaxed text-muted-foreground md:text-base">{t("body")}</p>
          <div className="surface-card mt-6 overflow-hidden rounded-2xl p-1">
            <div className="relative h-44 w-full overflow-hidden rounded-[0.8rem] md:h-48">
              <Image
                src="https://images.pexels.com/photos/21412230/pexels-photo-21412230.jpeg"
                alt={t("imageAlt")}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={false}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/55 via-transparent to-transparent" />
            </div>
          </div>
        </FadeIn>

        <FadeIn delayMs={100} className="md:self-end">
          <ul className="space-y-3">
            {benefits.map((line) => (
              <li
                key={line}
                className="flex gap-3 rounded-2xl bg-card/45 px-4 py-3.5 font-sans text-sm text-muted-foreground shadow-[0_0_0_1px_hsl(var(--primary)/0.16)] backdrop-blur-sm"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Check className="h-3 w-3" aria-hidden />
                </span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
