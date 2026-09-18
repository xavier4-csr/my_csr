# Content editing guide

Most public portfolio content is maintained in [`src/content/site.ts`](../src/content/site.ts). Edit that file first instead of searching across components for copy.

## Profile

Update `site.profile` for the name, animated role labels, technology chips, tagline, availability badge, and profile image path. The first role and tagline should make the desired opportunity clear without relying on animation.

## About and experience

Keep the `about.paragraphs` concise and evidence-based. Experience entries should include a role, organization, date range, description, and a working link or an internal section link. Do not leave empty dates or `#` placeholders.

## Projects

A project entry should answer five questions:

1. What problem or audience did the project serve?
2. What did David contribute personally?
3. What is the current status: client project, personal project, prototype, or learning project?
4. What outcome or honest evaluation can be stated?
5. Where can a visitor verify it through a live demo or source repository?

Use `featured: true` for the strongest projects shown on the homepage. Keep the featured list focused. Use `null` for `live` or `code` when a link is not public. Never use `#`, a placeholder URL, or another developer's repository as a substitute.

Only publish real outcomes. If there is no production metric, use a transparent outcome such as `Working prototype`, `Live business website`, or `Learning project`.

## Contact and social links

Keep email, phone, location, résumé path, GitHub, and LinkedIn synchronized with the actual public profiles. If the email or phone changes, update `site.contact` once and let the components reuse it.

## Static assets

Place directly served assets in `public/` and reference them with a root-relative path such as `/david-luhayi.jpg`. Keep the résumé text-searchable and make sure the filename in `site.contact.cvUrl` exists.

## Metadata

The page title, description, canonical URL, and social preview metadata live in `src/routes/__root.tsx`. If the production domain changes, update the canonical URL, Open Graph URL, share-image paths, `public/robots.txt`, `public/sitemap.xml`, README links, and Vercel settings together.

## Before publishing content changes

```bash
npm run format:check
npm run lint
npm run typecheck
npm run build
```

Then manually check the relevant live link, résumé, project source, and contact action. The portfolio should never claim a project, role, metric, or technology that cannot be explained honestly in a conversation.
