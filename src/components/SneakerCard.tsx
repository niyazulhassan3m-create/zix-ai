"use client";

import { useEffect, useRef } from "react";

const SHOE_IMAGE =
  "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80&auto=format&fit=crop";

export default function SneakerCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const onMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.setProperty("--tilt-x", `${x * 8}deg`);
      card.style.setProperty("--tilt-y", `${y * -8}deg`);
    };
    card.addEventListener("mousemove", onMove);
    return () => {
      card.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0d0d0d] p-6">
      <div
        ref={cardRef}
        className="relative w-full max-w-sm rounded-2xl overflow-hidden transition-transform duration-200 ease-out"
        style={{ transform: "perspective(800px) rotateX(var(--tilt-y, 0deg)) rotateY(var(--tilt-x, 0deg))" }}
      >
        {/* SVG filter for liquid distortion */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" style={{ filter: "url(#liquid)" }}>
          <defs>
            <filter id="liquid">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.015 0.025"
                numOctaves="3"
                seed="2"
                result="noise"
              >
                <animate
                  attributeName="baseFrequency"
                  values="0.015 0.025;0.02 0.035;0.015 0.025"
                  dur="8s"
                  repeatCount="indefinite"
                />
              </feTurbulence>
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="12" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>
        </svg>

        {/* Neon glow border layer */}
        <div
          className="absolute -inset-[1px] rounded-2xl opacity-70 pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(135deg, #00d4ff, #7b2ff7, #00d4ff, #7b2ff7)",
            backgroundSize: "300% 300%",
            animation: "neonBorder 6s ease-in-out infinite",
            filter: "blur(4px)",
          }}
        />

        {/* Thin neon border */}
        <div
          className="absolute -inset-[1px] rounded-2xl pointer-events-none z-20"
          style={{
            background:
              "linear-gradient(135deg, #00d4ff, #7b2ff7, #00d4ff, #7b2ff7)",
            backgroundSize: "300% 300%",
            animation: "neonBorder 6s ease-in-out infinite",
          }}
        />

        {/* Main glass card body */}
        <div
          className="relative rounded-2xl overflow-hidden z-30"
          style={{
            background: "rgba(255, 255, 255, 0.04)",
            backdropFilter: "blur(40px) saturate(1.4)",
            WebkitBackdropFilter: "blur(40px) saturate(1.4)",
          }}
        >
          {/* Wavy liquid refraction overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen"
            style={{
              background:
                "radial-gradient(ellipse at 30% 20%, rgba(0, 212, 255, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(123, 47, 247, 0.08) 0%, transparent 50%)",
              animation: "liquidWave 12s ease-in-out infinite",
            }}
          />

          {/* Animated sheen */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(105deg, transparent 25%, rgba(255,255,255,0.06) 35%, rgba(255,255,255,0.02) 40%, transparent 50%)",
              backgroundSize: "300% 100%",
              animation: "liquidSheen 7s ease-in-out infinite",
            }}
          />

          {/* Ambient glow spots */}
          <div
            className="absolute -top-24 -right-24 w-48 h-48 rounded-full pointer-events-none opacity-30"
            style={{
              background: "radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />
          <div
            className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full pointer-events-none opacity-30"
            style={{
              background: "radial-gradient(circle, rgba(123,47,247,0.15) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />

          {/* Content */}
          <div className="relative z-40 p-6">
            {/* Image container */}
            <div className="relative mb-6 flex items-center justify-center">
              <div
                className="relative w-full aspect-square max-w-[280px] mx-auto"
                style={{
                  filter:
                    "drop-shadow(0 20px 40px rgba(0,0,0,0.5)) drop-shadow(0 0 30px rgba(0,212,255,0.1))",
                }}
              >
                <img
                  src={SHOE_IMAGE}
                  alt="Shadow Runner sneaker"
                  className="w-full h-full object-contain"
                  style={{
                    animation: "floatShoe 4s ease-in-out infinite",
                  }}
                />
              </div>

              {/* Floating badge */}
              <div
                className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase"
                style={{
                  background: "rgba(0, 212, 255, 0.12)",
                  border: "1px solid rgba(0, 212, 255, 0.2)",
                  color: "#80e0ff",
                  backdropFilter: "blur(8px)",
                }}
              >
                New Drop
              </div>
            </div>

            {/* Typography */}
            <div className="text-center">
              <h3
                className="text-2xl font-bold tracking-tight mb-1"
                style={{
                  background: "linear-gradient(135deg, #ffffff 60%, rgba(255,255,255,0.7))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Shadow Runner
              </h3>
              <p className="text-grey-400 text-sm tracking-wide mb-4">
                Precision-crafted knit upper
              </p>
              <div className="flex items-center justify-center gap-3">
                <span
                  className="text-3xl font-bold tracking-tight"
                  style={{
                    background: "linear-gradient(135deg, #00d4ff, #7b2ff7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  $130
                </span>
                <span className="text-grey-600 text-sm line-through">$189</span>
              </div>

              {/* Action button */}
              <button
                className="mt-5 w-full py-3 rounded-xl text-sm font-bold tracking-wider uppercase transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,212,255,0.15), rgba(123,47,247,0.15))",
                  border: "1px solid rgba(0, 212, 255, 0.15)",
                  color: "#ffffff",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(135deg, rgba(0,212,255,0.25), rgba(123,47,247,0.25))";
                  e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(135deg, rgba(0,212,255,0.15), rgba(123,47,247,0.15))";
                  e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.15)";
                }}
              >
                Quick Add
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes neonBorder {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes liquidWave {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(2%, 1%) scale(1.02); }
          50% { transform: translate(-1%, -1%) scale(0.98); }
          75% { transform: translate(1%, -2%) scale(1.01); }
        }
        @keyframes floatShoe {
          0%, 100% { transform: translateY(0) rotate(-1deg); }
          50% { transform: translateY(-8px) rotate(1deg); }
        }
      `}</style>
    </div>
  );
}
