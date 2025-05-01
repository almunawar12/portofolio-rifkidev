import Hero from "@/components/hero";
import About from "@/components/about";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Certifications from "@/components/certifications";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </main>
  );
}
