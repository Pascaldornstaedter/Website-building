"use client";

import { Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useFormStatus } from "react-dom";

export function InquirySubmitButton() {
  const { pending } = useFormStatus();
  const t = useTranslations("Inquiry.form");

  return (
    <button
      type="submit"
      disabled={pending}
      className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 font-dm text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:brightness-95 disabled:opacity-70"
    >
      {pending ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
          {t("submitting")}
        </>
      ) : (
        t("submit")
      )}
    </button>
  );
}
