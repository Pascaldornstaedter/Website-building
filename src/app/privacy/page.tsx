import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Data Privacy | Eurolux Digital",
  description: "Privacy policy and data protection information for Eurolux Group.",
};

export default function PrivacyPage() {
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

          <h1 className="mt-8 font-heading text-3xl font-semibold tracking-tight">Data protection</h1>

          <div className="mt-8 space-y-8 font-sans text-sm leading-relaxed text-muted-foreground">
            <section>
              <h2 className="font-heading text-lg font-semibold text-foreground">General information</h2>
              <p className="mt-3">
                The processing of your personal data (i.e. any data that can reasonably be used to
                identify you) is necessary to fulfil our contractual obligations to you and to enable us
                to provide you with our services, protect our legitimate interests and comply with
                legal and financial regulatory obligations to which we are subject.
              </p>
              <p className="mt-3">
                By using this website, you consent to the collection, storage, use and other
                utilisation of your personal data as described in this Data protection.
              </p>
              <p className="mt-3">
                We would like to point out that data transmission over the Internet (e.g. when
                communicating by e-mail) may be subject to security vulnerabilities. Complete
                protection of data against access by third parties is not possible.
              </p>
              <p className="mt-3">
                Please read the data protection provisions carefully before making any decisions.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-semibold text-foreground">
                Note on the responsible body
              </h2>
              <p className="mt-3">The controller responsible for data processing on this website is:</p>
              <p className="mt-3 text-foreground">
                Pascal Dornstädter
                <br />
                Ingelsberger Weg 26
                <br />
                85604 Zorneding
                <br />
                Telephone:{" "}
                <a href="tel:+4916093869490" className="text-link hover:underline">
                  +49 160 9386 9490
                </a>
                <br />
                E-mail:{" "}
                <a
                  href="mailto:business.dornstaedter@gmail.com"
                  className="text-link hover:underline"
                >
                  business.dornstaedter@gmail.com
                </a>
              </p>
              <p className="mt-3">
                The controller is the natural or legal person who alone or jointly with others
                determines the purposes and means of the processing of personal data (e.g. names,
                e-mail addresses, etc.).
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-semibold text-foreground">Storage period</h2>
              <p className="mt-3">
                We will retain your personal data for as long as necessary to provide our services,
                comply with legal obligations, resolve disputes and enforce our policies. The
                retention periods depend on the type of data collected and the purpose for which it
                was collected, taking into account both the case-specific circumstances and the need to
                delete outdated, unused information as soon as possible. We store records containing
                personal data of customers, account set-up documents, communications and other data in
                accordance with applicable laws and regulations. We may correct, complete or remove
                incomplete or inaccurate data at any time and at our sole discretion.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-semibold text-foreground">
                Revocation of your consent to data processing
              </h2>
              <p className="mt-3">
                Many data processing operations are only possible with your express consent. You can
                withdraw your consent at any time. The legality of the data processing carried out
                until the revocation remains unaffected by the revocation.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-semibold text-foreground">
                Right to lodge a complaint with the competent supervisory authority
              </h2>
              <p className="mt-3">
                In the event of violations of the GDPR, data subjects have the right to lodge a
                complaint with a supervisory authority, in particular in the Member State of their
                habitual residence, place of work or place of the alleged violation. The right to lodge
                a complaint is without prejudice to any other administrative or judicial remedies.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-semibold text-foreground">SSL encryption</h2>
              <p className="mt-3">
                For security reasons and to protect the transmission of confidential content, such as
                enquiries that you send to us as the site operator, this site uses SSL encryption
                (padlock symbol in the browser line). If SSL encryption is activated, the data you
                transmit to us cannot be read by third parties.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-semibold text-foreground">
                Right to restriction of processing
              </h2>
              <p className="mt-3">You have the following rights:</p>
              <ol className="mt-3 list-decimal space-y-2 pl-5">
                <li>
                  Request confirmation as to whether and to what extent your personal data is being
                  used and processed, as well as access to the personal data stored about you and
                  additional information
                </li>
                <li>
                  Request a copy of the personal data that you have voluntarily provided to us in a
                  structured, commonly used and machine-readable format
                </li>
                <li>Request rectification of the personal data we hold about you</li>
                <li>Request the erasure of your personal data</li>
                <li>Object to the processing of your personal data by us</li>
                <li>Request the restriction of the processing of your personal data by us</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ol>
              <p className="mt-3">
                Please note, however, that these rights do not apply without restriction, but are
                subject to our own legitimate interests and official regulations.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-semibold text-foreground">Cookies</h2>
              <p className="mt-3">
                We only use cookies which are technically necessary (functional cookies) and no
                performance or marketing cookies like &quot;Google analytics&quot;. Therefore this
                website does not contain a so called &quot;cookie banner&quot;.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-semibold text-foreground">Contact form</h2>
              <p className="mt-3">
                If you send us enquiries via the contact form, your details from the enquiry form,
                including the contact details you provide there, will be stored by us for the purpose
                of processing the enquiry and in the event of follow-up questions. We will not pass
                on this data without your consent.
              </p>
              <p className="mt-3">
                This data is processed on the basis of Art. 6 para. 1 lit. b GDPR if your enquiry is
                related to the fulfilment of a contract or is necessary for the implementation of
                pre-contractual measures. In all other cases, the processing is based on our
                legitimate interest in the effective processing of the enquiries addressed to us (Art.
                6 para. 1 lit. f GDPR) or on your consent (Art. 6 para. 1 lit. a GDPR) if this has
                been requested.
              </p>
              <p className="mt-3">
                We will retain the data you provide on the contact form until you request its
                deletion, revoke your consent for its storage, or the purpose for its storage no
                longer pertains (e.g. after fulfilling your request). Mandatory statutory provisions -
                in particular retention periods - remain unaffected.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-semibold text-foreground">
                Enquiries by e-mail or telephone
              </h2>
              <p className="mt-3">
                If you contact us by e-mail or telephone, your enquiry including all personal data
                (name, enquiry) will be stored and processed by us for the purpose of processing your
                request. We will not pass on this data without your consent.
              </p>
              <p className="mt-3">
                This data is processed on the basis of Art. 6 para. 1 lit. b GDPR if your enquiry is
                related to the fulfilment of a contract or is necessary for the implementation of
                pre-contractual measures. In all other cases, the processing is based on our
                legitimate interest in the effective processing of the enquiries addressed to us (Art.
                6 para. 1 lit. f GDPR) or on your consent (Art. 6 para. 1 lit. a GDPR) if this has
                been requested.
              </p>
              <p className="mt-3">
                The data you send to us via contact requests will remain with us until you ask us to
                delete it, revoke your consent to storage or the purpose for data storage no longer
                applies (e.g. after your request has been processed). Mandatory statutory provisions -
                in particular statutory retention periods - remain unaffected.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-semibold text-foreground">Contact us</h2>
              <p className="mt-3">
                For more information about our privacy practices, if you have questions, or if you
                would like to make a complaint, please contact us by e-mail or telephone using the
                details provided above.
              </p>
            </section>

            <p className="pt-4 text-muted-foreground">© 2026 Eurolux Group. All rights reserved.</p>
          </div>
        </article>
      </main>
    </>
  );
}
