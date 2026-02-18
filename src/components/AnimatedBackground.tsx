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
        this.size = (Math.random() * 1.5 + 0.3) * (0.5 + this.depth * 0.5);
        this.speedX = (Math.random() * 0.15 - 0.075) * (1 - this.depth * 0.5);
        this.speedY = -(Math.random() * 0.25 + 0.04) * (1 - this.depth * 0.3);
        this.opacity = (Math.random() * 0.5 + 0.1) * (0.4 + this.depth * 0.6);
        this.life = Math.random() * 300;
        this.maxLife = Math.random() * 400 + 150;
        const roll = Math.random();
        this.color = roll > 0.6 ? '#3b82f6' : roll > 0.3 ? '#8b5cf6' : '#06b6d4';
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life++;
        // Parallax mouse repel
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (120 - dist) / 120;
          this.x -= dx * 0.003 * force * (1 - this.depth * 0.5);
          this.y -= dy * 0.003 * force * (1 - this.depth * 0.5);
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
        // Soft glow halo
        const grad = ctx!.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 5);
        grad.addColorStop(0, this.color);
        grad.addColorStop(1, 'transparent');
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size * 5, 0, Math.PI * 2);
        ctx!.fillStyle = grad;
        ctx!.globalAlpha = alpha * 0.12;
        ctx!.fill();
        ctx!.globalAlpha = 1;
      }
    }

    const drawAmbientGlows = () => {
      // Subtle breathing blue orb top-left
      const pulse = 0.5 + Math.sin(time * 0.008) * 0.5;
      const g1 = ctx.createRadialGradient(
        canvas.width * 0.15, canvas.height * 0.2, 0,
        canvas.width * 0.15, canvas.height * 0.2, canvas.width * 0.45
      );
      g1.addColorStop(0, `rgba(59, 130, 246, ${0.025 + pulse * 0.015})`);
      g1.addColorStop(1, 'transparent');
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Purple orb bottom-right
      const pulse2 = 0.5 + Math.sin(time * 0.006 + 2) * 0.5;
      const g2 = ctx.createRadialGradient(
        canvas.width * 0.85, canvas.height * 0.75, 0,
        canvas.width * 0.85, canvas.height * 0.75, canvas.width * 0.4
      );
      g2.addColorStop(0, `rgba(139, 92, 246, ${0.02 + pulse2 * 0.012})`);
      g2.addColorStop(1, 'transparent');
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Cyan center-bottom
      const pulse3 = 0.5 + Math.sin(time * 0.005 + 4) * 0.5;
      const g3 = ctx.createRadialGradient(
        canvas.width * 0.5, canvas.height * 0.9, 0,
        canvas.width * 0.5, canvas.height * 0.9, canvas.width * 0.35
      );
      g3.addColorStop(0, `rgba(6, 182, 212, ${0.015 + pulse3 * 0.01})`);
      g3.addColorStop(1, 'transparent');
      ctx.fillStyle = g3;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Subtle edge vignette
      const vignette = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, canvas.width * 0.25,
        canvas.width / 2, canvas.height / 2, canvas.width * 0.75
      );
      vignette.addColorStop(0, 'transparent');
      vignette.addColorStop(1, 'rgba(0,0,0,0.25)');
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    // Very subtle floating grid lines
    const drawGrid = () => {
      const gridSize = 80;
      const offsetX = (mouseX * 0.01) % gridSize;
      const offsetY = (time * 0.1) % gridSize;
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.025)';
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      for (let x = -gridSize + offsetX; x < canvas.width + gridSize; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
      }
      for (let y = -gridSize + offsetY; y < canvas.height + gridSize; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
      }
      ctx.stroke();
    };

    const initParticles = () => {
      particles = [];
      const num = Math.floor((canvas.width * canvas.height) / 14000);
      for (let i = 0; i < num; i++) particles.push(new Particle());
    };

    const animate = () => {
      time++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawAmbientGlows();
      drawGrid();
      // Sort by depth for layering
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
    </>
  );
};

export default AnimatedBackground;
