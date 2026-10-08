import Image from "next/image";
import { profile, skills, stats } from "@/data/profile";
import { CountUp, FadeIn, RevealText } from "./motion";

export function About() {
  return (
    <section id="about" className="px-3 sm:px-5">
      <div className="mx-auto max-w-7xl rounded-[48px] bg-mist px-5 py-20 sm:px-10 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeIn className="relative mx-auto mt-10 w-full max-w-[420px] lg:mt-0">
            <div className="relative aspect-square">
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-brand-light to-brand" />
              <div className="absolute inset-5 rounded-full border-2 border-dashed border-white/40" />
              <div className="absolute inset-x-0 bottom-0 h-[112%] overflow-hidden rounded-b-full">
                <Image
                  src="/headshot.webp"
                  alt={`${profile.name} in a white shirt`}
                  width={760}
                  height={920}
                  className="absolute bottom-0 left-1/2 h-auto w-[90%] max-w-none -translate-x-1/2"
                />
              </div>
            </div>
          </FadeIn>

          <div>
            <h2 className="text-[40px] leading-tight font-semibold sm:text-[48px]">
              Why <span className="text-brand">Hire me</span>?
            </h2>
            <RevealText
              text={profile.about}
              className="mt-6 text-[19px] leading-relaxed tracking-tight sm:text-[21px]"
            />

            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-[34px] leading-none font-semibold text-ink">
                    {stat.prefix}
                    <CountUp value={stat.value} />
                    <span className="text-brand">{stat.suffix}</span>
                  </dd>
                  <p aria-hidden="true" className="mt-2 text-[14px] leading-snug text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </dl>

            <a
              href={`mailto:${profile.email}`}
              className="mt-10 inline-flex rounded-3xl border border-ink px-10 py-4 text-[20px] font-semibold text-ink transition-colors hover:border-brand hover:bg-brand hover:text-white"
            >
              Hire me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Marquee() {
  const items = skills.flatMap((group) => group.items.map((item) => item.name));
  const row = [...items, ...items];
  return (
    <div className="relative my-24 overflow-hidden py-8" aria-label="Technologies I work with">
      <div className="absolute inset-x-[-5%] top-1/2 h-20 -translate-y-1/2 rotate-[2deg] bg-ink" aria-hidden="true" />
      <div className="relative -rotate-[1.5deg] bg-brand py-5">
        <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
          {row.map((name, i) => (
            <span key={`${name}-${i}`} className="flex items-center gap-10 text-[26px] font-semibold text-white sm:text-[34px]">
              {name}
              <svg viewBox="0 0 24 24" className="size-7 fill-white" aria-hidden="true">
                <path d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0Z" />
              </svg>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
