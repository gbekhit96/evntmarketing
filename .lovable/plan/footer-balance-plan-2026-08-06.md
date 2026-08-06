# Footer Balance Plan

## Current issue
The footer has the logo on the far left and a dense cluster of email links + Instagram handle all bunched on the far right. This makes the right side feel heavy and visually unbalanced.

## Proposed fix
Rebalance the footer by distributing content more evenly and reducing the right-hand text cluster:

1. **Center the footer content vertically** on both desktop and mobile. Logo, contact cluster, and copyright all sit on one vertical axis.

2. **Combine email links into a single compact line** instead of a stacked right-aligned column, so they don't dominate the right edge.

3. **Group the social icon and handle as one unit** with tighter spacing, and place it as a separate centered line below the emails (or beside them with a clear divider).

4. **Reduce vertical padding** slightly so the footer feels intentional and compact, not like a tall empty block.

5. **Keep copyright at the bottom center**, with a small top margin, so it reads as the baseline of the whole centered stack.

## Result
A cleaner, more centered footer where no single side feels overloaded. The text weight is spread evenly across the width, and the hierarchy reads as: logo → contact → social → copyright.

## Files to change
- `src/pages/Index.tsx` (footer JSX only)
