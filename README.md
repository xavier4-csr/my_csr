# David Luhayi Eshipira — Portfolio

This repository contains David Luhayi Eshipira's personal portfolio. It is a TanStack Start, React, TypeScript, and Tailwind application deployed at [my-csr-red.vercel.app](https://my-csr-red.vercel.app/).

## What the site presents

The portfolio introduces David as a Nairobi-based Business Information Technology student and full-stack developer. It includes selected client and personal projects, technology areas, experience, skills, a résumé download, and contact pathways.

## Local development

Install the project dependencies and start the development server:

```bash
npm install
npm run dev
```

The application is served by Vite during development. The project requires Node.js and npm.

## Useful commands

```bash
npm run dev       # Start the local development server
npm run build     # Create the production build
npm run preview   # Preview the production build
npm run lint      # Run ESLint and Prettier checks
```

## Updating portfolio content

Most public copy is centralized in [`src/content/site.ts`](src/content/site.ts). Update the profile, about text, experience, skills, projects, contact details, and social links there. Keep every project link truthful. Use `null` when a live demo or source repository is not publicly available rather than adding a placeholder URL.

Featured projects are rendered from entries with `featured: true`. Each selected project should include a clear description, your contribution, truthful status, outcome or evaluation, technology tags, and verified links where available.

The profile image and résumé live in [`public/`](public/). If either asset changes, keep the filenames in `site.ts` synchronized.

## Deployment

The canonical deployment is `https://my-csr-red.vercel.app`. The repository includes `vercel.json` for the production build configuration. Before deploying, verify the build locally and check the production homepage, résumé, project links, `/robots.txt`, and `/sitemap.xml`.

## Release checklist

Before publishing a change:

1. Run `npm install` and confirm the lockfile is synchronized.
2. Run `npm run lint`.
3. Run `npm run build`.
4. Check the homepage at desktop and mobile widths.
5. Test keyboard navigation, the résumé link, social links, project links, and contact path.
6. Confirm that metadata describes David and not a template or third-party preview.

## Project status

Some work is client-owned or a prototype. The portfolio labels provenance and availability so visitors can distinguish live client projects, personal projects, and learning projects. Do not publish confidential client information or claim outcomes that have not been measured.
