import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `Page not found | ${profile.name}`,
};

export default function NotFound() {
  return (
    <main id="main" className="grid min-h-svh place-items-center px-5 text-center">
      <div>
        <p className="text-[120px] leading-none font-bold tracking-tight sm:text-[160px]">
          4<span className="text-brand">0</span>4
        </p>
        <h1 className="mt-4 text-[28px] font-semibold sm:text-[34px]">This page isn&apos;t deployed.</h1>
        <p className="mx-auto mt-3 max-w-md text-[17px] text-muted">
          The link may be old or mistyped. Everything I&apos;ve built lives on the home page.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-[17px] font-semibold text-white transition-transform hover:-translate-y-0.5"
        >
          <ArrowLeft className="size-5" /> Back to {profile.firstName}&apos;s site
        </Link>
      </div>
    </main>
  );
}
