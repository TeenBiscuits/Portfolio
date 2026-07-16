// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.pablopl.dev",

  i18n: {
    locales: ["es", "en", "gl"],
    defaultLocale: "es",
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "es",
        locales: {
          es: "en-US",
          en: "es-ES",
          gl: "gl-ES",
        },
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Merriweather",
      cssVariable: "--font-merriweather",
      fallbacks: ["serif"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "Rubik",
      cssVariable: "--font-rubik",
      fallbacks: ["sans-serif"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "Cascadia Code",
      cssVariable: "--font-cascadia",
      fallbacks: ["monospace"],
    },
  ],
});
