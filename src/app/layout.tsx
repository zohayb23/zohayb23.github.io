import type { Metadata } from "next";
import { Geist_Mono, Urbanist } from "next/font/google";
import Script from "next/script";
import { profile } from "@/data/profile";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Software engineer in Austin, TX building AI/ML infrastructure, CI/CD automation, Kubernetes platforms, and security compliance tooling. Previously at IBM, Meta, Revanite, and Fintrady.";

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

const goatcounterCode = process.env.NEXT_PUBLIC_GOATCOUNTER_CODE;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${urbanist.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark")t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-full font-sans">
        <a
          href="#main"
          className="fixed top-3 left-3 z-[100] -translate-y-24 rounded-full bg-brand px-5 py-3 font-semibold text-white focus:translate-y-0"
        >
          Skip to content
        </a>
        {children}
        {goatcounterCode && (
          <Script
            data-goatcounter={`https://${goatcounterCode}.goatcounter.com/count`}
            src="https://gc.zgo.at/count.js"
            strategy="lazyOnload"
          />
        )}
      </body>
    </html>
  );
}
