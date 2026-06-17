import { Section } from "./Section";
import { site } from "@/content/site";

export function About() {
  return (
    <Section id="about" className="max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-10 items-start">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          {site.about.heading}<span className="text-gradient-brand">.</span>
        </h2>
        <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
          {site.about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <dl className="mt-6 grid sm:grid-cols-3 gap-4 pt-6 border-t border-border">
            {Object.entries(site.about.details).map(([k, v]) => (
              <div key={k}>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground/70">{k}</dt>
                <dd className="mt-1 text-sm text-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
