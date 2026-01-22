import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  title: "MindToCode | Technical Guidance & Digital Solutions",
  description: "Expert technical guidance and digital solutions for learners, graduates, startups, and growing businesses.",
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
