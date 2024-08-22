import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "server",
  adapter: netlify(),
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    fallbackLocale: "es",
    routing: {
      prefixDefaultLocale: false,
    }
  },
});
