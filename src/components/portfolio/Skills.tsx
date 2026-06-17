import { motion } from "framer-motion";
import { Section } from "./Section";
import { site } from "@/content/site";

export function Skills() {
  return (
    <Section id="skills" className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">
        Skills<span className="text-gradient-brand">.</span>
      </h2>
      <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
        {site.skills.map((skill) => (
          <div key={skill.name} className="rounded-xl border border-border bg-card/40 backdrop-blur px-5 py-4">
            <div className="flex justify-between mb-2 text-sm">
              <span className="font-medium">{skill.name}</span>
              <span className="text-primary">{skill.level}%</span>
            </div>
            <div className="h-2 rounded-full bg-muted overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: "var(--gradient-brand)" }}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
