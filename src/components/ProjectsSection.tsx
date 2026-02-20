import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Home, MessageSquare, CheckSquare, ArrowUpRight } from 'lucide-react';
import { useTilt } from '@/hooks/use-tilt';

const projects = [
  {
    title: 'Shelter Scape',
    description: 'Secure & affordable accommodation platform with real-time availability and smart recommendations.',
    icon: Home,
    features: ['Booking history', 'Smart recommendations', 'Real-time availability', 'Auth system'],
    techStack: ['React.js', 'JavaScript', 'HTML', 'CSS', 'REST API'],
    status: 'Deployed',
    color: 'hsl(190 100% 55%)',
    accentGlow: 'hsl(190 100% 55% / 0.18)',
    number: '01',
  },
  {
    title: 'AI Voice Bot',
    description: 'Intelligent voice-interactive chatbot leveraging Google Gemini AI with speech synthesis.',
    icon: MessageSquare,
    features: ['Voice interaction', 'NLP processing', 'Text-to-speech', 'Context-aware'],
    techStack: ['Python', 'Google Gemini', 'gTTS', 'Speech Recognition'],
    status: 'Active',
    color: 'hsl(270 100% 70%)',
    accentGlow: 'hsl(270 100% 70% / 0.18)',
    number: '02',
  },
  {
    title: 'TaskNest',
    description: 'Android task management app with Firebase cloud sync, Google auth, and push notifications.',
    icon: CheckSquare,
    features: ['CRUD tasks', 'Due date tracking', 'Firebase Auth', 'Cloud sync'],
    techStack: ['Java', 'Firebase', 'Android', 'Material UI'],
    status: 'Stable',
    color: 'hsl(160 80% 50%)',
    accentGlow: 'hsl(160 80% 50% / 0.18)',
    number: '03',
  },
];

/* entrance variants — each card flies from a different angle */
const cardVariants = [
  { hidden: { opacity: 0, x: -80, y: 40, rotateY: -20, rotateX: 10 }, visible: { opacity: 1, x: 0, y: 0, rotateY: 0, rotateX: 0 } },
  { hidden: { opacity: 0, y: 100, rotateX: 25, scale: 0.8 },           visible: { opacity: 1, y: 0, rotateX: 0, scale: 1 } },
  { hidden: { opacity: 0, x: 80, y: 40, rotateY: 20, rotateX: 10 },   visible: { opacity: 1, x: 0, y: 0, rotateY: 0, rotateX: 0 } },
];

