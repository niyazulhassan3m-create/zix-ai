export default function GlassCard({
  children,
  className = "",
  hover = true,
  floatDelay,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  floatDelay?: number;
}) {
  return (
    <div
      className={`group/card relative ${className}`}
      style={floatDelay !== undefined ? { animation: `float 3s ease-in-out infinite`, animationDelay: `${floatDelay}s` } : undefined}
    >
      {/* Animated liquid gradient border wrapper */}
      <div
        className="relative rounded-2xl bg-gradient-to-br from-accent-600/25 via-accent-700/10 to-accent-500/15 p-[1px]"
        style={{ animation: "liquidShimmer 6s ease-in-out infinite" }}
      >
        {/* Glass body */}
        <div className="relative rounded-2xl bg-white/[0.04] backdrop-blur-2xl overflow-hidden h-full">
          {/* Liquid sheen */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(105deg, transparent 35%, rgba(224,112,112,0.07) 45%, rgba(224,112,112,0.02) 50%, transparent 60%)",
              backgroundSize: "300% 100%",
              animation: "liquidSheen 7s ease-in-out infinite",
            }}
          />

          {/* Top highlight */}
          <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Ambient glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-accent-600/8 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-accent-500/5 blur-3xl pointer-events-none" />

          {/* Content */}
          <div className="relative z-10">{children}</div>
        </div>
      </div>
    </div>
  );
}
