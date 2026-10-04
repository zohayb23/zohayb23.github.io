import { CircuitBoard, Cpu, Layers, ShieldCheck, Sparkles, Workflow, type LucideIcon } from "lucide-react";
import { expertise } from "@/data/profile";
import { FadeIn } from "./motion";

const icons: Record<string, LucideIcon> = {
  cpu: Cpu,
  workflow: Workflow,
  shield: ShieldCheck,
  circuit: CircuitBoard,
  sparkles: Sparkles,
  layers: Layers,
};

export function Expertise() {
  return (
    <section id="expertise" className="dark-texture relative -mt-1 rounded-t-[48px] px-5 py-20 text-white sm:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <h2 className="text-[40px] leading-tight font-medium sm:text-[48px]">
            My <span className="text-brand-light">Expertise</span>
          </h2>
          <p className="text-[17px] leading-relaxed text-white/80">
            I turn slow, manual, and fragile engineering workflows into fast, automated, and observable systems, from
            bare-metal AI accelerators to policy-as-code.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <FadeIn key={item.title} delay={(i % 3) * 0.08}>
                <article className="group relative h-full overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.06] p-7 transition-colors hover:border-brand-light/60">
                  <div className="glass inline-block rounded-full px-5 py-2 text-[18px] font-medium">{item.title}</div>
                  <p className="mt-6 text-[15px] leading-relaxed text-white/75">{item.body}</p>
                  <Icon
                    className="pointer-events-none absolute -right-4 -bottom-4 size-32 text-white/[0.05] transition-colors group-hover:text-brand-light/25"
                    strokeWidth={1.2}
                  />
                  <span className="mt-8 grid size-12 place-items-center rounded-full bg-brand text-white shadow-[0_10px_30px_-8px_var(--color-brand-glow)]">
                    <Icon className="size-5" />
                  </span>
                </article>
              </FadeIn>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center gap-2" aria-hidden="true">
          <span className="h-2.5 w-10 rounded-full bg-brand" />
          <span className="size-2.5 rounded-full bg-white/30" />
          <span className="size-2.5 rounded-full bg-white/30" />
        </div>
      </div>
    </section>
  );
}
