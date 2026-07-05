"use client";

import { useEffect, useRef } from "react";

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

    const cx = w / 2;
    const cy = h / 2;
    const radius = Math.min(w, h) * 0.1;
    const helixH = h * 0.7;
    const turns = 3;
    const count = 60;

    type Node = { angle: number; y: number; strand: number; index: number; phase: number };

    const nodes: Node[] = [];
    for (let i = 0; i < count; i++) {
      const t = i / count;
      const angle = t * Math.PI * 2 * turns;
      const y = (t - 0.5) * helixH;
      nodes.push({ angle, y, strand: 0, index: i, phase: Math.random() * Math.PI * 2 });
      nodes.push({ angle: angle + Math.PI, y, strand: 1, index: i, phase: Math.random() * Math.PI * 2 });
    }

    const ambient = Array.from({ length: 30 }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      r: Math.random() * 1.5 + 0.5, a: Math.random() * 0.3 + 0.05,
      vx: (Math.random() - 0.5) * 0.15, vy: (Math.random() - 0.5) * 0.15,
      phase: Math.random() * Math.PI * 2,
    }));

    let time = 0;

    const draw = () => {
      time += 0.02;
      ctx.clearRect(0, 0, w, h);

      const cosR = Math.cos(time * 0.3);
      const sinR = Math.sin(time * 0.3);

      const proj: { px: number; py: number; scale: number; strand: number; index: number; phase: number }[] = [];

      for (const n of nodes) {
        const rx = Math.cos(n.angle) * radius;
        const rz = Math.sin(n.angle) * radius;
        const px = cx + rx * cosR - rz * sinR;
        const py = cy + n.y;
        const scale = ((rx * sinR + rz * cosR) + radius) / (radius * 2);
        proj.push({ px, py, scale, strand: n.strand, index: n.index, phase: n.phase });
      }

      for (let s = 0; s < 2; s++) {
        for (let i = 0; i < count - 1; i++) {
          const a = proj[i * 2 + s];
          const b = proj[(i + 1) * 2 + s];
          const avg = (a.scale + b.scale) / 2;
          ctx.beginPath();
          ctx.moveTo(a.px, a.py);
          ctx.lineTo(b.px, b.py);
          ctx.strokeStyle = `rgba(155, 45, 62, ${avg * 0.2})`;
          ctx.lineWidth = Math.max(0.3, avg * 1.2);
          ctx.stroke();
        }
      }

      for (let i = 0; i < count; i++) {
        const a = proj[i * 2];
        const b = proj[i * 2 + 1];
        const avg = (a.scale + b.scale) / 2;
        ctx.beginPath();
        ctx.moveTo(a.px, a.py);
        ctx.lineTo(b.px, b.py);
        ctx.strokeStyle = `rgba(200, 74, 74, ${avg * 0.12})`;
        ctx.lineWidth = Math.max(0.3, avg);
        ctx.stroke();
      }

      proj.sort((a, b) => a.scale - b.scale);
      for (const p of proj) {
        const pulse = (Math.sin(time * 2 + p.phase) + 1) / 2;
        const size = 1.5 + p.scale * 2 + pulse * 0.5;
        const alpha = 0.15 + p.scale * 0.45;
        ctx.beginPath();
        ctx.arc(p.px, p.py, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(224, 112, 112, ${alpha})`;
        ctx.fill();
        if (p.scale > 0.6 && pulse > 0.7) {
          ctx.beginPath();
          ctx.arc(p.px, p.py, size * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(224, 112, 112, ${alpha * 0.15 * pulse})`;
          ctx.fill();
        }
      }

      for (const p of ambient) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
        const pa = (Math.sin(time + p.phase) + 1) / 2;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 74, 74, ${p.a * (0.3 + pa * 0.7)})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => {
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w; canvas.height = h;
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
      style={{ opacity: 0.55 }}
    />
  );
}
