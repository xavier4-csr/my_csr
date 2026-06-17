// ============================================================
// 📝 EDIT THIS FILE TO UPDATE YOUR PORTFOLIO CONTENT
// ============================================================

import avatarAsset from "@/assets/david-luhayi.jpg.asset.json";
import cvAsset from "@/assets/luhayi-cv.pdf.asset.json";

export const site = {
  // ---------- Profile / Hero ----------
  profile: {
    fullName: "David Luhayi",
    name: "Luhayi David Eshipira",
    shortName: "Luhayi.",
    initials: "DL",
    avatarUrl: avatarAsset.url,
    roles: ["Full-Stack Developer", "UI Engineer", "Problem Solver"],
    tech: ["React", "Django", "Laravel", "Next.js"],
    tagline:
      "Business Information Technology student and full-stack developer crafting innovative, functional and user-friendly web experiences.",
    badge: "Welcome to my portfolio",
  },

  // ---------- About ----------
  about: {
    heading: "About",
    paragraphs: [
      "I'm a Business Information Technology student at Strathmore University with a strong foundation in programming, web development and accounting. I love turning ideas into polished digital products — from full-stack web apps to clean marketing sites.",
      "Beyond code, I bring real-world experience in customer service, cash handling and project support, which sharpens how I collaborate, communicate and ship work that matters.",
    ],
    details: {
      location: "Nairobi, Kenya",
      experience: "2+ years",
      availability: "Open to opportunities",
    },
  },

  // ---------- Technology ----------
  technologies: [
    { name: "Django",     slug: "django",       color: "092E20" },
    { name: "React",      slug: "react",        color: "61DAFB" },
    { name: "PHP Laravel", slug: "laravel",     color: "FF2D20" },
    { name: "Next.js",    slug: "nextdotjs",    color: "FFFFFF" },
  ],

  // ---------- Experience ----------
  experience: [
    {
      role: "App Developer",
      org: "Strathmore Conference Web",
      period: "",
      description:
        "Designed and built a conference web app for Strathmore — handles event info, sessions and attendee-facing pages with a fast, responsive UI.",
      link: "https://strath-conference-web.vercel.app/",
    },
    {
      role: "Web Developer",
      org: "DropEx Logistics",
      period: "",
      description:
        "Built the DropEx Logistics website — a clean, conversion-focused company site showcasing services, coverage and contact channels for a logistics business.",
      link: "https://dropexlogistics.com/",
    },
    {
      role: "Web Developer",
      org: "Freelance & Personal Projects",
      period: "",
      description:
        "Responsive marketing sites, landing pages and small business websites with a focus on performance and clean UI.",
      link: "#",
    },
  ],

  // ---------- Skills ----------
  skills: [
    { name: "HTML / CSS", level: 90 },
    { name: "Java", level: 90 },
    { name: "MySQL", level: 80 },
    { name: "Python / Django", level: 80 },
    { name: "PHP", level: 80 },
    { name: "JavaScript", level: 60 },
    { name: "Tailwind", level: 75 },
  ],

  // ---------- Projects ----------
  projects: [
    {
      title: "Strathmore Conference Web",
      description: "Conference platform for Strathmore showcasing sessions, speakers and event info with a modern responsive UI.",
      tags: ["React", "Vercel"],
      live: "https://strath-conference-web.vercel.app/",
      code: "https://github.com/xavier4-csr",
      gradient: "from-indigo-500 to-pink-500",
    },
    {
      title: "DropEx Logistics",
      description: "Production company website for a logistics business — services, coverage areas and contact, optimized for conversions.",
      tags: ["Web", "Marketing Site"],
      live: "https://dropexlogistics.com/",
      code: "#",
      gradient: "from-emerald-500 to-cyan-500",
    },
    {
      title: "e-Business Platform",
      description: "E-business web application exploring online commerce flows — product catalog, transactions and management dashboards.",
      tags: ["PHP", "MySQL", "Web"],
      live: "#",
      code: "https://github.com/xavier4-csr/e-Business",
      gradient: "from-amber-500 to-rose-500",
    },
    {
      title: "Mindful Task Flow",
      description: "A focused task-management app for organizing work into mindful flows — create, track and complete tasks with a clean UI.",
      tags: ["React", "TypeScript", "Tailwind"],
      live: "#",
      code: "https://github.com/xavier4-csr/mindful-task-flow-40",
      gradient: "from-fuchsia-500 to-violet-500",
    },
    {
      title: "Django Blogsite API",
      description: "RESTful blog API built with Django REST Framework — posts, authors, comments and authentication endpoints.",
      tags: ["Django", "DRF", "PostgreSQL"],
      live: "#",
      code: "https://github.com/mainasm/django-blogsite-api",
      gradient: "from-sky-500 to-indigo-500",
    },
    {
      title: "T-Cash Platform",
      description: "Cash / payments platform prototype exploring digital wallets, transfers and transaction tracking.",
      tags: ["Fintech", "Web"],
      live: "#",
      code: "https://github.com/xavier4-csr/T-cash_platform",
      gradient: "from-teal-500 to-emerald-500",
    },
    {
      title: "Portfolio Website",
      description: "Responsive personal portfolio showcasing work, skills and contact info.",
      tags: ["React", "Tailwind", "Framer Motion"],
      live: "https://luhayi-portfolio.vercel.app/",
      code: "https://github.com/xavier4-csr/luhayi-portfolio",
      gradient: "from-rose-500 to-orange-500",
    },
  ],

  // ---------- Contact ----------
  contact: {
    heading: "Let's build something together.",
    blurb: "Have a project in mind, or just want to say hi? Drop me a message below.",
    email: "david.luhayi@strathmore.edu",
    phone: "+254 112 641 278",
    location: "Nairobi, Kenya",
    cvUrl: cvAsset.url,
  },

  // ---------- Socials ----------
  socials: {
    github: "https://github.com/xavier4-csr",
    linkedin: "https://www.linkedin.com/in/david-luhayi-153b02330",
  },
} as const;

export type Site = typeof site;
