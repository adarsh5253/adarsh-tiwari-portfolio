import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Home, MessageSquare, CheckSquare } from 'lucide-react';

const projects = [
  {
    title: 'Shelter Scape',
    description: 'A secure and affordable accommodation platform designed to help users find perfect housing solutions with ease.',
    icon: Home,
    features: [
      'Booking history management',
      'Smart recommendations',
      'Real-time availability tracking',
      'User authentication',
    ],
    techStack: ['React.js', 'JavaScript', 'HTML', 'CSS', 'JSON', 'REST API'],
    color: 'from-blue-500 to-cyan-500',
    gradient: 'bg-gradient-to-br from-blue-500/20 to-cyan-500/10',
  },
  {
    title: 'AI Voice Chatbot',
    description: 'An intelligent voice-interactive chatbot leveraging Google Gemini AI for natural conversations with speech synthesis.',
    icon: MessageSquare,
    features: [
      'Voice interaction',
      'Natural language processing',
      'Text-to-speech responses',
      'Context-aware conversations',
    ],
    techStack: ['Python', 'Google Gemini', 'gTTS', 'Speech Recognition', 'NLP'],
    color: 'from-purple-500 to-pink-500',
    gradient: 'bg-gradient-to-br from-purple-500/20 to-pink-500/10',
  },
  {
    title: 'TaskNest',
    description: 'A comprehensive task management application with cloud synchronization and smart notifications.',
    icon: CheckSquare,
    features: [
      'Add & delete tasks',
      'Due dates & completion tracking',
      'Firebase Authentication (Google)',
      'Firestore cloud sync',
      'Push notifications',
    ],
    techStack: ['Java', 'Firebase', 'Firestore', 'Android', 'Material UI'],
    color: 'from-green-500 to-emerald-500',
    gradient: 'bg-gradient-to-br from-green-500/20 to-emerald-500/10',
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">03. Projects</span>
          <h2 className="section-heading mt-2">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="section-subheading mx-auto">
            Projects that showcase my skills and passion for building impactful solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="glass-card glow-border h-full p-6 flex flex-col">
                {/* Project Icon */}
                <div className={`w-14 h-14 rounded-xl ${project.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="text-foreground" size={28} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Key Features</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded-md bg-muted/50 text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 btn-secondary py-2 text-sm flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={16} />
                    View Details
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 btn-secondary"
                  >
                    <Github size={18} />
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
