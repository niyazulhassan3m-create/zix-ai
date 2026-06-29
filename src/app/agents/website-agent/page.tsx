"use client";

import Link from "next/link";

export default function WebsiteAgentPage() {
  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-600/10 via-transparent to-transparent pointer-events-none" />
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <Link href="/demos" className="text-[10px] tracking-[0.2em] uppercase text-accent-400 hover:text-accent-300 inline-block">← Back to Demos</Link>
          <p className="text-[11px] tracking-[0.2em] uppercase text-accent-400 mb-3 mt-2">AI Agent</p>
          <h1 className="text-4xl font-bold mb-3">Website Agent</h1>
          <p className="text-grey-400">AI-powered fast-turnaround website development.</p>
        </div>

        <div className="rounded-2xl border border-white/5 bg-card/80 backdrop-blur-sm p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">What It Does</h2>
          <ul className="space-y-3 text-grey-300">
            <li className="flex items-start gap-3"><span className="text-accent-400 mt-0.5">→</span> Generates fully responsive websites from a simple description</li>
            <li className="flex items-start gap-3"><span className="text-accent-400 mt-0.5">→</span> AI-powered landing pages, portfolios, and business sites</li>
            <li className="flex items-start gap-3"><span className="text-accent-400 mt-0.5">→</span> Fast turnaround — from prompt to live site in hours</li>
            <li className="flex items-start gap-3"><span className="text-accent-400 mt-0.5">→</span> Modern UI with your brand colors and content</li>
            <li className="flex items-start gap-3"><span className="text-accent-400 mt-0.5">→</span> SEO-optimized, mobile-first, production-ready code</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-white/5 bg-card/80 backdrop-blur-sm p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">How It Works</h2>
          <div className="grid sm:grid-cols-3 gap-4 text-center">
            <div className="p-4 rounded-xl bg-white/[0.03]">
              <span className="text-2xl font-bold text-accent-600/40 block mb-2">01</span>
              <p className="text-sm text-grey-300">Describe your site — industry, pages, style</p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.03]">
              <span className="text-2xl font-bold text-accent-600/40 block mb-2">02</span>
              <p className="text-sm text-grey-300">AI generates the full website with modern design</p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.03]">
              <span className="text-2xl font-bold text-accent-600/40 block mb-2">03</span>
              <p className="text-sm text-grey-300">Deploy live or export the code</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/demos" className="inline-flex px-6 py-3 rounded-lg bg-accent-600 text-white text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-accent-500 transition-all">
            Try Website Builder Demo
          </Link>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <Link href="/agents/media-agent" className="text-[11px] text-grey-500 hover:text-accent-400 transition-colors">← Media Agent</Link>
        </div>
      </div>
    </section>
  );
}
