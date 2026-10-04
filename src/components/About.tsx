import { profile, stats } from "@/data/profile";
import { CountUp, FadeIn, RevealText } from "./motion";

export function About() {
  return (
    <section id="about" className="bg-mist px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-4xl">
        <RevealText
          text={profile.about}
          className="text-[24px] leading-[1.45] tracking-tight sm:text-[30px]"
        />

        <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.06}>
              <div className="flex h-full flex-col justify-between rounded-2xl bg-white p-4 shadow-[0_12px_30px_-14px_rgba(0,0,0,0.18)] ring-1 ring-transparent transition-all hover:-translate-y-1 hover:ring-accent/30">
                <p className="text-[38px] leading-none font-normal tracking-tight text-ink">
                  {stat.prefix && <span className="text-[22px] align-top text-accent">{stat.prefix}</span>}
                  <CountUp value={stat.value} />
                  {stat.suffix && <span className="text-[26px] text-accent">{stat.suffix}</span>}
                </p>
                <p className="mt-4 text-[12px] leading-snug text-neutral-600">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
