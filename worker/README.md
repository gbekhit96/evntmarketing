# EVNT contact form Worker

Cloudflare Worker backing the contact form on evntmarketing.co. It validates the
submission, emails a confirmation to the sender and a notification to the EVNT
inboxes via the Resend HTTP API, and stores nothing.

`wrangler.toml` lives at the repo root; run these commands from there.

## Local development

```sh
npx wrangler dev
```

Local runs read secrets from a `.dev.vars` file at the repo root (git-ignored):

```
RESEND_API_KEY=re_xxx
ALLOWED_ORIGIN=http://localhost:8080
```

## Secrets

```sh
npx wrangler secret put RESEND_API_KEY
```

## Deploy

```sh
npx wrangler deploy
```

## Configuration

| Name             | Type   | Required | Notes                                                                        |
| ---------------- | ------ | -------- | ---------------------------------------------------------------------------- |
| `RESEND_API_KEY` | secret | yes      | Resend API key. Set via `wrangler secret put`; never committed.               |
| `ALLOWED_ORIGIN` | var    | no       | Comma-separated CORS allowlist. Defaults to `https://evntmarketing.co`.       |

## API

`POST /` with a JSON body:

| Field            | Max chars | Required |
| ---------------- | --------- | -------- |
| `name`           | 100       | yes      |
| `email`          | 255       | yes      |
| `company`        | 150       | no       |
| `budget`         | 100       | no       |
| `timeline`       | 100       | no       |
| `projectDetails` | 4000      | yes      |
| `website`        | —         | honeypot |

Responses: `200 {"success": true}`, `400 {"error": "..."}` on validation failure,
`405` on any method other than `POST`/`OPTIONS`, `500 {"error": "Unexpected error"}`.

`website` is a honeypot — the frontend renders it as a hidden input. If it arrives
non-empty the submission is dropped silently and `200` is still returned.

Email delivery failures are logged and do not fail the request.
