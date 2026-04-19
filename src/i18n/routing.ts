import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["de", "en"],
  defaultLocale: "en",
  localePrefix: "always",
  pathnames: {
    "/": "/",
    "/imprint": {
      de: "/impressum",
      en: "/imprint",
    },
    "/privacy": {
      de: "/datenschutz",
      en: "/privacy",
    },
  },
});
