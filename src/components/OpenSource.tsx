import { ArrowUpRight, GitFork } from "lucide-react";
import { openSource } from "@/data/profile";
import { FadeIn } from "./motion";

export function OpenSource() {
  return (
    <section id="open-source" className="px-3 sm:px-5">
      <div className="dark-texture mx-auto max-w-7xl rounded-[48px] px-5 py-20 text-white sm:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <h2 className="text-[40px] leading-tight font-medium sm:text-[48px]">
              Open <span className="text-brand-light">Source</span>
            </h2>
            <p className="text-[17px] leading-relaxed text-white/80">
              Hands-on in the OpenSSF security ecosystem: Privateer scanners, Gemara governance workflows, and OSPS
              Baseline assessments running in GitHub-native CI.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {openSource.map((repo, i) => (
              <FadeIn key={repo.name} delay={(i % 4) * 0.06} className={i === 0 ? "sm:col-span-2" : ""}>
                <a
                  href={repo.repo}
                  target="_blank"
                  rel="noreferrer"
                  className={`group flex h-full flex-col rounded-[28px] border p-6 transition-colors ${
                    i === 0
                      ? "border-brand bg-brand text-white"
                      : "border-white/10 bg-white/[0.06] hover:border-brand-light/60"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[12px] ${
                        i === 0 ? "bg-white/20" : "glass"
                      }`}
                    >
                      <GitFork className="size-3.5" />
                      {repo.lang}
                    </span>
                    <ArrowUpRight className="size-5 transition-transform group-hover:rotate-45" />
                  </div>
                  <h3 className={`mt-6 font-semibold ${i === 0 ? "text-[28px]" : "text-[19px]"}`}>{repo.name}</h3>
                  <p className={`mt-2 text-[14px] leading-relaxed ${i === 0 ? "text-white/85" : "text-white/65"}`}>
                    {repo.description}
                  </p>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
