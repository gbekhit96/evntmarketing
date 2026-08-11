# Update On-Site Inquiry Confirmation Copy

## Goal
Change the confirmation message shown in the contact dialog after someone submits an inquiry.

## Change

In `src/components/ContactFormDialog.tsx` (the success state shown after submit):

- Title: "Thank you — your inquiry is in." becomes "Thanks for reaching out."
- Description: "We've received your details and will be in touch within one business day." becomes "We've received your details and someone from our team will be in touch within one business day."

## Scope
- Copy only. No changes to styling, layout, the Close button, form fields, or the confirmation email.
