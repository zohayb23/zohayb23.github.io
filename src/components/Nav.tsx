"use client";

import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

const left = [
  { id: "top", label: "Home" },
  { id: "expertise", label: "Expertise" },
  { id: "journey", label: "Resume" },
];
const right = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
const all = [...left, ...right];

function useActiveSection() {
  const [active, setActive] = useState("top");
  useEffect(() => {
    const sections = all
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.25, 0.5] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);
  return active;
}

function NavLink({ id, label, active }: { id: string; label: string; active: boolean }) {
  return (
    <a
      href={`#${id}`}
      className={`relative rounded-full px-6 py-3 text-[15px] transition-colors lg:px-8 ${
        active ? "text-white" : "text-white/85 hover:text-white"
      }`}
    >
      {active && (
        <motion.span
          layoutId="nav-pill"
          className="absolute inset-0 rounded-full bg-brand"
          transition={{ type: "spring", stiffness: 380, damping: 32 }}
        />
      )}
      <span className="relative">{label}</span>
    </a>
  );
}

export function Nav() {
  const active = useActiveSection();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full bg-ink p-2 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)]">
        <div className="hidden flex-1 items-center md:flex">
          {left.map((l) => (
            <NavLink key={l.id} {...l} active={active === l.id} />
          ))}
        </div>

        <a href="#top" className="flex items-center gap-2 px-4 md:flex-col md:gap-0.5">
          <span className="grid size-9 place-items-center rounded-full bg-brand text-[13px] font-bold text-white">
            ZB
          </span>
          <span className="text-[14px] font-bold tracking-[0.18em] text-white uppercase md:text-[13px]">
            {profile.firstName}
          </span>
        </a>

        <div className="hidden flex-1 items-center justify-end md:flex">
          {right.map((l) => (
            <NavLink key={l.id} {...l} active={active === l.id} />
          ))}
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="grid size-11 place-items-center rounded-full bg-brand text-white md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-3xl bg-ink p-2 md:hidden"
          >
            {all.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded-full px-5 py-3 text-[15px] ${
                    active === l.id ? "bg-brand text-white" : "text-white/85"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
