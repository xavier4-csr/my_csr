// Sticky navbar: highlights the active section, blurs background on scroll.
import { useEffect, useState } from "react";
import { site } from "@/content/site";


const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#technology", label: "Tech" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(
      (el): el is Element => Boolean(el),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-background/70 border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="font-bold text-lg tracking-tight text-gradient-brand">
          {site.profile.shortName}
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {LINKS.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative py-1 transition-colors ${
                    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute left-0 -bottom-0.5 h-0.5 rounded-full transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                    style={{ background: "var(--gradient-brand)" }}
                  />
                </a>
              </li>
            );
          })}
        </ul>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-xl border border-primary/50 bg-primary/10 text-primary px-4 py-2 text-sm font-medium hover:bg-primary/20 hover:glow-brand transition"
        >
          Hire me
        </a>
      </nav>
    </header>
  );
}
