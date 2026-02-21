import { motion, useInView } from 'framer-motion';
import { useRef, useMemo } from 'react';

const skills = [
  { label: 'React', value: 85 },
  { label: 'Java', value: 80 },
  { label: 'Python', value: 75 },
  { label: 'DSA', value: 78 },
  { label: 'AI/ML', value: 65 },
  { label: 'Android', value: 80 },
];

const SIZE = 300;
const CENTER = SIZE / 2;
const LEVELS = 5;
const RADIUS = 120;

const polarToCartesian = (angle: number, radius: number) => ({
  x: CENTER + radius * Math.cos(angle - Math.PI / 2),
  y: CENTER + radius * Math.sin(angle - Math.PI / 2),
});

const SkillsRadarChart = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const count = skills.length;
  const angleStep = (2 * Math.PI) / count;

  const gridPaths = useMemo(() => {
    return Array.from({ length: LEVELS }, (_, level) => {
      const r = (RADIUS / LEVELS) * (level + 1);
      const points = skills.map((_, i) => {
        const { x, y } = polarToCartesian(i * angleStep, r);
        return `${x},${y}`;
      });
      return `M${points.join('L')}Z`;
    });
  }, [angleStep]);

  const axisLines = useMemo(() => {
    return skills.map((_, i) => {
      const { x, y } = polarToCartesian(i * angleStep, RADIUS);
      return { x1: CENTER, y1: CENTER, x2: x, y2: y };
    });
  }, [angleStep]);

  const dataPath = useMemo(() => {
    const points = skills.map((s, i) => {
      const r = (s.value / 100) * RADIUS;
      const { x, y } = polarToCartesian(i * angleStep, r);
      return `${x},${y}`;
    });
    return `M${points.join('L')}Z`;
  }, [angleStep]);

  const labelPositions = useMemo(() => {
    return skills.map((s, i) => {
      const { x, y } = polarToCartesian(i * angleStep, RADIUS + 22);
      return { ...s, x, y };
    });
  }, [angleStep]);

  const dotPositions = useMemo(() => {
    return skills.map((s, i) => {
      const r = (s.value / 100) * RADIUS;
      return polarToCartesian(i * angleStep, r);
    });
  }, [angleStep]);

  return (
    <div ref={ref} className="flex justify-center">
      <div className="relative">
        <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`} className="overflow-visible">
          <defs>
            <radialGradient id="radarGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(190 100% 55%)" stopOpacity="0.15" />
              <stop offset="100%" stopColor="hsl(270 100% 70%)" stopOpacity="0.02" />
            </radialGradient>
            <filter id="neonFilter">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="dotGlow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Background glow */}
          <circle cx={CENTER} cy={CENTER} r={RADIUS} fill="url(#radarGlow)" />

          {/* Grid levels */}
          {gridPaths.map((d, i) => (
            <motion.path
              key={i}
              d={d}
              fill="none"
              stroke="hsl(190 100% 55%)"
              strokeOpacity={0.08 + i * 0.03}
              strokeWidth={0.5}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              style={{ transformOrigin: 'center' }}
            />
          ))}

          {/* Axis lines */}
          {axisLines.map((line, i) => (
            <motion.line
              key={i}
              {...line}
              stroke="hsl(270 100% 70%)"
              strokeOpacity={0.1}
              strokeWidth={0.5}
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.05 }}
            />
          ))}

          {/* Data shape - glow layer */}
          <motion.path
            d={dataPath}
            fill="hsl(190 100% 55% / 0.08)"
            stroke="hsl(190 100% 55%)"
            strokeWidth={2}
            filter="url(#neonFilter)"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 0.5, scale: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
            style={{ transformOrigin: 'center' }}
          />

          {/* Data shape - main */}
          <motion.path
            d={dataPath}
            fill="hsl(190 100% 55% / 0.12)"
            stroke="url(#radarStrokeGrad)"
            strokeWidth={1.5}
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 1.8, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
          />

          {/* Gradient for stroke */}
          <defs>
            <linearGradient id="radarStrokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(190 100% 55%)" />
              <stop offset="50%" stopColor="hsl(270 100% 70%)" />
              <stop offset="100%" stopColor="hsl(330 90% 65%)" />
            </linearGradient>
          </defs>

          {/* Data points */}
          {dotPositions.map((pos, i) => (
            <motion.circle
              key={i}
              cx={pos.x}
              cy={pos.y}
              r={4}
              fill="hsl(190 100% 55%)"
              filter="url(#dotGlow)"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.8 + i * 0.1, type: 'spring', stiffness: 300 }}
            />
          ))}

          {/* Labels */}
          {labelPositions.map((item, i) => (
            <motion.text
              key={i}
              x={item.x}
              y={item.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="hsl(190 100% 70%)"
              fontSize={10}
              fontFamily="'JetBrains Mono', monospace"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 1 + i * 0.08 }}
            >
              {item.label}
            </motion.text>
          ))}

          {/* Value labels */}
          {labelPositions.map((item, i) => (
            <motion.text
              key={`val-${i}`}
              x={item.x}
              y={item.y + 13}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="hsl(270 100% 78%)"
              fontSize={8}
              fontFamily="'JetBrains Mono', monospace"
              opacity={0.6}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 0.6 } : {}}
              transition={{ duration: 0.5, delay: 1.2 + i * 0.08 }}
            >
              {item.value}%
            </motion.text>
          ))}
        </svg>

        {/* Center pulse */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 8,
            height: 8,
            top: CENTER - 4,
            left: CENTER - 4,
            background: 'hsl(190 100% 55%)',
            boxShadow: '0 0 15px hsl(190 100% 55%), 0 0 30px hsl(190 100% 55% / 0.5)',
          }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
    </div>
  );
};

export default SkillsRadarChart;
