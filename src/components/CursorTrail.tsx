import { useEffect, useRef, useCallback } from 'react';

interface Particle {
  x: number; y: number; vx: number; vy: number;
  life: number; maxLife: number; size: number;
  hue: number;
}

const CursorTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);
  const isHoveringRef = useRef(false);

  const spawnParticle = useCallback((x: number, y: number) => {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 1.5 + 0.5;
    particlesRef.current.push({
      x, y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 1,
      maxLife: 30 + Math.random() * 20,
      size: Math.random() * 3 + 1,
      hue: Math.random() > 0.5 ? 190 : 270,
    });
    if (particlesRef.current.length > 80) particlesRef.current.shift();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const cursor = cursorRef.current;
    const dot = cursorDotRef.current;
    if (!canvas || !cursor || !dot) return;
    const ctx = canvas.getContext('2d')!;

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener('resize', resize);

    let curX = 0, curY = 0;

    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      spawnParticle(e.clientX, e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      isHoveringRef.current = !!(t.closest('a, button, [role="button"], input, textarea, .hoverable'));
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth follow
      curX += (mouseRef.current.x - curX) * 0.15;
      curY += (mouseRef.current.y - curY) * 0.15;

      const hovering = isHoveringRef.current;
      const scale = hovering ? 1.6 : 1;
      cursor.style.transform = `translate(${curX - 20}px, ${curY - 20}px) scale(${scale})`;
      cursor.style.borderColor = hovering ? 'hsl(270 100% 70% / 0.6)' : 'hsl(190 100% 55% / 0.4)';
      dot.style.transform = `translate(${mouseRef.current.x - 3}px, ${mouseRef.current.y - 3}px)`;
      dot.style.background = hovering ? 'hsl(270 100% 70%)' : 'hsl(190 100% 55%)';

      // Particles
      particlesRef.current.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.96;
        p.vy *= 0.96;
        p.life--;
        const alpha = p.life / p.maxLife;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * alpha, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 100%, 65%, ${alpha * 0.6})`;
        ctx.shadowColor = `hsla(${p.hue}, 100%, 65%, ${alpha * 0.4})`;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
        if (p.life <= 0) particlesRef.current.splice(i, 1);
      });

      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(rafRef.current);
      document.body.style.cursor = '';
    };
  }, [spawnParticle]);

  return (
    <>
      <canvas ref={canvasRef} className="fixed inset-0 z-[9998] pointer-events-none" />
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none w-10 h-10 rounded-full transition-[border-color] duration-300"
        style={{ border: '1.5px solid hsl(190 100% 55% / 0.4)', boxShadow: '0 0 15px hsl(190 100% 55% / 0.15)' }}
      />
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none w-1.5 h-1.5 rounded-full"
        style={{ background: 'hsl(190 100% 55%)', boxShadow: '0 0 8px hsl(190 100% 55% / 0.6)' }}
      />
    </>
  );
};

export default CursorTrail;
