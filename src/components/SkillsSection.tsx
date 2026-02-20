import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Database, Globe, Cpu, BrainCircuit, Wrench } from 'lucide-react';
import { useTilt } from '@/hooks/use-tilt';

const skillCategories = [
  { title: 'Languages', icon: Cpu, skills: ['Java', 'C', 'JavaScript', 'Python'], color: 'hsl(190 100% 55%)' },
  { title: 'Web & Mobile', icon: Globe, skills: ['HTML', 'CSS', 'React.js', 'Tailwind CSS', 'Android'], color: 'hsl(270 100% 70%)' },
  { title: 'Core CS', icon: Database, skills: ['Data Structures', 'Algorithms', 'OOP', 'DBMS'], color: 'hsl(160 80% 50%)' },
  { title: 'AI & Data', icon: BrainCircuit, skills: ['Python', 'AI Chatbot', 'Data Analytics', 'NLP'], color: 'hsl(330 90% 65%)' },
  { title: 'Tools', icon: Wrench, skills: ['Git', 'Firebase', 'VS Code', 'Figma'], color: 'hsl(40 90% 60%)' },
];

const proficiency = [
  { name: 'React.js', level: 85, color: 'hsl(190 100% 55%)' },
  { name: 'Java / Android', level: 80, color: 'hsl(270 100% 70%)' },
  { name: 'Python', level: 75, color: 'hsl(160 80% 50%)' },
  { name: 'Data Structures', level: 78, color: 'hsl(330 90% 65%)' },
  { name: 'AI/ML', level: 65, color: 'hsl(40 90% 60%)' },
];

/* staggered directions for skill cards */
const skillDirections = [
  { hidden: { opacity: 0, x: -60, rotateY: -20 }, visible: { opacity: 1, x: 0, rotateY: 0 } },
  { hidden: { opacity: 0, y: -60, rotateX: 20 },  visible: { opacity: 1, y: 0, rotateX: 0 } },
  { hidden: { opacity: 0, x: 60, rotateY: 20 },   visible: { opacity: 1, x: 0, rotateY: 0 } },
  { hidden: { opacity: 0, x: -60, rotateY: -15, scale: 0.85 }, visible: { opacity: 1, x: 0, rotateY: 0, scale: 1 } },
  { hidden: { opacity: 0, y: 60, rotateX: -15, scale: 0.85 },  visible: { opacity: 1, y: 0, rotateX: 0, scale: 1 } },
];

const SkillCard = ({ cat, i, isInView }: { cat: typeof skillCategories[0]; i: number; isInView: boolean }) => {
  const { ref, glareRef, handleMouseMove, handleMouseLeave } = useTilt({ max: 12, scale: 1.04 });
  const variant = skillDirections[i % skillDirections.length];

  return (
    <motion.div
      variants={variant}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration: 0.85, delay: i * 0.12, ease: [0.23, 1, 0.32, 1] }}
      style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
    >
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative cursor-pointer h-full"
        style={{ willChange: 'transform' }}
      >
        <div ref={glareRef} className="absolute inset-0 rounded-2xl z-20 pointer-events-none opacity-0 transition-opacity duration-200" />

        {/* Neon corner accents */}
        <div className="absolute top-0 left-0 w-5 h-5 rounded-tl-2xl border-t-2 border-l-2 pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-300"
          style={{ borderColor: cat.color }} />
        <div className="absolute bottom-0 right-0 w-5 h-5 rounded-br-2xl border-b-2 border-r-2 pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-300"
          style={{ borderColor: cat.color }} />

        <div
          className="absolute -inset-px rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ boxShadow: `0 0 35px ${cat.color}25, 0 0 70px ${cat.color}10` }}
        />
        <div className="glass-card p-7 group h-full" style={{ border: `1px solid ${cat.color}15` }}>
          {/* Top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-px rounded-t-2xl"
            style={{ background: `linear-gradient(90deg, transparent, ${cat.color}60, transparent)` }} />
          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
              style={{
                background: `${cat.color}15`,
                border: `1px solid ${cat.color}30`,
                boxShadow: `0 0 15px ${cat.color}20`,
              }}
            >
              <cat.icon size={18} style={{ color: cat.color }} />
            </div>
            <h3 className="font-display font-semibold text-sm text-foreground">{cat.title}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {cat.skills.map((skill, j) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.7, y: 10 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12 + j * 0.06, ease: [0.23, 1, 0.32, 1] }}
                whileHover={{ scale: 1.1, y: -3, boxShadow: `0 0 12px ${cat.color}40` }}
                className="px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 cursor-default"
                style={{
                  background: `${cat.color}0c`,
                  border: `1px solid ${cat.color}25`,
                  color: `${cat.color}cc`,
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y1 = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const rotateZ = useTransform(scrollYProgress, [0, 1], [-3, 3]);

  return (
    <section id="skills" className="py-28 relative overflow-hidden" ref={ref}>
      {/* Parallax depth orbs */}
      <motion.div style={{ y: y1 }} className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none">
        <div className="w-full h-full rounded-full"
          style={{ background: 'radial-gradient(circle, hsl(270 100% 70% / 0.05) 0%, transparent 70%)' }} />
      </motion.div>
      <motion.div style={{ y: y2 }} className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none">
        <div className="w-full h-full rounded-full"
          style={{ background: 'radial-gradient(circle, hsl(190 100% 55% / 0.05) 0%, transparent 70%)' }} />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 12 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
          style={{ perspective: '800px' }}
        >
          <span className="text-xs font-mono tracking-widest uppercase" style={{ color: 'hsl(190 100% 55% / 0.5)' }}>Skills</span>
          <h2 className="section-heading mt-3"><span className="gradient-text">Tech Stack</span></h2>
          <div className="data-line max-w-xs mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto" style={{ perspective: '1200px' }}>
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.title} cat={cat} i={i} isInView={isInView} />
          ))}
        </div>

        {/* Proficiency panel */}
        <motion.div
          initial={{ opacity: 0, y: 60, rotateX: 15 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
          style={{ perspective: '1000px' }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="holo-card p-8 md:p-10 relative">
            {/* Holographic label */}
            <div className="absolute top-4 right-4 text-[9px] font-mono px-2 py-0.5 rounded-full"
              style={{ background: 'hsl(190 100% 55% / 0.1)', border: '1px solid hsl(190 100% 55% / 0.2)', color: 'hsl(190 100% 65%)' }}>
              HOLOGRAM
            </div>
            <h3 className="font-display font-semibold text-center mb-8 text-foreground">Proficiency Levels</h3>
            <div className="space-y-5">
              {proficiency.map((skill, i) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-2 font-body">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="font-mono text-xs" style={{ color: skill.color }}>{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full overflow-hidden relative" style={{ background: 'hsl(222 40% 8%)' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1.6, delay: 0.8 + i * 0.12, ease: [0.23, 1, 0.32, 1] }}
                      className="h-full rounded-full relative overflow-hidden"
                      style={{
                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}cc, hsl(270 100% 70% / 0.5))`,
                        boxShadow: `0 0 14px ${skill.color}70, 0 0 28px ${skill.color}30`,
                      }}
                    >
                      {/* Shimmer on bar */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_ease-in-out_infinite]" />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
