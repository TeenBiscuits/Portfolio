import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/blog": "/",
  },
  site: "https://www.pablopl.dev",
  integrations: [sitemap(), icon()],
});
