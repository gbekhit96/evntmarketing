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

Copy `.env.example` to `.env` and fill it in for local dev. `.env` is gitignored —
never commit it.

---

## Architecture

```
Browser
  │
  ├── static site ......... GitHub Pages (built from ./dist by GitHub Actions)
  │
  └── contact form POST ... Cloudflare Worker (evnt-contact-form)
                                  │
                                  └── Resend API ──> email to the EVNT inbox
```

- **No database.** Inquiries are not stored anywhere — they arrive by email only.
  If nobody reads the email, the lead is gone.
- The form posts to the Worker URL baked in at build time via `VITE_FORM_ENDPOINT`.
- The Worker sends two emails through Resend: a confirmation to the person who
  submitted, and a notification to the EVNT team. It also enforces a CORS allowlist
  (`ALLOWED_ORIGIN` in `wrangler.toml`).
- Worker source: `worker/src/`. Worker config: `wrangler.toml`.

---

## Deployment

**The site deploys automatically.** Every push to `main` runs
`.github/workflows/deploy.yml`, which builds the Vite app and publishes `./dist` to
GitHub Pages. You can also trigger it manually from the Actions tab
("Deploy to GitHub Pages" → Run workflow).

The Worker does **not** deploy automatically — deploy it by hand with
`npx wrangler deploy` whenever `worker/src/` changes.

SPA routing note: the workflow copies the built `index.html` to `404.html` so that
deep links and refreshes on a sub-path are handled by react-router instead of
GitHub's 404 page.

---

## Setup checklist — manual steps

These are one-time steps only you can do. Do them in order.

### 1. Set up Resend

1. Create an account at [resend.com](https://resend.com).
2. Add and verify the sending domain **`evntmarketing.co`** (the Worker sends from
   `noreply@evntmarketing.co`). Resend will give you DKIM/SPF DNS records to add.
3. ⚠️ **`mail.evntmarketing.co` is currently delegated to Lovable's nameservers.**
   Resend's records will not resolve until that delegation is removed and the
   subdomain is served by your own DNS provider. Delete the Lovable NS delegation
   for `mail.evntmarketing.co` first, then add Resend's records.
4. Create an API key in Resend and copy it.

### 2. Give the Worker the Resend key

```sh
npx wrangler login
npx wrangler secret put RESEND_API_KEY
# paste the Resend API key when prompted
```

The key is stored by Cloudflare. It is never written to `wrangler.toml` or the repo.

### 3. Deploy the Worker

```sh
npx wrangler deploy
```

Copy the URL it prints, e.g. `https://evnt-contact-form.<your-subdomain>.workers.dev`.

### 4. Tell the site where the Worker is

In GitHub: **Settings → Secrets and variables → Actions → Variables → New repository
variable**

| Name | Value |
| --- | --- |
| `VITE_FORM_ENDPOINT` | the Worker URL from step 3 |

This is a **variable**, not a secret — it is a public endpoint URL, and Vite inlines
it into the JavaScript bundle where anyone can read it. Storing it as a secret would
be pointless and would make it harder to see what is deployed.

Push to `main` (or re-run the workflow manually) after setting it — the value is read
at build time, so the site must be rebuilt for a change to take effect.

### 5. Enable GitHub Pages

In GitHub: **Settings → Pages → Build and deployment → Source → GitHub Actions.**

Do this before (or right after) the first workflow run; without it the deploy job fails.

### 6. Hosting URL — already configured

The site is served from **`https://gbekhit96.github.io/evntmarketing/`**. Three
settings depend on that sub-path and are already in place:

- `vite.config.ts` sets `base: '/evntmarketing/'` — without it every CSS/JS/image
  URL 404s and the page renders blank.
- `src/App.tsx` passes `basename={import.meta.env.BASE_URL}` to `BrowserRouter` —
  without it `location.pathname` is `/evntmarketing/`, which never matches the `/`
  route, and the homepage renders the NotFound page.
- `wrangler.toml` sets `ALLOWED_ORIGIN = "https://gbekhit96.github.io"` — without
  it the contact form is blocked by CORS.

There is deliberately no `public/CNAME` file.

**To move to `evntmarketing.co` later:** add `public/CNAME` containing that domain,
set it under Settings → Pages → Custom domain, repoint apex DNS off Lovable to
GitHub's servers (`185.199.108–111.153`) plus `CNAME www → gbekhit96.github.io`,
change `base` to `'/'`, change `ALLOWED_ORIGIN` to `https://evntmarketing.co` and
redeploy the Worker, then enable Enforce HTTPS. The `basename` line needs no change —
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
public. Real secrets in this stack (`RESEND_API_KEY`) live only as Worker secrets set
via `wrangler secret put`, never in the repo.
