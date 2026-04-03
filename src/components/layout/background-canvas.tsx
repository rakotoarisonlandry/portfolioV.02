"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface Particle {
  x: number; y: number;
  offsetX: number; offsetY: number;
  r: number; alpha: number; color: string;
}

interface Orb {
  x: number; y: number; r: number; color: string; alpha: number;
}

interface GeoShape {
  x: number; y: number; size: number; rotation: number; alpha: number;
}

export function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const W = () => canvas.width;
    const H = () => canvas.height;


    // ── Orbs ──────────────────────────────────────────────────────────
    const orbs: Orb[] = [
      { x: 0.78, y: 0.10, r: 380, color: "#8c02e9", alpha: 0.08 },
      { x: 0.10, y: 0.60, r: 300, color: "#6a00b8", alpha: 0.06 },
      { x: 0.90, y: 0.78, r: 280, color: "#b347f5", alpha: 0.07 },
      { x: 0.42, y: 0.30, r: 240, color: "#8c02e9", alpha: 0.05 },
      { x: 0.25, y: 0.90, r: 200, color: "#d899fa", alpha: 0.06 },
    ].map((o) => ({
      ...o,
      x: o.x * window.innerWidth,
      y: o.y * window.innerHeight,
    }));

    // ── Hexagons ──────────────────────────────────────────────────────
    const geo: GeoShape[] = [
      { x: 0.88, y: 0.08, size: 90, rotation: 0, alpha: 0.12 },
      { x: 0.06, y: 0.75, size: 64, rotation: 0, alpha: 0.09 },
      { x: 0.60, y: 0.85, size: 44, rotation: 0, alpha: 0.10 },
      { x: 0.28, y: 0.04, size: 34, rotation: 0, alpha: 0.08 },
      { x: 0.50, y: 0.55, size: 22, rotation: 0, alpha: 0.06 },
    ].map((g) => ({
      ...g,
      x: g.x * window.innerWidth,
      y: g.y * window.innerHeight,
    }));

    // ── Draw helpers ──────────────────────────────────────────────────
    const drawOrb = (o: Orb) => {
      const grd = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r);
      grd.addColorStop(0, o.color + "ff");
      grd.addColorStop(0.5, o.color + "55");
      grd.addColorStop(1, o.color + "00");
      ctx.globalAlpha = 0.2;
      ctx.fillStyle = grd;
      ctx.beginPath();
      ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawHex = (g: GeoShape) => {
      ctx.save();
      ctx.globalAlpha = 0.2;
      ctx.strokeStyle = "#8c02e9";
      ctx.lineWidth = 1;
      ctx.translate(g.x / 3, g.y *8);
      ctx.rotate(g.rotation);
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 3) * i;
        i === 0
          ? ctx.moveTo(Math.cos(a) * g.size, Math.sin(a) * g.size)
          : ctx.lineTo(Math.cos(a) * g.size, Math.sin(a) * g.size);
      }
      ctx.closePath();
      ctx.stroke();
      ctx.restore();
    };

    // ── Render loop ───────────────────────────────────────────────────
    let rafId: number;
    const draw = () => {
      ctx.clearRect(0, 0, W(), H());
      ctx.globalAlpha = 1;
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, W(), H());
      orbs.forEach(drawOrb);
      ctx.globalAlpha = 1;
      geo.forEach(drawHex);
    
      ctx.globalAlpha = 1;
      rafId = requestAnimationFrame(draw);
    };
    draw();

    orbs.forEach((o, i) => {
      gsap.to(o, {
        x: `random(80, ${W() - 80})`,
        y: `random(60, ${H() - 60})`,
        r: `random(160, 400)`,
        duration: `random(12, 20)`,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 2.2,
      });
      gsap.to(o, {
        alpha: `random(0.03, 0.14)`,
        duration: `random(5, 11)`,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 1.0,
      });
    });

    geo.forEach((g, i) => {
      gsap.to(g, {
        rotation: Math.PI * 2 * (i % 2 === 0 ? 1 : -1),
        duration: 20 + i * 7,
        repeat: -1,
        ease: "none",
      });
      gsap.to(g, {
        alpha: `random(0.03, 0.18)`,
        duration: `random(4, 10)`,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      gsap.killTweensOf([...orbs, ...geo]);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}