import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "Do you also redesign existing websites?",
    a: "Yes. Redesign projects are a core service, especially for companies with outdated design, structure or messaging.",
  },
  {
    q: "Can you upgrade a Wix-based site?",
    a: "Absolutely. We can audit your current setup and guide a clean upgrade or migration to a more professional solution.",
  },
  {
    q: "Do you offer ongoing updates after launch?",
    a: "Yes. Ongoing support is available for iterative improvements, content updates and performance refinements.",
  },
  {
    q: "How does the process start?",
    a: "Start with a website inquiry. Share your goals and current challenges, then we provide a recommended next step.",
  },
  {
    q: "Do you provide a custom solution for my business?",
    a: "Yes. Every project is tailored to your business context, target audience and conversion goals.",
  },
  {
    q: "How much does a project usually cost?",
    a: "Pricing depends on scope, timeline and technical requirements. Reach out with your project details for a tailored quote.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="section-flow relative py-20 md:py-28">
      <div className="relative mx-auto w-full max-w-3xl px-4 md:px-6">
        <FadeIn>
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-3 text-2xl md:text-3xl lg:text-4xl">Common questions before we start.</h2>
        </FadeIn>

        <FadeIn delayMs={80} className="mt-10 space-y-3">
          {faqs.map((item) => (
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
