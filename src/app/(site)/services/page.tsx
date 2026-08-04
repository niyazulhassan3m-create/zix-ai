import Link from "next/link";

const services = [
  {
    title: "AI Films",
    tagline: "Movies & Feature Films",
    desc: "We produce full-length movies and feature films using cutting-edge AI filmmaking tools. From script to final cut — we handle the entire production pipeline with AI.",
    img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=200&q=80&auto=format&fit=crop",
    features: ["AI-assisted scriptwriting", "AI storyboarding", "AI-generated visuals & scenes", "AI visual effects", "Professional editing", "Color grading & sound design"],
  },
  {
    title: "Ad Commercials",
    tagline: "Brand Ads & Commercials",
    desc: "We create high-impact brand advertisements and commercial films using AI tools. From 15-second social ads to 60-second TV spots — produced in days, not weeks.",
    img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=200&q=80&auto=format&fit=crop",
    features: ["Brand ad production", "Social media ads", "Product showcase films", "A/B creative testing", "Multi-platform formats", "Rapid turnaround"],
  },
  {
    title: "Short Films",
    tagline: "Creative Short-Form Content",
    desc: "We produce creative short films and storytelling projects using AI filmmaking tools. Perfect for brands, festivals, social media, and creative portfolios.",
    img: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=200&q=80&auto=format&fit=crop",
    features: ["Short film production", "Concept films", "Festival-ready content", "Social media shorts", "AI-enhanced footage", "Custom storytelling"],
  },
  {
    title: "Website Developing",
    tagline: "AI-Powered Fast-Turnaround Websites",
    desc: "We build fully functional, modern websites using AI tools. Layout, content, and styling generated based on your brand. Fully responsive and SEO-optimized.",
    img: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?w=200&q=80&auto=format&fit=crop",
    features: ["AI-generated layouts", "Responsive design", "SEO optimization", "Content generation", "Contact forms & CTAs", "Fast turnaround (3-5 days)"],
  },
];

export default function Services() {
  return (
    <>
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[11px] tracking-[0.2em] uppercase text-accent-400 mb-3">
              Our Services
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              We Make Films Using AI Tools
            </h1>
            <p className="text-grey-400 text-lg max-w-2xl mx-auto">
              Movies, short films, ad commercials, and websites — produced with the latest AI filmmaking tools.
            </p>
          </div>

          <div className="space-y-6">
            {services.map((a, i) => (
              <div key={i} className="rounded-2xl border border-white/5 bg-card p-8 md:p-10 hover:border-accent-600/20 transition-all duration-500 group">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                  <div>
                    <img src={a.img} alt={a.title} className="w-14 h-14 rounded-xl object-cover mb-4" />
                    <p className="text-[11px] tracking-[0.2em] uppercase text-accent-400 mb-1">{a.tagline}</p>
                    <h2 className="text-2xl font-bold mb-4">{a.title}</h2>
                    <p className="text-grey-400 leading-relaxed mb-6">{a.desc}</p>
                    <Link href="/contact" className="inline-flex px-5 py-2.5 rounded-lg bg-accent-600 text-white text-[11px] font-bold tracking-[0.15em] uppercase hover:bg-accent-500 transition-all">
                      Get Started
                    </Link>
                  </div>
                  <div>
                    <p className="text-[11px] tracking-[0.2em] uppercase text-grey-500 mb-4">Key Features</p>
                    <ul className="space-y-3">
                      {a.features.map((f, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-grey-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-1.5 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="rounded-3xl border border-white/5 bg-gradient-to-br from-accent-900/30 to-card p-12 md:p-16">
            <p className="text-[11px] tracking-[0.2em] uppercase text-accent-400 mb-4">Not Sure Where to Start?</p>
            <h2 className="text-3xl font-bold mb-6">We&apos;ll Guide You</h2>
            <p className="text-grey-400 mb-8 max-w-lg mx-auto">
              Tell us about your project — we&apos;ll pick the right AI tools and deliver a tailored production plan.
            </p>
            <Link href="/contact" className="inline-flex px-8 py-3.5 rounded-lg bg-accent-600 text-white text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-accent-500 transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
