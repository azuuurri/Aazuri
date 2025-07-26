import './globals.css'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import Head from 'next/head'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>Chibitsu</title>
        <meta name="description" content="Your new buddies on the blockchain." />
        <meta name="generator" content="v0.dev" />
      </Head>
      <body
        style={{
          fontFamily: GeistSans.style.fontFamily,
          ['--font-sans' as any]: GeistSans.variable,
          ['--font-mono' as any]: GeistMono.variable,
        }}
      >
        {children}
      </body>
    </html>
  )
}
