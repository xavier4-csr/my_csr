# Architecture guide

This repository is a single-page TanStack Start portfolio. The source is organized around the visitor journey rather than around individual visual effects.

## Directory map

```text
.
├── .github/workflows/       Automated quality checks
├── docs/                    Repository and content documentation
├── public/                  Static, directly served assets
├── src/
│   ├── components/portfolio/ Portfolio sections and shared portfolio UI
│   ├── components/ui/       Reusable generated UI primitives
│   ├── content/             Central public content model
│   ├── integrations/        Optional Supabase integration modules
│   ├── lib/                 Shared utilities and error handling
│   ├── routes/              TanStack Start route components
│   ├── router.tsx           Router creation and query client setup
│   ├── server.ts            Server entrypoint
│   ├── start.ts             TanStack Start bootstrap
│   └── styles.css           Global theme, tokens, and accessibility styles
├── vite.config.ts           Vite, TanStack Start, Nitro, and Vercel output
├── vercel.json              Vercel build command and output directory
└── package.json             Scripts and dependencies
```

## Request flow

The root route in `src/routes/__root.tsx` owns document metadata, the HTML shell, global providers, and error states. The index route in `src/routes/index.tsx` composes the page in visitor order:

1. `Navbar` — skip link, section navigation, and contact shortcut.
2. `Hero` — target role, value proposition, résumé, and social links.
3. `About` — background and availability.
4. `Technology` — principal technologies.
5. `Experience` — timeline and links.
6. `Skills` — supporting skills.
7. `Projects` — curated, evidence-oriented project cards.
8. `Contact` — email, phone, résumé, and message preparation.

All public copy is read from `src/content/site.ts`. Components should present that content; they should not contain competing versions of names, project URLs, or contact details.

## Styling and interaction

Global theme tokens and layout utilities live in `src/styles.css`. Tailwind utility classes are used for component-level layout and states. Framer Motion provides progressive reveal animations, while the global reduced-motion rule disables long animation and transition durations for visitors who request less motion.

When adding interactions, preserve keyboard access, visible focus, meaningful accessible names, and a useful non-animated reading order. Do not make an important action available only on hover.

## Deployment shape

Vite builds the application through TanStack Start and Nitro with the Vercel preset. The output is written to `.vercel/output`, which is the Vercel deployment artifact. Generated output directories and local dependency folders are ignored by Git.
