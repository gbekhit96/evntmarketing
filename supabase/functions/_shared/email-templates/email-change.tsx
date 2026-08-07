/// <reference types="npm:@types/react@18.3.1" />

import * as React from 'npm:react@18.3.1'

import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Text,
} from 'npm:@react-email/components@0.0.22'

interface EmailChangeEmailProps {
  siteName: string
  // oldEmail is the user's current address (HookData.OldEmail). For the
  // NEW-recipient half of a secure email_change fanout, `email` equals the
  // recipient (NEW), so the "from" line must render oldEmail to read
  // "from OLD to NEW" instead of "from NEW to NEW".
  oldEmail: string
  email: string
  newEmail: string
  confirmationUrl: string
}

export const EmailChangeEmail = ({
  siteName,
  oldEmail,
  newEmail,
  confirmationUrl,
}: EmailChangeEmailProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Confirm your email change for {siteName}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={wordmark}>EVNT</Text>
        <Heading style={h1}>Confirm your email change</Heading>
        <Text style={text}>
          You requested to change your email address for {siteName} from{' '}
          <Link href={`mailto:${oldEmail}`} style={link}>
            {oldEmail}
          </Link>{' '}
          to{' '}
          <Link href={`mailto:${newEmail}`} style={link}>
            {newEmail}
          </Link>
          .
        </Text>
        <Text style={text}>
          Click the button below to confirm this change:
        </Text>
        <Button style={button} href={confirmationUrl}>
          Confirm Email Change
        </Button>
        <Text style={footer}>
          If you didn't request this change, please secure your account
          immediately.
        </Text>
      </Container>
    </Body>
  </Html>
)

export default EmailChangeEmail

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
const h1 = {
  fontSize: '26px',
  fontWeight: 'normal' as const,
  lineHeight: '1.2',
  color: '#1a1a1a',
  margin: '0 0 16px',
}
const text = {
  fontFamily: 'Arial, sans-serif',
  fontSize: '14px',
  color: '#555555',
  lineHeight: '1.6',
  margin: '0 0 24px',
}
const link = { color: '#5B1220', textDecoration: 'underline' }
const button = {
  backgroundColor: '#5B1220',
  color: '#ffffff',
  fontFamily: 'Arial, sans-serif',
  fontSize: '14px',
  letterSpacing: '0.05em',
  borderRadius: '2px',
  padding: '14px 26px',
  textDecoration: 'none',
  display: 'inline-block',
}
const codeStyle = {
  fontFamily: 'Courier, monospace',
  fontSize: '24px',
  letterSpacing: '0.2em',
  fontWeight: 'bold' as const,
  color: '#5B1220',
  margin: '0 0 30px',
}
const footer = {
  fontFamily: 'Arial, sans-serif',
  fontSize: '12px',
  color: '#9a9a9a',
  margin: '32px 0 0',
}
