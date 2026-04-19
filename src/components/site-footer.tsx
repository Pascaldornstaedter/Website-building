import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export async function SiteFooter() {
  const t = await getTranslations("Footer");

  return (
    <footer className="section-flow relative bg-gradient-to-b from-background to-secondary/25 py-14 md:py-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 md:flex-row md:items-start md:justify-between md:gap-12 md:px-6">
        <div className="max-w-md">
          <h2 className="font-heading text-lg font-semibold tracking-tight">{t("heading")}</h2>
          <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">{t("tagline")}</p>
        </div>
        <nav className="flex flex-col gap-3 font-dm text-sm sm:items-end" aria-label="Legal">
          <Link
            href="/imprint"
            className="text-link transition hover:text-foreground hover:underline hover:underline-offset-4"
          >
            {t("imprint")}
          </Link>
          <Link
            href="/privacy"
            className="text-link transition hover:text-foreground hover:underline hover:underline-offset-4"
          >
            {t("privacy")}
          </Link>
        </nav>
      </div>
    </footer>
  );
}
