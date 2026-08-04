"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import NeuralNetwork from "@/components/NeuralNetwork";
import GlassCard from "@/components/GlassCard";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  { emoji: "🎬", title: "Feature Films", desc: "Full-length films and short films produced using cutting-edge AI tools", href: "/services" },
  { emoji: "📢", title: "Ad Commercials", desc: "High-impact brand ads, product commercials, and social media campaigns", href: "/services" },
  { emoji: "🎭", title: "Short Films", desc: "AI-powered short films, music videos, and branded content", href: "/services" },
  { emoji: "🌐", title: "Website Developing", desc: "AI-integrated custom website development — we build for you", href: "/services" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number], delay: i * 0.1 },
  }),
};

const steps = [
  { num: "01", title: "Share Your Vision", desc: "Tell us your story, brand, or concept — we understand your creative brief." },
  { num: "02", title: "We Produce", desc: "Our team uses AI tools to create scripts, storyboards, visuals, and edits — fast." },
  { num: "03", title: "Deliver & Launch", desc: "Polished, production-ready films, ads, and websites — delivered on time." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 px-4 overflow-hidden min-h-screen flex items-center">
        <NeuralNetwork />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background pointer-events-none z-[1]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-600/20 bg-accent-600/10 backdrop-blur-sm mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse" />
              <span className="text-[10px] tracking-[0.2em] uppercase text-accent-400 font-medium">AI-Powered Film Studio</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Your Vision.<br />
            <span className="bg-gradient-to-r from-accent-400 via-accent-500 to-accent-600 bg-clip-text text-transparent">Our AI. Our Camera.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-grey-400 text-lg sm:text-xl max-w-2xl mx-auto mb-8"
          >
            Feature Films <span className="text-grey-600">•</span> Short Films <span className="text-grey-600">•</span> Ad Commercials <span className="text-grey-600">•</span> Websites
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex items-center justify-center gap-4"
          >
            <Link href="/services" className="group relative px-8 py-3.5 rounded-lg bg-accent-600 text-white text-[11px] font-bold tracking-[0.2em] uppercase overflow-hidden transition-all duration-300 hover:bg-accent-500 animate-float">
              <span className="relative z-10">View Our Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            </Link>
            <Link href="/contact" className="px-8 py-3.5 rounded-lg border border-white/10 text-grey-300 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-white/5 transition-all backdrop-blur-sm animate-float-delayed">
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="h-px max-w-4xl mx-auto bg-gradient-to-r from-transparent via-accent-600/20 to-transparent" />

      {/* Stats */}
      <AnimatedSection>
        <section className="relative py-20 px-4">
          <div className="absolute inset-0 bg-gradient-to-b from-accent-900/5 via-transparent to-transparent pointer-events-none" />
          <div className="max-w-5xl mx-auto relative z-10">
            <GlassCard className="p-8" floatDelay={0}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {[
                  { value: "50+", label: "Films Made" },
                  { value: "200+", label: "Ad Commercials" },
                  { value: "80+", label: "Happy Clients" },
                  { value: "Fast", label: "Production Speed" },
                ].map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                    className="py-2"
                  >
                    <p className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-accent-400 to-accent-600 bg-clip-text text-transparent">{s.value}</p>
                    <p className="text-[11px] tracking-[0.15em] uppercase text-grey-500 mt-1">{s.label}</p>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </div>
        </section>
      </AnimatedSection>

      {/* Gradient Divider */}
      <div className="h-px max-w-4xl mx-auto bg-gradient-to-r from-transparent via-accent-600/20 to-transparent" />

      {/* How It Works */}
      <AnimatedSection>
        <section className="relative py-28 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-accent-900/10 via-transparent to-transparent" />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <p className="text-[11px] tracking-[0.2em] uppercase text-accent-400 mb-3">How We Work</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">From Script to Screen</h2>
            <p className="text-grey-300 text-lg max-w-2xl mx-auto mb-16">
              We combine creative storytelling with powerful AI tools to produce
              films, ads, and websites — faster and more affordably.
            </p>
          </div>
          <div className="max-w-[940px] mx-auto relative z-10">
            <p className="text-[11px] tracking-[0.2em] uppercase text-accent-400 text-center mb-8">Our Process</p>
            <div className="grid md:grid-cols-3 gap-6">
              {steps.map((s, i) => (
                <motion.div
                  key={s.num}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={fadeUp}
                  className="text-center"
                >
                  <GlassCard className="p-8 h-full" floatDelay={i * 0.4}>
                    <span className="text-4xl font-bold text-accent-600/30 block mb-4">{s.num}</span>
                    <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                    <p className="text-sm text-grey-400 leading-relaxed">{s.desc}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Gradient Divider */}
      <div className="h-px max-w-4xl mx-auto bg-gradient-to-r from-transparent via-accent-600/20 to-transparent" />

      {/* Services Preview */}
      <AnimatedSection>
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-[11px] tracking-[0.2em] uppercase text-accent-400 mb-3">What We Produce</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Films, Ads & Websites</h2>
              <p className="text-grey-400 text-lg max-w-2xl mx-auto">We use AI to produce cinematic films, high-impact ads, and modern websites.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 max-w-[940px] mx-auto">
              {services.map((s, i) => (
                <motion.div
                  key={s.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={fadeUp}
                  className="w-full sm:w-[280px]"
                >
                  <Link href={s.href} className="group block h-full">
                    <GlassCard className="p-8 h-full text-center" floatDelay={i * 0.35}>
                      <span className="text-3xl block mb-4">{s.emoji}</span>
                      <h3 className="text-base font-bold mb-1 group-hover:text-accent-400 transition-colors">{s.title}</h3>
                      <p className="text-sm text-grey-400 leading-relaxed">{s.desc}</p>
                    </GlassCard>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Gradient Divider */}
      <div className="h-px max-w-4xl mx-auto bg-gradient-to-r from-transparent via-accent-600/20 to-transparent" />

      {/* CTA */}
      <AnimatedSection>
        <section className="py-24 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <GlassCard className="p-10 md:p-14" floatDelay={0.2}>
              <p className="text-[11px] tracking-[0.2em] uppercase text-accent-400 mb-4">Let&apos;s Create</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Start Your Production?</h2>
              <p className="text-grey-400 mb-8 max-w-lg mx-auto">
                Tell us your idea and we&apos;ll produce it — films, ads, or websites — using AI, delivered fast and on budget.
              </p>
              <div className="flex items-center justify-center gap-4">
                <Link href="/contact" className="group relative px-8 py-3.5 rounded-lg bg-accent-600 text-white text-[11px] font-bold tracking-[0.2em] uppercase overflow-hidden transition-all duration-300 hover:bg-accent-500 animate-float">
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                </Link>
                <Link href="/pricing" className="px-8 py-3.5 rounded-lg border border-white/10 text-grey-300 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-white/5 transition-all backdrop-blur-sm animate-float-delayed">
                  View Pricing
                </Link>
              </div>
            </GlassCard>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
