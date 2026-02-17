import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Database, Globe, Cpu, BrainCircuit, Wrench } from 'lucide-react';

const skillCategories = [
  { title: 'Languages', icon: Cpu, skills: ['Java', 'C', 'JavaScript', 'Python'] },
  { title: 'Web & Mobile', icon: Globe, skills: ['HTML', 'CSS', 'React.js', 'Tailwind CSS', 'Android'] },
  { title: 'Core CS', icon: Database, skills: ['Data Structures', 'Algorithms', 'OOP', 'DBMS'] },
  { title: 'AI & Data', icon: BrainCircuit, skills: ['Python', 'AI Chatbot', 'Data Analytics', 'NLP'] },
  { title: 'Tools', icon: Wrench, skills: ['Git', 'Firebase', 'VS Code', 'Figma'] },
];

const proficiency = [
  { name: 'React.js', level: 85 },
  { name: 'Java / Android', level: 80 },
  { name: 'Python', level: 75 },
  { name: 'Data Structures', level: 78 },
  { name: 'AI/ML', level: 65 },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-28 relative" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[250px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <span className="text-xs font-mono text-primary/50 tracking-widest uppercase">Skills</span>
          <h2 className="section-heading mt-3">
            <span className="gradient-text">Tech Stack</span>
          </h2>
          <div className="data-line max-w-xs mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card float-3d p-7 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-primary/10 border border-primary/15 group-hover:glow-blue transition-all duration-500">
                  <cat.icon size={18} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold text-sm text-foreground">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: i * 0.1 + j * 0.04 }}
                    className="skill-badge"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proficiency */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 glass-card float-3d p-8 md:p-10 max-w-3xl mx-auto"
        >
          <h3 className="font-display font-semibold text-center mb-8 text-foreground">Proficiency Levels</h3>
          <div className="space-y-5">
            {proficiency.map((skill, i) => (
              <div key={skill.name}>
                <div className="flex justify-between text-sm mb-2 font-body">
                  <span className="text-foreground font-medium">{skill.name}</span>
                  <span className="text-primary font-mono text-xs">{skill.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1.2, delay: 0.8 + i * 0.1, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{
                      background: 'linear-gradient(90deg, hsl(210 100% 60%), hsl(250 90% 68%))',
                      boxShadow: '0 0 12px hsl(210 100% 60% / 0.4)',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;