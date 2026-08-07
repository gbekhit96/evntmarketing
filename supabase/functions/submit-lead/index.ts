import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { createClient } from 'npm:@supabase/supabase-js@2';
import { sendTemplateEmail } from '../_shared/transactional-email-templates/send-email.ts';


// Inboxes notified when a new inquiry is submitted
const NOTIFY_EMAILS = [
  'gbekhit@evntmarketing.co',
  'khamilton@evntmarketing.co',
];

interface LeadBody {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  budget?: unknown;
  timeline?: unknown;
  projectDetails?: unknown;
}

const str = (v: unknown, max: number) =>
  typeof v === 'string' ? v.trim().slice(0, max) : '';

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const body = (await req.json()) as LeadBody;

    const name = str(body.name, 100);
    const email = str(body.email, 255);
    const company = str(body.company, 150);
    const budget = str(body.budget, 100);
    const timeline = str(body.timeline, 100);
    const projectDetails = str(body.projectDetails, 4000);

    const errors: string[] = [];
    if (!name) errors.push('Name is required');
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('A valid email is required');
    if (!projectDetails) errors.push('Project details are required');

    if (errors.length) {
      return new Response(JSON.stringify({ error: errors.join(', ') }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
    );

    const { data: lead, error } = await supabase
      .from('leads')
      .insert({
        name,
        email,
        company: company || null,
        budget: budget || null,
        timeline: timeline || null,
        project_details: projectDetails,
      })
      .select('id')
      .single();

    if (error) {
      console.error('Failed to store lead:', error.message);
      return new Response(JSON.stringify({ error: 'Could not store inquiry' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Email notification to both inboxes. Failures here must not lose the stored inquiry.
    for (const recipient of NOTIFY_EMAILS) {
      try {
        await sendTemplateEmail('new-lead-notification', recipient, {
          idempotencyKey: `new-lead-${lead.id}-${recipient}`,
          templateData: {
            name,
            email,
            company,
            budget,
            timeline,
            projectDetails,
          },
        });
      } catch (e) {
        console.error('Email notification failed:', e instanceof Error ? e.message : e);
      }
    }


    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (e) {
    console.error('submit-lead error:', e instanceof Error ? e.message : e);
    return new Response(JSON.stringify({ error: 'Unexpected error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
