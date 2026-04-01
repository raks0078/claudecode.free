export const dynamic = 'force-dynamic'

import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

import { SolanaProvider } from '@/components/providers/solana-provider'
import { QueryProvider } from '@/components/providers/query-provider'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Claude Code - Your First Autonomous Builder',
  description: 'Meet your first autonomous builder. Claude Code helps teams deploy AI operators that plan, execute, and scale workflows.',
  generator: 'v0.app',
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-mono antialiased`}>
        <QueryProvider>
          <SolanaProvider>
            {children}
            <Analytics />
          </SolanaProvider>
        </QueryProvider>
      </body>
    </html>
  )
}
