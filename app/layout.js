import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { 
  SITE_URL, 
  DEFAULT_TITLE, 
  SITE_SHORT_TITLE, 
  DEFAULT_DESCRIPTION, 
  DEFAULT_OG_IMAGE, 
  absoluteUrl 
} from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_SHORT_TITLE}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "MindToCode",
    "Technical Guidance",
    "MVP Development",
    "Learner Support",
    "Capstone Project Help",
    "SaaS MVP",
    "Reach Developer",
    "Next.js Consultant",
    "Freelance Developer"
  ],
  authors: [{ name: "Talha Ghauri", url: SITE_URL }],
  creator: "Talha Ghauri",
  publisher: "MindToCode",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_SHORT_TITLE,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE.url], 
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "BlTu0IoUq9f_Fi2H2Z7TDvCiOcVWuaT78d_1YI1K4as",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased text-foreground bg-background`}>
        {children}
      </body>
    </html>
  );
}
