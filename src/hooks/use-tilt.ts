import { useRef, useCallback } from 'react';

interface TiltOptions {
  max?: number;
  perspective?: number;
  scale?: number;
  glare?: boolean;
}

export const useTilt = (options: TiltOptions = {}) => {
  const { max = 15, perspective = 1000, scale = 1.04 } = options;
  const ref = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -max;
    const rotateY = ((x - cx) / cx) * max;

    el.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
    el.style.transition = 'transform 0.1s ease-out';

    if (glareRef.current) {
      const angle = Math.atan2(y - cy, x - cx) * (180 / Math.PI);
      glareRef.current.style.background = `linear-gradient(${angle}deg, hsl(210 100% 80% / 0.18) 0%, transparent 60%)`;
      glareRef.current.style.opacity = '1';
    }
  }, [max, perspective, scale]);

  const handleMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`;
    el.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
    if (glareRef.current) glareRef.current.style.opacity = '0';
  }, [perspective]);

  return { ref, glareRef, handleMouseMove, handleMouseLeave };
};
