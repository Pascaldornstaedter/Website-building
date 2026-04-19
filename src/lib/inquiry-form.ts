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

export type InquiryValidationCopy = {
  nameRequired: string;
  emailRequired: string;
  emailInvalid: string;
  needTypeRequired: string;
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

export function validateInquiryForm(values: InquiryFormValues, copy: InquiryValidationCopy): InquiryFormErrors {
  const errors: InquiryFormErrors = {};

  if (!values.name) {
    errors.name = copy.nameRequired;
  }

  if (!values.email) {
    errors.email = copy.emailRequired;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = copy.emailInvalid;
  }

  if (!values.need_type) {
    errors.need_type = copy.needTypeRequired;
  }

  return errors;
}
