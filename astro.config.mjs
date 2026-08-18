// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  base: "/mustafa_arch/",
  site: "https://mbdesigny.github.io/mustafa_arch/",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr", "ar"],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
