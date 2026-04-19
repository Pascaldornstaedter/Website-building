import { setRequestLocale } from "next-intl/server";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HeroSection } from "@/components/hero-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { ServicesSection } from "@/components/sections/services-section";
import { WhySection } from "@/components/sections/why-section";
import { ProcessSection } from "@/components/sections/process-section";
import { FaqSection } from "@/components/sections/faq-section";
import { InquirySection } from "@/components/sections/inquiry-section";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main id="top" className="min-h-screen pt-[72px]">
      <SiteHeader />
      <div className="page-shell">
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-2 md:px-6 md:pb-14 md:pt-4">
          <HeroSection />
        </div>
      </div>
      <ProblemSection />
      <ServicesSection />
      <WhySection />
      <ProcessSection />
      <FaqSection />
      <InquirySection />
      <SiteFooter />
    </main>
  );
}
