# Development and deployment guide

## Requirements

Use Node.js 20 or newer and npm. Install dependencies from the repository root:

```bash
npm install
```

## Local commands

```bash
npm run dev          # Start Vite/TanStack Start development mode
npm run format       # Format repository files
npm run format:check # Check supported source and documentation formatting
npm run lint         # Run ESLint
npm run typecheck    # Run TypeScript without emitting files
npm run build        # Build Vercel output
```

The normal local workflow is `npm run dev`. The repository's `npm run preview` command comes from the starter template and may not serve the TanStack Start server output correctly in every local environment; use a deployed Vercel preview or the development server when checking the route manually.

## Pull request workflow

GitHub Actions runs the quality workflow on pushes and pull requests to `main`. The workflow installs from the lockfile, checks formatting, runs ESLint, runs TypeScript, and builds the Vercel output. A change is ready to merge only when the workflow is green and the relevant page has been checked in a browser.

## Vercel deployment

The canonical site is `https://my-csr-red.vercel.app`. The repository's Vercel settings are represented in `vercel.json`:

```text
Build command: npm run build
Output directory: .vercel/output
```

Connect the Vercel project to `xavier4-csr/my_csr` and deploy the `main` branch. After a deployment, verify:

- The homepage title identifies David Luhayi Eshipira.
- The résumé opens from the hero and contact sections.
- Featured project links resolve to the intended destinations.
- `/robots.txt` and `/sitemap.xml` return successfully.
- The page no longer contains template copy such as `Portfolio Plus`.

## Troubleshooting

If `npm ci` fails, do not delete the lockfile or use a forced dependency update. Run `npm install`, inspect the dependency diff, and commit the synchronized lockfile only when the change is intentional.

If the site builds but Vercel serves older content, confirm the Vercel project is connected to `xavier4-csr/my_csr`, inspect the deployment commit, and redeploy the latest `main` commit. The repository and deployment must not point to the retired `luhayi-portfolio` project.
