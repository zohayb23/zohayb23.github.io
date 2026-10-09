"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BadgeCheck, Download, Mail, MapPin } from "lucide-react";
import { useState, type FormEvent } from "react";
import { builtAt, profile } from "@/data/profile";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { FadeIn } from "./motion";

export function BuiltAt() {
  return (
    <section className="px-5 pb-8 sm:px-8">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-[22px] font-semibold">
          Where I&apos;ve <span className="text-brand">Built & Learned</span>
        </h2>
        <FadeIn>
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
            {builtAt.map((org) => (
              <li key={org.name} className="opacity-50 transition-opacity hover:opacity-100">
                {org.logo ? (
                  <Image src={org.logo} alt={org.name} width={80} height={32} className="h-7 w-auto brightness-0 dark:invert" />
                ) : (
                  <span className="text-[22px] font-bold tracking-tight text-ink">{org.name}</span>
                )}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}

const highlights = ["Open to full-time SWE roles", "Based in Austin, Texas", "M.S. Applied AI in progress"];

const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

type Status = "idle" | "sending" | "sent" | "error";

const statusText: Record<Exclude<Status, "idle">, string> = {
  sending: "Sending…",
  sent: "Thanks! Your message is on its way. I'll reply soon.",
  error: "Something went wrong. Please email me directly instead.",
};

function openMailClient(email: string, message: string) {
  const subject = encodeURIComponent("Let's discuss a role or project");
  const body = encodeURIComponent(
    `Hi ${profile.firstName},\n\n${message ? `${message}\n\n` : ""}You can reach me at ${email}.\n`,
  );
  window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
}

export function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!formspreeId) {
      openMailClient(email, message);
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, message: message || "(no message)", _subject: "New message from your website" }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="px-5 py-24 sm:px-8 md:py-28">
      <FadeIn className="mx-auto max-w-3xl text-center">
        <h2 className="text-[40px] leading-tight font-semibold sm:text-[52px]">
          Have an Awesome Project Idea? <span className="text-brand">Let&apos;s Discuss</span>
        </h2>

        <form onSubmit={onSubmit} className="mx-auto mt-10 max-w-2xl space-y-3">
          <label htmlFor="contact-message" className="sr-only">
            Message (optional)
          </label>
          <textarea
            id="contact-message"
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="What would you like to talk about? (optional)"
            className="block w-full resize-none rounded-[28px] border border-brand/30 bg-surface px-6 py-4 text-left text-[16px] outline-none placeholder:text-muted focus-visible:border-brand"
          />
          <div className="flex items-center gap-2 rounded-full border border-brand/30 bg-surface p-2 shadow-[0_20px_50px_-30px_var(--color-brand-glow)] focus-within:border-brand">
            <span className="ml-1 grid size-11 shrink-0 place-items-center rounded-full bg-brand-tint text-brand">
              <Mail className="size-5" />
            </span>
            <label htmlFor="contact-email" className="sr-only">
              Your email address
            </label>
            <input
              id="contact-email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email Address"
              className="min-w-0 flex-1 bg-transparent px-2 text-[16px] outline-none placeholder:text-muted"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="shrink-0 rounded-full bg-brand px-7 py-3.5 text-[16px] font-semibold text-white transition-transform hover:-translate-y-0.5 disabled:opacity-60 sm:px-10"
            >
              Send
            </button>
          </div>
          <p
            role="status"
            className={`min-h-6 text-[15px] ${status === "error" ? "text-red-700 dark:text-red-400" : "text-emerald-700 dark:text-emerald-400"}`}
          >
            {status === "idle" ? "" : statusText[status]}
          </p>
        </form>

        <ul className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3">
          {highlights.map((item) => (
            <li key={item} className="flex items-center gap-2 text-[15px] text-ink/80">
              <BadgeCheck className="size-5 text-brand" />
              {item}
            </li>
          ))}
        </ul>
      </FadeIn>
    </section>
  );
}

const footerNav = [
  { href: "/#top", label: "Home" },
  { href: "/#expertise", label: "Expertise" },
  { href: "/#journey", label: "Experience" },
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#open-source", label: "Open Source" },
];

export function Footer({ hasResume }: { hasResume: boolean }) {
  const socials = [
    { href: profile.linkedin, label: "LinkedIn", icon: LinkedInIcon },
    { href: profile.github, label: "GitHub", icon: GitHubIcon },
    { href: `mailto:${profile.email}`, label: "Email", icon: Mail },
  ];

  return (
    <footer className="rounded-t-[48px] bg-ink-soft px-5 pt-14 pb-8 text-white sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-6 border-b border-white/15 pb-10 md:flex-row md:items-center">
          <p className="text-[36px] leading-tight font-semibold sm:text-[48px]">Let&apos;s Connect there</p>
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-[18px] font-semibold transition-transform hover:-translate-y-0.5"
          >
            Hire me <ArrowUpRight className="size-5" />
          </a>
        </div>

        <div className="grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="grid size-10 place-items-center rounded-full bg-brand text-[14px] font-bold">ZB</span>
              <span className="text-[22px] font-bold tracking-wide uppercase">{profile.firstName}</span>
            </Link>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-white/70">{profile.heroBlurb}</p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="grid size-11 place-items-center rounded-full bg-white/10 transition-colors hover:bg-brand"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[18px] font-semibold text-brand-light">Navigation</h3>
            <ul className="mt-5 grid grid-cols-2 gap-3 text-[15px] text-white/75 md:grid-cols-1">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-brand-light">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[18px] font-semibold text-brand-light">Contact</h3>
            <ul className="mt-5 space-y-3 text-[15px] text-white/75">
              <li>
                <a href={`mailto:${profile.email}`} className="flex items-center gap-2 transition-colors hover:text-brand-light">
                  <Mail className="size-4" /> {profile.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="size-4" /> {profile.location}
              </li>
              {hasResume && (
                <li>
                  <a href="/resume.pdf" download className="flex items-center gap-2 transition-colors hover:text-brand-light">
                    <Download className="size-4" /> Download resume
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-2 border-t border-white/15 pt-6 text-[13px] text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p>Built with Next.js · Deployed on GitHub Pages</p>
        </div>
      </div>
    </footer>
  );
}
