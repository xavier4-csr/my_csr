# David Luhayi Eshipira — Portfolio

[![Quality checks](https://github.com/xavier4-csr/my_csr/actions/workflows/quality.yml/badge.svg)](https://github.com/xavier4-csr/my_csr/actions/workflows/quality.yml)
[![Live portfolio](https://img.shields.io/badge/live%20portfolio-my--csr--red.vercel.app-7c3aed?logo=vercel&logoColor=white)](https://my-csr-red.vercel.app/)

A fast, accessible personal portfolio for **David Luhayi Eshipira**, a Nairobi-based Business Information Technology student and full-stack developer. The site presents selected client work, personal projects, experience, skills, résumé, and contact pathways.

**Live site:** [my-csr-red.vercel.app](https://my-csr-red.vercel.app/) · **GitHub profile:** [xavier4-csr](https://github.com/xavier4-csr) · **LinkedIn:** [David Luhayi Eshipira](https://www.linkedin.com/in/david-luhayi-153b02330)

## Repository navigation

Start with the document that matches what you want to do:

| I want to...                      | Read                                                    |
| --------------------------------- | ------------------------------------------------------- |
| Understand the app structure      | [Architecture guide](docs/architecture.md)              |
| Update profile or project content | [Content editing guide](docs/content-guide.md)          |
| Run, validate, or deploy the site | [Development and deployment guide](docs/development.md) |
| Understand the featured work      | [Project index](docs/projects.md)                       |
| Contribute or report a problem    | [Contributing guide](CONTRIBUTING.md)                   |

## Highlights

- Responsive portfolio experience built with React and TypeScript.
- TanStack Start routing with Vite and Vercel Build Output deployment.
- Centralized content model in [`src/content/site.ts`](src/content/site.ts).
- Accessible navigation, skip link, keyboard-friendly project actions, and labeled contact form.
- Selected work cards that distinguish client projects, personal projects, prototypes, and learning projects.
- Static résumé, profile image, `robots.txt`, and `sitemap.xml` in [`public/`](public/).
- Automated formatting, lint, typecheck, and production-build checks through GitHub Actions.

## Tech stack

| Layer                 | Tools                                               |
| --------------------- | --------------------------------------------------- |
| Application           | React 19, TypeScript, TanStack Start                |
| Styling               | Tailwind CSS 4, custom CSS tokens, `tw-animate-css` |
| Interaction           | Framer Motion, Lucide React, Sonner                 |
| Build and deployment  | Vite, Nitro, Vercel                                 |
| Data and integrations | TanStack Query, optional Supabase integration       |

## Quick start

Requirements: Node.js 20+ and npm.

```bash
git clone https://github.com/xavier4-csr/my_csr.git
cd my_csr
npm install
npm run dev
```

Open the local URL printed by Vite. Use `Ctrl+C` to stop the development server.

## Quality checks

Run the same checks used by the repository workflow before opening a pull request:

```bash
npm run format:check
npm run lint
npm run typecheck
npm run build
```

`npm run build` emits the Vercel Build Output API into `.vercel/output`. The generic `npm run preview` script is retained from the starter template; for everyday local work, use `npm run dev`.

## Content and assets

The public portfolio content is intentionally centralized in [`src/content/site.ts`](src/content/site.ts). Featured projects use `featured: true`. Keep project status and links truthful: use `null` when a demo or source repository is not public instead of adding a placeholder URL.

Static assets are stored in [`public/`](public/):

- [`david-luhayi.jpg`](public/david-luhayi.jpg) — profile image.
- [`luhayi-cv.pdf`](public/luhayi-cv.pdf) — résumé download.
- [`robots.txt`](public/robots.txt) and [`sitemap.xml`](public/sitemap.xml) — crawlability files.

See the [content editing guide](docs/content-guide.md) before changing public copy.

## Deployment

The canonical production URL is [my-csr-red.vercel.app](https://my-csr-red.vercel.app/). Vercel should build the `main` branch with:

```text
Build command: npm run build
Output directory: .vercel/output
```

See [docs/development.md](docs/development.md) for deployment checks and troubleshooting.

## Project principles

This portfolio favors **specific evidence over a large project list**, truthful project provenance, accessible interaction, and small changes that are easy to review. Do not publish confidential client information or invent performance, usage, revenue, or user metrics.

## License and contact

This is a personal portfolio repository. The portfolio content and résumé are personal materials; ask before reusing them. For collaboration or opportunities, use the contact details on the [live portfolio](https://my-csr-red.vercel.app/#contact).
