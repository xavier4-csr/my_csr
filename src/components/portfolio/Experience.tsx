// Experience section — timeline of roles read from site.experience.
import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase } from "lucide-react";
import { Section } from "./Section";
import { site } from "@/content/site";

export function Experience() {
  return (
    <Section id="experience" className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">
        Experience<span className="text-gradient-brand">.</span>
      </h2>
      <div className="relative border-l border-border pl-6 space-y-8">
        {site.experience.map((item, i) => (
          <motion.div
            key={item.role}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative rounded-2xl border border-border bg-card/40 backdrop-blur p-6 hover:border-primary/60 hover:glow-brand transition-all"
          >
            <span className="absolute -left-[34px] top-6 grid place-items-center w-7 h-7 rounded-full border border-primary/50 bg-background text-primary">
              <Briefcase className="w-3.5 h-3.5" />
            </span>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold text-lg">{item.role}</h3>
              <span className="text-xs text-muted-foreground">{item.period}</span>
            </div>
            <p className="text-sm text-primary mt-1">{item.org}</p>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            {item.link && item.link !== "#" && (
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
              >
                View project <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
