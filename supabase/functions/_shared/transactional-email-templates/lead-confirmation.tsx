import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  name?: string
}

const Email = ({ name }: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>We received your inquiry — we'll be in touch soon.</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={wordmark}>EVNT</Text>
        <Heading style={heading}>We received your inquiry.</Heading>
        <Text style={message}>
          {name ? `Hi ${name},` : 'Hi there,'}
        </Text>
        <Text style={message}>
          Thank you for reaching out. We've received your message and will review it carefully.
          A member of our team will be in touch with you soon.
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: 'We received your inquiry',
  displayName: 'Lead confirmation',
  previewData: { name: 'Jane' },
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
  margin: '0 0 16px',
}
const message = {
  fontFamily: 'Arial, sans-serif',
  fontSize: '15px',
  lineHeight: '1.5',
  color: '#444444',
  margin: '0 0 12px',
}
