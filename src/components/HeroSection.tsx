import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, Github, Linkedin, Sparkles } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.png';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Ambient orbs */}
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[180px]" />
      <div className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] bg-accent/6 rounded-full blur-[160px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">

          {/* Left: Text content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/15 mb-8"
            >
              <Sparkles size={14} className="text-primary" />
              <span className="text-xs font-mono text-primary/80">Available for opportunities</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-[1.1]">
              <span className="text-foreground">Hi, I'm</span>
              <br />
              <span className="gradient-text text-glow">Adarsh Tiwari</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground font-body font-light mb-4 max-w-lg mx-auto lg:mx-0"
            >
              Computer Science &amp; Android Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-base text-muted-foreground/70 font-body mb-10 max-w-md mx-auto lg:mx-0"
            >
              Building intelligent web & mobile solutions through clean architecture, AI exploration, and elegant problem-solving.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
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

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
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
                  className="w-11 h-11 flex items-center justify-center rounded-xl border border-border bg-card/50 text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: 3D Avatar */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1], delay: 0.3 }}
          >
            <div className="relative">
              {/* Outer glow ring */}
              <motion.div
                className="absolute -inset-6 rounded-full opacity-40"
                style={{ background: 'conic-gradient(from 0deg, hsl(210 100% 60%), hsl(250 90% 68%), hsl(330 90% 65%), hsl(210 100% 60%))' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              />
              <div className="absolute -inset-6 rounded-full bg-background/80 backdrop-blur-sm" />

              {/* Photo container */}
              <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-primary/20 neon-glow">
                <img src={profilePhoto} alt="Adarsh Tiwari" className="w-full h-full object-cover" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-accent/5"
                  animate={{ opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-xl glass-card border border-primary/20"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-mono text-muted-foreground">Open to work</span>
              </motion.div>

              {/* Orbiting dots */}
              <motion.div className="absolute inset-0 -m-10" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary glow-blue" />
              </motion.div>
              <motion.div className="absolute inset-0 -m-14" animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-accent glow-purple" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2.5, repeat: Infinity }} className="flex flex-col items-center gap-2">
            <span className="text-xs text-muted-foreground/40 font-body tracking-wider">Scroll down</span>
            <ArrowDown size={16} className="text-primary/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;