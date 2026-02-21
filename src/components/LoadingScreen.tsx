import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bootLines = [
  '> Initializing neural interface...',
  '> Loading holographic display...',
  '> Connecting to mainframe...',
  '> Decrypting portfolio data...',
  '> Rendering cyberpunk UI...',
  '> System ready.',
];

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(interval); return 100; }
        return p + 2;
      });
    }, 40);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (visibleLines < bootLines.length) {
      const t = setTimeout(() => setVisibleLines(v => v + 1), 350);
      return () => clearTimeout(t);
    }
  }, [visibleLines]);

  useEffect(() => {
    if (progress >= 100) {
      const t = setTimeout(() => setExiting(true), 400);
      return () => clearTimeout(t);
    }
  }, [progress]);

  useEffect(() => {
    if (exiting) {
      const t = setTimeout(onComplete, 800);
      return () => clearTimeout(t);
    }
  }, [exiting, onComplete]);

  return (
    <AnimatePresence>
      {!exiting ? (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ background: 'hsl(222 47% 3%)' }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        >
          {/* Scanlines */}
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(190 100% 55% / 0.03) 2px, hsl(190 100% 55% / 0.03) 4px)',
            }}
          />

          {/* Center content */}
          <div className="relative w-full max-w-md px-8">
            {/* Glitch title */}
            <motion.h1
              className="glitch-text gradient-text text-glow text-3xl md:text-4xl font-display font-bold text-center mb-10"
              data-text="ADARSH.DEV"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              ADARSH.DEV
            </motion.h1>

            {/* Boot log */}
            <div className="font-mono text-xs space-y-1.5 mb-8 min-h-[140px]">
              {bootLines.slice(0, visibleLines).map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ color: i === bootLines.length - 1 ? 'hsl(160 80% 55%)' : 'hsl(190 100% 60% / 0.7)' }}
                >
                  {line}
                </motion.div>
              ))}
              {visibleLines < bootLines.length && (
                <motion.span
                  className="inline-block w-2 h-3.5"
                  style={{ background: 'hsl(190 100% 55%)' }}
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                />
              )}
            </div>

            {/* Progress bar */}
            <div className="relative h-1.5 rounded-full overflow-hidden" style={{ background: 'hsl(222 30% 12%)' }}>
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, hsl(190 100% 55%), hsl(270 100% 70%))',
                  boxShadow: '0 0 15px hsl(190 100% 55% / 0.5)',
                  width: `${progress}%`,
                }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <div className="text-right mt-2">
              <span className="font-mono text-xs" style={{ color: 'hsl(190 100% 55% / 0.6)' }}>{progress}%</span>
            </div>
          </div>

          {/* Corner decorations */}
          {['top-4 left-4', 'top-4 right-4', 'bottom-4 left-4', 'bottom-4 right-4'].map((pos, i) => (
            <div key={i} className={`absolute ${pos} w-6 h-6 pointer-events-none`}>
              <div
                className="absolute"
                style={{
                  width: '100%', height: '1px',
                  background: 'hsl(190 100% 55% / 0.4)',
                  top: i < 2 ? 0 : 'auto', bottom: i >= 2 ? 0 : 'auto',
                }}
              />
              <div
                className="absolute"
                style={{
                  width: '1px', height: '100%',
                  background: 'hsl(190 100% 55% / 0.4)',
                  left: i % 2 === 0 ? 0 : 'auto', right: i % 2 === 1 ? 0 : 'auto',
                }}
              />
            </div>
          ))}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default LoadingScreen;
