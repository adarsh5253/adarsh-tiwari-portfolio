import { useInView } from 'framer-motion';
import { useRef } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'zoom' | 'flip-x' | 'flip-y';

interface RevealOptions {
  once?: boolean;
  margin?: string;
  delay?: number;
  duration?: number;
  direction?: Direction;
  distance?: number;
  rotateAmount?: number;
}

const directionMap: Record<Direction, object> = {
  up:      { opacity: 0, y: 60, rotateX: 12 },
  down:    { opacity: 0, y: -60, rotateX: -12 },
  left:    { opacity: 0, x: -80, rotateY: 15 },
  right:   { opacity: 0, x: 80, rotateY: -15 },
  zoom:    { opacity: 0, scale: 0.7, rotateX: 8 },
  'flip-x':{ opacity: 0, rotateX: 90, y: 30 },
  'flip-y':{ opacity: 0, rotateY: 90, x: 30 },
};

export const useScrollReveal = (options: RevealOptions = {}) => {
  const {
    once = true,
    margin = '-80px',
    delay = 0,
    duration = 0.8,
    direction = 'up',
  } = options;

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: margin as `${number}px` });

  const hidden = directionMap[direction];
  const visible = { opacity: 1, y: 0, x: 0, scale: 1, rotateX: 0, rotateY: 0 };

  const variants = {
    hidden,
    visible: {
      ...visible,
      transition: {
        duration,
        delay,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  return { ref, isInView, variants };
};
