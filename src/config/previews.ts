import peMp4 from "../assets/previews/pe.mp4";
import peWebm from "../assets/previews/pe.webm";
import pePoster from "../assets/previews/pe-poster.webp";
import pcMp4 from "../assets/previews/pc.mp4";
import pcWebm from "../assets/previews/pc.webm";
import pcPoster from "../assets/previews/pc-poster.webp";
import blogMp4 from "../assets/previews/blog.mp4";
import blogWebm from "../assets/previews/blog.webm";
import blogPoster from "../assets/previews/blog-poster.webp";
import cvImage from "../assets/previews/cv.webp";
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

export const sitePreviews: Record<PreviewKey, SitePreview> = {
  pe: {
    domain: "pe.pablopl.dev",
    video: { webm: peWebm, mp4: peMp4, poster: pePoster.src, width: pePoster.width, height: pePoster.height },
  },
  pc: {
    domain: "pc.pablopl.dev",
    video: { webm: pcWebm, mp4: pcMp4, poster: pcPoster.src, width: pcPoster.width, height: pcPoster.height },
  },
  blog: {
    domain: "blog.pablopl.dev",
    video: { webm: blogWebm, mp4: blogMp4, poster: blogPoster.src, width: blogPoster.width, height: blogPoster.height },
  },
  cv: {
    domain: "cv.pablopl.dev",
    image: { src: cvImage.src, width: cvImage.width, height: cvImage.height },
  },
  realorai: {
    domain: "realorai.pablopl.dev",
    image: {
      src: realoraiImage.src,
      width: realoraiImage.width,
      height: realoraiImage.height,
    },
  },
};
