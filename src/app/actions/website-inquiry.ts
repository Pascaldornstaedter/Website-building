"use server";

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
  const values = getInquiryFormValues(formData);

  const errors = validateInquiryForm(values);

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Please check the highlighted fields.",
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
        message: "Something went wrong while saving your inquiry. Please try again.",
        errors: { form: "We could not save your inquiry right now." },
        values,
      };
    }

    return {
      success: true,
      message: "Your inquiry has been sent successfully.",
      errors: {},
      values: initialInquiryFormState.values,
    };
  } catch {
    return {
      success: false,
      message: "The form is not configured yet. Please add your Supabase environment variables.",
      errors: {
        form: "Missing Supabase configuration. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY to .env.local.",
      },
      values,
    };
  }
}
