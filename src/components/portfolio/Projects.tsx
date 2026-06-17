import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { Section } from "./Section";
import { site } from "@/content/site";

export function Projects() {
  return (
    <Section id="projects" className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">
        Projects<span className="text-gradient-brand">.</span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {site.projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group rounded-2xl border border-border bg-card/60 backdrop-blur overflow-hidden hover:-translate-y-1 hover:border-primary/60 hover:glow-brand transition-all duration-300"
          >
            <div className={`h-40 bg-gradient-to-br ${p.gradient} relative`}>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
                <a href={p.live} aria-label="Live demo" className="rounded-full bg-white/90 p-2 text-black hover:bg-white">
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a href={p.code} aria-label="Source code" className="rounded-full bg-white/90 p-2 text-black hover:bg-white">
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs rounded-full bg-muted px-2.5 py-1 text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
