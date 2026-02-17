import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Home, MessageSquare, CheckSquare, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Shelter Scape',
    description: 'Secure & affordable accommodation platform with real-time availability and smart recommendations.',
    icon: Home,
    features: ['Booking history', 'Smart recommendations', 'Real-time availability', 'Auth system'],
    techStack: ['React.js', 'JavaScript', 'HTML', 'CSS', 'REST API'],
    status: 'Deployed',
    gradient: 'from-blue-500/10 to-cyan-500/5',
  },
  {
    title: 'AI Voice Bot',
    description: 'Intelligent voice-interactive chatbot leveraging Google Gemini AI with speech synthesis.',
    icon: MessageSquare,
    features: ['Voice interaction', 'NLP processing', 'Text-to-speech', 'Context-aware'],
    techStack: ['Python', 'Google Gemini', 'gTTS', 'Speech Recognition'],
    status: 'Active',
    gradient: 'from-violet-500/10 to-purple-500/5',
  },
  {
    title: 'TaskNest',
    description: 'Android task management app with Firebase cloud sync, Google auth, and push notifications.',
    icon: CheckSquare,
    features: ['CRUD tasks', 'Due date tracking', 'Firebase Auth', 'Cloud sync'],
    techStack: ['Java', 'Firebase', 'Android', 'Material UI'],
    status: 'Stable',
    gradient: 'from-emerald-500/10 to-teal-500/5',
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-28 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <span className="text-xs font-mono text-primary/50 tracking-widest uppercase">Projects</span>
          <h2 className="section-heading mt-3">
            <span className="gradient-text">Featured Work</span>
          </h2>
          <div className="data-line max-w-xs mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-7">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="glass-card float-3d h-full p-7 flex flex-col relative overflow-hidden">
                {/* Gradient accent */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                {/* Header */}
                <div className="flex items-center justify-between mb-5 relative z-10">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary/10 border border-primary/15 group-hover:glow-blue transition-all duration-500">
                    <project.icon className="text-primary" size={22} />
                  </div>
                  <span className="text-[11px] font-mono text-primary/60 px-3 py-1 rounded-full bg-primary/5 border border-primary/15">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold mb-2 text-foreground group-hover:text-primary transition-colors relative z-10">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-5 flex-grow font-body relative z-10">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-5 relative z-10">
                  <ul className="space-y-1.5">
                    {project.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm font-body text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-primary/60" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-6 relative z-10">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-primary/5 border border-primary/10 text-primary/50">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-auto relative z-10">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex-1 btn-premium py-2.5 text-xs flex items-center justify-center gap-2"
                  >
                    <span className="relative z-10">View Details</span>
                    <ArrowUpRight size={14} className="relative z-10" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-premium py-2.5 px-3.5"
                  >
                    <Github size={16} className="relative z-10" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;