import Link from "next/link";

export default function Logo({ className = "h-16 w-auto" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center ${className.includes("h-") ? "" : "h-16"}`}>
      <img
        src="/LogoX.png"
        alt="ZiX AI Solutions"
        className="h-full w-auto object-contain"
        style={{ mixBlendMode: "multiply" }}
      />
    </Link>
  );
}
