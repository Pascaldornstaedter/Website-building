import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SiteHeader } from "@/components/site-header";
import { Link } from "@/i18n/navigation";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.privacy" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

type PrivacySection = {
  title: string;
  paragraphs: string[];
};

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Legal.privacy");
  const tLegal = await getTranslations("Legal");
  const sections = t.raw("sections") as PrivacySection[];

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-background px-4 pb-20 pt-[calc(72px+2rem)] md:px-6">
        <article className="mx-auto max-w-2xl">
          <Link
            href="/"
            className="font-dm text-sm text-link transition hover:text-foreground hover:underline"
          >
            {tLegal("back")}
          </Link>

          <h1 className="mt-8 font-heading text-3xl font-semibold tracking-tight">{t("title")}</h1>

          <div className="mt-8 space-y-8 font-sans text-sm leading-relaxed text-muted-foreground">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="font-heading text-lg font-semibold text-foreground">{section.title}</h2>
                {section.paragraphs.map((paragraph, index) => (
                  <p key={`${section.title}-${index}`} className="mt-3 whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}

            <p className="pt-4 text-muted-foreground">{t("footer")}</p>
          </div>
        </article>
      </main>
    </>
  );
}
