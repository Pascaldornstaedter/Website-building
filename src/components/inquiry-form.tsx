"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { submitWebsiteInquiry } from "@/app/actions/website-inquiry";
import { InquirySubmitButton } from "@/components/inquiry-submit-button";
import { initialInquiryFormState } from "@/lib/inquiry-form";
import { cn } from "@/lib/utils";

const inputClass =
  "w-full rounded-xl bg-background/40 px-3 py-2.5 font-sans text-sm text-foreground shadow-[0_0_0_1px_hsl(var(--border))] placeholder:text-muted-foreground/70 outline-none transition focus:shadow-[0_0_0_1px_hsl(var(--primary)/0.45)] focus:ring-2 focus:ring-primary/20";

type NeedChoice = { value: string; label: string };

export function InquiryForm() {
  const t = useTranslations("Inquiry.form");
  const needChoices = t.raw("needChoices") as NeedChoice[];
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useActionState(submitWebsiteInquiry, initialInquiryFormState);
  const [formValues, setFormValues] = useState(initialInquiryFormState.values);
  const formErrors = state?.errors ?? initialInquiryFormState.errors;
  const formMessage = state?.message ?? initialInquiryFormState.message;
  const isSuccess = state?.success ?? initialInquiryFormState.success;

  useEffect(() => {
    if (!state) {
      return;
    }

    if (isSuccess) {
      formRef.current?.reset();
      setFormValues(initialInquiryFormState.values);
      return;
    }

    setFormValues(state.values);
  }, [state, isSuccess]);

  function updateField(name: keyof typeof formValues, value: string) {
    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));
  }

  return (
    <form
      id="contact-form"
      ref={formRef}
      action={formAction}
      className="surface-card relative overflow-hidden p-6 md:p-8"
      noValidate
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-16 h-40 w-40 rounded-full bg-secondary/40 blur-3xl" />

      <h3 className="relative font-heading text-lg font-semibold tracking-tight">{t("title")}</h3>

      <div className="relative mt-6 grid gap-4">
        {formErrors.form ? (
          <div className="flex items-start gap-2 rounded-xl bg-red-500/10 px-4 py-3 text-sm text-red-300 shadow-[0_0_0_1px_rgba(239,68,68,0.25)]">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
            <span>{formErrors.form}</span>
          </div>
        ) : null}

        {isSuccess ? (
          <div className="flex items-start gap-2 rounded-xl bg-primary/10 px-4 py-3 text-sm text-foreground shadow-[0_0_0_1px_hsl(var(--primary)/0.28)]">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
            <span>{formMessage}</span>
          </div>
        ) : null}

        <label className="grid gap-1.5 font-dm text-sm font-medium text-muted-foreground">
          {t("labels.name")}
          <input
            className={cn(inputClass, formErrors.name && "shadow-[0_0_0_1px_rgba(239,68,68,0.55)]")}
            type="text"
            name="name"
            placeholder={t("placeholders.name")}
            value={formValues.name}
            onChange={(event) => updateField("name", event.target.value)}
            required
            aria-invalid={Boolean(formErrors.name)}
          />
          {formErrors.name ? <span className="text-xs text-red-300">{formErrors.name}</span> : null}
        </label>
        <label className="grid gap-1.5 font-dm text-sm font-medium text-muted-foreground">
          {t("labels.email")}
          <input
            className={cn(inputClass, formErrors.email && "shadow-[0_0_0_1px_rgba(239,68,68,0.55)]")}
            type="email"
            name="email"
            placeholder={t("placeholders.email")}
            value={formValues.email}
            onChange={(event) => updateField("email", event.target.value)}
            required
            aria-invalid={Boolean(formErrors.email)}
          />
          {formErrors.email ? <span className="text-xs text-red-300">{formErrors.email}</span> : null}
        </label>
        <label className="grid gap-1.5 font-dm text-sm font-medium text-muted-foreground">
          {t("labels.company")}
          <input
            className={cn(inputClass)}
            type="text"
            name="company"
            placeholder={t("placeholders.company")}
            value={formValues.company}
            onChange={(event) => updateField("company", event.target.value)}
          />
        </label>
        <label className="grid gap-1.5 font-dm text-sm font-medium text-muted-foreground">
          {t("labels.need_type")}
          <select
            className={cn(
              inputClass,
              "appearance-none",
              formErrors.need_type && "shadow-[0_0_0_1px_rgba(239,68,68,0.55)]"
            )}
            name="need_type"
            value={formValues.need_type}
            onChange={(event) => updateField("need_type", event.target.value)}
            required
            aria-invalid={Boolean(formErrors.need_type)}
          >
            <option value="">{t("needPlaceholder")}</option>
            {needChoices.map((choice) => (
              <option key={choice.value} value={choice.value}>
                {choice.label}
              </option>
            ))}
          </select>
          {formErrors.need_type ? (
            <span className="text-xs text-red-300">{formErrors.need_type}</span>
          ) : null}
        </label>
        <label className="grid gap-1.5 font-dm text-sm font-medium text-muted-foreground">
          {t("labels.project_details")}
          <textarea
            className={cn(inputClass, "min-h-[120px] resize-y")}
            name="project_details"
            rows={4}
            placeholder={t("placeholders.project_details")}
            value={formValues.project_details}
            onChange={(event) => updateField("project_details", event.target.value)}
          />
        </label>
        <InquirySubmitButton />
      </div>
    </form>
  );
}
