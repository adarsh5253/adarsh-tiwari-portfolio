import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Home, MessageSquare, CheckSquare, Terminal } from 'lucide-react';

const projects = [
  {
    title: 'SHELTER_SCAPE',
    description: 'Secure & affordable accommodation platform with real-time availability and smart recommendations.',
    icon: Home,
    features: ['Booking history', 'Smart recommendations', 'Real-time availability', 'Auth system'],
    techStack: ['React.js', 'JavaScript', 'HTML', 'CSS', 'JSON', 'REST API'],
    status: 'DEPLOYED',
  },
  {
    title: 'AI_VOICE_BOT',
    description: 'Intelligent voice-interactive chatbot leveraging Google Gemini AI with speech synthesis.',
    icon: MessageSquare,
    features: ['Voice interaction', 'NLP processing', 'Text-to-speech', 'Context-aware'],
    techStack: ['Python', 'Google Gemini', 'gTTS', 'Speech Recognition', 'NLP'],
    status: 'ACTIVE',
  },
  {
    title: 'TASK_NEST',
    description: 'Task management app with Firebase cloud sync, Google auth, and push notifications.',
    icon: CheckSquare,
    features: ['CRUD tasks', 'Due date tracking', 'Firebase Auth', 'Cloud sync', 'Notifications'],
    techStack: ['Java', 'Firebase', 'Firestore', 'Android', 'Material UI'],
    status: 'STABLE',
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs text-primary/60 tracking-widest">// 03. PROJECTS</span>
          <h2 className="section-heading mt-2">
            <span className="gradient-text">FEATURED_WORK</span>
          </h2>
          <div className="data-line max-w-xs mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="holo-panel neon-border h-full p-6 flex flex-col hover:border-primary/40 transition-all duration-500 relative overflow-hidden">
                {/* Top status bar */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <project.icon size={18} className="text-primary" />
                    <span className="font-mono text-[10px] text-primary/40">PROJECT_{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <span className="font-mono text-[10px] text-primary/60 border border-primary/20 px-2 py-0.5 rounded">
                    {project.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-cyber font-bold mb-2 text-foreground group-hover:text-primary transition-colors tracking-wide">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 flex-grow font-body">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <div className="font-mono text-[10px] text-primary/40 mb-2 flex items-center gap-1">
                    <Terminal size={10} />FEATURES
                  </div>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm font-body">
                        <span className="w-1 h-1 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-5">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="text-[10px] font-mono px-2 py-0.5 rounded bg-primary/5 border border-primary/15 text-primary/60">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-auto">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 cyber-btn py-2 text-xs flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={14} className="relative z-10" />
                    <span className="relative z-10">DETAILS</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="cyber-btn py-2 px-3"
                  >
                    <Github size={16} className="relative z-10" />
                  </motion.button>
                </div>

                {/* Hover scan effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
