import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { featuredWork, profile } from "@/data/profile";
import { FadeIn } from "./motion";

const podDurations = [62, 78, 55, 70, 84, 66, 74, 58, 80];

function PipelineGraphic() {
  return (
    <div aria-hidden="true" className="mt-8 hidden gap-6 sm:grid sm:grid-cols-[1fr_auto]">
      <div className="grid grid-cols-3 gap-2.5">
        {podDurations.map((width, n) => (
          <div key={n} className="rounded-2xl border border-white/10 bg-white/[0.05] p-3">
            <div className="flex items-center justify-between font-mono text-[11px] text-white/60">
              <span>tekton-pod-{n + 1}</span>
              <span className="size-1.5 rounded-full bg-emerald-400" />
            </div>
            <div className="mt-2.5 h-1.5 rounded-full bg-white/10">
              <div className="h-full rounded-full bg-brand-light" style={{ width: `${width}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center rounded-2xl border border-white/10 bg-white/[0.05] px-6 text-center">
        <p className="text-[48px] leading-none font-bold">
          6<span className="text-brand-light">x</span>
        </p>
        <p className="mt-2 text-[13px] text-white/60">faster test runtime</p>
      </div>
    </div>
  );
}

export function FeaturedWork() {
  return (
    <section id="projects" className="px-5 pt-4 pb-10 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-xl text-[40px] leading-tight font-semibold sm:text-[48px]">
            Let&apos;s have a look at my <span className="text-brand">Portfolio</span>
          </h2>
          <a
            href={`${profile.github}?tab=repositories`}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-brand px-7 py-3.5 text-[18px] font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            See All
          </a>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featuredWork.map((work, i) => (
            <FadeIn key={work.title} delay={i * 0.08} className={i === 0 ? "lg:col-span-2 lg:row-span-2" : ""}>
              <Link
                href={`/work/${work.slug}`}
                className={`group relative flex h-full min-h-[340px] flex-col justify-between overflow-hidden rounded-[36px] p-8 transition-transform hover:-translate-y-1 ${
                  i === 0 ? "dark-texture text-white" : i === 1 ? "bg-brand-soft text-ink" : "bg-mist text-ink"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`rounded-full px-4 py-1.5 text-[13px] font-medium ${
                      i === 0 ? "glass" : "bg-white/70"
                    }`}
                  >
                    {work.category}
                  </span>
                  <span
                    className={`grid size-12 shrink-0 place-items-center rounded-full transition-transform group-hover:rotate-45 ${
                      i === 0 ? "bg-brand text-white" : "bg-ink text-white"
                    }`}
                  >
                    <ArrowUpRight className="size-5" />
                  </span>
                </div>
                {i === 0 && <PipelineGraphic />}
                <div className="mt-10">
                  <h3 className={`font-semibold tracking-tight ${i === 0 ? "text-[34px] sm:text-[42px]" : "text-[28px]"} leading-tight`}>
                    {work.title}
                  </h3>
                  <p className={`mt-4 max-w-xl text-[16px] leading-relaxed ${i === 0 ? "text-white/75" : "text-ink/75"}`}>
                    {work.body}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
                    <p
                      className={`inline-flex rounded-full px-4 py-2 text-[13px] font-semibold ${
                        i === 0 ? "bg-brand text-white" : "bg-ink text-white"
                      }`}
                    >
                      {work.pill}
                    </p>
                    <span
                      className={`text-[14px] font-semibold underline-offset-4 group-hover:underline ${
                        i === 0 ? "text-brand-light" : "text-brand-deep"
                      }`}
                    >
                      Read case study →
                    </span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
