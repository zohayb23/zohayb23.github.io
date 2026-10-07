import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { BackToTop } from "@/components/BackToTop";
import { Footer } from "@/components/Contact";
import { FadeIn } from "@/components/motion";
import { caseStudies, profile } from "@/data/profile";

export const dynamicParams = false;

const hasResume = existsSync(join(process.cwd(), "public/resume.pdf"));

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

function findStudy(slug: string) {
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();
  return study;
}

export async function generateMetadata(props: PageProps<"/work/[slug]">): Promise<Metadata> {
  const study = findStudy((await props.params).slug);
  const title = `${study.title} | ${profile.name}`;
  const images = [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: `${profile.name}, Software Engineer` }];
  return {
    title,
    description: study.summary,
    openGraph: { title, description: study.summary, type: "article", images },
    twitter: { card: "summary_large_image", title, description: study.summary, images },
  };
}

export default async function CaseStudyPage(props: PageProps<"/work/[slug]">) {
  const study = findStudy((await props.params).slug);
  const index = caseStudies.indexOf(study);
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <>
      <header id="top" className="fixed inset-x-0 top-4 z-50 px-4">
        <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full bg-ink p-2 text-white shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)]">
          <Link
            href="/#projects"
            className="flex items-center gap-2 rounded-full px-4 py-2.5 text-[15px] transition-colors hover:bg-white/10"
          >
            <ArrowLeft className="size-4" /> Portfolio
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <span className="grid size-9 place-items-center rounded-full bg-brand text-[13px] font-bold">ZB</span>
            <span className="hidden text-[13px] font-bold tracking-[0.2em] uppercase sm:inline">{profile.firstName}</span>
          </Link>
          <Link
            href="/#contact"
            className="rounded-full bg-brand px-5 py-2.5 text-[15px] font-medium transition-colors hover:bg-brand-deep"
          >
            Contact
          </Link>
        </nav>
      </header>

      <main id="main">
        <section className="px-5 pt-36 pb-16 sm:px-8 md:pt-44">
          <div className="mx-auto max-w-4xl">
            <p className="flex flex-wrap items-center gap-2 text-[14px] font-medium">
              <span className="rounded-full bg-brand-tint px-3 py-1 text-brand">{study.category}</span>
              <span className="text-muted">Case study</span>
            </p>
            <h1 className="mt-5 text-[40px] leading-[1.05] font-semibold tracking-tight sm:text-[60px]">{study.title}</h1>
            <p className="mt-6 max-w-3xl text-[19px] leading-relaxed text-[#475467] sm:text-[21px]">{study.summary}</p>

            <dl className="mt-10 grid grid-cols-1 gap-6 border-y border-ink/10 py-6 text-[15px] sm:grid-cols-3">
              <div>
                <dt className="text-muted">Company</dt>
                <dd className="mt-1 font-semibold">{study.company}</dd>
              </div>
              <div>
                <dt className="text-muted">Role</dt>
                <dd className="mt-1 font-semibold">{study.role}</dd>
              </div>
              <div>
                <dt className="text-muted">Timeline</dt>
                <dd className="mt-1 font-semibold">{study.period}</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="px-3 sm:px-5" aria-labelledby="impact">
          <div className="dark-texture mx-auto max-w-7xl rounded-[48px] px-5 py-14 text-white sm:px-10">
            <h2 id="impact" className="sr-only">
              Impact
            </h2>
            <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-3">
              {study.metrics.map((metric) => (
                <div key={metric.label} className="rounded-[28px] border border-white/10 bg-white/[0.06] p-7">
                  <p className="text-[44px] leading-none font-bold text-brand-light">{metric.value}</p>
                  <p className="mt-3 text-[15px] text-white/75">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-4xl space-y-20">
            <FadeIn>
              <h2 className="text-[32px] font-semibold sm:text-[40px]">
                The <span className="text-brand">problem</span>
              </h2>
              <div className="mt-6 space-y-4 text-[18px] leading-relaxed text-[#475467]">
                {study.problem.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </FadeIn>

            <FadeIn>
              <h2 className="text-[32px] font-semibold sm:text-[40px]">
                What I <span className="text-brand">built</span>
              </h2>
              <ol className="mt-8 grid gap-5 sm:grid-cols-2">
                {study.approach.map((step, i) => (
                  <li key={step.title} className="rounded-[28px] bg-mist p-7">
                    <span className="grid size-10 place-items-center rounded-full bg-brand text-[15px] font-bold text-white">
                      {i + 1}
                    </span>
                    <h3 className="mt-5 text-[20px] font-semibold">{step.title}</h3>
                    <p className="mt-2 text-[16px] leading-relaxed text-[#475467]">{step.body}</p>
                  </li>
                ))}
              </ol>
            </FadeIn>

            <FadeIn>
              <h2 className="text-[32px] font-semibold sm:text-[40px]">
                How it <span className="text-brand">flows</span>
              </h2>
              <ol className="mt-8 grid gap-3 md:grid-cols-4">
                {study.flow.map((stage, i) => (
                  <li key={stage.label} className="relative">
                    <div className="h-full rounded-[24px] border-2 border-brand/15 bg-white p-5">
                      <p className="font-mono text-[12px] text-brand">0{i + 1}</p>
                      <p className="mt-2 text-[18px] font-semibold">{stage.label}</p>
                      <p className="mt-1 text-[14px] leading-snug text-muted">{stage.detail}</p>
                    </div>
                    {i < study.flow.length - 1 && (
                      <ArrowRight
                        aria-hidden="true"
                        className="absolute top-1/2 -right-3 z-10 hidden size-5 -translate-y-1/2 rounded-full bg-white text-brand md:block"
                      />
                    )}
                  </li>
                ))}
              </ol>
            </FadeIn>

            <FadeIn>
              <h2 className="text-[32px] font-semibold sm:text-[40px]">
                The <span className="text-brand">results</span>
              </h2>
              <ul className="mt-6 space-y-4">
                {study.results.map((result) => (
                  <li key={result} className="flex gap-3 text-[18px] leading-relaxed text-[#344054]">
                    <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-brand-tint text-brand">
                      <Check className="size-4" />
                    </span>
                    {result}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn>
              <h2 className="text-[24px] font-semibold">Stack</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {study.stack.map((tool) => (
                  <li key={tool} className="rounded-full bg-mist px-4 py-2 text-[14px]">
                    {tool}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </section>

        <section className="px-5 pb-24 sm:px-8">
          <Link
            href={`/work/${next.slug}`}
            className="group mx-auto flex max-w-4xl items-center justify-between gap-6 rounded-[36px] bg-brand-soft p-8 transition-transform hover:-translate-y-1 sm:p-10"
          >
            <div>
              <p className="text-[14px] font-medium text-brand-deep">Next case study</p>
              <p className="mt-2 text-[26px] leading-tight font-semibold sm:text-[32px]">{next.title}</p>
            </div>
            <span className="grid size-14 shrink-0 place-items-center rounded-full bg-ink text-white transition-transform group-hover:translate-x-1">
              <ArrowRight className="size-6" />
            </span>
          </Link>
        </section>
      </main>

      <Footer hasResume={hasResume} />
      <BackToTop />
    </>
  );
}
