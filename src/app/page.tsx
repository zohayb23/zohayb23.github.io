import { existsSync } from "node:fs";
import { join } from "node:path";
import { About, Marquee } from "@/components/About";
import { BackToTop } from "@/components/BackToTop";
import { BuiltAt, Contact, Footer } from "@/components/Contact";
import { Expertise } from "@/components/Expertise";
import { FeaturedWork } from "@/components/FeaturedWork";
import { Hero } from "@/components/Hero";
import { Journey } from "@/components/Journey";
import { Nav } from "@/components/Nav";
import { OpenSource } from "@/components/OpenSource";
import { Projects } from "@/components/Projects";
import { Stack } from "@/components/Stack";
import { Testimonials } from "@/components/Testimonials";
import { education, profile, skills } from "@/data/profile";
import { siteUrl } from "@/lib/site";

const hasResume = existsSync(join(process.cwd(), "public/resume.pdf"));

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: `${siteUrl}/`,
  image: `${siteUrl}/headshot.png`,
  jobTitle: profile.role,
  description: profile.heroBlurb,
  email: `mailto:${profile.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Austin", addressRegion: "TX", addressCountry: "US" },
  sameAs: [profile.linkedin, profile.github],
  alumniOf: education.map((edu) => ({ "@type": "CollegeOrUniversity", name: edu.school })),
  knowsAbout: skills.flatMap((group) => group.items.map((item) => item.name)),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
      />
      <Nav />
      <main id="main">
        <Hero hasResume={hasResume} />
        <Expertise />
        <Journey />
        <About />
        <Marquee />
        <FeaturedWork />
        <Projects />
        <Testimonials />
        <OpenSource />
        <Stack />
        <BuiltAt />
        <Contact />
      </main>
      <Footer hasResume={hasResume} />
      <BackToTop />
    </>
  );
}
