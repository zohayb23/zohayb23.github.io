import { Quote } from "lucide-react";
import { testimonials } from "@/data/profile";
import { FadeIn } from "./motion";

export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-[40px] leading-tight font-semibold sm:text-[48px]">
          What People <span className="text-brand">Say</span>
        </h2>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={(i % 3) * 0.08}>
              <figure className="flex h-full flex-col rounded-[32px] bg-mist p-8">
                <Quote className="size-8 fill-brand text-brand" aria-hidden="true" />
                <blockquote className="mt-5 flex-1 text-[17px] leading-relaxed text-body">{t.quote}</blockquote>
                <figcaption className="mt-6 border-t border-ink/10 pt-5">
                  <p className="text-[17px] font-semibold">{t.name}</p>
                  <p className="text-[14px] text-muted">
                    {t.title}, {t.company}
                  </p>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
