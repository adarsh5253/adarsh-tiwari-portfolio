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
    let mouseX = 0;
    let mouseY = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      x: number; y: number; size: number; speedX: number; speedY: number;
      opacity: number; color: string; life: number; maxLife: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 1.2 + 0.2;
        this.speedX = Math.random() * 0.2 - 0.1;
        this.speedY = -(Math.random() * 0.3 + 0.05);
        this.opacity = Math.random() * 0.6 + 0.1;
        this.life = 0;
        this.maxLife = Math.random() * 300 + 150;
        this.color = Math.random() > 0.3 ? '#3b82f6' : '#8b5cf6';
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life++;
        // Subtle mouse interaction
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          this.x -= dx * 0.002;
          this.y -= dy * 0.002;
        }
        if (this.life > this.maxLife) {
          this.x = Math.random() * canvas!.width;
          this.y = canvas!.height + 10;
          this.life = 0;
        }
        if (this.x > canvas!.width) this.x = 0;
        if (this.x < 0) this.x = canvas!.width;
      }

      draw() {
        const fadeIn = Math.min(this.life / 30, 1);
        const fadeOut = Math.max(1 - (this.life - this.maxLife + 30) / 30, 0);
        const alpha = this.opacity * fadeIn * (this.life > this.maxLife - 30 ? fadeOut : 1);
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fillStyle = this.color;
        ctx!.globalAlpha = alpha;
        ctx!.fill();
        // Soft glow
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size * 4, 0, Math.PI * 2);
        const grad = ctx!.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 4);
        grad.addColorStop(0, this.color);
        grad.addColorStop(1, 'transparent');
        ctx!.fillStyle = grad;
        ctx!.globalAlpha = alpha * 0.15;
        ctx!.fill();
        ctx!.globalAlpha = 1;
      }
    }

    const drawAmbientLight = () => {
      // Top left blue glow
      const g1 = ctx.createRadialGradient(0, 0, 0, 0, 0, canvas.width * 0.5);
      g1.addColorStop(0, 'rgba(59, 130, 246, 0.03)');
      g1.addColorStop(1, 'transparent');
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Bottom right purple glow
      const g2 = ctx.createRadialGradient(canvas.width, canvas.height, 0, canvas.width, canvas.height, canvas.width * 0.4);
      g2.addColorStop(0, 'rgba(139, 92, 246, 0.02)');
      g2.addColorStop(1, 'transparent');
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Center subtle vignette
      const g3 = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width * 0.7);
      g3.addColorStop(0, 'transparent');
      g3.addColorStop(1, 'rgba(0, 0, 0, 0.3)');
      ctx.fillStyle = g3;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const initParticles = () => {
      particles = [];
      const num = Math.floor((canvas.width * canvas.height) / 18000);
      for (let i = 0; i < num; i++) particles.push(new Particle());
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawAmbientLight();
      particles.forEach(p => { p.update(); p.draw(); });
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouse = (e: MouseEvent) => { mouseX = e.clientX; mouseY = e.clientY; };

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener('resize', () => { resizeCanvas(); initParticles(); });
    window.addEventListener('mousemove', handleMouse);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', () => { resizeCanvas(); initParticles(); });
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