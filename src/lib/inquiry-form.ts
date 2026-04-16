export type InquiryFormValues = {
  name: string;
  email: string;
  company: string;
  need_type: string;
  project_details: string;
};

export type InquiryFormErrors = Partial<Record<keyof InquiryFormValues | "form", string>>;

export type InquiryFormState = {
  success: boolean;
  message: string;
  errors: InquiryFormErrors;
  values: InquiryFormValues;
};

export const initialInquiryFormState: InquiryFormState = {
  success: false,
  message: "",
  errors: {},
  values: {
    name: "",
    email: "",
    company: "",
    need_type: "",
    project_details: "",
  },
};

function normalizeValue(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

export function getInquiryFormValues(formData: FormData): InquiryFormValues {
  return {
    name: normalizeValue(formData.get("name")),
    email: normalizeValue(formData.get("email")),
    company: normalizeValue(formData.get("company")),
    need_type: normalizeValue(formData.get("need_type")),
    project_details: normalizeValue(formData.get("project_details")),
  };
}

export function validateInquiryForm(values: InquiryFormValues): InquiryFormErrors {
  const errors: InquiryFormErrors = {};

  if (!values.name) {
    errors.name = "Please enter your name.";
  }

  if (!values.email) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.need_type) {
    errors.need_type = "Please select what you need.";
  }

  return errors;
}
