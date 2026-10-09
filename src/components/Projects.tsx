"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Lock } from "lucide-react";
import { useState } from "react";
import { profile, projects, type Project } from "@/data/profile";
import { GitHubIcon } from "./icons";

const filters = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

const cardMotion = {
  layout: true,
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.96 },
  transition: { duration: 0.3 },
} as const;

const cardClass = "group flex flex-col rounded-[28px] border border-ink/[0.08] bg-surface p-7 transition-all";

function CardBody({ project }: { project: Project }) {
  return (
    <>
      <div className="flex items-start justify-between gap-4">
        <span className="rounded-full bg-brand-tint px-3 py-1 text-[12px] font-semibold text-brand">
          {project.category}
        </span>
        {project.repo ? (
          <span className="grid size-9 place-items-center rounded-full bg-mist transition-colors group-hover:bg-brand group-hover:text-white">
            <ArrowUpRight className="size-4" />
          </span>
        ) : (
          <span className="flex items-center gap-1.5 rounded-full bg-mist px-3 py-1.5 text-[12px] font-medium text-ink/70">
            <Lock className="size-3.5" /> Private repo
          </span>
        )}
      </div>
      <h3 className="mt-5 text-[22px] leading-tight font-semibold">{project.name}</h3>
      {project.context && <p className="mt-1 text-[13px] font-medium text-brand">{project.context}</p>}
      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">{project.description}</p>
      <div className="mt-6 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-mist px-3 py-1 text-[12px] text-ink/70">
            {tag}
          </span>
        ))}
      </div>
    </>
  );
}

export function Projects() {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section aria-label="All projects" className="px-5 pt-10 pb-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="no-scrollbar mx-auto flex w-fit max-w-full gap-1 overflow-x-auto rounded-full bg-mist p-1.5">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`relative shrink-0 rounded-full px-5 py-2.5 text-[15px] font-medium transition-colors ${
                filter === f ? "text-white" : "text-ink/70 hover:text-ink"
              }`}
            >
              {filter === f && (
                <motion.span layoutId="project-filter" className="absolute inset-0 rounded-full bg-brand" />
              )}
              <span className="relative">{f}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project) =>
              project.repo ? (
                <motion.a
                  {...cardMotion}
                  key={project.name}
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className={`${cardClass} hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_24px_50px_-24px_var(--color-brand-glow)]`}
                >
                  <CardBody project={project} />
                </motion.a>
              ) : (
                <motion.article {...cardMotion} key={project.name} className={cardClass}>
                  <CardBody project={project} />
                </motion.article>
              ),
            )}
          </AnimatePresence>
        </motion.div>

        <div className="mt-12 flex justify-center">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-[16px] font-medium text-page transition-all hover:-translate-y-0.5 hover:bg-brand hover:text-white"
          >
            <GitHubIcon className="size-5" />
            See everything on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
