import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Technology } from "@/components/portfolio/Technology";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main id="main-content" className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Technology />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
