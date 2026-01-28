import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, Github, Linkedin } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.png';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-accent/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Profile Photo with handcrafted design */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateY: -30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 80 }}
            className="relative mb-10 inline-block perspective-1000"
          >
            {/* Outer pulsing glow rings */}
            <motion.div 
              className="absolute inset-0 -m-8 rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-40 blur-2xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute inset-0 -m-6 rounded-full bg-gradient-to-r from-accent via-primary to-accent opacity-30 blur-xl"
              animate={{ 
                scale: [1.1, 1, 1.1],
                opacity: [0.4, 0.2, 0.4]
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
            
            {/* Rotating gradient border - outer */}
            <motion.div
              className="absolute inset-0 -m-3 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))'
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Secondary rotating ring with dots */}
            <motion.div
              className="absolute inset-0 -m-5 rounded-full border-2 border-dashed border-primary/30"
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Orbiting particles */}
            <motion.div
              className="absolute inset-0 -m-6"
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50" />
            </motion.div>
            <motion.div
              className="absolute inset-0 -m-8"
              animate={{ rotate: -360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent shadow-lg shadow-accent/50" />
            </motion.div>
            <motion.div
              className="absolute inset-0 -m-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary/70" />
            </motion.div>
            
            {/* Floating sparkles */}
            <motion.div
              className="absolute -top-4 -right-4 w-4 h-4"
              animate={{ 
                y: [-8, 8, -8],
                x: [-4, 4, -4],
                rotate: [0, 180, 360],
                scale: [1, 1.3, 1]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="text-primary drop-shadow-[0_0_8px_hsl(var(--primary))]">
                <polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9" />
              </svg>
            </motion.div>
            <motion.div
              className="absolute -bottom-2 -left-6 w-3 h-3"
              animate={{ 
                y: [6, -6, 6],
                x: [3, -3, 3],
                rotate: [360, 180, 0],
                scale: [1.2, 0.8, 1.2]
              }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="text-accent drop-shadow-[0_0_6px_hsl(var(--accent))]">
                <polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9" />
              </svg>
            </motion.div>
            <motion.div
              className="absolute top-1/3 -right-8 w-2 h-2"
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0.5, 1.5, 0.5]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-full h-full rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))]" />
            </motion.div>
            <motion.div
              className="absolute bottom-1/3 -left-8 w-2 h-2"
              animate={{ 
                opacity: [1, 0, 1],
                scale: [1.5, 0.5, 1.5]
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <div className="w-full h-full rounded-full bg-accent shadow-[0_0_10px_hsl(var(--accent))]" />
            </motion.div>
            
            {/* Hexagonal decorative frame */}
            <motion.div
              className="absolute inset-0 -m-4"
              animate={{ rotate: [0, 60, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <polygon 
                  points="50,3 97,25 97,75 50,97 3,75 3,25" 
                  fill="none" 
                  stroke="url(#hexGradient)" 
                  strokeWidth="0.5"
                  strokeDasharray="5,5"
                  opacity="0.4"
                />
                <defs>
                  <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                    <stop offset="50%" stopColor="hsl(var(--accent))" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
            
            {/* Photo container with glassmorphism */}
            <motion.div 
              className="relative w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-background/50 shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Animated gradient overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-accent/30 z-10"
                animate={{
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 z-20"
                style={{
                  background: 'linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)'
                }}
                animate={{
                  x: ['-100%', '200%']
                }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              />
              <img 
                src={profilePhoto} 
                alt="Adarsh Tiwari" 
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
            
            {/* Decorative corner accents with animation */}
            <motion.div 
              className="absolute -bottom-3 -right-3 w-8 h-8 border-r-2 border-b-2 border-primary rounded-br-xl"
              animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div 
              className="absolute -top-3 -left-3 w-8 h-8 border-l-2 border-t-2 border-accent rounded-tl-xl"
              animate={{ scale: [1.1, 1, 1.1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div 
              className="absolute -top-3 -right-3 w-5 h-5 border-r-2 border-t-2 border-primary/50 rounded-tr-lg"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <motion.div 
              className="absolute -bottom-3 -left-3 w-5 h-5 border-l-2 border-b-2 border-accent/50 rounded-bl-lg"
              animate={{ opacity: [0.7, 0.3, 0.7] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            
            {/* Status indicator */}
            <motion.div 
              className="absolute bottom-2 right-2 flex items-center gap-1.5 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full border border-primary/30"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
            >
              <motion.div 
                className="w-2 h-2 rounded-full bg-green-500"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-[10px] text-muted-foreground font-medium">Available</span>
            </motion.div>
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-primary font-mono text-sm md:text-base mb-4"
          >
            👋 Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          >
            <span className="gradient-text">Adarsh Tiwari</span>
          </motion.h1>

          {/* Animated Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <span className="text-xl md:text-2xl text-muted-foreground">
              Computer Science Student
            </span>
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xl md:text-2xl text-muted-foreground">
              Developer
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Passionate about building innovative web solutions, exploring AI technologies,
            and solving complex problems through elegant code.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.a
              href="#projects"
              className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View Projects</span>
            </motion.a>
            <motion.a
              href="#contact"
              className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={18} />
              <span>Contact Me</span>
            </motion.a>
            <motion.a
              href="#"
              className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} />
              <span>Download Resume</span>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center justify-center gap-4"
          >
            <motion.a
              href="#"
              className="glass-card p-3 rounded-full hover:glow-sm transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} className="text-muted-foreground hover:text-foreground transition-colors" />
            </motion.a>
            <motion.a
              href="#"
              className="glass-card p-3 rounded-full hover:glow-sm transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={20} className="text-muted-foreground hover:text-foreground transition-colors" />
            </motion.a>
            <motion.a
              href="mailto:adarshtiwari@example.com"
              className="glass-card p-3 rounded-full hover:glow-sm transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} className="text-muted-foreground hover:text-foreground transition-colors" />
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-muted-foreground text-sm">Scroll Down</span>
            <ArrowDown size={20} className="text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
