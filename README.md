# EVNT — evntmarketing.co

Marketing site for EVNT, a fractional B2B events partner. One page, typography-led, built
with React + Vite + Tailwind and shadcn/ui.

Originally generated with Lovable; now self-hosted on free infrastructure.

---

## Local development

Requires Node.js 20+ and npm.

```sh
npm install
npm run dev          # http://localhost:8080
```

Other scripts:

```sh
npm run build        # production build to ./dist
npm run preview      # serve the built output locally
npm run lint
npm run test
```

No environment variables are required — the site is fully static.

---

## Architecture

```
Browser
  │
  └── static site ......... GitHub Pages (built from ./dist by GitHub Actions)
```

There is no contact form and no backend. The "Get in Touch" and "Let's Talk"
buttons are `mailto:` links that open a prefilled email to
`khamilton@evntmarketing.co` and `gbekhit@evntmarketing.co`.

---

## Deployment

**The site deploys automatically.** Every push to `main` runs
`.github/workflows/deploy.yml`, which builds the Vite app and publishes `./dist` to
GitHub Pages. You can also trigger it manually from the Actions tab
("Deploy to GitHub Pages" → Run workflow).

SPA routing note: the workflow copies the built `index.html` to `404.html` so that
deep links and refreshes on a sub-path are handled by react-router instead of
GitHub's 404 page.

---

## Setup checklist — manual steps

### 1. Enable GitHub Pages

In GitHub: **Settings → Pages → Build and deployment → Source → GitHub Actions.**

Do this before (or right after) the first workflow run; without it the deploy job fails.

### 2. Hosting URL — already configured

The site is served from **`https://gbekhit96.github.io/evntmarketing/`**. Two
settings depend on that sub-path and are already in place:

- `vite.config.ts` sets `base: '/evntmarketing/'` — without it every CSS/JS/image
  URL 404s and the page renders blank.
- `src/App.tsx` passes `basename={import.meta.env.BASE_URL}` to `BrowserRouter` —
  without it `location.pathname` is `/evntmarketing/`, which never matches the `/`
  route, and the homepage renders the NotFound page.

There is deliberately no `public/CNAME` file.

**To move to `evntmarketing.co` later:** add `public/CNAME` containing that domain,
set it under Settings → Pages → Custom domain, repoint apex DNS off Lovable to
GitHub's servers (`185.199.108–111.153`) plus `CNAME www → gbekhit96.github.io`,
and change `base` to `'/'`. The `basename` line needs no change —
it follows `base` automatically.

---

## Dependency note

`.npmrc` sets `legacy-peer-deps=true`. This is required: `react-simple-maps@2.3.0`
declares a peer range of React `16.8 || 17`, but the project runs React 18, and npm
refuses to resolve that tree without the flag. The library works correctly on React 18
— the peer metadata is simply out of date. This project was originally built with bun,
which ignores peer conflicts by default, which is why the mismatch went unnoticed and
why `react-simple-maps` was missing from `package-lock.json` entirely.

The map it powers renders on the homepage (`src/components/NorthAmericaMap.tsx`), so
the dependency is real and cannot just be dropped. Upgrading to `react-simple-maps@3`
would remove the need for the flag, but changes how the map renders and should be
treated as its own task.

`package-lock.json` has been regenerated and is in sync; `npm ci` works. The repo also
still carries `bun.lock` and `bun.lockb` — pick one package manager and delete the
other's lockfiles.

---

## Security note

`.env` was committed to this repository before it was made public, and is no longer
tracked (it stays on disk locally). Adding it to `.gitignore` stops future commits but
**does not remove it from git history**.

The only value ever exposed was the Supabase *publishable* key — the key a browser
downloads on every page load by design, equivalent to a public API endpoint. It was
verified to permit no anonymous reads and no anonymous writes to the `leads` table,
and the Supabase project is being decommissioned regardless, so **no rotation is
needed**. The service-role key was never committed; a scan of all 334 commits found no
real secret values.

The general rule still stands: anything pushed to a public repo should be treated as
public.
