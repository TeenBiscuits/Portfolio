import peLightMp4 from "../assets/previews/pe-light.mp4";
import peLightWebm from "../assets/previews/pe-light.webm";
import peLightPoster from "../assets/previews/pe-light-poster.webp";
import peDarkMp4 from "../assets/previews/pe-dark.mp4";
import peDarkWebm from "../assets/previews/pe-dark.webm";
import peDarkPoster from "../assets/previews/pe-dark-poster.webp";
import pcLightMp4 from "../assets/previews/pc-light.mp4";
import pcLightWebm from "../assets/previews/pc-light.webm";
import pcLightPoster from "../assets/previews/pc-light-poster.webp";
import pcDarkMp4 from "../assets/previews/pc-dark.mp4";
import pcDarkWebm from "../assets/previews/pc-dark.webm";
import pcDarkPoster from "../assets/previews/pc-dark-poster.webp";
import blogLightMp4 from "../assets/previews/blog-light.mp4";
import blogLightWebm from "../assets/previews/blog-light.webm";
import blogLightPoster from "../assets/previews/blog-light-poster.webp";
import blogDarkMp4 from "../assets/previews/blog-dark.mp4";
import blogDarkWebm from "../assets/previews/blog-dark.webm";
import blogDarkPoster from "../assets/previews/blog-dark-poster.webp";
import cvLightImage from "../assets/previews/cv-light.webp";
import cvDarkImage from "../assets/previews/cv-dark.webp";
import realoraiImage from "../assets/previews/realorai.webp";

export type PreviewKey = "pe" | "pc" | "blog" | "cv" | "realorai";

export interface SitePreview {
  domain: string;
  /** Animated preview: muted looping screen recording (webm + mp4 fallback).
     width/height come from the poster so the <video> keeps its intrinsic
     aspect ratio before any metadata loads. */
  video?: { webm: string; mp4: string; poster: string; width: number; height: number };
  /** Static preview (already optimized webp) */
  image?: { src: string; width: number; height: number };
}

export interface ThemePreview {
  light: SitePreview;
  dark?: SitePreview;
}

export const sitePreviews: Record<PreviewKey, ThemePreview> = {
  pe: {
    light: {
      domain: "pe.pablopl.dev",
      video: {
        webm: peLightWebm,
        mp4: peLightMp4,
        poster: peLightPoster.src,
        width: peLightPoster.width,
        height: peLightPoster.height,
      },
    },
    dark: {
      domain: "pe.pablopl.dev",
      video: {
        webm: peDarkWebm,
        mp4: peDarkMp4,
        poster: peDarkPoster.src,
        width: peDarkPoster.width,
        height: peDarkPoster.height,
      },
    },
  },
  pc: {
    light: {
      domain: "pc.pablopl.dev",
      video: {
        webm: pcLightWebm,
        mp4: pcLightMp4,
        poster: pcLightPoster.src,
        width: pcLightPoster.width,
        height: pcLightPoster.height,
      },
    },
    dark: {
      domain: "pc.pablopl.dev",
      video: {
        webm: pcDarkWebm,
        mp4: pcDarkMp4,
        poster: pcDarkPoster.src,
        width: pcDarkPoster.width,
        height: pcDarkPoster.height,
      },
    },
  },
  blog: {
    light: {
      domain: "blog.pablopl.dev",
      video: {
        webm: blogLightWebm,
        mp4: blogLightMp4,
        poster: blogLightPoster.src,
        width: blogLightPoster.width,
        height: blogLightPoster.height,
      },
    },
    dark: {
      domain: "blog.pablopl.dev",
      video: {
        webm: blogDarkWebm,
        mp4: blogDarkMp4,
        poster: blogDarkPoster.src,
        width: blogDarkPoster.width,
        height: blogDarkPoster.height,
      },
    },
  },
  cv: {
    light: {
      domain: "cv.pablopl.dev",
      image: {
        src: cvLightImage.src,
        width: cvLightImage.width,
        height: cvLightImage.height,
      },
    },
    dark: {
      domain: "cv.pablopl.dev",
      image: {
        src: cvDarkImage.src,
        width: cvDarkImage.width,
        height: cvDarkImage.height,
      },
    },
  },
  realorai: {
    light: {
      domain: "realorai.pablopl.dev",
      image: {
        src: realoraiImage.src,
        width: realoraiImage.width,
        height: realoraiImage.height,
      },
    },
  },
};
