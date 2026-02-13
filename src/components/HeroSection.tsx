import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, Github, Linkedin, Cpu, Zap } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.png';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Ambient neon lights */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[150px] animate-neon-pulse" />
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-neon-purple/10 rounded-full blur-[150px] animate-neon-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-pink/5 rounded-full blur-[200px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Holographic profile container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 80 }}
            className="relative mb-12 inline-block"
          >
            {/* Rotating hex frame */}
            <motion.div
              className="absolute inset-0 -m-8"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <polygon 
                  points="50,2 93,25 93,75 50,98 7,75 7,25" 
                  fill="none" 
                  stroke="url(#cyberHex)" 
                  strokeWidth="0.3"
                  strokeDasharray="3,3"
                  opacity="0.5"
                />
                <defs>
                  <linearGradient id="cyberHex" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(185, 100%, 50%)" />
                    <stop offset="50%" stopColor="hsl(280, 100%, 65%)" />
                    <stop offset="100%" stopColor="hsl(185, 100%, 50%)" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            {/* Orbiting data points */}
            <motion.div
              className="absolute inset-0 -m-6"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary glow-cyan" />
            </motion.div>
            <motion.div
              className="absolute inset-0 -m-10"
              animate={{ rotate: -360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-accent glow-purple" />
            </motion.div>

            {/* Photo with holographic border */}
            <div className="relative w-40 h-40 md:w-48 md:h-48">
              <motion.div
                className="absolute -inset-1 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, hsl(185, 100%, 50%), hsl(280, 100%, 65%), hsl(320, 100%, 60%), hsl(185, 100%, 50%))'
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-background">
                <img 
                  src={profilePhoto} 
                  alt="Adarsh Tiwari" 
                  className="w-full h-full object-cover"
                />
                {/* Holographic overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-neon-cyan/20 via-transparent to-neon-purple/10"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>

              {/* Status HUD */}
              <motion.div 
                className="absolute -bottom-1 -right-1 flex items-center gap-1.5 bg-background/90 border border-primary/40 px-2 py-0.5 rounded text-[10px] font-mono text-primary"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
              >
                <Zap size={10} className="animate-neon-pulse" />
                ONLINE
              </motion.div>
            </div>
          </motion.div>

          {/* System init text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Cpu size={14} className="text-primary" />
            <span className="font-mono text-xs text-primary/60 tracking-widest">SYSTEM.INIT // PORTFOLIO_V2.0</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-cyber font-bold mb-4 tracking-wider"
          >
            <span className="gradient-text text-glow-cyan">ADARSH</span>
            <br />
            <span className="text-foreground">TIWARI</span>
          </motion.h1>

          {/* Role with cyber styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center justify-center gap-3 mb-6 font-mono text-sm md:text-base"
          >
            <span className="data-line w-12" />
            <span className="text-primary text-glow-cyan">CS_ENGINEER</span>
            <span className="text-muted-foreground">//</span>
            <span className="text-accent text-glow-purple">DEVELOPER</span>
            <span className="text-muted-foreground">//</span>
            <span className="text-neon-pink">AI_EXPLORER</span>
            <span className="data-line w-12" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body"
          >
            Building next-gen web solutions, exploring artificial intelligence,
            and solving complex problems through elegant architecture.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.a
              href="#projects"
              className="cyber-btn w-full sm:w-auto flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">VIEW_PROJECTS</span>
            </motion.a>
            <motion.a
              href="#contact"
              className="cyber-btn cyber-btn-accent w-full sm:w-auto flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={16} className="relative z-10" />
              <span className="relative z-10">CONTACT</span>
            </motion.a>
            <motion.a
              href="#"
              className="cyber-btn w-full sm:w-auto flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={16} className="relative z-10" />
              <span className="relative z-10">RESUME.PDF</span>
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex items-center justify-center gap-4"
          >
            {[
              { icon: Github, href: '#' },
              { icon: Linkedin, href: '#' },
              { icon: Mail, href: 'mailto:adarshtiwari@example.com' },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                className="w-10 h-10 flex items-center justify-center border border-primary/20 rounded bg-primary/5 text-muted-foreground hover:text-primary hover:border-primary/50 hover:glow-cyan transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="font-mono text-xs text-primary/40 tracking-widest">SCROLL</span>
            <ArrowDown size={16} className="text-primary/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
