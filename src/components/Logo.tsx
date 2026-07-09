import Link from "next/link";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center ${className || "h-10"}`}>
      <img
        src="/LogoX-transparent.png"
        alt="ZiX AI Solutions"
        className="h-full w-auto object-contain"
        style={{
          filter:
            "brightness(1.6) saturate(1.6) contrast(1.3) drop-shadow(0 0 12px rgba(200,74,74,0.4))",
        }}
      />
    </Link>
  );
}
