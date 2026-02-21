import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.remove('light');
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
  }, [isDark]);

  return (
    <motion.button
      onClick={() => setIsDark(!isDark)}
      className="fixed top-5 right-5 z-[60] w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
      style={{
        background: isDark ? 'hsl(222 40% 7% / 0.8)' : 'hsl(210 30% 96% / 0.9)',
        border: `1px solid ${isDark ? 'hsl(190 100% 55% / 0.3)' : 'hsl(270 60% 50% / 0.3)'}`,
        boxShadow: isDark
          ? '0 0 20px hsl(190 100% 55% / 0.15)'
          : '0 0 20px hsl(270 60% 50% / 0.15)',
        backdropFilter: 'blur(20px)',
        color: isDark ? 'hsl(190 100% 65%)' : 'hsl(270 60% 45%)',
      }}
      whileHover={{ scale: 1.1, boxShadow: isDark ? '0 0 30px hsl(190 100% 55% / 0.3)' : '0 0 30px hsl(270 60% 50% / 0.3)' }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      <motion.div
        key={isDark ? 'moon' : 'sun'}
        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? <Moon size={18} /> : <Sun size={18} />}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
