# Confirmation Email for Inquiry Submissions

## Goal
Send a simple, branded confirmation email to the person who submits an inquiry through the site, confirming EVNT received their message. Keep it minimal — no extra content, no marketing, no promotions.

## Current State
- The lead form is wired to the `submit-lead` Edge Function.
- `submit-lead` already stores the lead and sends an internal notification to `gbekhit@evntmarketing.co` and `khamilton@evntmarketing.co`.
- The transactional template registry has one template: `new-lead-notification` (internal notification).
- There is no template or send logic for the external confirmation email.

## Plan

1. Create a new confirmation template
   - Add `supabase/functions/_shared/transactional-email-templates/lead-confirmation.tsx`.
   - Template: EVNT wordmark, a simple subject line, and a short confirmation message.
   - Use the existing EVNT brand styling (maroon `#5B1220`, Georgia serif, Arial body).

2. Register the template
   - Import the new template in `supabase/functions/_shared/transactional-email-templates/registry.ts`.
   - Map it to the name `lead-confirmation`.

3. Update `submit-lead` to send the confirmation
   - After the lead is stored, send `lead-confirmation` to the submitter's email address.
   - Use an idempotency key derived from the lead ID and the submitter's email so retries do not duplicate.
   - Keep the existing internal notifications unchanged.

4. Deploy affected Edge Functions
   - Deploy `submit-lead` and `preview-transactional-email` so the new template and logic go live.

## What This Does Not Include
- No marketing, upsell, or promotional content.
- No changes to the form, footer, or page layout.
- No changes to the internal notification emails or recipients.
