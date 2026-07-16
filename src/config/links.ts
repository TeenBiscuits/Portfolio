export interface CustomLink {
  href: string;
  labelKey?: "blog" | "cv" | "code" | "donar" | "exams"; // maps to translation keys
  label?: string; // fallback static string if labelKey is not set
  category: string;
  emoji?: string;
  iconName?: "pc" | "pe";
}

export interface SocialLink {
  href: string;
  label: string;
  icon: string; // Inline SVG markup
}

export const customLinks: CustomLink[] = [
  {
    href: "https://blog.pablopl.dev",
    labelKey: "blog",
    category: "Blog",
    emoji: "✍️",
  },
  {
    href: "https://cv.pablopl.dev",
    labelKey: "cv",
    category: "CV",
    emoji: "📋",
  },
  {
    href: "https://pc.pablopl.dev",
    labelKey: "code",
    category: "Academic",
    iconName: "pc",
  },
  {
    href: "https://pe.pablopl.dev",
    labelKey: "exams",
    category: "Academic",
    iconName: "pe",
  },
  {
    href: "https://realorai.pablopl.dev/",
    label: "RealOrAI",
    category: "Game",
    emoji: "🍌",
  },
];

export const socialLinks: SocialLink[] = [
  {
    href: "mailto:pablo.portas@udc.es",
    label: "Email",
    icon: `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>`,
  },
  {
    href: "https://github.com/TeenBiscuits",
    label: "GitHub",
    icon: `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>`,
  },
  {
    href: "https://x.com/PabloPortasL",
    label: "X (Twitter)",
    icon: `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>`,
  },
  {
    href: "https://www.linkedin.com/in/pabloportaslopez/",
    label: "LinkedIn",
    icon: `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>`,
  },
];
