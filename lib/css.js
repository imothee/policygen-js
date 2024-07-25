"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Classes = exports.Tailwind = void 0;
const Tailwind = (config) => {
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
exports.Tailwind = Tailwind;
const Classes = () => {
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
exports.Classes = Classes;
