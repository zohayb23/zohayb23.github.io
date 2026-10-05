"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight, Download, Quote } from "lucide-react";
import { profile } from "@/data/profile";

const ease = [0.22, 1, 0.36, 1] as const;

function Doodle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path d="M4 28 14 18M10 30l4-10M2 20l11-2" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

export function Hero({ hasResume }: { hasResume: boolean }) {
  return (
    <section id="top" className="relative overflow-hidden bg-white pt-32 md:pt-36">
      <div className="relative mx-auto max-w-6xl px-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="relative inline-block"
        >
          <span className="inline-block rounded-full border border-ink px-5 py-2 text-[17px] font-medium">Hello!</span>
          <Doodle className="absolute -top-5 -right-6 size-6 text-brand" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease }}
          className="relative mx-auto mt-3 max-w-4xl text-[46px] leading-[1.05] font-semibold tracking-tight sm:text-[64px] lg:text-[84px]"
        >
          I&apos;m <span className="text-brand">{profile.firstName}</span>,
          <br />
          {profile.role}
          <Doodle className="absolute -bottom-2 -left-2 hidden size-10 rotate-180 text-brand lg:block" />
        </motion.h1>
      </div>

      <div className="relative mx-auto mt-6 h-[440px] max-w-6xl sm:h-[520px] lg:-mt-6 lg:h-[600px]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease }}
          className="absolute top-16 left-5 z-10 hidden max-w-[220px] text-left lg:block"
        >
          <Quote className="size-7 fill-ink text-ink" />
          <p className="mt-3 text-[18px] leading-snug font-medium text-[#344054]">{profile.heroQuote}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease }}
          className="absolute top-16 right-5 z-10 hidden text-right lg:block"
        >
          <p className="text-[56px] leading-none font-bold">
            6<span className="text-brand">x</span>
          </p>
          <p className="mt-1 text-[17px] text-[#344054]">Faster AI/ML tests at IBM</p>
          <p className="mt-6 text-[36px] leading-none font-bold">
            4
          </p>
          <p className="mt-1 text-[17px] text-[#344054]">Engineering roles</p>
        </motion.div>

        <motion.div
          initial={{ scaleY: 0.6, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.15, ease }}
          style={{ originY: 1 }}
          className="absolute bottom-0 left-1/2 aspect-[2/1] w-[min(92vw,640px)] -translate-x-1/2 rounded-t-full bg-gradient-to-t from-brand-deep via-brand to-brand-light"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.25, ease }}
          className="absolute inset-x-0 bottom-0 flex h-full justify-center"
        >
          <Image
            src="/headshot.png"
            alt={`Portrait of ${profile.name}`}
            width={682}
            height={730}
            priority
            className="portrait-fade h-full w-auto object-contain object-bottom"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease }}
          className="glass absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1 rounded-full p-2.5"
        >
          <a
            href="#projects"
            className="flex items-center gap-2 rounded-full border border-white/40 bg-brand px-5 py-3 text-[17px] font-medium whitespace-nowrap text-white transition-transform hover:-translate-y-0.5 sm:px-8 sm:py-3.5 sm:text-[22px]"
          >
            Portfolio <ArrowUpRight className="size-5" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full px-5 py-3 text-[17px] font-medium whitespace-nowrap text-white transition-colors hover:text-brand-soft sm:px-8 sm:py-3.5 sm:text-[22px]"
          >
            Hire me
          </a>
        </motion.div>
      </div>

      {hasResume && (
        <a
          href="/resume.pdf"
          download
          className="absolute right-6 bottom-6 z-10 hidden items-center gap-1.5 rounded-full border border-ink/15 bg-white px-4 py-2 text-[14px] font-medium transition-colors hover:border-brand hover:text-brand lg:flex"
        >
          <Download className="size-4" /> Resume
        </a>
      )}
    </section>
  );
}
