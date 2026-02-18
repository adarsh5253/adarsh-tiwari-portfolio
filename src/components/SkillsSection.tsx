import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Database, Globe, Cpu, BrainCircuit, Wrench } from 'lucide-react';
import { useTilt } from '@/hooks/use-tilt';

const skillCategories = [
  { title: 'Languages', icon: Cpu, skills: ['Java', 'C', 'JavaScript', 'Python'], color: 'hsl(210 100% 60%)' },
  { title: 'Web & Mobile', icon: Globe, skills: ['HTML', 'CSS', 'React.js', 'Tailwind CSS', 'Android'], color: 'hsl(250 90% 68%)' },
  { title: 'Core CS', icon: Database, skills: ['Data Structures', 'Algorithms', 'OOP', 'DBMS'], color: 'hsl(160 80% 50%)' },
  { title: 'AI & Data', icon: BrainCircuit, skills: ['Python', 'AI Chatbot', 'Data Analytics', 'NLP'], color: 'hsl(330 90% 65%)' },
  { title: 'Tools', icon: Wrench, skills: ['Git', 'Firebase', 'VS Code', 'Figma'], color: 'hsl(40 90% 60%)' },
];

const proficiency = [
  { name: 'React.js', level: 85, color: 'hsl(210 100% 60%)' },
  { name: 'Java / Android', level: 80, color: 'hsl(250 90% 68%)' },
  { name: 'Python', level: 75, color: 'hsl(160 80% 50%)' },
  { name: 'Data Structures', level: 78, color: 'hsl(330 90% 65%)' },
  { name: 'AI/ML', level: 65, color: 'hsl(40 90% 60%)' },
];

const SkillCard = ({ cat, i, isInView }: { cat: typeof skillCategories[0]; i: number; isInView: boolean }) => {
  const { ref, glareRef, handleMouseMove, handleMouseLeave } = useTilt({ max: 10, scale: 1.03 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateY: -5 }}
      animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
      style={{ perspective: '1000px' }}
    >
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative cursor-pointer"
        style={{ willChange: 'transform', height: '100%' }}
      >
        <div ref={glareRef} className="absolute inset-0 rounded-2xl z-20 pointer-events-none opacity-0 transition-opacity duration-200" />
        <div
          className="absolute -inset-px rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ boxShadow: `0 0 35px ${cat.color}20` }}
        />
        <div className="glass-card p-7 group h-full">
          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
              style={{ background: `${cat.color}18`, border: `1px solid ${cat.color}30` }}
            >
              <cat.icon size={18} style={{ color: cat.color }} />
            </div>
            <h3 className="font-display font-semibold text-sm text-foreground">{cat.title}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {cat.skills.map((skill, j) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.1 + j * 0.05 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 cursor-default"
                style={{
                  background: `${cat.color}0d`,
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
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section id="skills" className="py-28 relative overflow-hidden" ref={ref}>
      {/* Parallax depth orbs */}
      <motion.div style={{ y: y1 }} className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none">
        <div className="w-full h-full rounded-full" style={{ background: 'radial-gradient(circle, hsl(250 90% 68% / 0.04) 0%, transparent 70%)' }} />
      </motion.div>
      <motion.div style={{ y: y2 }} className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none">
        <div className="w-full h-full rounded-full" style={{ background: 'radial-gradient(circle, hsl(210 100% 60% / 0.04) 0%, transparent 70%)' }} />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <span className="text-xs font-mono text-primary/50 tracking-widest uppercase">Skills</span>
          <h2 className="section-heading mt-3"><span className="gradient-text">Tech Stack</span></h2>
          <div className="data-line max-w-xs mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.title} cat={cat} i={i} isInView={isInView} />
          ))}
        </div>

        {/* Proficiency panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="glass-card p-8 md:p-10">
            <h3 className="font-display font-semibold text-center mb-8 text-foreground">Proficiency Levels</h3>
            <div className="space-y-5">
              {proficiency.map((skill, i) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-2 font-body">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="font-mono text-xs" style={{ color: skill.color }}>{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full overflow-hidden" style={{ background: 'hsl(222 30% 12%)' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1.4, delay: 0.8 + i * 0.12, ease: [0.23, 1, 0.32, 1] }}
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)`,
                        boxShadow: `0 0 14px ${skill.color}60`,
                      }}
                    />
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
