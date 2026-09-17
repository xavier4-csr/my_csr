import { motion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRight, Download, Mail, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { site } from "@/content/site";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

function useTyping(words: readonly string[], typeMs = 90, holdMs = 1400) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    if (!deleting && text === current) {
      const timer = setTimeout(() => setDeleting(true), holdMs);
      return () => clearTimeout(timer);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setI((value) => value + 1);
      return;
    }
    const timer = setTimeout(
      () => {
        setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
      },
      deleting ? typeMs / 2 : typeMs,
    );
    return () => clearTimeout(timer);
  }, [text, deleting, i, words, typeMs, holdMs]);

  return text;
}

export function Hero() {
  const role = useTyping(site.profile.roles);
  const longestRole = site.profile.roles.reduce(
    (longest, current) => (longest.length > current.length ? longest : current),
    "",
  );
  const typingMinWidth = `${longestRole.length + 4}ch`;

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-grid" />
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div
          className="absolute -left-32 top-1/4 h-[28rem] w-[28rem] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, oklch(0.65 0.22 295 / 0.35), transparent 70%)",
          }}
        />
        <div
          className="absolute -right-32 bottom-0 h-[28rem] w-[28rem] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, oklch(0.55 0.22 240 / 0.3), transparent 70%)",
          }}
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-6xl px-6 py-24"
      >
        <div className="mb-10 text-center sm:text-left">
          <motion.p
            variants={item}
            className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary"
          >
            {site.profile.fullName}
          </motion.p>
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs text-primary backdrop-blur-sm"
          >
            <Sparkles className="h-3 w-3" aria-hidden="true" />
            {site.profile.badge}
          </motion.span>
        </div>

        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] lg:gap-16">
          <div className="order-2 min-w-0 md:order-1">
            <motion.h1
              id="hero-title"
              variants={item}
              className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              I build useful
              <br />
              <span
                className="inline-block text-left align-bottom"
                style={{ minWidth: typingMinWidth }}
              >
                <span className="text-gradient-brand">{role || longestRole}</span>
                <span className="caret" aria-hidden="true" />
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {site.profile.tagline}
            </motion.p>

            <motion.div variants={item} className="mt-6 flex flex-wrap gap-2">
              {site.profile.tech.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur sm:text-sm"
                >
                  {technology}
                </span>
              ))}
            </motion.div>

            <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:glow-brand"
              >
                View selected work <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={site.contact.cvUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-medium transition-all hover:border-primary/60"
              >
                Download résumé <Download className="h-4 w-4" aria-hidden="true" />
              </a>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-10 flex justify-center gap-3 md:justify-start"
              aria-label="Social links"
            >
              {[
                { href: site.socials.github, label: "GitHub", Icon: GithubIcon },
                { href: site.socials.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
                { href: `mailto:${site.contact.email}`, label: "Email", Icon: Mail },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-card/60 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={item}
            className="order-1 flex justify-center md:order-2 md:justify-end"
          >
            <div className="relative h-56 w-56 rounded-full bg-gradient-to-br from-primary to-purple-500 p-[3px] glow-brand sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-96 lg:w-96">
              <div className="grid h-full w-full place-items-center overflow-hidden rounded-full bg-background">
                {site.profile.avatarUrl ? (
                  <img
                    src={site.profile.avatarUrl}
                    alt={`${site.profile.fullName} profile portrait`}
                    width="738"
                    height="727"
                    fetchPriority="high"
                    className="h-full w-full rounded-full object-cover object-center"
                  />
                ) : (
                  <span className="text-6xl font-bold text-gradient-brand sm:text-7xl md:text-8xl">
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
