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
    const sections = LINKS.map((link) => document.querySelector(link.href)).filter(
      (element): element is Element => Boolean(element),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only z-[60] rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to main content
      </a>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-border bg-background/80 shadow-sm backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <nav
          aria-label="Primary navigation"
          className="mx-auto flex max-w-6xl items-center gap-5 px-6 py-4"
        >
          <a href="#home" className="shrink-0 font-bold tracking-tight text-gradient-brand">
            {site.profile.shortName}
          </a>
          <ul className="flex min-w-0 flex-1 items-center gap-4 overflow-x-auto text-xs md:gap-7 md:text-sm">
            {LINKS.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <li key={link.href} className="shrink-0">
                  <a
                    href={link.href}
                    aria-current={isActive ? "location" : undefined}
                    className={`relative inline-block py-1 transition-colors ${
                      isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className={`absolute bottom-0 left-0 h-0.5 rounded-full transition-all duration-300 ${
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
            className="hidden shrink-0 rounded-xl border border-primary/50 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition hover:bg-primary/20 hover:glow-brand sm:inline-flex"
          >
            Hire me
          </a>
        </nav>
      </header>
    </>
  );
}
