import { CircuitBoard, Cpu, Layers, ShieldCheck, Sparkles, Workflow, type LucideIcon } from "lucide-react";
import { expertise } from "@/data/profile";
import { FadeIn, RevealText } from "./motion";

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
    <section id="expertise" className="bg-mist px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-5xl">
        <p className="text-[13px] text-neutral-500">Expertise</p>
        <RevealText
          text="Turning **slow, manual, and fragile** workflows into **fast, automated, and observable** systems."
          className="mt-3 max-w-3xl text-[24px] leading-[1.35] tracking-tight sm:text-[30px]"
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <FadeIn key={item.title} delay={(i % 3) * 0.08}>
                <div className="group h-full rounded-[28px] bg-neutral-50 p-7 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-white">
                  <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-b from-neutral-300 to-neutral-400 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] transition-colors group-hover:from-accent group-hover:to-accent-deep">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-8 text-[22px] leading-tight font-semibold tracking-tight text-neutral-700 group-hover:text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-relaxed text-neutral-600">{item.body}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
