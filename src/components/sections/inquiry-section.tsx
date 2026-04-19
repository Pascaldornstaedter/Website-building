import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { InquiryForm } from "@/components/inquiry-form";
import { FadeIn } from "@/components/ui/fade-in";
import { Link } from "@/i18n/navigation";

export async function InquirySection() {
  const t = await getTranslations("Inquiry.section");

  return (
    <section id="inquiry" className="section-flow relative overflow-hidden py-20 md:py-28">
      <div className="section-overlay-soft" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-4 md:grid-cols-2 md:items-start md:gap-14 md:px-6">
        <FadeIn>
          <p className="eyebrow">{t("eyebrow")}</p>
          <h2 className="mt-3 text-2xl md:text-3xl lg:text-4xl">{t("heading")}</h2>
          <p className="mt-4 font-sans text-sm leading-relaxed text-muted-foreground md:text-base">{t("body")}</p>
          <Link
            href={{ pathname: "/", hash: "contact-form" }}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-dm text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition hover:brightness-95"
          >
            {t("cta")}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </FadeIn>

        <FadeIn delayMs={120}>
          <InquiryForm />
        </FadeIn>
      </div>
    </section>
  );
}
