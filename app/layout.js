import "./globals.css";
import { Geist } from "next/font/google";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://pakdev-portfolio.vercel.app"),
  title: {
    default: "SanaUllah - Frontend Developer Portfolio",
    template: "%s | PakDev",
  },
  description:
    "Premium frontend developer portfolio for modern dashboards, SaaS interfaces, CRM systems, multilingual websites, and responsive business applications.",
  keywords: [
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "Dashboard UI",
    "SaaS UI",
    "CRM Dashboard",
    "Gulf Market Developer",
    "Tailwind CSS",
  ],
  authors: [{ name: "PakDev" }],
  creator: "PakDev",
  openGraph: {
    title: "PakDev - Premium Frontend Developer Portfolio",
    description:
      "Frontend developer specializing in enterprise dashboards, SaaS applications, multilingual platforms, responsive UI, and AI-integrated systems.",
    type: "website",
    locale: "en_US",
    url: "https://pakdev-portfolio.vercel.app",
    siteName: "PakDev Portfolio",
    images: [
      {
        url: "/assets/og-cover.svg",
        width: 1200,
        height: 630,
        alt: "PakDev Frontend Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PakDev - Frontend Developer Portfolio",
    description:
      "Premium frontend developer portfolio for dashboards, SaaS products, and business web applications.",
    images: ["/assets/og-cover.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#05070D",
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${geistSans.variable} min-h-screen bg-background font-sans text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}
