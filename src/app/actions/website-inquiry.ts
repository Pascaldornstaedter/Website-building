"use server";

import { getTranslations } from "next-intl/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import {
  getInquiryFormValues,
  initialInquiryFormState,
  type InquiryFormState,
  validateInquiryForm,
} from "@/lib/inquiry-form";

export async function submitWebsiteInquiry(
  _prevState: InquiryFormState,
  formData: FormData
): Promise<InquiryFormState> {
  const t = await getTranslations("Inquiry.validation");
  const validationCopy = {
    nameRequired: t("nameRequired"),
    emailRequired: t("emailRequired"),
    emailInvalid: t("emailInvalid"),
    needTypeRequired: t("needTypeRequired"),
  };

  const values = getInquiryFormValues(formData);
  const errors = validateInquiryForm(values, validationCopy);

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: t("checkFields"),
      errors,
      values,
    };
  }

  try {
    const supabase = createSupabaseServerClient();

    const { error } = await supabase.from("website_inquiries").insert({
      name: values.name,
      email: values.email,
      company: values.company || null,
      need_type: values.need_type,
      project_details: values.project_details || null,
      status: "new",
      source: "landing_page",
    });

    if (error) {
      return {
        success: false,
        message: t("saveErrorMessage"),
        errors: { form: t("saveError") },
        values,
      };
    }

    return {
      success: true,
      message: t("success"),
      errors: {},
      values: initialInquiryFormState.values,
    };
  } catch {
    return {
      success: false,
      message: t("configMessage"),
      errors: {
        form: t("configError"),
      },
      values,
    };
  }
}
