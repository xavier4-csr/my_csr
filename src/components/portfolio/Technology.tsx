// Technology section — shows brand icons of tech you work with.
// Icons come from the free Simple Icons CDN, so no extra packages.
import { motion } from "framer-motion";
import { Section } from "./Section";
import { site } from "@/content/site";

export function Technology() {
  return (
    <Section id="technology" className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">
        Technology<span className="text-gradient-brand">.</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {site.technologies.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card/40 backdrop-blur p-6 hover:border-primary/60 hover:glow-brand hover:-translate-y-1 transition-all"
          >
            <img
              src={`https://cdn.simpleicons.org/${t.slug}/${t.color}`}
              alt={`${t.name} logo`}
              className="w-12 h-12 group-hover:scale-110 transition-transform"
              loading="lazy"
            />
            <span className="text-sm text-muted-foreground group-hover:text-foreground transition">
              {t.name}
            </span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
