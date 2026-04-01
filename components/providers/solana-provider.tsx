'use client'

import React, { ReactNode } from 'react'
import { AppProvider } from '@solana/connector/react'
import { getDefaultConfig } from '@solana/connector/headless'

const config = getDefaultConfig({ appName: 'Orren' })

export function SolanaProvider({ children }: { children: ReactNode }) {
  return (
    <AppProvider connectorConfig={config}>
      {children}
    </AppProvider>
  )
}
