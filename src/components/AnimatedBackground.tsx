import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      x: number; y: number; size: number; speedX: number; speedY: number;
      opacity: number; color: string; life: number; maxLife: number; depth: number;

      constructor() {
        this.depth = Math.random();
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = (Math.random() * 1.8 + 0.3) * (0.5 + this.depth * 0.5);
        this.speedX = (Math.random() * 0.15 - 0.075) * (1 - this.depth * 0.5);
        this.speedY = -(Math.random() * 0.25 + 0.04) * (1 - this.depth * 0.3);
        this.opacity = (Math.random() * 0.6 + 0.1) * (0.4 + this.depth * 0.6);
        this.life = Math.random() * 300;
        this.maxLife = Math.random() * 400 + 150;
        const roll = Math.random();
        // Neon cyan / purple / pink palette
        this.color = roll > 0.6 ? '#00e5ff' : roll > 0.3 ? '#a855f7' : '#f0abfc';
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life++;
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130) {
          const force = (130 - dist) / 130;
          this.x -= dx * 0.004 * force * (1 - this.depth * 0.5);
          this.y -= dy * 0.004 * force * (1 - this.depth * 0.5);
        }
        if (this.life > this.maxLife || this.y < -10) {
          this.x = Math.random() * canvas!.width;
          this.y = canvas!.height + 10;
          this.life = 0;
        }
        if (this.x > canvas!.width) this.x = 0;
        if (this.x < 0) this.x = canvas!.width;
      }

      draw() {
        const fadeIn = Math.min(this.life / 40, 1);
        const fadeOut = this.life > this.maxLife - 40 ? Math.max(1 - (this.life - (this.maxLife - 40)) / 40, 0) : 1;
        const alpha = this.opacity * fadeIn * fadeOut;
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fillStyle = this.color;
        ctx!.globalAlpha = alpha;
        ctx!.fill();
        const grad = ctx!.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 6);
        grad.addColorStop(0, this.color);
        grad.addColorStop(1, 'transparent');
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size * 6, 0, Math.PI * 2);
        ctx!.fillStyle = grad;
        ctx!.globalAlpha = alpha * 0.14;
        ctx!.fill();
        ctx!.globalAlpha = 1;
      }
    }

    const drawAmbientGlows = () => {
      const pulse = 0.5 + Math.sin(time * 0.007) * 0.5;
      const pulse2 = 0.5 + Math.sin(time * 0.005 + 2) * 0.5;
      const pulse3 = 0.5 + Math.sin(time * 0.006 + 4) * 0.5;

      // Cyan top-left
      const g1 = ctx.createRadialGradient(canvas.width * 0.12, canvas.height * 0.18, 0, canvas.width * 0.12, canvas.height * 0.18, canvas.width * 0.5);
      g1.addColorStop(0, `rgba(0,229,255, ${0.04 + pulse * 0.025})`);
      g1.addColorStop(1, 'transparent');
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Deep purple bottom-right
      const g2 = ctx.createRadialGradient(canvas.width * 0.88, canvas.height * 0.78, 0, canvas.width * 0.88, canvas.height * 0.78, canvas.width * 0.45);
      g2.addColorStop(0, `rgba(168,85,247, ${0.05 + pulse2 * 0.03})`);
      g2.addColorStop(1, 'transparent');
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Pink center-top
      const g3 = ctx.createRadialGradient(canvas.width * 0.5, canvas.height * 0.05, 0, canvas.width * 0.5, canvas.height * 0.05, canvas.width * 0.3);
      g3.addColorStop(0, `rgba(240,171,252, ${0.02 + pulse3 * 0.015})`);
      g3.addColorStop(1, 'transparent');
      ctx.fillStyle = g3;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Volumetric floor fog — bottom
      const fog = ctx.createRadialGradient(canvas.width * 0.5, canvas.height, 0, canvas.width * 0.5, canvas.height, canvas.width * 0.7);
      fog.addColorStop(0, `rgba(88,28,135, ${0.08 + pulse2 * 0.04})`);
      fog.addColorStop(0.4, `rgba(15,23,42, ${0.05})`);
      fog.addColorStop(1, 'transparent');
      ctx.fillStyle = fog;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Vignette
      const vignette = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, canvas.width * 0.2, canvas.width / 2, canvas.height / 2, canvas.width * 0.8);
      vignette.addColorStop(0, 'transparent');
      vignette.addColorStop(1, 'rgba(0,0,0,0.35)');
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    // Holographic perspective grid floor
    const drawHoloGrid = () => {
      const scrollOffset = (time * 0.6) % 60;
      const vanishY = canvas.height * 0.65;
      const cx = canvas.width / 2 + mouseX * 0.02;

      ctx.save();
      ctx.globalAlpha = 0.0;

      // Horizontal lines — perspective converge
      for (let i = 0; i < 18; i++) {
        const t = i / 18;
        const y = vanishY + (canvas.height - vanishY) * (t * t) + scrollOffset * (1 - t);
        const spread = (canvas.width * 1.2) * t;
        const alpha = t * 0.055 * (0.5 + 0.5 * Math.sin(time * 0.005 + i));
        ctx.beginPath();
        ctx.moveTo(cx - spread, y);
        ctx.lineTo(cx + spread, y);
        ctx.strokeStyle = `rgba(0,229,255, ${alpha})`;
        ctx.lineWidth = 0.7;
        ctx.globalAlpha = 1;
        ctx.stroke();
        ctx.globalAlpha = 0;
      }

      // Vertical lines radiating from vanish point
      const lineCount = 16;
      for (let i = 0; i <= lineCount; i++) {
        const frac = i / lineCount;
        const angle = -0.6 + frac * 1.2;
        const endX = cx + Math.tan(angle) * (canvas.height - vanishY);
        const alpha = (1 - Math.abs(frac - 0.5) * 2) * 0.04;
        ctx.beginPath();
        ctx.moveTo(cx, vanishY);
        ctx.lineTo(endX + cx - canvas.width / 2, canvas.height + 20);
        ctx.strokeStyle = `rgba(168,85,247, ${alpha})`;
        ctx.lineWidth = 0.6;
        ctx.globalAlpha = 1;
        ctx.stroke();
        ctx.globalAlpha = 0;
      }

      ctx.restore();
    };

    // Moving top grid
    const drawTopGrid = () => {
      const gridSize = 90;
      const offsetX = (mouseX * 0.015) % gridSize;
      const offsetY = (time * 0.12) % gridSize;
      ctx.strokeStyle = 'rgba(0,229,255, 0.022)';
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      for (let x = -gridSize + offsetX; x < canvas.width + gridSize; x += gridSize) {
        ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height);
      }
      for (let y = -gridSize + offsetY; y < canvas.height * 0.65; y += gridSize) {
        ctx.moveTo(0, y); ctx.lineTo(canvas.width, y);
      }
      ctx.stroke();
    };

    const initParticles = () => {
      particles = [];
      const num = Math.floor((canvas.width * canvas.height) / 12000);
      for (let i = 0; i < num; i++) particles.push(new Particle());
    };

    const animate = () => {
      time++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawAmbientGlows();
      drawTopGrid();
      drawHoloGrid();
      particles.sort((a, b) => a.depth - b.depth);
      particles.forEach(p => { p.update(); p.draw(); });
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouse = (e: MouseEvent) => { mouseX = e.clientX; mouseY = e.clientY; };
    const handleResize = () => { resizeCanvas(); initParticles(); };

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouse);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
      <div className="scanlines" />
      <div className="fog-overlay" />
    </>
  );
};

export default AnimatedBackground;
