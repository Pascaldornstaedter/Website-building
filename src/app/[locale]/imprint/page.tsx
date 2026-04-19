import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SiteHeader } from "@/components/site-header";
import { Link } from "@/i18n/navigation";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.imprint" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

type ImprintBlock = { title: string; body: string };

export default async function ImprintPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Legal.imprint");
  const tLegal = await getTranslations("Legal");
  const blocks = t.raw("blocks") as ImprintBlock[];

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

          <p className="mt-6 font-sans text-sm font-medium text-foreground">{t("lead")}</p>

          <div className="mt-6 space-y-6 font-sans text-sm leading-relaxed text-muted-foreground">
            {blocks.map((block) => (
              <section key={block.title}>
                <h2 className="font-heading text-base font-semibold text-foreground">{block.title}</h2>
                <p className="mt-2 whitespace-pre-line">{block.body}</p>
              </section>
            ))}

            <p className="pt-4 text-muted-foreground">{t("footer")}</p>
          </div>
        </article>
      </main>
    </>
  );
}
