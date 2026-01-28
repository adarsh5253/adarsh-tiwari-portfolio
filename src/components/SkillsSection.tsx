import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Java', 'C', 'JavaScript', 'Python'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Web Technologies',
    skills: ['HTML', 'CSS', 'React.js', 'Tailwind CSS'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Core CS',
    skills: ['Data Structures', 'Algorithms', 'OOP', 'DBMS'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'AI & Data',
    skills: ['Python', 'AI Chatbot', 'Data Analytics', 'NLP'],
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'Firebase', 'VS Code', 'Figma'],
    color: 'from-indigo-500 to-violet-500',
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-20 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">02. Skills</span>
          <h2 className="section-heading mt-2">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="section-subheading mx-auto">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass-card glow-border p-6 group"
            >
              <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${category.color} mb-4 group-hover:w-full transition-all duration-500`} />
              <h3 className="font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
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

        {/* Skill Bar Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 glass-card p-8 max-w-3xl mx-auto"
        >
          <h3 className="font-semibold mb-6 text-center">Proficiency Levels</h3>
          <div className="space-y-4">
            {[
              { name: 'React.js', level: 85 },
              { name: 'Java', level: 80 },
              { name: 'Python', level: 75 },
              { name: 'Data Structures', level: 78 },
              { name: 'AI/ML Basics', level: 65 },
            ].map((skill, index) => (
              <div key={skill.name}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.8 + index * 0.1, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{
                      background: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))',
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
