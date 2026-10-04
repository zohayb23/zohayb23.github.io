import { featuredWork } from "@/data/profile";
import { FadeIn } from "./motion";

export function FeaturedWork() {
  return (
    <section id="work" className="bg-white px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-[13px] text-neutral-500">Bridging Hardware and Software</p>
        <h2 className="mt-2 text-center text-[28px] font-medium tracking-tight sm:text-[34px]">
          Featured <span className="text-neutral-400">Work</span>
        </h2>

        <div className="mt-16 grid items-center gap-5 md:grid-cols-3">
          {featuredWork.map((work, i) => {
            const center = i === 1;
            return (
              <FadeIn key={work.title} delay={i * 0.1}>
                <article
                  className={`flex flex-col rounded-3xl p-6 text-white shadow-[0_30px_60px_-25px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:-translate-y-1.5 ${
                    center
                      ? "bg-gradient-to-b from-accent to-accent-deep shadow-[0_30px_60px_-20px_rgba(37,99,235,0.6)] md:-translate-y-6 md:py-8 md:hover:-translate-y-8"
                      : "bg-neutral-900"
                  }`}
                >
                  <p className={`text-[11px] ${center ? "text-blue-100" : "text-neutral-400"}`}>{work.category}</p>
                  <h3 className="mt-4 text-[24px] leading-[1.15] font-medium tracking-tight">{work.title}</h3>
                  <p className={`mt-5 text-[13px] leading-relaxed ${center ? "text-blue-50/85" : "text-neutral-400"}`}>
                    {work.body}
                  </p>
                  <p className="mt-6 flex items-center gap-2 self-start rounded-full bg-white/10 px-3 py-1.5 text-[11px] text-white/90">
                    <span className={`size-1.5 shrink-0 rounded-full ${center ? "bg-white" : "bg-accent-bright"}`} />
                    {work.pill}
                  </p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
