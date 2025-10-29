import siteConfigJson from "./siteConfig.json";

export interface SiteConfiguration {
  name: string;
  bio: string;
  profilePicture: string;
  url: string;
  blog: boolean;
  iconLinks: IconLink[];
  customLinks: CustomLink[];
}

interface IconLink {
  id: string;
  icon: string;
  url: string;
  event: string;
}

interface CustomLink {
  id: string;
  title: string;
  url: string;
  event: string;
}

export const SITE: SiteConfiguration = {
  ...siteConfigJson,
};
