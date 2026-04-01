'use client'

import React from 'react'
import { useConnector } from '@solana/connector/react'
import { Button } from '@/components/ui/button'

export function WalletButton() {
  const { connectors, connectWallet, isConnected, account, disconnectWallet } = useConnector()

  const shortenAddress = (address: string) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`
  }

  if (isConnected && account) {
    return (
      <Button 
        onClick={() => disconnectWallet()}
        className="bg-white text-black hover:bg-white/90 text-sm font-mono rounded-full px-6 py-2"
      >
        {shortenAddress(account as unknown as string)}
      </Button>
    )
  }

  return (
    <div className="flex gap-2">
      {connectors.map((connector) => (
        <Button
          key={connector.id}
          onClick={() => connectWallet(connector.id)}
          className="bg-white text-black hover:bg-white/90 text-sm font-mono rounded-full px-6 py-2"
        >
          Connect {connector.name}
        </Button>
      ))}
    </div>
  )
}
