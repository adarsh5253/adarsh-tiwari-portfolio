import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Brain, Lightbulb, Rocket } from 'lucide-react';
import { useTilt } from '@/hooks/use-tilt';

const highlights = [
  { icon: Code2, title: 'Web & Mobile Dev', desc: 'Modern apps with React, Android & Tailwind', stat: '3+', statLabel: 'Projects', color: 'hsl(190 100% 55%)' },
  { icon: Brain, title: 'AI / ML', desc: 'Intelligent solutions with Python & NLP', stat: '2', statLabel: 'Certs', color: 'hsl(270 100% 70%)' },
  { icon: Lightbulb, title: 'DSA Expert', desc: 'Algorithmic thinking & problem solving', stat: '500+', statLabel: 'Problems', color: 'hsl(160 80% 50%)' },
  { icon: Rocket, title: 'Innovation', desc: 'Always exploring emerging technologies', stat: '∞', statLabel: 'Curiosity', color: 'hsl(330 90% 65%)' },
];

/* Four corners — each card flies in from its corner */
const statVariants = [
  { hidden: { opacity: 0, x: -60, y: -40, rotateX: 20, rotateY: -20 }, visible: { opacity: 1, x: 0, y: 0, rotateX: 0, rotateY: 0 } },
  { hidden: { opacity: 0, x: 60,  y: -40, rotateX: 20, rotateY: 20  }, visible: { opacity: 1, x: 0, y: 0, rotateX: 0, rotateY: 0 } },
  { hidden: { opacity: 0, x: -60, y: 40,  rotateX: -20, rotateY: -20 }, visible: { opacity: 1, x: 0, y: 0, rotateX: 0, rotateY: 0 } },
  { hidden: { opacity: 0, x: 60,  y: 40,  rotateX: -20, rotateY: 20  }, visible: { opacity: 1, x: 0, y: 0, rotateX: 0, rotateY: 0 } },
];

const StatCard = ({ item, index, isInView }: { item: typeof highlights[0]; index: number; isInView: boolean }) => {
  const { ref, glareRef, handleMouseMove, handleMouseLeave } = useTilt({ max: 14, scale: 1.05 });

  return (
    <motion.div
      variants={statVariants[index]}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration: 0.9, delay: 0.2 + index * 0.12, ease: [0.23, 1, 0.32, 1] }}
      style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
    >
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative cursor-pointer"
        style={{ willChange: 'transform' }}
      >
        <div ref={glareRef} className="absolute inset-0 rounded-2xl z-20 pointer-events-none opacity-0 transition-opacity duration-200" />
        <div
          className="absolute -inset-px rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ boxShadow: `0 0 40px ${item.color}30, 0 0 80px ${item.color}10` }}
        />
        <div className="holo-card p-6 group relative" style={{ border: `1px solid ${item.color}20` }}>
          {/* Top accent */}
          <div className="absolute top-0 left-0 right-0 h-px rounded-t-2xl"
            style={{ background: `linear-gradient(90deg, transparent, ${item.color}80, transparent)` }} />
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110"
            style={{
              background: `${item.color}15`,
              border: `1px solid ${item.color}35`,
              boxShadow: `0 0 20px ${item.color}20`,
            }}
          >
            <item.icon style={{ color: item.color }} size={20} />
          </div>
          <h3 className="font-display font-semibold text-sm text-foreground mb-1">{item.title}</h3>
          <p className="text-muted-foreground text-xs font-body mb-4">{item.desc}</p>
          <div className="flex items-baseline gap-1.5 pt-3" style={{ borderTop: `1px solid ${item.color}15` }}>
            <span className="font-display text-2xl font-bold" style={{ color: item.color, textShadow: `0 0 15px ${item.color}70, 0 0 30px ${item.color}30` }}>
              {item.stat}
            </span>
            <span className="text-muted-foreground text-[10px] font-mono">{item.statLabel}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.5]);

  return (
    <section id="about" className="py-28 relative overflow-hidden" ref={ref}>
      <motion.div
        style={{ y, opacity }}
        className="absolute -left-40 top-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
      >
        <div className="w-full h-full rounded-full"
          style={{ background: 'radial-gradient(circle, hsl(190 100% 55% / 0.06) 0%, transparent 70%)' }} />
      </motion.div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: 15 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-20"
          style={{ perspective: '800px' }}
        >
          <span className="text-xs font-mono tracking-widest uppercase" style={{ color: 'hsl(190 100% 55% / 0.5)' }}>About Me</span>
          <h2 className="section-heading mt-3"><span className="gradient-text">Who I Am</span></h2>
          <div className="data-line max-w-xs mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -80, rotateY: -18 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            style={{ perspective: '1200px' }}
          >
            <div className="holo-card float-3d p-8 md:p-10 relative animate-hologram-flicker">
              {/* Holographic label chip */}
              <div className="absolute top-4 right-4 text-[9px] font-mono px-2 py-0.5 rounded-full"
                style={{ background: 'hsl(190 100% 55% / 0.1)', border: '1px solid hsl(190 100% 55% / 0.25)', color: 'hsl(190 100% 65%)' }}>
                BIO.EXE
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 font-body text-lg">
                I'm <span style={{ color: 'hsl(190 100% 65%)', fontWeight: 600 }}>Adarsh Tiwari</span>,
                a Computer Science & Engineering student at Integral University, Lucknow.
                I specialize in{' '}
                <span style={{ color: 'hsl(190 100% 65%)' }}>Web Development</span>,{' '}
                <span style={{ color: 'hsl(270 100% 70%)' }}>Artificial Intelligence</span>, and{' '}
                <span style={{ color: 'hsl(330 90% 65%)' }}>Android Development</span>.
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

          <div className="grid grid-cols-2 gap-5" style={{ perspective: '1200px' }}>
            {highlights.map((item, index) => (
              <StatCard key={item.title} item={item} index={index} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
