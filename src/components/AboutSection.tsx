import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Brain, Lightbulb, Rocket } from 'lucide-react';

const highlights = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Building responsive and dynamic web applications with modern technologies.',
  },
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    description: 'Exploring AI/ML to create intelligent and innovative solutions.',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solving',
    description: 'Strong foundation in DSA and algorithmic thinking.',
  },
  {
    icon: Rocket,
    title: 'Innovation',
    description: 'Always learning and adapting to emerging technologies.',
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">01. About Me</span>
          <h2 className="section-heading mt-2">
            Who <span className="gradient-text">I Am</span>
          </h2>
          <p className="section-subheading mx-auto">
            A passionate Computer Science student driven by curiosity and creativity.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="glass-card glow-border p-8">
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm <span className="text-foreground font-semibold">Adarsh Tiwari</span>, 
                a Computer Science & Engineering student at Integral University, Lucknow. 
                With a deep passion for technology, I specialize in{' '}
                <span className="text-primary">Web Development</span>,{' '}
                <span className="text-accent">Artificial Intelligence</span>, and{' '}
                <span className="text-primary">Data Structures & Algorithms</span>.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                My journey in tech is driven by a relentless curiosity to understand how things work 
                and a desire to build solutions that make a real impact. I believe in writing clean, 
                efficient code and creating user experiences that are both beautiful and functional.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or solving algorithmic challenges to sharpen my problem-solving skills.
              </p>
            </div>
          </motion.div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-card glow-border p-6 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:glow-sm transition-all">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold mb-2 text-sm">{item.title}</h3>
                <p className="text-muted-foreground text-xs">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
