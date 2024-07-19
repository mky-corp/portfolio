import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "server",
  adapter: netlify(),
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    strategy: "prefix_except_default",
    fallbackLocale: {
      en: "en",
    },
  },
});
