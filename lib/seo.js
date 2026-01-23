export const SITE_URL = "https://mind-to-code.vercel.app"; // Using the vercel URL for now as per user request

export const DEFAULT_TITLE = "MindToCode | Expert Technical Guidance & MVP Development";
export const SITE_SHORT_TITLE = "MindToCode";
export const DEFAULT_DESCRIPTION = "Turn your idea into a working solution with MindToCode. We provide expert technical guidance, MVP development, and code reviews for learners, startups, and businesses.";
export const DEFAULT_TWITTER = "@mindtocode"; // Placeholder
export const DEFAULT_OG_IMAGE = {
    url: `${SITE_URL}/opengraph-image.png`,
    width: 1200,
    height: 630,
    alt: "MindToCode - Technical Guidance & MVP Development",
};

export function absoluteUrl(path) {
    return `${SITE_URL}${path}`;
}
