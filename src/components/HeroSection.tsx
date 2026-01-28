import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, Github, Linkedin } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-accent/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
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
