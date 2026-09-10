import {
  leadConfirmation,
  newLeadNotification,
  singleLine,
  type LeadFields,
} from './templates';

// Inboxes notified when a new inquiry is submitted
const NOTIFY_EMAILS = ['gbekhit@evntmarketing.co', 'khamilton@evntmarketing.co'];

const FROM = 'evntmarketing <noreply@evntmarketing.co>';
const DEFAULT_ORIGIN = 'https://evntmarketing.co';

export interface Env {
  RESEND_API_KEY: string;
  ALLOWED_ORIGIN?: string;
}

interface LeadBody {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  budget?: unknown;
  timeline?: unknown;
  projectDetails?: unknown;
  website?: unknown;
}

const str = (v: unknown, max: number) =>
  typeof v === 'string' ? v.trim().slice(0, max) : '';

const corsHeaders = (request: Request, env: Env) => {
  const allowed = (env.ALLOWED_ORIGIN || DEFAULT_ORIGIN)
    .split(',')
    .map((o) => o.trim())
    .filter(Boolean);
  const origin = request.headers.get('Origin');
  return {
    'Access-Control-Allow-Origin':
      origin && allowed.includes(origin) ? origin : allowed[0] || DEFAULT_ORIGIN,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  };
};

const json = (body: unknown, status: number, headers: Record<string, string>) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...headers, 'Content-Type': 'application/json' },
  });

interface Message {
  to: string | string[];
  subject: string;
  html: string;
  text: string;
  reply_to?: string;
}

async function sendEmail(message: Message, env: Env) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ from: FROM, ...message }),
  });

  if (!response.ok) {
    throw new Error(`Resend responded ${response.status}: ${await response.text()}`);
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const cors = corsHeaders(request, env);

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: cors });
    }

    if (request.method !== 'POST') {
      return json({ error: 'Method not allowed' }, 405, {
        ...cors,
        Allow: 'POST, OPTIONS',
      });
    }

    try {
      const body = (await request.json()) as LeadBody;

      if (typeof body.website === 'string' && body.website.trim()) {
        return json({ success: true }, 200, cors);
      }

      const lead: LeadFields = {
        name: str(body.name, 100),
        email: str(body.email, 255),
        company: str(body.company, 150),
        budget: str(body.budget, 100),
        timeline: str(body.timeline, 100),
        projectDetails: str(body.projectDetails, 4000),
      };

      const errors: string[] = [];
      if (!lead.name) errors.push('Name is required');
      if (!lead.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email))
        errors.push('A valid email is required');
      if (!lead.projectDetails) errors.push('Project details are required');

      if (errors.length) {
        return json({ error: errors.join(', ') }, 400, cors);
      }

      // Email failures must not fail the request. With no database behind this
      // Worker, a total email failure means the inquiry is lost — an accepted
      // tradeoff of the no-DB design.
      const confirmation = leadConfirmation(lead.name);
      try {
        await sendEmail(
          {
            to: lead.email,
            subject: confirmation.subject,
            html: confirmation.html,
            text: confirmation.text,
          },
          env,
        );
      } catch (e) {
        console.error('Confirmation email failed:', e instanceof Error ? e.message : e);
      }

      const notification = newLeadNotification(lead);
      try {
        await sendEmail(
          {
            to: NOTIFY_EMAILS,
            subject: notification.subject,
            html: notification.html,
            text: notification.text,
            reply_to: singleLine(lead.email),
          },
          env,
        );
      } catch (e) {
        console.error('Email notification failed:', e instanceof Error ? e.message : e);
      }

      return json({ success: true }, 200, cors);
    } catch (e) {
      console.error('submit-lead error:', e instanceof Error ? e.message : e);
      return json({ error: 'Unexpected error' }, 500, cors);
    }
  },
};
