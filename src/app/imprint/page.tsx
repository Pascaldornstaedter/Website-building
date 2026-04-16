import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Imprint | Eurolux Digital",
  description: "Legal disclosure and company information for Eurolux Group.",
};

export default function ImprintPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-background px-4 pb-20 pt-[calc(72px+2rem)] md:px-6">
        <article className="mx-auto max-w-2xl">
          <Link
            href="/"
            className="font-dm text-sm text-link transition hover:text-foreground hover:underline"
          >
            ← Back to home
          </Link>

          <h1 className="mt-8 font-heading text-3xl font-semibold tracking-tight">Imprint</h1>

          <p className="mt-6 font-sans text-sm font-medium text-foreground">
            Imprint: Information according to § 5 TMG
          </p>

          <div className="mt-6 space-y-6 font-sans text-sm leading-relaxed text-muted-foreground">
            <section>
              <h2 className="font-heading text-base font-semibold text-foreground">Eurolux Group</h2>
              <p className="mt-2">
                Ingelsberger Weg 26
                <br />
                85604 Zorneding
              </p>
            </section>

            <section>
              <h2 className="font-heading text-base font-semibold text-foreground">Represented by</h2>
              <p className="mt-2">Pascal Dornstädter</p>
            </section>

            <section>
              <h2 className="font-heading text-base font-semibold text-foreground">Contact</h2>
              <p className="mt-2">
                Telephone:{" "}
                <a href="tel:+4916093869490" className="text-link hover:underline">
                  +49 160 9386 9490
                </a>
                <br />
                E-Mail:{" "}
                <a
                  href="mailto:business.dornstaedter@gmail.com"
                  className="text-link hover:underline"
                >
                  business.dornstaedter@gmail.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="font-heading text-base font-semibold text-foreground">
                Data protection officer
              </h2>
              <p className="mt-2">Pascal Dornstädter</p>
            </section>

            <section>
              <h2 className="font-heading text-base font-semibold text-foreground">
                Editorially responsible
              </h2>
              <p className="mt-2">Pascal Dornstädter</p>
            </section>

            <section>
              <h2 className="font-heading text-base font-semibold text-foreground">
                EU dispute resolution
              </h2>
              <p className="mt-2">
                The European Commission provides a platform for online dispute resolution (ODR):{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link hover:underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                .
              </p>
              <p className="mt-3">
                You can find our e-mail address in the legal notice above.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-base font-semibold text-foreground">
                Limitation of liability for external links
              </h2>
              <p className="mt-2">
                Our website may contain links to external third-party websites over whose content we
                have no influence. We can therefore accept no liability for this third-party content.
                The respective provider or operator of the pages is always responsible for the
                content of the linked pages. The linked pages were checked for possible legal
                violations at the time of linking. Illegal contents were not recognisable at the time
                of linking. However, permanent monitoring of the content of the linked pages is not
                reasonable without concrete evidence of an infringement. If we become aware of any
                legal infringements, we will remove such links immediately.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-base font-semibold text-foreground">Copyright</h2>
              <p className="mt-2">
                The content and works created by the site operators on these pages are subject to
                German copyright law. Reproduction, editing, distribution and any kind of utilisation
                outside the limits of copyright law require the written consent of the respective
                author or creator. Downloads and copies of this site are only permitted for private,
                non-commercial use. Insofar as the content on this site was not created by the
                operator, the copyrights of third parties are respected. Should you nevertheless
                become aware of a copyright infringement, please inform us accordingly.
              </p>
            </section>

            <p className="pt-4 text-muted-foreground">© 2026 Eurolux Group. All rights reserved.</p>
          </div>
        </article>
      </main>
    </>
  );
}
