import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { Section } from "./Section";
import { site } from "@/content/site";
import { toast } from "sonner";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${site.contact.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your email app. If it does not open, use the email link on the left.");
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.contact.email);
      toast.success("Email address copied.");
    } catch {
      toast.error(`Copy this email address: ${site.contact.email}`);
    }
  }

  return (
    <Section id="contact" className="mx-auto max-w-5xl px-6">
      <div className="text-center">
        <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-primary">
          Start a conversation
        </p>
        <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
          Let&apos;s build something <span className="text-gradient-brand">useful.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{site.contact.blurb}</p>
        <a
          href={site.contact.cvUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center rounded-xl border border-primary/50 bg-primary/10 px-5 py-3 text-sm font-medium text-primary transition hover:bg-primary/20 hover:glow-brand"
        >
          Download résumé
        </a>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-5">
        <div className="space-y-4 md:col-span-2">
          <a
            href={`mailto:${site.contact.email}`}
            className="flex items-start gap-3 rounded-xl border border-border bg-card/40 p-4 backdrop-blur transition hover:border-primary/60 hover:glow-brand"
          >
            <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <span>
              <span className="block text-xs text-muted-foreground">Email</span>
              <span className="block break-all text-sm">{site.contact.email}</span>
            </span>
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="w-full rounded-xl border border-border bg-card/40 p-3 text-left text-xs text-muted-foreground transition hover:border-primary/60 hover:text-foreground"
          >
            Copy email address
          </button>
          <a
            href={`tel:${site.contact.phone.replace(/\s+/g, "")}`}
            className="flex items-start gap-3 rounded-xl border border-border bg-card/40 p-4 backdrop-blur transition hover:border-primary/60"
          >
            <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <span>
              <span className="block text-xs text-muted-foreground">Phone</span>
              <span className="block text-sm">{site.contact.phone}</span>
            </span>
          </a>
          <div className="flex items-start gap-3 rounded-xl border border-border bg-card/40 p-4">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <span>
              <span className="block text-xs text-muted-foreground">Location</span>
              <span className="block text-sm">{site.contact.location}</span>
            </span>
          </div>
          <div className="flex gap-3 pt-2" aria-label="Professional profiles">
            <a
              href={site.socials.github}
              aria-label="GitHub profile"
              className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-card/60 text-muted-foreground transition hover:border-primary/60 hover:text-primary"
            >
              <GithubIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={site.socials.linkedin}
              aria-label="LinkedIn profile"
              className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-card/60 text-muted-foreground transition hover:border-primary/60 hover:text-primary"
            >
              <LinkedinIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="space-y-4 rounded-2xl border border-border bg-card/40 p-6 backdrop-blur md:col-span-3"
        >
          <p className="text-sm text-muted-foreground">
            This form opens your email app with the message prepared. You can also email me directly
            using the link beside it.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block" htmlFor="contact-name">
              <span className="text-xs text-muted-foreground">Your name *</span>
              <input
                id="contact-name"
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                autoComplete="name"
                required
                className="mt-1 w-full rounded-lg border border-border bg-background/60 px-3 py-2 text-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="Your name"
              />
            </label>
            <label className="block" htmlFor="contact-email">
              <span className="text-xs text-muted-foreground">Your email *</span>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                autoComplete="email"
                required
                className="mt-1 w-full rounded-lg border border-border bg-background/60 px-3 py-2 text-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="name@example.com"
              />
            </label>
          </div>
          <label className="block" htmlFor="contact-message">
            <span className="text-xs text-muted-foreground">Message *</span>
            <textarea
              id="contact-message"
              name="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              autoComplete="off"
              required
              rows={6}
              className="mt-1 w-full resize-none rounded-lg border border-border bg-background/60 px-3 py-2 text-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              placeholder="Tell me about the project, role, or idea..."
            />
          </label>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 hover:glow-brand"
          >
            <Send className="h-4 w-4" aria-hidden="true" /> Open email app
          </button>
        </form>
      </div>

      <footer className="mt-20 border-t border-border pt-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {site.profile.name}. Built with React, TypeScript, and
        Tailwind.
      </footer>
    </Section>
  );
}
