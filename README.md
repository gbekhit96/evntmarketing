# EVNT — evntmarketing.co

Marketing site for EVNT, a fractional B2B events partner. One page, typography-led, built
with React + Vite + Tailwind and shadcn/ui.

Originally generated with Lovable; now a fully static site hosted only on GitHub Pages.
There is no backend, database, form handler or third-party hosting.

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

No environment variables are required.

---

## Architecture

```
Browser
  │
  └── static site ......... GitHub Pages (built from ./dist by GitHub Actions)
```

There is no contact form. The "Get in Touch" (nav) and "Let's Talk" (closing section)
buttons open a popup (`src/components/ContactDialog.tsx`) that shows
`info@evntmarketing.co` with a "Copy Email" button and an "Open in email app"
`mailto:` link. Change the address in that one file.

---

## Deployment

**The site deploys automatically.** Every push to `main` runs
`.github/workflows/deploy.yml`, which runs `npm ci`, builds the Vite app and publishes
`./dist` to GitHub Pages. You can also trigger it manually from the Actions tab
("Deploy to GitHub Pages" → Run workflow).

GitHub setting this depends on: **Settings → Pages → Build and deployment → Source →
GitHub Actions.**

`npm ci` fails if `package.json` and `package-lock.json` disagree. Always add or remove
packages with `npm install <pkg>` / `npm uninstall <pkg>` so the lockfile updates with
it, and commit both files together. npm is the only package manager — don't add bun,
yarn or pnpm lockfiles.

SPA routing note: the workflow copies the built `index.html` to `404.html` so that
deep links and refreshes are handled by react-router instead of GitHub's 404 page.

---

## Hosting URL

The site is currently served from **`https://gbekhit96.github.io/evntmarketing/`**.
That sub-path is supplied at build time: the workflow sets
`VITE_DEPLOY_BASE: /evntmarketing/`, `vite.config.ts` uses it as `base`, and
`src/App.tsx` passes `basename={import.meta.env.BASE_URL}` to `BrowserRouter` so routes
follow it automatically. Locally, `base` is `/`.

### Moving to evntmarketing.co

Do these in one sitting:

1. **Verify the domain** (one-time, recommended): GitHub profile → Settings → Pages →
   Add a verified domain → add the TXT record it gives you. This stops anyone else
   from claiming the domain on GitHub Pages.
2. **DNS** (at the domain's DNS host — currently Google nameservers,
   `ns-cloud-a*.googledomains.com`):
   - Replace the apex `A` record (currently `185.158.133.1`, Lovable) with GitHub's
     four: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
   - Optional `AAAA` records: `2606:50c0:8000::153`, `2606:50c0:8001::153`,
     `2606:50c0:8002::153`, `2606:50c0:8003::153`.
   - Add `CNAME www → gbekhit96.github.io`.
   - **Do not touch the `MX` records or Google Workspace `TXT` records** — they run
     company email.
3. **Repo:** Settings → Pages → Custom domain → `evntmarketing.co`.
4. **Code:** delete the `env: VITE_DEPLOY_BASE: /evntmarketing/` lines from the Build
   step in `.github/workflows/deploy.yml` and push. The site then builds for `/`.
5. Once GitHub has issued the certificate, tick **Enforce HTTPS**.

No `public/CNAME` file is needed: with a GitHub Actions deploy, the custom domain lives
in the Pages settings and a CNAME file is ignored. The github.io URL redirects to the
custom domain once it is set.

---

## Dependency note

`.npmrc` sets `legacy-peer-deps=true`. This is required: `react-simple-maps@2.3.0`
declares a peer range of React `16.8 || 17`, but the project runs React 18, and npm
refuses to resolve that tree without the flag. The library works correctly on React 18
— the peer metadata is simply out of date.

The map it powers renders on the homepage (`src/components/NorthAmericaMap.tsx`), so
the dependency is real and cannot just be dropped. Upgrading to `react-simple-maps@3`
would remove the need for the flag, but changes how the map renders and should be
treated as its own task.

---

## Security note

`.env` was committed to this repository before it was made public, and is no longer
tracked. Adding it to `.gitignore` stops future commits but **does not remove it from
git history**.

The only value ever exposed was the Supabase *publishable* key — the key a browser
downloads on every page load by design. It was verified to permit no anonymous reads
or writes, and the site no longer uses Supabase at all, so **no rotation is needed**.
The service-role key was never committed.

The general rule still stands: this repo is public, so anything pushed to it should be
treated as public.
