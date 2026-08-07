# Change hero italic span from Inter to DM Serif Display

## Goal
In the hero headline, the italicized phrase "we build experiences that drive pipeline." currently uses Inter (`font-sans`), while the rest of the sentence uses DM Serif Display (`font-serif`). Update it so the entire headline uses DM Serif Display for visual consistency.

## Plan
1. Edit `src/pages/Index.tsx`:
   - Locate the hero `<h1>` element.
   - Find the `<span>` that contains "we build experiences that drive pipeline." and currently has `className="italic font-normal font-sans"`.
   - Change it to `className="italic font-normal font-serif"` so it matches the surrounding DM Serif Display headline.
   - Remove any inline `style` that overrides the font to Inter if present.

2. Verify in the preview that the entire hero headline now reads in one consistent typeface, with only weight/style changing between the regular and italic portions.

## Files
- `src/pages/Index.tsx`
