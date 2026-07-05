"use client";

import { useEffect, useRef } from "react";

const COLORS = [
  [123, 30, 45],   // #7B1E2D deep maroon
  [155, 45, 62],   // #9B2D3E maroon
  [200, 74, 74],   // #c84a4a warm amber
  [224, 112, 112], // #e07070 light ember
];

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

    const mouse = { x: -9999, y: -9999 };

    const count = Math.min(50, Math.floor((w * h) / 30000));
    const particles = Array.from({ length: count }, () => {
      const ci = Math.floor(Math.random() * COLORS.length);
      return {
        x: Math.random() * w,
        y: Math.random() * h + h,
        vy: -(Math.random() * 0.25 + 0.08),
        vx: (Math.random() - 0.5) * 0.15,
        r: Math.random() * 2.5 + 1.0,
        glowR: Math.random() * 12 + 6,
        color: COLORS[ci],
        phase: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.008,
        wobbleAmp: Math.random() * 0.3 + 0.1,
        wobbleSpeed: Math.random() * 0.01 + 0.005,
        wobbleOffset: Math.random() * Math.PI * 2,
        baseA: Math.random() * 0.4 + 0.2,
      };
    });

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.y += p.vy;
        p.x += p.vx + Math.sin(Date.now() * p.wobbleSpeed + p.wobbleOffset) * p.wobbleAmp;

        if (p.y + p.glowR < 0) {
          p.y = h + p.glowR;
          p.x = Math.random() * w;
        }
        if (p.x < -p.glowR) p.x = w + p.glowR;
        if (p.x > w + p.glowR) p.x = -p.glowR;

        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (120 - dist) / 120;
          p.x += (dx / dist) * force * 1.2;
          p.y += (dy / dist) * force * 1.2;
        }

        const pulse = Math.sin(Date.now() * p.pulseSpeed + p.phase) * 0.3 + 0.7;
        const alpha = p.baseA * pulse * 0.8;

        const [cr, cg, cb] = p.color;

        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.glowR);
        grd.addColorStop(0, `rgba(${cr}, ${cg}, ${cb}, ${alpha * 0.6})`);
        grd.addColorStop(0.3, `rgba(${cr}, ${cg}, ${cb}, ${alpha * 0.2})`);
        grd.addColorStop(1, `rgba(${cr}, ${cg}, ${cb}, 0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.glowR, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${cr}, ${cg}, ${cb}, ${alpha})`;
        ctx.fill();
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    const onMouse = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const onResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };
    window.addEventListener("mousemove", onMouse);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("mouseleave", onLeave);
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
