'use client'

import { ArrowRight, Paperclip, Send, Info, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { WalletButton } from '@/components/wallet-button'
import Script from 'next/script'
import { motion } from 'framer-motion'

const features = [
  { label: 'Customer Outreach' },
  { label: 'Internal Workflows' },
  { label: 'Knowledge Hub' },
  { label: 'Deal Tracker' },
  { label: 'Growth Agent' },
  { label: 'CRM Assistant' },
]

const companies = [
  {
    name: 'v0',
    svg: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><circle cx="12" cy="12" r="10"/><path d="M12 7v5l3 2" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>'
  },
  {
    name: 'Vercel',
    svg: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><polygon points="12,2 2,22 22,22" /></svg>'
  },
  {
    name: 'Resend',
    svg: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M2 4h20c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2"/></svg>'
  },
  {
    name: 'Cursor',
    svg: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M3.5 2.5L13 13l4-11 3.5 9-9 3.5L2 20.5z"/></svg>'
  },
  {
    name: 'Supermemory',
    svg: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>'
  },
  {
    name: 'Next.js',
    svg: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M11.214 5.02c.857-1.289 2.515-1.289 3.372 0l8.102 12.15c.857 1.289.214 2.33-1.429 2.33H4.54c-1.643 0-2.286-.957-1.429-2.33l8.102-12.15zm.536 6.77h1.5v4.286h-1.5V11.79z" fillRule="evenodd"/></svg>'
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex justify-center">
      <div className="relative w-full max-w-4xl border-x border-dotted border-border">
        {/* Header */}
        <header className="border-b border-dotted border-border">
          <div className="px-6 py-3 bg-slate-950 text-white text-xs font-mono">
            <span># Claude Code</span>
            <code className="ml-3 bg-slate-800 px-2 py-1 rounded">
              claude mcp add claude-code-explorer -- npx -y claude-code-explorer-mcp
            </code>
          </div>
          <div className="px-6 py-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-black flex items-center justify-center">
                <div className="w-4 h-4 bg-white" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/raks0078/Claude-code-codebse-?tab=readme-ov-file"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-mono text-foreground hover:opacity-75 transition"
              >
                ⭐ Star
              </a>
              <a
                href="#pricing"
                className="text-sm font-mono text-foreground hover:opacity-75 transition"
              >
                Pricing
              </a>
              <WalletButton />
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <main className="flex flex-col items-center justify-center py-20 px-6">
          <div className="w-full border border-dashed border-border px-8 py-12">
            {/* Stats Row */}
            <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
              <div className="bg-[#121316] border border-white/5 rounded-full px-4 py-1.5 flex items-center gap-2 text-sm text-white/80 font-medium tracking-wide">
                <span className="text-red-500">★</span> 14.5k stars
              </div>
              <div className="bg-[#121316] border border-white/5 rounded-full px-4 py-1.5 flex items-center gap-2 text-sm text-white/80 font-medium tracking-wide">
                <span className="text-red-500 font-bold">↓</span> 26.5k <span className="text-white/40">/mo</span>
              </div>
              <div className="bg-[#121316] border border-white/5 rounded-full px-4 py-1.5 flex items-center gap-2 text-sm text-white/80 font-medium tracking-wide">
                <span className="text-red-500 font-mono text-xs font-bold">v</span> 4.9.1
              </div>
            </div>

            {/* Github Links */}
            <div className="mb-12 flex flex-wrap items-center gap-4 justify-center">
              <a href="https://github.com/raks0078/-claw-code" target="_blank" rel="noreferrer" className="bg-[#121316] px-5 py-2.5 flex items-center gap-3 hover:bg-[#1c1d22] transition text-sm font-medium text-white rounded-xl border border-white/10 shadow-sm">
                <Github size={18} fill="currentColor" className="opacity-90" /> View on GitHub <span className="text-white/40 font-normal">| Code</span>
              </a>
              <a href="https://github.com/raks0078/-claw-code" target="_blank" rel="noreferrer" className="bg-[#121316] px-5 py-2.5 flex items-center gap-3 hover:bg-[#1c1d22] transition text-sm font-medium text-white rounded-xl border border-white/10 shadow-sm">
                <Github size={18} fill="currentColor" className="opacity-90" /> View on GitHub <span className="text-white/40 font-normal">| Py</span>
              </a>
              <a href="https://github.com/raks0078/-claw-code" target="_blank" rel="noreferrer" className="bg-[#121316] px-5 py-2.5 flex items-center gap-3 hover:bg-[#1c1d22] transition text-sm font-medium text-white rounded-xl border border-white/10 shadow-sm">
                <Github size={18} fill="currentColor" className="opacity-90" /> View on GitHub <span className="text-white/40 font-normal">| Rust</span>
              </a>
              <a href="https://github.com/raks0078/Claude-code-codebse-?tab=readme-ov-file" target="_blank" rel="noreferrer" className="bg-[#121316] px-5 py-2.5 flex items-center gap-3 hover:bg-[#1c1d22] transition text-sm font-medium text-white rounded-xl border border-white/10 shadow-sm">
                <Github size={18} fill="currentColor" className="opacity-90" /> View on GitHub <span className="text-white/40 font-normal">| Try</span>
              </a>
            </div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-mono font-bold text-center mb-6 max-w-3xl text-pretty"
            >
              You can now run Claude Code for FREE.
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center text-foreground/70 max-w-2xl mx-auto mb-6 text-sm md:text-base font-mono"
            >
              No API costs. No rate limits. 100% local on your machine.
            </motion.p>

            <div className="bg-slate-900 rounded-xl px-4 py-3 border border-slate-700 max-w-2xl mx-auto mb-12 text-left">
              <p className="text-sm md:text-base font-mono text-white mb-2"># Claude Code</p>
              <code className="block text-xs md:text-sm font-mono text-white bg-black/30 p-2 rounded w-full overflow-x-auto">
                claude mcp add claude-code-explorer -- npx -y claude-code-explorer-mcp
              </code>
            </div>

            <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-12 text-sm md:text-base font-mono">
              Here's how to run Claude Code locally (100% free & fully private):
            </p>

            {/* Input Box */}
            <div className="bg-black p-6 mb-12 w-full">
              <div className="text-gray-400 text-sm font-mono mb-6">
                I Automate my client onboarding flow and send progress reports weekly.
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button className="text-gray-500 hover:text-gray-400 transition">
                    <Paperclip size={18} />
                  </button>
                  <button className="text-gray-500 hover:text-gray-400 transition">
                    <div className="w-5 h-5 bg-gradient-to-br from-purple-400 to-pink-400" />
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <button className="text-gray-500 hover:text-gray-400 transition">
                    <Info size={18} />
                  </button>
                  <button className="text-gray-400 hover:text-gray-200 transition">
                    <Send size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-20 justify-center">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="border border-border px-4 py-3 flex items-center justify-center text-sm font-mono text-foreground hover:border-foreground/50 transition"
                >
                  <span className="font-bold">{feature.label}</span>
                </div>
              ))}
            </div>

            {/* Social Proof Section */}
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-mono font-bold text-foreground mb-8">
                Trusted by the teams redefining productivity
              </h2>
            </div>

            {/* Company Logos */}
            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center text-center">
              {companies.map((company, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center gap-2 text-foreground/50 hover:text-foreground/70 transition">
                  <div className="w-12 h-12" dangerouslySetInnerHTML={{ __html: company.svg }} />
                  <span className="text-xs font-mono font-bold">{company.name}</span>
                </div>
              ))}
            </div>

            {/* Pricing Section */}
            <motion.div 
              id="pricing" 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-20 py-12 border-t border-dotted border-border text-center"
            >
              <h2 className="text-3xl font-mono font-bold mb-4">Pricing</h2>
              <div className="max-w-sm mx-auto p-6 border border-border rounded-xl bg-card shadow-xl shadow-purple-900/10">
                <p className="text-sm font-mono text-muted-foreground mb-2">Monthly Plan</p>
                <div className="flex items-center justify-center gap-2 mb-6">
                  <span className="text-4xl font-mono font-bold">$9</span>
                  <span className="text-sm font-mono text-muted-foreground">/mo</span>
                </div>
                
                {/* Helio Checkout */}
                <div className="flex justify-center w-full mt-4">
                  <div id="helioCheckoutContainer"></div>
                </div>

                <Script 
                  src="https://embed.hel.io/assets/index-v1.js" 
                  type="module"
                  onLoad={() => {
                    if (typeof window !== 'undefined' && (window as any).helioCheckout) {
                      (window as any).helioCheckout(
                        document.getElementById("helioCheckoutContainer"),
                        {
                          paylinkId: "69cccb6f201253b01c15e795",
                          theme: { themeMode: "light" },
                          primaryColor: "#6400CC",
                          neutralColor: "#5A6578",
                          display: "inline",
                          onSuccess: (event: any) => console.log(event),
                          onError: (event: any) => console.log(event),
                          onPending: (event: any) => console.log(event),
                          onCancel: () => console.log("Cancelled payment"),
                          onStartPayment: () => console.log("Starting payment"),
                        }
                      );
                    }
                  }}
                />
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  )
}
