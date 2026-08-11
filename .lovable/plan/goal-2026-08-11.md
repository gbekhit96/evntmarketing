Update site title and meta description

## Goal
Apply the new site title and meta description to the whole project, including social tags that already mirror them, without adding new per-page metadata plumbing.

## New copy
- Site title: `EVNT — The B2B Pipeline Events Team`
- Meta description: `EVNT is a fractional events partner for B2B companies where relationships drive revenue. We design, produce, and measure experiences that create access, build trust, and move target accounts through the funnel.`

## Where to apply
A search shows the old title and description exist only in `index.html`:

```text
./index.html:10    <title>EVNT — Strategic Event Partner</title>
./index.html:11    <meta name="description" content="..." />
./index.html:13    <meta property="og:title" content="EVNT — Strategic Event Partner" />
./index.html:14    <meta property="og:description" content="We don't plan events..." />
```

No other routes or components currently define their own title/description, so only `index.html` needs changing.

## Changes
1. Replace `<title>` with the new title.
2. Replace `<meta name="description">` with the new description.
3. Replace `<meta property="og:title">` with the new title.
4. Replace `<meta property="og:description">` with the new description.
5. Leave `twitter:card` and `og:type` unchanged; no new tags added.

## Verification
- Re-run the search for the old title/description to confirm no stale references remain.
- Build the project to make sure no compile errors were introduced.
