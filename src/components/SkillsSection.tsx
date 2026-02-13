import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Database, Globe, Cpu, BrainCircuit, Wrench } from 'lucide-react';

const skillCategories = [
  { title: 'LANGUAGES', icon: Cpu, skills: ['Java', 'C', 'JavaScript', 'Python'], color: 'neon-cyan' },
  { title: 'WEB_TECH', icon: Globe, skills: ['HTML', 'CSS', 'React.js', 'Tailwind CSS'], color: 'neon-purple' },
  { title: 'CORE_CS', icon: Database, skills: ['Data Structures', 'Algorithms', 'OOP', 'DBMS'], color: 'neon-cyan' },
  { title: 'AI_&_DATA', icon: BrainCircuit, skills: ['Python', 'AI Chatbot', 'Data Analytics', 'NLP'], color: 'neon-pink' },
  { title: 'TOOLS', icon: Wrench, skills: ['Git', 'Firebase', 'VS Code', 'Figma'], color: 'neon-purple' },
];

const proficiency = [
  { name: 'React.js', level: 85 },
  { name: 'Java', level: 80 },
  { name: 'Python', level: 75 },
  { name: 'Data Structures', level: 78 },
  { name: 'AI/ML', level: 65 },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-cyan/3 rounded-full blur-[200px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs text-primary/60 tracking-widest">// 02. SKILLS</span>
          <h2 className="section-heading mt-2">
            <span className="gradient-text">TECH_STACK</span>
          </h2>
          <div className="data-line max-w-xs mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="holo-panel neon-border p-6 group hover:border-primary/40 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-4">
                <cat.icon size={18} className="text-primary" />
                <h3 className="font-cyber text-xs tracking-wider text-primary/80">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: i * 0.1 + j * 0.05 }}
                    className="holo-badge"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proficiency bars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 holo-panel neon-border p-8 max-w-3xl mx-auto"
        >
          <h3 className="font-cyber text-sm text-center mb-6 text-primary/80 tracking-wider">PROFICIENCY_LEVELS</h3>
          <div className="space-y-4">
            {proficiency.map((skill, i) => (
              <div key={skill.name}>
                <div className="flex justify-between text-sm mb-1 font-mono">
                  <span className="text-foreground">{skill.name}</span>
                  <span className="text-primary">{skill.level}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1.2, delay: 0.8 + i * 0.1, ease: 'easeOut' }}
                    className="h-full rounded-full relative"
                    style={{
                      background: 'linear-gradient(90deg, hsl(var(--neon-cyan)), hsl(var(--neon-purple)))',
                      boxShadow: '0 0 10px hsl(var(--neon-cyan) / 0.5)',
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
