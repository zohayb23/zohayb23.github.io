import Image from "next/image";
import { Download, Mail } from "lucide-react";
import { builtAt, profile } from "@/data/profile";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { FadeIn } from "./motion";

export function BuiltAt() {
  return (
    <section className="bg-mist px-5 pt-24 sm:px-8 md:pt-28">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-[22px] font-medium tracking-tight">
          Where I&apos;ve <span className="text-neutral-400">Built & Learned</span>
        </h2>
        <FadeIn>
          <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
            {builtAt.map((org) => (
              <li key={org.name} className="opacity-60 grayscale transition-opacity hover:opacity-100">
                {org.logo ? (
                  <Image src={org.logo} alt={org.name} width={80} height={32} className="h-7 w-auto brightness-0" />
                ) : (
                  <span className="text-[20px] font-semibold tracking-tight text-neutral-800">{org.name}</span>
                )}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}

export function Contact({ hasResume }: { hasResume: boolean }) {
  const links = [
    { href: `mailto:${profile.email}`, label: profile.email, icon: Mail },
    { href: profile.linkedin, label: "LinkedIn", icon: LinkedInIcon },
    { href: profile.github, label: "GitHub", icon: GitHubIcon },
    ...(hasResume ? [{ href: "/resume.pdf", label: "Resume", icon: Download }] : []),
  ];

  return (
    <section id="contact" className="bg-mist px-5 pt-28 pb-10 sm:px-8 md:pt-36">
      <div className="mx-auto max-w-3xl text-center">
        <FadeIn>
          <h2 className="text-[34px] leading-tight font-semibold tracking-tight sm:text-[46px]">
            <span className="text-neutral-400">Let&apos;s</span> Build <span className="text-neutral-400">Something</span>{" "}
            <span className="text-accent">Extraordinary.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-neutral-600">
            Open to full-time software engineering roles, collaborations, and conversations about AI infrastructure,
            DevOps, and automation. Let&apos;s explore how we can create impact together.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {links.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                download={href.endsWith(".pdf") || undefined}
                className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-[13px] font-medium text-neutral-800 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.3)] transition-all hover:-translate-y-0.5 hover:text-accent"
              >
                <Icon className="size-4" />
                {label}
              </a>
            ))}
          </div>
        </FadeIn>
      </div>

      <footer className="mx-auto mt-28 flex max-w-7xl flex-col items-center justify-between gap-2 border-t border-black/[0.06] pt-8 text-[12px] text-neutral-500 sm:flex-row sm:pr-16">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p>{profile.location}</p>
      </footer>
    </section>
  );
}
