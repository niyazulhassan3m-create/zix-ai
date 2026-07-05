"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  baseA: number;
  targetA: number;
  twinkleSpeed: number;
  twinklePhase: number;
  glow: number;
}

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;

    const count = Math.min(80, Math.floor((w * h) / 16000));
    const stars: Star[] = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      r: Math.random() * 2 + 0.3,
      baseA: Math.random() * 0.5 + 0.15,
      targetA: 1,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      twinklePhase: Math.random() * Math.PI * 2,
      glow: Math.random() > 0.7 ? Math.random() * 12 + 4 : 0,
    }));

    let time = 0;

    const draw = () => {
      time++;
      ctx.clearRect(0, 0, w, h);

      // Draw connections first (under stars)
      const connectDist = 120;
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectDist) {
            const alpha = (1 - dist / connectDist) * 0.2;
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.strokeStyle = `rgba(155, 45, 62, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      for (const s of stars) {
        // Twinkle
        s.targetA =
          s.baseA +
          Math.sin(time * s.twinkleSpeed + s.twinklePhase) * s.baseA * 0.6;

        // Drift
        s.x += s.vx;
        s.y += s.vy;
        if (s.x < 0) s.x = w;
        if (s.x > w) s.x = 0;
        if (s.y < 0) s.y = h;
        if (s.y > h) s.y = 0;

        // Glow
        if (s.glow > 0) {
          const grad = ctx.createRadialGradient(
            s.x,
            s.y,
            0,
            s.x,
            s.y,
            s.glow
          );
          grad.addColorStop(0, `rgba(200, 74, 74, ${s.targetA * 0.15})`);
          grad.addColorStop(1, "rgba(200, 74, 74, 0)");
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.glow, 0, Math.PI * 2);
          ctx.fill();
        }

        // Star dot
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 74, 74, ${s.targetA})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
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
    />
  );
}
