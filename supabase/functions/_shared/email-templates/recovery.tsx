/// <reference types="npm:@types/react@18.3.1" />

import * as React from 'npm:react@18.3.1'

import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from 'npm:@react-email/components@0.0.22'

interface RecoveryEmailProps {
  siteName: string
  confirmationUrl: string
}

export const RecoveryEmail = ({
  siteName,
  confirmationUrl,
}: RecoveryEmailProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Reset your password for {siteName}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={wordmark}>EVNT</Text>
        <Heading style={h1}>Reset your password</Heading>
        <Text style={text}>
          We received a request to reset your password for {siteName}. Click
          the button below to choose a new password.
        </Text>
        <Button style={button} href={confirmationUrl}>
          Reset Password
        </Button>
        <Text style={footer}>
          If you didn't request a password reset, you can safely ignore this
          email. Your password will not be changed.
        </Text>
      </Container>
    </Body>
  </Html>
)

export default RecoveryEmail

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
