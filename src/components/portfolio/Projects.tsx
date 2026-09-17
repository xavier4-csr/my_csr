import { motion } from "framer-motion";
import { ArrowUpRight, LockKeyhole } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { Section } from "./Section";
import { site } from "@/content/site";

export function Projects() {
  const featuredProjects = site.projects.filter((project) => project.featured);

  return (
    <Section id="projects" className="mx-auto max-w-6xl px-6">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Selected work
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Projects<span className="text-gradient-brand">.</span>
          </h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
          A selection of client, personal, and learning projects. Each one shows a different part of
          how I think, build, and learn.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {featuredProjects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="group overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:glow-brand"
          >
            <div
              className={`relative h-36 bg-gradient-to-br ${project.gradient}`}
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.28),transparent_45%)]" />
              <div className="absolute bottom-4 left-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/80">
                <span>{project.status}</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs text-primary">
                  {project.outcome}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <p className="mt-4 border-l-2 border-primary/50 pl-3 text-sm leading-relaxed text-foreground/80">
                <span className="font-medium text-foreground">My contribution:</span>{" "}
                {project.contribution}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3 border-t border-border pt-5">
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    View live project <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                    <LockKeyhole className="h-4 w-4" aria-hidden="true" />
                    Demo not published
                  </span>
                )}
                {project.code ? (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground hover:underline"
                  >
                    <GithubIcon className="h-4 w-4" aria-hidden="true" />
                    View source
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                    <LockKeyhole className="h-4 w-4" aria-hidden="true" />
                    Private source
                  </span>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-dashed border-border bg-card/30 p-5 text-sm leading-relaxed text-muted-foreground">
        <span className="font-medium text-foreground">More experiments:</span> T-Cash Platform and
        Django Blogsite API are included in my learning path. I am keeping the public selection
        focused so the strongest work is easy to review.
      </div>
    </Section>
  );
}
