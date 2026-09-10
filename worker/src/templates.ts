export interface LeadFields {
  name: string;
  email: string;
  company: string;
  budget: string;
  timeline: string;
  projectDetails: string;
}

export const escapeHtml = (v: string) =>
  v
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

/** Strips CR/LF so a user value can never inject extra email headers. */
export const singleLine = (v: string) => v.replace(/[\r\n]+/g, ' ').trim();

const main =
  'background-color:#ffffff;font-family:Georgia,\'Times New Roman\',serif;margin:0;padding:0';
const container = 'max-width:560px;padding:32px 28px';
const wordmark =
  'font-family:Georgia,serif;font-size:14px;letter-spacing:0.3em;color:#5B1220;margin:0 0 24px';
const heading = (margin: string) =>
  `font-family:Georgia,'Times New Roman',serif;font-size:26px;line-height:1.2;color:#1a1a1a;margin:${margin}`;
const intro = 'font-family:Arial,sans-serif;font-size:14px;color:#555555;margin:0 0 4px';
const message =
  'font-family:Arial,sans-serif;font-size:15px;line-height:1.5;color:#444444;margin:0 0 12px';
const hr = 'width:100%;border:none;border-top:1px solid #e8e2dc;margin:24px 0';
const labelStyle =
  'font-family:Arial,sans-serif;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#9a9a9a;margin:0 0 2px';
const valueStyle =
  'font-family:Arial,sans-serif;font-size:15px;color:#1a1a1a;margin:0;white-space:pre-wrap';
const link = 'color:#5B1220';

const shell = (preview: string, body: string) => `<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="viewport" content="width=device-width" />
</head>
<body style="${main}">
<div style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0">${escapeHtml(preview)}</div>
<table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="${container}">
<tbody><tr><td>
<p style="${wordmark}">EVNT</p>
${body}
</td></tr></tbody>
</table>
</body>
</html>`;

const row = (label: string, value: string) => `<table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin-bottom:14px">
<tbody><tr><td>
<p style="${labelStyle}">${label}</p>
<p style="${valueStyle}">${value.trim() ? escapeHtml(value) : '&mdash;'}</p>
</td></tr></tbody>
</table>`;

export const newLeadNotification = (lead: LeadFields) => ({
  subject: singleLine(
    `New inquiry — ${lead.name || 'Website'}${lead.company ? ` (${lead.company})` : ''}`,
  ),
  html: shell(
    `New inquiry from ${lead.name || 'a visitor'}`,
    `<h1 style="${heading('0 0 8px')}">New inquiry</h1>
<p style="${intro}">A new inquiry was submitted through evntmarketing.co.</p>
<hr style="${hr}" />
${row('Name', lead.name)}
${row('Email', lead.email)}
${row('Company', lead.company)}
${row('Budget', lead.budget)}
${row('Timeline', lead.timeline)}
${row('Project details', lead.projectDetails)}
<hr style="${hr}" />
${
  lead.email
    ? `<p style="${intro}">Reply directly to <a href="mailto:${escapeHtml(lead.email)}" style="${link}">${escapeHtml(lead.email)}</a>.</p>`
    : ''
}`,
  ),
  text: [
    'EVNT',
    '',
    'New inquiry',
    'A new inquiry was submitted through evntmarketing.co.',
    '',
    `NAME\n${lead.name || '—'}`,
    `EMAIL\n${lead.email || '—'}`,
    `COMPANY\n${lead.company || '—'}`,
    `BUDGET\n${lead.budget || '—'}`,
    `TIMELINE\n${lead.timeline || '—'}`,
    `PROJECT DETAILS\n${lead.projectDetails || '—'}`,
    '',
    lead.email ? `Reply directly to ${lead.email}.` : '',
  ].join('\n'),
});

export const leadConfirmation = (name: string) => ({
  subject: 'We received your inquiry',
  html: shell(
    "We received your inquiry — we'll be in touch soon.",
    `<h1 style="${heading('0 0 16px')}">We received your inquiry.</h1>
<p style="${message}">${name ? `Hi ${escapeHtml(name)},` : 'Hi there,'}</p>
<p style="${message}">Thank you for reaching out. We&#39;ve received your message and will review it carefully. A member of our team will be in touch with you soon.</p>`,
  ),
  text: [
    'EVNT',
    '',
    'We received your inquiry.',
    '',
    name ? `Hi ${name},` : 'Hi there,',
    '',
    "Thank you for reaching out. We've received your message and will review it carefully. A member of our team will be in touch with you soon.",
  ].join('\n'),
});
