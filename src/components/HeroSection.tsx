import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Download, Mail, Github, Linkedin, Sparkles, Zap } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.png';
import { useState, useEffect } from 'react';

const roles = ['Web Developer', 'Android Developer', 'AI Explorer', 'Problem Solver'];

const TypingAnimation = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    if (isPaused) {
      const t = setTimeout(() => { setIsPaused(false); setIsDeleting(true); }, 1800);
      return () => clearTimeout(t);
    }
    if (isDeleting) {
      if (displayed.length === 0) { setIsDeleting(false); setRoleIndex(p => (p + 1) % roles.length); return; }
      const t = setTimeout(() => setDisplayed(d => d.slice(0, -1)), 50);
      return () => clearTimeout(t);
    }
    if (displayed.length < current.length) {
      const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 90);
      return () => clearTimeout(t);
    }
    setIsPaused(true);
  }, [displayed, isDeleting, isPaused, roleIndex]);

  return (
    <span className="inline-flex items-center gap-0">
      <span className="gradient-text text-glow">{displayed}</span>
      <motion.span
        className="inline-block w-[3px] h-[1em] ml-1 rounded-sm align-middle"
        style={{ background: 'hsl(190 100% 55%)' }}
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
      />
    </span>
  );
};

/* ── Glitch Name ─────────────────────────────────────────── */
const GlitchName = () => (
  <span
    className="glitch-text gradient-text text-glow"
    data-text="Adarsh Tiwari"
    style={{ display: 'inline-block' }}
  >
    Adarsh Tiwari
  </span>
);

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Ambient orbs */}
      <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(190 100% 55% / 0.07) 0%, transparent 70%)' }} />
      <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(270 100% 70% / 0.06) 0%, transparent 70%)' }} />

      {/* Cyber-scan line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute left-0 right-0 h-px opacity-40"
          style={{ background: 'linear-gradient(90deg, transparent, hsl(190 100% 55% / 0.8), transparent)' }}
          animate={{ top: ['0%', '100%'] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear', repeatDelay: 3 }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">

          {/* Left: Text content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -60, rotateY: -8 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            style={{ perspective: '1200px' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{
                background: 'hsl(190 100% 55% / 0.07)',
                border: '1px solid hsl(190 100% 55% / 0.2)',
                boxShadow: '0 0 20px hsl(190 100% 55% / 0.1)',
              }}
            >
              <Zap size={13} style={{ color: 'hsl(190 100% 65%)' }} />
              <span className="text-xs font-mono" style={{ color: 'hsl(190 100% 70%)' }}>Available for opportunities</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-[1.1]">
              <motion.span
                className="block text-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                Hi, I'm
              </motion.span>
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <GlitchName />
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl font-body font-light mb-4 max-w-lg mx-auto lg:mx-0 min-h-[2rem] flex items-center justify-center lg:justify-start"
            >
              <TypingAnimation />
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-base text-muted-foreground/70 font-body mb-10 max-w-md mx-auto lg:mx-0"
            >
              Building intelligent web & mobile solutions through clean architecture, AI exploration, and elegant problem-solving.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-10"
            >
              <motion.a href="#projects" className="btn-premium btn-primary flex items-center gap-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                View Projects
              </motion.a>
              <motion.a href="#contact" className="btn-premium flex items-center gap-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Mail size={16} className="relative z-10" />
                <span className="relative z-10">Contact Me</span>
              </motion.a>
              <motion.a href="#" className="btn-premium flex items-center gap-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Download size={16} className="relative z-10" />
                <span className="relative z-10">Resume</span>
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex items-center justify-center lg:justify-start gap-3"
            >
              {[
                { icon: Github, href: 'https://github.com/users/adarsh5253/succession/invitation', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/adarsh-tiwari-424a45315', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:adarshtiwari5122002@gmail.com', label: 'Email' },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                  className="w-11 h-11 flex items-center justify-center rounded-xl transition-all duration-300"
                  style={{
                    background: 'hsl(190 100% 55% / 0.06)',
                    border: '1px solid hsl(190 100% 55% / 0.2)',
                    color: 'hsl(190 100% 70%)',
                  }}
                  whileHover={{ scale: 1.15, y: -4, boxShadow: '0 0 25px hsl(190 100% 55% / 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={17} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: 3D Avatar */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.7, x: 60, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1.1, ease: [0.23, 1, 0.32, 1], delay: 0.3 }}
            style={{ perspective: '1200px' }}
          >
            <div className="relative">
              {/* Outer conic gradient ring */}
              <motion.div
                className="absolute -inset-6 rounded-full opacity-50"
                style={{ background: 'conic-gradient(from 0deg, hsl(190 100% 55%), hsl(270 100% 70%), hsl(330 90% 65%), hsl(190 100% 55%))' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              />
              <div className="absolute -inset-6 rounded-full" style={{ background: 'hsl(222 47% 4% / 0.85)', backdropFilter: 'blur(2px)' }} />

              {/* Holographic flicker on photo */}
              <div
                className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden animate-hologram-flicker"
                style={{
                  border: '2px solid hsl(190 100% 55% / 0.4)',
                  boxShadow: '0 0 30px hsl(190 100% 55% / 0.3), 0 0 80px hsl(270 100% 70% / 0.15), inset 0 0 30px hsl(190 100% 55% / 0.05)',
                }}
              >
                <img src={profilePhoto} alt="Adarsh Tiwari" className="w-full h-full object-cover" />
                <motion.div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, hsl(190 100% 55% / 0.15), transparent, hsl(270 100% 70% / 0.08))' }}
                  animate={{ opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                {/* Holographic scan line on photo */}
                <motion.div
                  className="absolute left-0 right-0 h-0.5 opacity-50"
                  style={{ background: 'linear-gradient(90deg, transparent, hsl(190 100% 70%), transparent)' }}
                  animate={{ top: ['0%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
                />
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-xl"
                style={{
                  background: 'hsl(222 40% 7% / 0.9)',
                  border: '1px solid hsl(190 100% 55% / 0.3)',
                  boxShadow: '0 0 20px hsl(190 100% 55% / 0.15)',
                  backdropFilter: 'blur(20px)',
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
              >
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'hsl(160 80% 50%)', boxShadow: '0 0 8px hsl(160 80% 50%)' }} />
                <span className="text-xs font-mono" style={{ color: 'hsl(190 100% 70%)' }}>Open to work</span>
              </motion.div>

              {/* Orbiting neon dots */}
              <motion.div className="absolute inset-0 -m-10" animate={{ rotate: 360 }} transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full"
                  style={{ background: 'hsl(190 100% 55%)', boxShadow: '0 0 12px hsl(190 100% 55%), 0 0 24px hsl(190 100% 55% / 0.5)' }} />
              </motion.div>
              <motion.div className="absolute inset-0 -m-16" animate={{ rotate: -360 }} transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
                  style={{ background: 'hsl(270 100% 70%)', boxShadow: '0 0 10px hsl(270 100% 70%), 0 0 20px hsl(270 100% 70% / 0.5)' }} />
              </motion.div>
              <motion.div className="absolute inset-0 -m-6" animate={{ rotate: 360 }} transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                  style={{ background: 'hsl(330 90% 65%)', boxShadow: '0 0 8px hsl(330 90% 65%)' }} />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 9, 0] }} transition={{ duration: 2.5, repeat: Infinity }} className="flex flex-col items-center gap-2">
            <span className="text-xs font-mono tracking-wider" style={{ color: 'hsl(190 100% 55% / 0.4)' }}>Scroll down</span>
            <ArrowDown size={16} style={{ color: 'hsl(190 100% 55% / 0.4)' }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