const TiltCard = ({ project, index, isInView }: { project: typeof projects[0]; index: number; isInView: boolean }) => {
  const { ref, glareRef, handleMouseMove, handleMouseLeave } = useTilt({ max: 14, scale: 1.04 });

  return (
    <motion.div
      variants={cardVariants[index]}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration: 0.9, delay: index * 0.15, ease: [0.23, 1, 0.32, 1] }}
      style={{ transformStyle: 'preserve-3d', perspective: '1200px' }}
    >
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative h-full cursor-pointer animate-hologram-flicker"
        style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
      >
        {/* Glare overlay */}
        <div
          ref={glareRef}
          className="absolute inset-0 rounded-2xl z-20 pointer-events-none opacity-0 transition-opacity duration-200"
        />

        {/* Neon border pulse on hover */}
        <div
          className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ boxShadow: `0 0 40px ${project.accentGlow}, 0 0 80px ${project.accentGlow}, inset 0 0 20px ${project.color}08` }}
        />

        {/* Holographic corner accents */}
        <div className="absolute top-0 left-0 w-6 h-6 rounded-tl-2xl border-t-2 border-l-2 pointer-events-none opacity-60 transition-opacity duration-300 group-hover:opacity-100"
          style={{ borderColor: project.color }} />
        <div className="absolute top-0 right-0 w-6 h-6 rounded-tr-2xl border-t-2 border-r-2 pointer-events-none opacity-60 transition-opacity duration-300 group-hover:opacity-100"
          style={{ borderColor: project.color }} />
        <div className="absolute bottom-0 left-0 w-6 h-6 rounded-bl-2xl border-b-2 border-l-2 pointer-events-none opacity-60 transition-opacity duration-300 group-hover:opacity-100"
          style={{ borderColor: project.color }} />
        <div className="absolute bottom-0 right-0 w-6 h-6 rounded-br-2xl border-b-2 border-r-2 pointer-events-none opacity-60 transition-opacity duration-300 group-hover:opacity-100"
          style={{ borderColor: project.color }} />

        <div
          className="relative h-full rounded-2xl overflow-hidden flex flex-col"
          style={{
            background: 'hsl(222 45% 6% / 0.8)',
            backdropFilter: 'blur(50px) saturate(2)',
            border: `1px solid ${project.color}20`,
            boxShadow: `0 8px 40px hsl(222 47% 4% / 0.8), inset 0 1px 0 ${project.color}12`,
            transition: 'border-color 0.4s ease, box-shadow 0.4s ease',
          }}
        >
          {/* Top prismatic accent bar */}
          <div
            className="h-0.5 w-full"
            style={{ background: `linear-gradient(90deg, transparent, ${project.color}, hsl(270 100% 70%), ${project.color}, transparent)` }}
          />

          {/* Cyber scan line on hover */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute left-0 right-0 h-px opacity-0 group-hover:opacity-60"
              style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}
              animate={{ top: ['0%', '100%'] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', repeatDelay: 0.5 }}
            />
          </div>

          {/* Project number watermark */}
          <div
            className="absolute top-4 right-5 font-display font-black text-7xl select-none pointer-events-none"
            style={{ color: project.color, opacity: 0.04 }}
          >
            {project.number}
          </div>

          <div className="p-7 flex flex-col flex-1">
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                style={{
                  background: `${project.color}15`,
                  border: `1px solid ${project.color}35`,
                  boxShadow: `0 0 20px ${project.color}20`,
                }}
              >
                <project.icon style={{ color: project.color }} size={22} />
              </div>
              <span
                className="text-[10px] font-mono px-3 py-1.5 rounded-full"
                style={{
                  background: `${project.color}10`,
                  border: `1px solid ${project.color}35`,
                  color: project.color,
                  boxShadow: `0 0 12px ${project.color}20`,
                }}
              >
                ● {project.status}
              </span>
            </div>

            <h3
              className="text-xl font-display font-bold mb-2.5 transition-colors duration-300"
              style={{ color: 'hsl(210 40% 96%)' }}
            >
              {project.title}
            </h3>

            <p className="text-muted-foreground text-sm mb-5 flex-grow font-body leading-relaxed">
              {project.description}
            </p>

            {/* Features */}
            <div className="mb-5">
              <ul className="space-y-1.5">
                {project.features.slice(0, 3).map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm font-body text-muted-foreground">
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: project.color, boxShadow: `0 0 6px ${project.color}` }}
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.techStack.map((tech) => (
                <motion.span
                  key={tech}
                  className="text-[10px] font-mono px-2.5 py-1 rounded-lg transition-all duration-300 group-hover:scale-105"
                  style={{
                    background: `${project.color}08`,
                    border: `1px solid ${project.color}20`,
                    color: `${project.color}bb`,
                  }}
                  whileHover={{ scale: 1.1, boxShadow: `0 0 10px ${project.color}30` }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-auto">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="flex-1 py-2.5 text-xs flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300"
                style={{
                  background: `${project.color}12`,
                  border: `1px solid ${project.color}30`,
                  color: project.color,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 25px ${project.accentGlow}`;
                  (e.currentTarget as HTMLElement).style.background = `${project.color}22`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  (e.currentTarget as HTMLElement).style.background = `${project.color}12`;
                }}
              >
                View Details
                <ArrowUpRight size={14} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.08, boxShadow: `0 0 20px ${project.accentGlow}` }}
                whileTap={{ scale: 0.94 }}
                className="py-2.5 px-3.5 rounded-xl transition-all duration-300"
                style={{
                  background: `${project.color}10`,
                  border: `1px solid ${project.color}25`,
                  color: project.color,
                }}
              >
                <Github size={16} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      {/* Section ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, hsl(190 100% 55% / 0.03) 0%, hsl(270 100% 70% / 0.02) 50%, transparent 70%)' }} />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 10 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
          style={{ perspective: '1000px' }}
        >
          <span className="text-xs font-mono tracking-widest uppercase" style={{ color: 'hsl(190 100% 55% / 0.6)' }}>
            Projects
          </span>
          <h2 className="section-heading mt-3">
            <span className="gradient-text">Featured Work</span>
          </h2>
          <div className="data-line max-w-xs mx-auto mt-6" />
          <p className="text-muted-foreground/60 text-sm font-body mt-4 max-w-md mx-auto">
            Hover over cards for interactive 3D depth — built with precision and passion
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-7" style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}>
          {projects.map((project, index) => (
            <TiltCard key={project.title} project={project} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
