// ============================================================
// Edit this file to update the public portfolio content.
// ============================================================

export const site = {
  profile: {
    fullName: "David Luhayi Eshipira",
    name: "Luhayi David Eshipira",
    shortName: "Luhayi.",
    initials: "DL",
    avatarUrl: "/david-luhayi.jpg",
    roles: ["Full-Stack Developer", "UI Engineer", "Product Builder"],
    tech: ["React", "Django", "Laravel", "Next.js"],
    tagline:
      "Business Information Technology student and full-stack developer building responsive web products, business tools, and clear digital experiences.",
    badge: "Open to internships, junior roles, and freelance work",
  },

  about: {
    heading: "About",
    paragraphs: [
      "I'm a Business Information Technology student at Strathmore University with a strong foundation in programming, web development, databases, and accounting. I enjoy turning real problems into polished, practical products — from full-stack web apps to focused marketing sites.",
      "My experience in customer service, cash handling, and project support has strengthened how I communicate, collaborate, and think about the people using what I build. I care about clean interfaces, maintainable code, and shipping work that is useful beyond the demo.",
    ],
    details: {
      location: "Nairobi, Kenya",
      experience: "2+ years building for web",
      availability: "Open to opportunities",
    },
  },

  technologies: [
    { name: "Django", slug: "django", color: "092E20" },
    { name: "React", slug: "react", color: "61DAFB" },
    { name: "PHP Laravel", slug: "laravel", color: "FF2D20" },
    { name: "Next.js", slug: "nextdotjs", color: "FFFFFF" },
  ],

  experience: [
    {
      role: "App Developer",
      org: "Strathmore Conference Web",
      period: "2025 – present",
      description:
        "Designed and built an attendee-facing conference web experience for event information, sessions, and responsive navigation. Focused on clear information architecture and a fast mobile experience.",
      link: "https://strath-conference-web.vercel.app/",
    },
    {
      role: "Web Developer",
      org: "DropEx Logistics",
      period: "2025 – present",
      description:
        "Built a production company website that presents logistics services, coverage, and contact pathways in a clear, conversion-focused experience for a growing business.",
      link: "https://dropexlogistics.com/",
    },
    {
      role: "Web Developer",
      org: "Freelance & Personal Projects",
      period: "2024 – present",
      description:
        "Create responsive marketing sites, landing pages, and web applications while building practical experience across React, Django, Laravel, databases, and deployment.",
      link: "#projects",
    },
  ],

  skills: [
    { name: "HTML / CSS", level: 90 },
    { name: "Java", level: 90 },
    { name: "MySQL", level: 80 },
    { name: "Python / Django", level: 80 },
    { name: "PHP", level: 80 },
    { name: "JavaScript", level: 60 },
    { name: "Tailwind", level: 75 },
  ],

  projects: [
    {
      title: "Strathmore Conference Web",
      description:
        "A conference platform that helps attendees find event information, sessions, and key programme details through a focused responsive interface.",
      contribution:
        "Designed and built the attendee-facing experience, from page structure through responsive implementation.",
      outcome: "Live event experience",
      status: "Client project",
      tags: ["React", "Responsive UI", "Vercel"],
      live: "https://strath-conference-web.vercel.app/",
      code: null,
      gradient: "from-indigo-500 to-pink-500",
      featured: true,
    },
    {
      title: "DropEx Logistics",
      description:
        "A production business website that makes logistics services, coverage areas, and contact pathways easy to understand for prospective customers.",
      contribution:
        "Built the public-facing site with a focus on content hierarchy, responsive layouts, and conversion-focused calls to action.",
      outcome: "Live business website",
      status: "Client project",
      tags: ["Web", "Marketing Site", "Responsive UI"],
      live: "https://dropexlogistics.com/",
      code: null,
      gradient: "from-emerald-500 to-cyan-500",
      featured: true,
    },
    {
      title: "e-Business Platform",
      description:
        "An e-business application exploring product catalogues, transaction flows, and management views for a small online commerce experience.",
      contribution:
        "Implemented the core web experience and explored how product and transaction data can move through a practical business workflow.",
      outcome: "Working prototype",
      status: "Personal project",
      tags: ["PHP", "MySQL", "Commerce"],
      live: null,
      code: "https://github.com/xavier4-csr/e-Business",
      gradient: "from-amber-500 to-rose-500",
      featured: true,
    },
    {
      title: "Mindful Task Flow",
      description:
        "A focused task-management app for organising work into calm, visible flows — create, track, and complete tasks through a clean interface.",
      contribution:
        "Built the frontend experience and interaction model with reusable components and a responsive layout.",
      outcome: "Live product prototype",
      status: "Personal project",
      tags: ["React", "TypeScript", "Tailwind"],
      live: "https://task-flow40.lovable.app",
      code: "https://github.com/xavier4-csr/mindful-task-flow-40",
      gradient: "from-fuchsia-500 to-violet-500",
      featured: true,
    },
    {
      title: "T-Cash Platform",
      description:
        "A cash and payments platform prototype exploring digital wallets, transfers, and transaction tracking.",
      contribution: "Explored the product structure and user flows for a digital payments concept.",
      outcome: "Prototype",
      status: "Personal project",
      tags: ["Fintech", "Web", "Product flows"],
      live: null,
      code: "https://github.com/xavier4-csr/T-cash_platform",
      gradient: "from-teal-500 to-emerald-500",
      featured: false,
    },
    {
      title: "Django Blogsite API",
      description:
        "A learning project exploring RESTful blog endpoints for posts, authors, comments, and authentication with Django REST Framework.",
      contribution:
        "Used the project to study API structure, authentication, and relational content workflows.",
      outcome: "Learning project",
      status: "Learning project — source not published",
      tags: ["Django", "DRF", "PostgreSQL"],
      live: null,
      code: null,
      gradient: "from-sky-500 to-indigo-500",
      featured: false,
    },
  ],

  contact: {
    heading: "Let's build something useful.",
    blurb:
      "Have a project, internship, or collaboration in mind? Send a message and I will get back to you.",
    email: "david.luhayi@strathmore.edu",
    phone: "+254 112 641 278",
    location: "Nairobi, Kenya",
    cvUrl: "/luhayi-cv.pdf",
  },

  socials: {
    github: "https://github.com/xavier4-csr",
    linkedin: "https://www.linkedin.com/in/david-luhayi-153b02330",
  },
} as const;

export type Site = typeof site;
