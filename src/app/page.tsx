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

const hasResume = existsSync(join(process.cwd(), "public/resume.pdf"));

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero hasResume={hasResume} />
        <Expertise />
        <Journey />
        <About />
        <Marquee />
        <FeaturedWork />
        <Projects />
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
