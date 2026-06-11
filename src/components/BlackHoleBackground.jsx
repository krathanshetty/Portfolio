import { useEffect, useRef } from "react";

export default function BlackHoleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles = [];
    const numParticles = 600;
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const a = canvas.width / 2;
    const b = canvas.height / 3;
    const angleOffset = Math.PI / 4;

    for (let i = 0; i < numParticles; i++) {
      const r = Math.random();
      const angle = Math.random() * 2 * Math.PI;
      particles.push({
        angle,
        radiusFactor: r,
        speed: 0.01 + Math.random() * 0.02,
      });
    }

    const blinkingStars = [];
    const numBlinking = 50;
    for (let i = 0; i < numBlinking; i++) {
      blinkingStars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        alpha: Math.random(),
        delta: 0.01 + Math.random() * 0.02,
      });
    }

    function draw() {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.angle += p.speed;
        const r = p.radiusFactor;
        const x = cx + (a * r * Math.cos(p.angle)) * Math.cos(angleOffset) - (b * r * Math.sin(p.angle)) * Math.sin(angleOffset);
        const y = cy + (a * r * Math.cos(p.angle)) * Math.sin(angleOffset) + (b * r * Math.sin(p.angle)) * Math.cos(angleOffset);
        ctx.fillStyle = "white";
        ctx.fillRect(x, y, 1.5, 1.5);
      });

      blinkingStars.forEach((s) => {
        s.alpha += s.delta;
        if (s.alpha > 1 || s.alpha < 0) s.delta *= -1;
        ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha})`;
        ctx.fillRect(s.x, s.y, 1.5, 1.5);
      });
    }

    function animate() {
      draw();
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0"
    />
  );
}
