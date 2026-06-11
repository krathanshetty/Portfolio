import { useEffect, useRef } from "react";

export default function Starfield2({
  starCount = 110,
  nebulaIntensity = 0.18,
}) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const lastRef = useRef(null);
  const starsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      console.error("2D context unavailable");
      return;
    }

    canvas.style.background = "transparent";
    canvas.style.pointerEvents = "none";

    const getSize = () => ({ w: window.innerWidth, h: window.innerHeight });

    const applyCanvasSize = () => {
      const dpr = Math.max(window.devicePixelRatio || 1, 1);
      const { w, h } = getSize();
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      console.info("Starfield2 canvas resized", {
        cssW: w,
        cssH: h,
        attrW: canvas.width,
        attrH: canvas.height,
        dpr,
      });
    };

    const initStars = (count = starCount) => {
      const { w, h } = getSize();
      starsRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        radius: Math.random() * 1.6 + 0.3,
        velocity: 20 + Math.random() * 70,
        twinkleOffset: Math.random() * Math.PI * 2,
        twinkleSpeed: 0.5 + Math.random() * 1.2,
        alphaBase: 0.35 + Math.random() * 0.65,
      }));
      console.info(`Starfield2 initialized ${count} stars`);
    };

    const drawNebula = (w, h, t) => {
      const g1 = ctx.createLinearGradient(0, 0, w, h);
      g1.addColorStop(0, `rgba(6,8,20,${0.0 + nebulaIntensity * 0.6})`);
      g1.addColorStop(0.5, `rgba(18,12,35,${0.02 + nebulaIntensity * 0.12})`);
      g1.addColorStop(1, `rgba(2,2,6,${0.0})`);
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, w, h);

      const cx = w * (0.2 + 0.25 * Math.sin(t * 0.07));
      const cy = h * (0.35 + 0.12 * Math.cos(t * 0.05));
      const rg = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(w, h) * 0.7);
      rg.addColorStop(0, `rgba(140,60,200,${0.06 * nebulaIntensity})`);
      rg.addColorStop(0.25, `rgba(100,60,160,${0.08 * nebulaIntensity})`);
      rg.addColorStop(0.6, `rgba(40,20,80,${0.03 * nebulaIntensity})`);
      rg.addColorStop(1, "rgba(0,0,0,0)");
      ctx.globalCompositeOperation = "lighter";
      ctx.fillStyle = rg;
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = "source-over";
    };

    const drawStar = (s, t) => {
      const twinkle = 0.6 + 0.4 * Math.sin(s.twinkleOffset + t * s.twinkleSpeed * Math.PI * 2);
      const alpha = Math.max(0.12, Math.min(1, s.alphaBase * twinkle));

      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(210,230,255,${alpha})`;
      ctx.fill();

      const glow = Math.min(14, 6 + s.radius * 6);
      const g = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, glow);
      g.addColorStop(0, `rgba(160,220,255,${alpha * 0.55})`);
      g.addColorStop(0.5, `rgba(160,220,255,${alpha * 0.12})`);
      g.addColorStop(1, "rgba(160,220,255,0)");
      ctx.fillStyle = g;
      ctx.fillRect(s.x - glow, s.y - glow, glow * 2, glow * 2);
    };

    const animate = (timestamp) => {
      if (!lastRef.current) lastRef.current = timestamp;
      const deltaMs = timestamp - lastRef.current;
      lastRef.current = timestamp;
      const deltaSec = deltaMs / 1000;
      const t = timestamp / 1000;

      const { w, h } = { w: window.innerWidth, h: window.innerHeight };
      ctx.clearRect(0, 0, w, h);

      drawNebula(w, h, t);

      for (let i = 0; i < starsRef.current.length; i++) {
        const s = starsRef.current[i];
        s.y += s.velocity * deltaSec;
        if (s.y - s.radius > h) {
          s.y = -Math.random() * 20;
          s.x = Math.random() * w;
          s.velocity = 20 + Math.random() * 70;
          s.alphaBase = 0.35 + Math.random() * 0.65;
        }
        drawStar(s, t);
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    applyCanvasSize();
    initStars(starCount);
    rafRef.current = requestAnimationFrame(animate);

    let resizeTimeout = null;
    const prev = { w: window.innerWidth, h: window.innerHeight };
    const onResize = () => {
      const cur = { w: window.innerWidth, h: window.innerHeight };
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        starsRef.current.forEach((s) => {
          s.x = (s.x / prev.w) * cur.w;
          s.y = (s.y / prev.h) * cur.h;
        });
        applyCanvasSize();
      }, 80);
    };
    window.addEventListener("resize", onResize);

    console.info("Starfield2 mounted (debug logs enabled)");

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      aria-hidden
    />
  );
}
