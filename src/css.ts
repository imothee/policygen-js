import type { Configuration } from "./configuration";

export type Css = {
  containerClass: string;
  h1Class: string;
  h2Class: string;
  h3Class: string;
  sectionClass: string;
  bodyClass: string;
  ulClass: string;
  olClass: string;
  boldClass: string;
  linkClass: string;
};

export const Tailwind = (config: Configuration): Css => {
  return {
    containerClass: "container mx-auto px-4",
    h1Class: `text-4xl font-bold ${config.tailwindConfig.headingColor}`,
    h2Class: `text-2xl mt-4 font-bold ${config.tailwindConfig.headingColor}`,
    h3Class: `text-xl mt-4 font-bold ${config.tailwindConfig.headingColor}`,
    sectionClass: "mt-8",
    bodyClass: `mt-4 ${config.tailwindConfig.bodyColor}`,
    ulClass: `list-disc list-inside ${config.tailwindConfig.bodyColor}`,
    olClass: `list-decimal list-inside ${config.tailwindConfig.bodyColor}`,
    boldClass: "font-bold",
    linkClass: `underline ${config.tailwindConfig.linkColor}`,
  };
};

export const Classes = (): Css => {
  return {
    containerClass: "policygen-container",
    h1Class: `policygen-h1`,
    h2Class: `policygen-h2`,
    h3Class: `policygen-h3`,
    sectionClass: "policygen-section",
    bodyClass: `policygen-body-text`,
    ulClass: `policygen-ul`,
    olClass: `policygen-ol`,
    boldClass: "policygen-bold",
    linkClass: `policygen-link`,
  };
};
