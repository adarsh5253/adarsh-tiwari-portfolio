import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Brain, Lightbulb, Rocket } from 'lucide-react';

const highlights = [
  { icon: Code2, title: 'Web & Mobile Dev', desc: 'Modern apps with React, Android & Tailwind', stat: '3+', statLabel: 'Projects' },
  { icon: Brain, title: 'AI / ML', desc: 'Intelligent solutions with Python & NLP', stat: '2', statLabel: 'Certs' },
  { icon: Lightbulb, title: 'DSA Expert', desc: 'Algorithmic thinking & problem solving', stat: '500+', statLabel: 'Problems' },
  { icon: Rocket, title: 'Innovation', desc: 'Always exploring emerging technologies', stat: '∞', statLabel: 'Curiosity' },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-28 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-mono text-primary/50 tracking-widest uppercase">About Me</span>
          <h2 className="section-heading mt-3">
            <span className="gradient-text">Who I Am</span>
          </h2>
          <div className="data-line max-w-xs mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="glass-card float-3d p-8 md:p-10">
              <p className="text-muted-foreground leading-relaxed mb-6 font-body text-lg">
                I'm <span className="text-primary font-semibold">Adarsh Tiwari</span>,
                a Computer Science & Engineering student at Integral University, Lucknow.
                I specialize in{' '}
                <span className="text-primary">Web Development</span>,{' '}
                <span className="text-accent">Artificial Intelligence</span>, and{' '}
                <span className="text-neon-pink">Android Development</span>.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6 font-body text-lg">
                My journey in tech is driven by a relentless curiosity to understand how things work
                and a desire to build solutions that make a real impact.
              </p>
              <p className="text-muted-foreground leading-relaxed font-body text-lg">
                When I'm not coding, you'll find me exploring new technologies, contributing to
                open-source projects, or solving algorithmic challenges.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-5">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-card float-3d p-6 group"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-primary/10 border border-primary/15 mb-4 group-hover:glow-blue transition-all duration-500">
                  <item.icon className="text-primary" size={20} />
                </div>
                <h3 className="font-display font-semibold text-sm text-foreground mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-xs font-body mb-4">{item.desc}</p>
                <div className="flex items-baseline gap-1.5 pt-3 border-t border-border/50">
                  <span className="font-display text-2xl font-bold text-primary text-glow">{item.stat}</span>
                  <span className="text-muted-foreground text-[10px] font-mono">{item.statLabel}</span>
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