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
    let gridOffset = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;
      life: number;
      maxLife: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 1.5 + 0.3;
        this.speedX = Math.random() * 0.3 - 0.15;
        this.speedY = -(Math.random() * 0.5 + 0.1);
        this.opacity = Math.random() * 0.8 + 0.2;
        this.life = 0;
        this.maxLife = Math.random() * 200 + 100;
        const colors = ['#00e5ff', '#b83dff', '#ff3d8e', '#00e5ff'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life++;

        if (this.life > this.maxLife) {
          this.x = Math.random() * canvas!.width;
          this.y = canvas!.height + 10;
          this.life = 0;
        }

        if (this.x > canvas!.width) this.x = 0;
        if (this.x < 0) this.x = canvas!.width;
      }

      draw() {
        const fadeIn = Math.min(this.life / 20, 1);
        const fadeOut = Math.max(1 - (this.life - this.maxLife + 20) / 20, 0);
        const alpha = this.opacity * fadeIn * (this.life > this.maxLife - 20 ? fadeOut : 1);
        
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fillStyle = this.color;
        ctx!.globalAlpha = alpha;
        ctx!.fill();
        
        // Glow
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
        const grad = ctx!.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 3);
        grad.addColorStop(0, this.color);
        grad.addColorStop(1, 'transparent');
        ctx!.fillStyle = grad;
        ctx!.globalAlpha = alpha * 0.3;
        ctx!.fill();
        
        ctx!.globalAlpha = 1;
      }
    }

    const drawGrid = () => {
      const gridSize = 50;
      const horizonY = canvas.height * 0.85;
      
      ctx.save();
      ctx.globalAlpha = 0.08;
      ctx.strokeStyle = '#00e5ff';
      ctx.lineWidth = 0.5;
      
      // Horizontal lines with perspective
      for (let i = 0; i < 20; i++) {
        const y = horizonY + (i * i * 2) + (gridOffset % (gridSize));
        if (y > canvas.height) continue;
        const alpha = 0.08 * (1 - (y - horizonY) / (canvas.height - horizonY));
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Vertical lines converging
      const vanishX = canvas.width / 2;
      ctx.globalAlpha = 0.06;
      for (let i = -15; i <= 15; i++) {
        const bottomX = vanishX + i * gridSize * 3;
        ctx.beginPath();
        ctx.moveTo(vanishX, horizonY);
        ctx.lineTo(bottomX, canvas.height);
        ctx.stroke();
      }
      
      ctx.restore();
    };

    const drawVolumetricLight = () => {
      // Top volumetric fog
      const grad = ctx.createRadialGradient(
        canvas.width / 2, 0, 0,
        canvas.width / 2, 0, canvas.height * 0.6
      );
      grad.addColorStop(0, 'rgba(0, 229, 255, 0.03)');
      grad.addColorStop(0.5, 'rgba(184, 61, 255, 0.02)');
      grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Bottom fog
      const fogGrad = ctx.createLinearGradient(0, canvas.height * 0.7, 0, canvas.height);
      fogGrad.addColorStop(0, 'transparent');
      fogGrad.addColorStop(1, 'rgba(0, 229, 255, 0.04)');
      ctx.fillStyle = fogGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const initParticles = () => {
      particles = [];
      const numParticles = Math.floor((canvas.width * canvas.height) / 12000);
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      gridOffset += 0.3;
      drawGrid();
      drawVolumetricLight();

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    animate();

    const handleResize = () => {
      resizeCanvas();
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
      />
      {/* Scanline overlay */}
      <div className="scanlines" />
    </>
  );
};

export default AnimatedBackground;
