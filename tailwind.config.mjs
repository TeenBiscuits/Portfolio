/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require("@tailwindcss/typography")],
  theme: {
    extend: {
      colors: {
        lightModeBackground: "var(--light-mode-background)",
        lightModeForeground: "var(--light-mode-foreground)",
        lightModeForegroundMuted: "var(--light-mode-foreground-muted)",
        lightModeIconLinkOutline: "var(--light-mode-icon-link-outline)",
        lightModeIconLinkBackground: "var(--light-mode-icon-link-background)",
        lightModeIconLinkText: "var(--light-mode-icon-link-text)",
        lightModeIconLinkOutlineHover:
          "var(--light-mode-icon-link-outline-hover)",
        lightModeIconLinkBackgroundHover:
          "var(--light-mode-icon-link-background-hover)",
        lightModeIconLinkTextHover: "var(--light-mode-icon-link-text-hover)",
        lightModeCustomLinkOutline: "var(--light-mode-custom-link-outline)",
        lightModeCustomLinkBackground:
          "var(--light-mode-custom-link-background)",
        lightModeCustomLinkText: "var(--light-mode-custom-link-text)",
        lightModeCustomLinkOutlineHover:
          "var(--light-mode-custom-link-outline-hover)",
        lightModeCustomLinkBackgroundHover:
          "var(--light-mode-custom-link-background-hover)",
        lightModeCustomLinkTextHover:
          "var(--light-mode-custom-link-text-hover)",
        darkModeBackground: "var(--dark-mode-background)",
        darkModeForeground: "var(--dark-mode-foreground)",
        darkModeForegroundMuted: "var(--dark-mode-foreground-muted)",
        darkModeIconLinkOutline: "var(--dark-mode-icon-link-outline)",
        darkModeIconLinkBackground: "var(--dark-mode-icon-link-background)",
        darkModeIconLinkText: "var(--dark-mode-icon-link-text)",
        darkModeIconLinkOutlineHover:
          "var(--dark-mode-icon-link-outline-hover)",
        darkModeIconLinkBackgroundHover:
          "var(--dark-mode-icon-link-background-hover)",
        darkModeIconLinkTextHover: "var(--dark-mode-icon-link-text-hover)",
        darkModeCustomLinkOutline: "var(--dark-mode-custom-link-outline)",
        darkModeCustomLinkBackground: "var(--dark-mode-custom-link-background)",
        darkModeCustomLinkText: "var(--dark-mode-custom-link-text)",
        darkModeCustomLinkOutlineHover:
          "var(--dark-mode-custom-link-outline-hover)",
        darkModeCustomLinkBackgroundHover:
          "var(--dark-mode-custom-link-background-hover)",
        darkModeCustomLinkTextHover: "var(--dark-mode-custom-link-text-hover)",
      },
    },
  },
};
