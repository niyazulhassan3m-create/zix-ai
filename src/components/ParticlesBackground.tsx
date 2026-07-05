"use client";

import { useEffect, useRef } from "react";

interface Dot {
  size: number;
  brightness: number;
}

interface HelixPair {
  t: number;
  speed: number;
  a: Dot;
  b: Dot;
}

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    const cx = W / 2;
    const R = Math.min(W, H) * 0.13;
    const helixSpan = H * 0.85;
    const count = 30;

    const pairs: HelixPair[] = Array.from({ length: count }, (_, i) => ({
      t: i / count,
      speed: 0.15 + Math.random() * 0.05,
      a: { size: 1.2 + Math.random() * 1.8, brightness: 0.3 + Math.random() * 0.5 },
      b: { size: 1.2 + Math.random() * 1.8, brightness: 0.3 + Math.random() * 0.5 },
    }));

    let angle = 0;

    const toY = (t: number) => (H - helixSpan) / 2 + t * helixSpan;
    const toPos = (t: number, phase: number) => {
      const theta = t * Math.PI * 4 + phase + angle;
      return {
        x: cx + Math.cos(theta) * R,
        z: Math.sin(theta) * R,
        y: toY(t),
      };
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      const active = pairs.filter((p) => p.t > 0.001 && p.t < 0.999);

      for (const pair of active) {
        for (const phase of [0, Math.PI] as const) {
          const dot = phase === 0 ? pair.a : pair.b;
          const pos = toPos(pair.t, phase);
          const depthNorm = (pos.z / R + 1) / 2;
          const depthAlpha = 0.25 + depthNorm * 0.55;
          const scale = 0.5 + depthNorm * 0.5;

          ctx.beginPath();
          ctx.arc(pos.x, pos.y, dot.size * scale, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(200, 74, 74, ${dot.brightness * depthAlpha * 0.5})`;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(pos.x, pos.y, dot.size * scale * 0.4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(240, 160, 160, ${dot.brightness * depthAlpha * 0.3})`;
          ctx.fill();
        }
      }

      for (const pair of active) {
        const posA = toPos(pair.t, 0);
        const posB = toPos(pair.t, Math.PI);
        const depthA = (posA.z / R + 1) / 2;
        const depthB = (posB.z / R + 1) / 2;
        const depthAvg = (depthA + depthB) / 2;

        ctx.beginPath();
        ctx.moveTo(posA.x, posA.y);
        ctx.lineTo(posB.x, posB.y);
        ctx.strokeStyle = `rgba(200, 74, 74, ${0.04 + depthAvg * 0.08})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }

      angle += 0.004;
      for (const p of pairs) {
        p.t += p.speed * 0.002;
        if (p.t > 1) {
          p.t -= 1;
          p.a = { size: 1.2 + Math.random() * 1.8, brightness: 0.3 + Math.random() * 0.5 };
          p.b = { size: 1.2 + Math.random() * 1.8, brightness: 0.3 + Math.random() * 0.5 };
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    const onResize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
}
