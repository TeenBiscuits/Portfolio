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
          es: "es-ES",
          en: "en-US",
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
      weights: ["300 900"],
      styles: ["normal"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "Rubik",
      cssVariable: "--font-rubik",
      fallbacks: ["sans-serif"],
      weights: ["300 900"],
      styles: ["normal"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "Cascadia Code",
      cssVariable: "--font-cascadia",
      fallbacks: ["monospace"],
      weights: ["200 700"],
      styles: ["normal"],
    },
  ],
});
