"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { Download, MapPin } from "lucide-react";
import { useRef } from "react";
import { profile } from "@/data/profile";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero({ hasResume }: { hasResume: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0.35]);

  const sentences = profile.tagline.split(/(?<=\.)\s+/);
  const accentLine = sentences.pop();

  return (
    <section ref={ref} id="top" className="relative flex min-h-svh flex-col overflow-hidden bg-white pt-16">
      <motion.div
        style={{ y: portraitY }}
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease }}
        className="pointer-events-none relative mx-auto mt-6 flex h-[52svh] w-full max-w-[560px] items-end justify-center md:absolute md:inset-x-0 md:bottom-0 md:mt-0 md:h-[78svh] md:max-h-[820px]"
      >
        <div className="hero-glow absolute inset-x-[-30%] top-[5%] bottom-0" />
        <Image
          src="/headshot.png"
          alt={`Portrait of ${profile.name}`}
          width={682}
          height={730}
          priority
          className="portrait-fade relative h-full w-auto object-contain object-bottom"
        />
      </motion.div>

      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 mx-auto grid w-full max-w-7xl gap-6 px-5 pt-2 pb-12 sm:px-8 md:mt-auto md:grid-cols-2 md:items-end md:gap-8 md:pb-16"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease }}
          className="max-w-md text-[32px] leading-[1.1] font-medium tracking-tight text-ink sm:text-[38px] md:max-w-[19rem] lg:max-w-[21rem] xl:max-w-md xl:text-[40px]"
        >
          {sentences.join(" ")} <span className="text-accent">{accentLine}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease }}
          className="max-w-xs md:justify-self-end"
        >
          <p className="text-[14px] leading-relaxed text-neutral-700">{profile.heroBlurb}</p>
          <p className="mt-2 flex items-center gap-1.5 text-[12px] text-neutral-500">
            <MapPin className="size-3.5" />
            {profile.location}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <a
              href={`mailto:${profile.email}`}
              className="inline-block rounded-xl bg-accent px-5 py-3 text-[13px] font-medium text-white shadow-[0_10px_30px_-8px_rgba(37,99,235,0.6)] transition-all hover:-translate-y-0.5 hover:bg-accent-deep"
            >
              Email Me
            </a>
            {hasResume && (
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-1.5 rounded-xl border border-black/10 bg-white px-5 py-3 text-[13px] font-medium text-ink transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                <Download className="size-3.5" />
                Resume
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
