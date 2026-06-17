// Contact section with a working message form.
// On submit, opens the user's email client pre-filled (mailto:), so
// messages reach the inbox without needing a backend. To send emails
// directly from the page, enable Lovable Cloud + email domain.
import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { Section } from "./Section";
import { site } from "@/content/site";
import { toast } from "sonner";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("Please fill in all fields.");
      return;
    }
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${site.contact.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your email app…");
  }

  return (
    <Section id="contact" className="max-w-5xl mx-auto px-6">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          {site.contact.heading.split(" ").slice(0, -1).join(" ")}{" "}
          <span className="text-gradient-brand">{site.contact.heading.split(" ").slice(-1)}</span>
        </h2>
        <p className="mt-4 text-muted-foreground">{site.contact.blurb}</p>
        {site.contact.cvUrl && (
          <a
            href={site.contact.cvUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-xl border border-primary/50 bg-primary/10 text-primary px-5 py-3 text-sm font-medium hover:bg-primary/20 hover:glow-brand transition"
          >
            📄 Download CV
          </a>
        )}
      </div>

      <div className="mt-12 grid md:grid-cols-5 gap-8">
        {/* Contact details */}
        <div className="md:col-span-2 space-y-4">
          <a href={`mailto:${site.contact.email}`} className="flex items-start gap-3 rounded-xl border border-border bg-card/40 backdrop-blur p-4 hover:border-primary/60 hover:glow-brand transition">
            <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <div className="text-xs text-muted-foreground">Email</div>
              <div className="text-sm break-all">{site.contact.email}</div>
            </div>
          </a>
          <a href={`tel:${site.contact.phone.replace(/\s+/g, "")}`} className="flex items-start gap-3 rounded-xl border border-border bg-card/40 backdrop-blur p-4 hover:border-primary/60 transition">
            <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <div className="text-xs text-muted-foreground">Phone</div>
              <div className="text-sm">{site.contact.phone}</div>
            </div>
          </a>
          <div className="flex items-start gap-3 rounded-xl border border-border bg-card/40 backdrop-blur p-4">
            <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <div className="text-xs text-muted-foreground">Location</div>
              <div className="text-sm">{site.contact.location}</div>
            </div>
          </div>
          <div className="flex gap-3 pt-2">
            <a href={site.socials.github} aria-label="GitHub" className="grid place-items-center w-11 h-11 rounded-xl border border-border bg-card/60 text-muted-foreground hover:text-primary hover:border-primary/60 transition">
              <GithubIcon className="w-5 h-5" />
            </a>
            <a href={site.socials.linkedin} aria-label="LinkedIn" className="grid place-items-center w-11 h-11 rounded-xl border border-border bg-card/60 text-muted-foreground hover:text-primary hover:border-primary/60 transition">
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="md:col-span-3 rounded-2xl border border-border bg-card/40 backdrop-blur p-6 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-xs text-muted-foreground">Your name</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full rounded-lg bg-background/60 border border-border px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition"
                placeholder="Jane Doe"
              />
            </label>
            <label className="block">
              <span className="text-xs text-muted-foreground">Your email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-lg bg-background/60 border border-border px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition"
                placeholder="jane@example.com"
              />
            </label>
          </div>
          <label className="block">
            <span className="text-xs text-muted-foreground">Message</span>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
              className="mt-1 w-full rounded-lg bg-background/60 border border-border px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition resize-none"
              placeholder="Tell me about your project…"
            />
          </label>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-xl border border-primary/50 bg-primary/10 text-primary px-5 py-3 text-sm font-medium hover:bg-primary/20 hover:glow-brand transition"
          >
            <Send className="w-4 h-4" /> Send message
          </button>
        </form>
      </div>

      <footer className="mt-20 pt-8 border-t border-border text-xs text-muted-foreground text-center">
        © {new Date().getFullYear()} {site.profile.name}. Built with React & Tailwind.
      </footer>
    </Section>
  );
}
