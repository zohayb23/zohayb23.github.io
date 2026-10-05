"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { education, journey, type JourneyItem } from "@/data/profile";
import { FadeIn } from "./motion";

function Dot({ highlight }: { highlight?: boolean }) {
  return (
    <span
      className={`relative z-10 grid size-7 shrink-0 place-items-center rounded-full border-2 border-dashed ${
        highlight ? "border-brand" : "border-ink"
      } bg-white`}
    >
      <span className={`size-3.5 rounded-full ${highlight ? "bg-brand" : "bg-ink"}`} />
    </span>
  );
}

function Row({
  left,
  right,
  highlight,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <div className="grid grid-cols-[28px_1fr] gap-x-5 md:grid-cols-[1fr_28px_1fr] md:gap-x-10">
      <div className="col-start-2 md:col-start-1 md:text-right">{left}</div>
      <div className="row-span-2 row-start-1 flex justify-center pt-1 md:col-start-2 md:row-span-1">
        <Dot highlight={highlight} />
      </div>
      <div className="col-start-2 mt-2 md:col-start-3 md:mt-0">{right}</div>
    </div>
  );
}

function ExperienceDetails({ item, defaultOpen }: { item: JourneyItem; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen ?? false);
  return (
    <div>
      <h3 className="text-[26px] leading-tight font-semibold text-ink sm:text-[30px]">{item.role}</h3>
      <p className="mt-2 text-[16px] text-muted">{item.summary.join(" · ")}</p>
      {item.badge && (
        <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-brand-tint px-3 py-1 text-[13px] font-medium text-brand">
          <span className="size-1.5 rounded-full bg-brand" />
          {item.badge}
        </p>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="mt-4 flex items-center gap-1.5 text-[14px] font-semibold text-ink transition-colors hover:text-brand"
      >
        {open ? "Hide details" : "Show details"}
        <ChevronDown className={`size-4 transition-transform ${open ? "rotate-180" : ""}`} />
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
            <div className="space-y-5 pt-4">
              {item.projects.map((project) => (
                <div key={project.title}>
                  <h4 className="text-[15px] font-semibold text-ink">{project.title}</h4>
                  <ul className="mt-2 space-y-2">
                    {project.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2.5 text-[15px] leading-relaxed text-[#475467]">
                        <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-ink/10 px-3 py-1 text-[12px] text-[#475467]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CompanyBlock({ item }: { item: JourneyItem }) {
  return (
    <div className="flex flex-col md:items-end">
      <div className="flex items-center gap-3 md:flex-row-reverse">
        {item.logo ? (
          <Image src={item.logo} alt="" width={64} height={28} className="h-6 w-auto brightness-0" />
        ) : (
          <span className="grid size-8 place-items-center rounded-lg bg-ink text-[13px] font-bold text-white">
            {item.monogram}
          </span>
        )}
        <h3 className="text-[26px] leading-tight font-semibold text-ink sm:text-[30px]">{item.company}</h3>
      </div>
      <p className="mt-2 text-[16px] text-muted">
        {[item.period, item.location].filter(Boolean).join(" · ")}
      </p>
    </div>
  );
}

export function Journey() {
  return (
    <section id="journey" className="bg-white px-5 py-24 sm:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-[40px] leading-tight font-semibold sm:text-[48px]">
          My <span className="text-brand">Work Experience</span>
        </h2>

        <div className="relative mt-16">
          <div className="absolute top-2 bottom-2 left-[13px] border-l-2 border-dashed border-ink/25 md:left-1/2 md:-translate-x-px" />
          <div className="space-y-14">
            {journey.map((item, i) => (
              <FadeIn key={item.company} delay={i * 0.05}>
                <Row
                  highlight={i === 0}
                  left={<CompanyBlock item={item} />}
                  right={<ExperienceDetails item={item} defaultOpen={i === 0} />}
                />
              </FadeIn>
            ))}
          </div>
        </div>

        <h2 className="mt-28 text-center text-[36px] leading-tight font-semibold sm:text-[42px]">
          My <span className="text-brand">Education</span>
        </h2>
        <div className="relative mt-14">
          <div className="absolute top-2 bottom-2 left-[13px] border-l-2 border-dashed border-ink/25 md:left-1/2 md:-translate-x-px" />
          <div className="space-y-12">
            {education.map((edu, i) => (
              <FadeIn key={edu.school} delay={i * 0.05}>
                <Row
                  highlight={edu.inProgress}
                  left={
                    <div>
                      <h3 className="text-[24px] leading-tight font-semibold">{edu.school}</h3>
                      <p className="mt-2 text-[16px] text-muted">
                        {edu.date} · {edu.location}
                      </p>
                    </div>
                  }
                  right={
                    <div>
                      <h4 className="text-[22px] leading-tight font-semibold">{edu.degree}</h4>
                      {edu.inProgress && (
                        <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-brand-tint px-3 py-1 text-[13px] font-medium text-brand">
                          <span className="size-1.5 animate-pulse rounded-full bg-brand" />
                          In progress
                        </p>
                      )}
                    </div>
                  }
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
