import Image from "next/image";
import { skills } from "@/data/profile";
import { FadeIn } from "./motion";

export function Stack() {
  return (
    <section id="stack" className="bg-page px-5 py-24 sm:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-[40px] leading-tight font-semibold sm:text-[48px]">
          My <span className="text-brand">Tech Stack</span>
        </h2>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <FadeIn key={group.group} delay={(i % 3) * 0.08}>
              <div className="h-full rounded-[28px] bg-mist p-7">
                <h3 className="flex items-center gap-2 text-[18px] font-semibold">
                  <span className="size-2 rounded-full bg-brand" />
                  {group.group}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item.name}
                      className="flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-[14px] text-night transition-transform hover:-translate-y-0.5"
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
