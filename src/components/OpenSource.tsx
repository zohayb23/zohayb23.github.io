import { ArrowUpRight, GitFork } from "lucide-react";
import { openSource } from "@/data/profile";
import { FadeIn, RevealText } from "./motion";

export function OpenSource() {
  return (
    <section id="open-source" className="bg-night px-5 py-24 text-white sm:px-8 md:py-32">
      <div className="mx-auto max-w-5xl">
        <p className="text-[13px] text-neutral-400">Open Source</p>
        <RevealText
          tone="dark"
          text="Hands-on in the **OpenSSF security ecosystem:** Privateer scanners, **Gemara** governance workflows, and **OSPS Baseline** assessments running in GitHub-native CI."
          className="mt-3 max-w-3xl text-[22px] leading-[1.4] tracking-tight sm:text-[26px]"
        />

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {openSource.map((repo, i) => (
            <FadeIn key={repo.name} delay={(i % 3) * 0.06}>
              <a
                href={repo.repo}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-white/[0.06] bg-card-dark p-5 transition-colors hover:border-accent-bright/40"
              >
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 font-mono text-[11px] text-neutral-500">
                    <GitFork className="size-3.5" />
                    {repo.lang}
                  </span>
                  <ArrowUpRight className="size-4 text-neutral-600 transition-colors group-hover:text-accent-bright" />
                </div>
                <h3 className="mt-4 text-[15px] font-medium">{repo.name}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-neutral-400">{repo.description}</p>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
