# Test & Wire Up the Lead Form Notifications

## Current state
- The "Let's Talk" and "Get in Touch" buttons both open the same `ContactFormDialog` and submit to the `submit-lead` Edge Function.
- Submissions are stored in the `public.leads` table in Lovable Cloud (one test record already exists).
- The `submit-lead` function tries to call a `send-transactional-email` function that does not exist yet, and no email domain is configured, so notifications are not sent.

## What we'll do
1. Set up `evntmarketing.co` as the sender domain through Lovable Cloud Emails.
2. Scaffold the managed transactional email templates. This creates the `send-transactional-email` function and the `new-lead-notification` template that `submit-lead` already expects.
3. Apply brand styling to the email templates so they match the site's dark, editorial palette.
4. Deploy the `send-transactional-email` and `submit-lead` Edge Functions.
5. Test the full flow: submit through the live preview, verify the row appears in `leads`, and verify notification emails are dispatched to both inboxes.
6. Show you where to find submissions in Cloud -> Database and confirm the email notification recipients.

## Outcome
- Both buttons will open the same working form.
- Every submission will be saved in the database.
- You and your business partner will receive a branded notification email for each new inquiry.

## Technical details
- No new database tables or migrations needed; the `leads` table already exists.
- The existing `submit-lead` function already contains the correct recipient emails (`gbekhit@evntmarketing.co`, `khamilton@evntmarketing.co`) and template name (`new-lead-notification`). We will only need to create and deploy the missing pieces.
- All work uses Lovable's managed email infrastructure; no external email provider is needed.
