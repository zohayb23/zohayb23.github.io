import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Software engineer in Austin, TX building AI/ML infrastructure, CI/CD automation, Kubernetes platforms, and security compliance tooling. Previously at IBM, Meta, and Revanite.";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${profile.name} | Software Engineer, AI/ML Infrastructure`,
  description,
  keywords: [
    "Zohayb Bhatti",
    "Software Engineer",
    "AI/ML Infrastructure",
    "Kubernetes",
    "Tekton",
    "CI/CD",
    "IBM",
    "Meta",
    "Austin",
  ],
  authors: [{ name: profile.name, url: profile.linkedin }],
  openGraph: {
    title: profile.name,
    description,
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: profile.name,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
