"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, GraduationCap, MapPin } from "lucide-react";
import { useState } from "react";
import { education, journey, type JourneyItem } from "@/data/profile";
import { FadeIn, RevealText } from "./motion";

function Logo({ item }: { item: Pick<JourneyItem, "logo" | "monogram" | "company"> }) {
  if (item.logo) {
    return (
      <Image
        src={item.logo}
        alt={`${item.company} logo`}
        width={96}
        height={40}
        className="h-8 w-auto opacity-80 brightness-0 invert"
      />
    );
  }
  return (
    <span className="grid size-14 place-items-center rounded-2xl bg-gradient-to-b from-accent to-accent-deep text-lg font-semibold text-white shadow-inner">
      {item.monogram}
    </span>
  );
}

function JourneyCard({ item, defaultOpen }: { item: JourneyItem; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen ?? false);

  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center gap-3 text-[11px] text-neutral-500">
        <span>{item.period}</span>
        {item.badge && (
          <span className="flex items-center gap-1.5 text-neutral-200">
            <span className="size-1.5 rounded-full bg-accent-bright shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
            {item.badge}
          </span>
        )}
      </div>

      <div className="rounded-xl border border-white/[0.06] bg-card-dark transition-colors hover:border-accent-bright/30">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex w-full items-center gap-6 p-6 text-left"
        >
          <div className="hidden w-28 shrink-0 justify-center sm:flex">
            <Logo item={item} />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-[16px] font-medium text-white">{item.company}</h3>
            <p className="mt-0.5 text-[12px] text-neutral-500">
              {item.role} · {item.location}
            </p>
            <p className="mt-3 text-[13px] text-neutral-300">{item.summary.join(" • ")}</p>
          </div>
          <ChevronDown
            className={`size-4 shrink-0 text-neutral-500 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="space-y-6 border-t border-white/[0.06] px-6 py-6 sm:pl-[10.5rem]">
                {item.projects.map((project) => (
                  <div key={project.title}>
                    <h4 className="text-[13px] font-medium text-white">{project.title}</h4>
                    <ul className="mt-2 space-y-2">
                      {project.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2.5 text-[13px] leading-relaxed text-neutral-400">
                          <span className="mt-2 size-1 shrink-0 rounded-full bg-accent-bright" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-neutral-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export function Journey() {
  return (
    <section id="journey" className="bg-night px-5 py-24 text-white sm:px-8 md:py-32">
      <div className="mx-auto max-w-4xl">
        <p className="text-[13px] text-neutral-400">The</p>
        <h2 className="text-[22px] font-medium">Journey</h2>
        <RevealText
          tone="dark"
          text="From **bare-metal AI accelerators** to **AI-enabled wearables** to **compliance-as-code**, I build the **automation and infrastructure** that let engineering teams **ship with confidence.**"
          className="mt-10 text-[22px] leading-[1.45] tracking-tight sm:text-[26px]"
        />

        <div className="mx-auto mt-16 max-w-3xl space-y-8">
          {journey.map((item, i) => (
            <FadeIn key={item.company} delay={i * 0.05}>
              <JourneyCard item={item} defaultOpen={i === 0} />
            </FadeIn>
          ))}

          <FadeIn>
            <p className="mb-3 text-[11px] text-neutral-500">Education</p>
            <div className="divide-y divide-white/[0.06] rounded-xl border border-white/[0.06] bg-card-dark">
              {education.map((edu) => (
                <div key={edu.school} className="flex items-center gap-6 p-6">
                  <div className="hidden w-28 shrink-0 justify-center sm:flex">
                    <span className="grid size-14 place-items-center rounded-2xl border border-white/10 text-[13px] font-semibold tracking-wide text-neutral-300">
                      {edu.monogram}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-[15px] font-medium text-white">{edu.school}</h3>
                      {edu.inProgress && (
                        <span className="flex items-center gap-1.5 rounded-full bg-white/5 px-2 py-0.5 text-[10px] text-neutral-300">
                          <span className="size-1.5 animate-pulse rounded-full bg-accent-bright" />
                          In progress
                        </span>
                      )}
                    </div>
                    <p className="mt-1 flex items-center gap-1.5 text-[13px] text-neutral-300">
                      <GraduationCap className="size-3.5 text-neutral-500" />
                      {edu.degree}
                    </p>
                    <p className="mt-1 flex items-center gap-1.5 text-[12px] text-neutral-500">
                      <MapPin className="size-3" />
                      {edu.location} · {edu.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
