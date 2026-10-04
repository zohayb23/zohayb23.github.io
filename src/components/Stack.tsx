import Image from "next/image";
import { skills } from "@/data/profile";
import { FadeIn } from "./motion";

export function Stack() {
  return (
    <section id="stack" className="bg-white px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-[13px] text-neutral-500">Tools of the Trade</p>
        <h2 className="mt-2 text-center text-[28px] font-medium tracking-tight sm:text-[34px]">
          Tech <span className="text-neutral-400">Stack</span>
        </h2>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {skills.map((group, i) => (
            <FadeIn key={group.group} delay={(i % 2) * 0.08}>
              <div className="h-full rounded-3xl border border-black/[0.06] bg-mist/60 p-6">
                <h3 className="text-[12px] font-medium tracking-wide text-neutral-500 uppercase">{group.group}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item.name}
                      className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-[13px] text-neutral-800 shadow-[0_4px_12px_-6px_rgba(0,0,0,0.2)] transition-transform hover:-translate-y-0.5"
                    >
                      {item.icon && (
                        <Image src={`/stack/${item.icon}.svg`} alt="" width={16} height={16} className="size-4" />
                      )}
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
