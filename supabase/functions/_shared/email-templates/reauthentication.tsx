/// <reference types="npm:@types/react@18.3.1" />

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

interface ReauthenticationEmailProps {
  token: string
}

export const ReauthenticationEmail = ({ token }: ReauthenticationEmailProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Your verification code</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={wordmark}>EVNT</Text>
        <Heading style={h1}>Confirm reauthentication</Heading>
        <Text style={text}>Use the code below to confirm your identity:</Text>
        <Text style={codeStyle}>{token}</Text>
        <Text style={footer}>
          This code will expire shortly. If you didn't request this, you can
          safely ignore this email.
        </Text>
      </Container>
    </Body>
  </Html>
)

export default ReauthenticationEmail

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
