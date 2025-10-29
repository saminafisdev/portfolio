import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Provider } from "@/components/ui/provider"
import Navbar from "@/components/site/navbar"
import Footer from "@/components/site/footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sami Nafis | Full‑stack Developer",
    template: "%s | Sami Nafis",
  },
  description:
    "Full‑stack developer specializing in Next.js, Django, React, and cloud. I build fast, accessible web apps with great UX.",
  openGraph: {
    title: "Sami Nafis | Full‑stack Developer",
    description:
      "Full‑stack developer specializing in Next.js, Django, React, and cloud. I build fast, accessible web apps with great UX.",
    url: "https://saminafis.dev",
    siteName: "Sami Nafis Portfolio",
    images: [
      {
        url: "/social-banner.png",
        width: 1200,
        height: 630,
        alt: "Sami Nafis Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sami Nafis | Full‑stack Developer",
    description:
      "Full‑stack developer specializing in Next.js, Django, React, and cloud. I build fast, accessible web apps with great UX.",
    images: ["/social-banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Provider>
        <Navbar />
        {children}
        <Footer />
      </Provider>
      </body>
    </html>
  );
}
