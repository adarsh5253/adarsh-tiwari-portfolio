import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Brain, Lightbulb, Rocket, ChevronRight } from 'lucide-react';

const highlights = [
  { icon: Code, title: 'Web Dev', desc: 'Modern web apps with React & Tailwind', stat: '3+', statLabel: 'Projects' },
  { icon: Brain, title: 'AI / ML', desc: 'Intelligent solutions with Python & NLP', stat: '2', statLabel: 'Certs' },
  { icon: Lightbulb, title: 'DSA', desc: 'Algorithmic thinking & problem solving', stat: '500+', statLabel: 'Problems' },
  { icon: Rocket, title: 'Innovation', desc: 'Always exploring emerging tech', stat: '∞', statLabel: 'Curiosity' },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs text-primary/60 tracking-widest">// 01. ABOUT</span>
          <h2 className="section-heading mt-2">
            <span className="gradient-text">WHO_I_AM</span>
          </h2>
          <div className="data-line max-w-xs mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="holo-panel neon-border corner-accents p-8">
              <div className="font-mono text-xs text-primary/40 mb-4">
                <ChevronRight size={12} className="inline mr-1" />user.profile.load()
              </div>
              <p className="text-muted-foreground leading-relaxed mb-5 font-body text-lg">
                I'm <span className="text-primary text-glow-cyan font-semibold">Adarsh Tiwari</span>, 
                a Computer Science & Engineering student at Integral University, Lucknow. 
                I specialize in{' '}
                <span className="text-primary">Web Development</span>,{' '}
                <span className="text-accent">Artificial Intelligence</span>, and{' '}
                <span className="text-neon-pink">Data Structures & Algorithms</span>.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5 font-body text-lg">
                My journey in tech is driven by a relentless curiosity to understand how things work 
                and a desire to build solutions that make a real impact.
              </p>
              <p className="text-muted-foreground leading-relaxed font-body text-lg">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or solving algorithmic challenges.
              </p>
              <div className="font-mono text-xs text-primary/20 mt-4">
                {'>'} status: active | uptime: ∞
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="holo-panel neon-border p-5 group hover:border-primary/40 transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded flex items-center justify-center bg-primary/10 border border-primary/20 group-hover:glow-cyan transition-all">
                    <item.icon className="text-primary" size={18} />
                  </div>
                  <div className="font-cyber text-xs text-primary/80">{item.title}</div>
                </div>
                <p className="text-muted-foreground text-sm font-body mb-3">{item.desc}</p>
                <div className="flex items-baseline gap-1 border-t border-border/50 pt-2">
                  <span className="font-cyber text-xl text-primary text-glow-cyan">{item.stat}</span>
                  <span className="font-mono text-[10px] text-muted-foreground">{item.statLabel}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
