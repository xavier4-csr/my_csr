// Cyber-purple hero. All copy comes from src/content/site.ts.
import { motion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRight, Mail, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { site } from "@/content/site";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function useTyping(words: readonly string[], typeMs = 90, holdMs = 1400) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), holdMs);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setI((n) => n + 1);
      return;
    }
    const t = setTimeout(() => {
      setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, deleting ? typeMs / 2 : typeMs);
    return () => clearTimeout(t);
  }, [text, deleting, i, words, typeMs, holdMs]);

  return text;
}

export function Hero() {
  const role = useTyping(site.profile.roles);
  const longestRole = site.profile.roles.reduce((a, b) => (a.length > b.length ? a : b), "");
  const typingMinWidth = `${longestRole.length + 4}ch`;

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-grid" />
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-32 w-[28rem] h-[28rem] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, oklch(0.65 0.22 295 / 0.35), transparent 70%)" }} />
        <div className="absolute bottom-0 -right-32 w-[28rem] h-[28rem] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, oklch(0.55 0.22 240 / 0.3), transparent 70%)" }} />
      </div>

      <motion.div variants={container} initial="hidden" animate="show" className="max-w-6xl mx-auto px-6 w-full py-16">
        {/* Name + badge on top (full width) */}
        <motion.div variants={item} className="mb-10 text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">{site.profile.fullName}</h2>
          <span className="inline-flex items-center gap-2 mt-3 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs text-primary backdrop-blur-sm">
            <Sparkles className="w-3 h-3" />
            {site.profile.badge}
          </span>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center">
          {/* Left column: text content */}
          <div className="order-2 md:order-1 min-w-0">
            <motion.h1 variants={item} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              I'm a <br className="sm:hidden" />
              <span className="inline-block text-left align-bottom" style={{ minWidth: typingMinWidth }}>
                <span className="text-gradient-brand">{role || "\u00A0"}</span>
                <span className="caret" />
              </span>
            </motion.h1>

            <motion.p variants={item} className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              {site.profile.tagline}
            </motion.p>

            <motion.div variants={item} className="mt-6 flex flex-wrap gap-2">
              {site.profile.tech.map((t) => (
                <span key={t} className="rounded-full border border-border bg-card/60 backdrop-blur px-4 py-1.5 text-xs sm:text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition">
                  {t}
                </span>
              ))}
            </motion.div>

            <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-card border border-border px-5 py-3 text-sm font-medium hover:border-primary/60 hover:glow-brand transition-all">
                Projects <ArrowUpRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-card border border-border px-5 py-3 text-sm font-medium hover:border-primary/60 transition-all">
                Contact <Mail className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div variants={item} className="mt-10 flex gap-3 justify-center md:justify-start">
              {[
                { href: site.socials.github, label: "GitHub", Icon: GithubIcon },
                { href: site.socials.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
                { href: `mailto:${site.contact.email}`, label: "Email", Icon: Mail },
              ].map(({ href, label, Icon }) => (
                <a key={label} href={href} aria-label={label}
                  className="grid place-items-center w-11 h-11 rounded-xl border border-border bg-card/60 text-muted-foreground hover:text-primary hover:border-primary/60 hover:-translate-y-0.5 transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right column: profile picture */}
          <motion.div variants={item} className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full p-[3px] bg-gradient-to-br from-primary to-purple-500 glow-brand">
              <div className="w-full h-full rounded-full bg-background grid place-items-center overflow-hidden">
                {site.profile.avatarUrl ? (
                  <img src={site.profile.avatarUrl} alt={site.profile.fullName} className="w-full h-full object-cover object-center rounded-full" />
                ) : (
                  <span className="text-6xl sm:text-7xl md:text-8xl font-bold text-gradient-brand">
                    {site.profile.initials}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
