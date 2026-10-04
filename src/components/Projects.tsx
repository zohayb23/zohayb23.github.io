"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { profile, projects, type Project } from "@/data/profile";
import { GitHubIcon } from "./icons";

const filters = ["All", "AI & ML", "Apps & Tools", "Team & Coursework"] as const;
type Filter = (typeof filters)[number];

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = filter === "All" ? projects : projects.filter((p: Project) => p.category === filter);

  return (
    <section id="projects" className="bg-mist px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[13px] text-neutral-500">Builds & Experiments</p>
            <h2 className="mt-1 text-[28px] font-medium tracking-tight sm:text-[34px]">
              Projects <span className="text-neutral-400">& Code</span>
            </h2>
          </div>
          <div className="no-scrollbar flex gap-1 overflow-x-auto rounded-full bg-white p-1 shadow-sm">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`relative shrink-0 rounded-full px-4 py-1.5 text-[12px] transition-colors ${
                  filter === f ? "text-white" : "text-neutral-600 hover:text-black"
                }`}
              >
                {filter === f && (
                  <motion.span layoutId="project-filter" className="absolute inset-0 rounded-full bg-accent" />
                )}
                <span className="relative">{f}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.a
                layout
                key={project.name}
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col rounded-3xl bg-white p-6 shadow-[0_16px_40px_-22px_rgba(0,0,0,0.3)] ring-1 ring-transparent transition-shadow hover:shadow-[0_24px_50px_-20px_rgba(37,99,235,0.35)] hover:ring-accent/25"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full bg-accent-soft px-2.5 py-1 text-[10px] font-medium tracking-wide text-accent uppercase">
                    {project.category}
                  </span>
                  <ArrowUpRight className="size-4 text-neutral-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </div>
                <h3 className="mt-5 text-[19px] font-semibold tracking-tight">{project.name}</h3>
                <p className="mt-2 flex-1 text-[13px] leading-relaxed text-neutral-600">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-md bg-neutral-100 px-2 py-0.5 text-[11px] text-neutral-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-12 flex justify-center">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl bg-ink px-5 py-3 text-[13px] font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-accent"
          >
            <GitHubIcon className="size-4" />
            See everything on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
