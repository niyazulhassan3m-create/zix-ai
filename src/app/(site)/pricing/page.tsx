import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "0000",
    period: "",
    desc: "Perfect for individuals and small projects.",
    features: [
      { text: "Short Film", detail: "1 short film (up to 5 min) • Script + Storyboard" },
      { text: "Ad Commercial", detail: "2 ad creatives (15-30s) • Social media ready" },
      { text: "Personal Film", detail: "1 demo reel (up to 2 min) • Basic editing" },
      { text: "Website", detail: "1 AI-integrated website • Responsive design" },
      { text: "Email support", detail: "" },
      { text: "Revisions", detail: "2 rounds of revisions per project" },
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Growth",
    price: "0000",
    period: "",
    desc: "For growing brands and businesses.",
    features: [
      { text: "Short Films", detail: "3 films (up to 10 min each) • Advanced VFX" },
      { text: "Ad Commercials", detail: "8 ad creatives (15-60s) • Multi-platform formats" },
      { text: "Personal Films", detail: "3 portfolio films • Custom branding" },
      { text: "Websites", detail: "2 AI-integrated websites • Custom domain" },
      { text: "Priority support", detail: "" },
      { text: "Revisions", detail: "4 rounds of revisions per project" },
    ],
    cta: "Get Started",
    featured: true,
  },
  {
    name: "Professional",
    price: "0000",
    period: "",
    desc: "Full-scale production for serious brands.",
    features: [
      { text: "Films & Shorts", detail: "Unlimited films • Feature-length capable" },
      { text: "Ad Commercials", detail: "Unlimited ads • TV commercial grade" },
      { text: "Personal Films", detail: "Unlimited portfolio films • Premium quality" },
      { text: "Websites", detail: "Unlimited websites • Custom domain • SEO" },
      { text: "Priority & WhatsApp support", detail: "" },
      { text: "Revisions", detail: "Unlimited revisions" },
    ],
    cta: "Get Started",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <>
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-600/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="text-[11px] tracking-[0.2em] uppercase text-accent-400 mb-3">Simple Pricing</p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Choose Your Plan</h1>
            <p className="text-grey-400 text-lg max-w-2xl mx-auto">
              Flexible pricing for filmmakers, brands, and businesses. No hidden fees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((p, i) => (
              <div
                key={i}
                className={`rounded-2xl border p-8 flex flex-col ${
                  p.featured
                    ? "border-accent-600/40 bg-gradient-to-b from-accent-900/20 to-card shadow-lg shadow-accent-600/10 scale-105"
                    : "border-white/5 bg-card"
                }`}
              >
                {p.featured && (
                  <span className="text-[10px] uppercase tracking-[0.2em] text-accent-400 font-bold mb-2">Most Popular</span>
                )}
                <h2 className="text-xl font-bold mb-1">{p.name}</h2>
                <p className="text-grey-400 text-sm mb-4">{p.desc}</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold">{p.price}</span>
                  <span className="text-grey-500 text-sm">{p.period}</span>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {p.features.map((f, j) => (
                    <li key={j} className="text-sm">
                      <div className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-accent-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <div>
                          <p className="text-grey-200 font-medium">{f.text}</p>
                          {f.detail && <p className="text-grey-500 text-[11px]">{f.detail}</p>}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`w-full py-3 rounded-xl text-center text-[11px] font-bold tracking-[0.15em] uppercase transition-all ${
                    p.featured
                      ? "bg-accent-600 text-white hover:bg-accent-500"
                      : "border border-white/10 text-grey-300 hover:bg-white/5"
                  }`}
                >
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* Enterprise */}
          <div className="max-w-5xl mx-auto mt-8">
            <div className="rounded-2xl border border-white/5 bg-gradient-to-br from-accent-900/30 to-card p-8 md:p-12 text-center">
              <h2 className="text-2xl font-bold mb-4">Enterprise</h2>
              <p className="text-grey-400 mb-2">Custom pricing for production houses and agencies.</p>
              <p className="text-sm text-grey-500 mb-6">
                All services included • Unlimited projects • Dedicated production team • 24/7 priority support
              </p>
              <Link href="/contact" className="inline-flex px-8 py-3.5 rounded-lg bg-accent-600 text-white text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-accent-500 transition-all">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
