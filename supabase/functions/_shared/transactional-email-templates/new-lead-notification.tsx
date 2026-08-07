import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  name?: string
  email?: string
  company?: string
  budget?: string
  timeline?: string
  projectDetails?: string
}

const Row = ({ label, value }: { label: string; value?: string }) => (
  <Section style={row}>
    <Text style={labelStyle}>{label}</Text>
    <Text style={valueStyle}>{value && value.trim() ? value : '—'}</Text>
  </Section>
)

const Email = ({ name, email, company, budget, timeline, projectDetails }: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>{`New inquiry from ${name || 'a visitor'}`}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={wordmark}>EVNT</Text>
        <Heading style={heading}>New inquiry</Heading>
        <Text style={intro}>
          A new inquiry was submitted through evntmarketing.co.
        </Text>
        <Hr style={hr} />
        <Row label="Name" value={name} />
        <Row label="Email" value={email} />
        <Row label="Company" value={company} />
        <Row label="Budget" value={budget} />
        <Row label="Timeline" value={timeline} />
        <Row label="Project details" value={projectDetails} />
        <Hr style={hr} />
        {email ? (
          <Text style={intro}>
            Reply directly to <Link href={`mailto:${email}`} style={link}>{email}</Link>.
          </Text>
        ) : null}
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: (data: Record<string, any>) =>
    `New inquiry — ${data?.name || 'Website'}${data?.company ? ` (${data.company})` : ''}`,
  displayName: 'New lead notification',
  previewData: {
    name: 'Jane Doe',
    email: 'jane@brand.com',
    company: 'Brand Co.',
    budget: '$75k – $150k',
    timeline: '1–3 months',
    projectDetails: 'Executive dinner series for enterprise pipeline in Q4.',
  },
} satisfies TemplateEntry

const main = {
  backgroundColor: '#ffffff',
  fontFamily: 'Georgia, "Times New Roman", serif',
}
const container = { padding: '32px 28px', maxWidth: '560px' }
const wordmark = {
  fontFamily: 'Georgia, serif',
  fontSize: '14px',
  letterSpacing: '0.3em',
  color: '#5B1220',
  margin: '0 0 24px',
}
const heading = {
  fontSize: '26px',
  lineHeight: '1.2',
  color: '#1a1a1a',
  margin: '0 0 8px',
}
const intro = {
  fontFamily: 'Arial, sans-serif',
  fontSize: '14px',
  color: '#555555',
  margin: '0 0 4px',
}
const hr = { borderColor: '#e8e2dc', margin: '24px 0' }
const row = { marginBottom: '14px' }
const labelStyle = {
  fontFamily: 'Arial, sans-serif',
  fontSize: '11px',
  letterSpacing: '0.15em',
  textTransform: 'uppercase' as const,
  color: '#9a9a9a',
  margin: '0 0 2px',
}
const valueStyle = {
  fontFamily: 'Arial, sans-serif',
  fontSize: '15px',
  color: '#1a1a1a',
  margin: '0',
  whiteSpace: 'pre-wrap' as const,
}
const link = { color: '#5B1220' }
