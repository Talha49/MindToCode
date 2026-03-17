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
    "Assignment Help",
    "University Project Support",
    "Capstone Project Help",
    "Business Web Development",
    "MVP Development for Startups",
    "Custom Software Solutions",
    "React & Next.js Expert",
    "Freelance Developer"
  ],
  authors: [{ name: "Talha Ghauri", url: SITE_URL }],
  creator: "Talha Ghauri",
  publisher: "MindToCode",
  icons: {
    icon: '/assets/logo.png',
    shortcut: '/assets/logo.png',
    apple: '/assets/logo.png',
  },
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

import { ContactFloater } from "@/components/ui/ContactFloater";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased text-foreground bg-background`}>
        {children}
        <ContactFloater 
          phoneNumber="4407448690269" 
        />
      </body>
    </html>
  );
}
