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
    color: 'hsl(210 100% 60%)',
    gradient: 'from-blue-500/10 to-cyan-500/5',
    accentGlow: 'hsl(210 100% 60% / 0.15)',
    number: '01',
  },
  {
    title: 'AI Voice Bot',
    description: 'Intelligent voice-interactive chatbot leveraging Google Gemini AI with speech synthesis.',
    icon: MessageSquare,
    features: ['Voice interaction', 'NLP processing', 'Text-to-speech', 'Context-aware'],
    techStack: ['Python', 'Google Gemini', 'gTTS', 'Speech Recognition'],
    status: 'Active',
    color: 'hsl(250 90% 68%)',
    gradient: 'from-violet-500/10 to-purple-500/5',
    accentGlow: 'hsl(250 90% 68% / 0.15)',
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
    gradient: 'from-emerald-500/10 to-teal-500/5',
    accentGlow: 'hsl(160 80% 50% / 0.15)',
    number: '03',
  },
];

const TiltCard = ({ project, index, isInView }: { project: typeof projects[0]; index: number; isInView: boolean }) => {
  const { ref, glareRef, handleMouseMove, handleMouseLeave } = useTilt({ max: 12, scale: 1.03 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: 15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.18, ease: [0.23, 1, 0.32, 1] }}
      style={{ transformStyle: 'preserve-3d', perspective: '1200px' }}
    >
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative h-full cursor-pointer"
        style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
      >
        {/* Glare overlay */}
        <div
          ref={glareRef}
          className="absolute inset-0 rounded-2xl z-20 pointer-events-none opacity-0 transition-opacity duration-200"
        />

        {/* Ambient glow that intensifies on hover */}
        <div
          className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ boxShadow: `0 0 50px ${project.accentGlow}, 0 0 100px ${project.accentGlow}` }}
        />

        <div
          className="relative h-full rounded-2xl overflow-hidden flex flex-col"
          style={{
            background: 'hsl(222 40% 7% / 0.7)',
            backdropFilter: 'blur(40px) saturate(1.8)',
            border: `1px solid hsl(210 100% 60% / 0.12)`,
            boxShadow: '0 8px 40px hsl(222 47% 4% / 0.7), inset 0 1px 0 hsl(210 100% 80% / 0.05)',
            transition: 'border-color 0.4s ease, box-shadow 0.4s ease',
          }}
        >
          {/* Top accent bar */}
          <div
            className="h-px w-full"
            style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}
          />

          {/* Project number watermark */}
          <div
            className="absolute top-4 right-5 font-display font-black text-6xl select-none pointer-events-none"
            style={{ color: `${project.color}`, opacity: 0.05 }}
          >
            {project.number}
          </div>

          <div className="p-7 flex flex-col flex-1">
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                style={{
                  background: `${project.color}18`,
                  border: `1px solid ${project.color}30`,
                  boxShadow: `0 0 20px ${project.color}20`,
                }}
              >
                <project.icon style={{ color: project.color }} size={22} />
              </div>
              <span
                className="text-[10px] font-mono px-3 py-1.5 rounded-full"
                style={{
                  background: `${project.color}12`,
                  border: `1px solid ${project.color}30`,
                  color: project.color,
                  boxShadow: `0 0 10px ${project.color}20`,
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
                <span
                  key={tech}
                  className="text-[10px] font-mono px-2.5 py-1 rounded-lg transition-all duration-300 group-hover:scale-105"
                  style={{
                    background: `${project.color}08`,
                    border: `1px solid ${project.color}20`,
                    color: `${project.color}aa`,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-auto">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex-1 py-2.5 text-xs flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300"
                style={{
                  background: `${project.color}15`,
                  border: `1px solid ${project.color}35`,
                  color: project.color,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 25px ${project.accentGlow}`;
                  (e.currentTarget as HTMLElement).style.background = `${project.color}25`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  (e.currentTarget as HTMLElement).style.background = `${project.color}15`;
                }}
              >
                View Details
                <ArrowUpRight size={14} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.06 }}
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, hsl(210 100% 60% / 0.03) 0%, transparent 70%)' }} />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <motion.span
            className="text-xs font-mono tracking-widest uppercase"
            style={{ color: 'hsl(210 100% 60% / 0.6)' }}
          >
            Projects
          </motion.span>
          <h2 className="section-heading mt-3">
            <span className="gradient-text">Featured Work</span>
          </h2>
          <div className="data-line max-w-xs mx-auto mt-6" />
          <p className="text-muted-foreground/60 text-sm font-body mt-4 max-w-md mx-auto">
            Hover over cards for interactive 3D depth — built with precision and passion
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-7" style={{ perspective: '1000px' }}>
          {projects.map((project, index) => (
            <TiltCard key={project.title} project={project} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
