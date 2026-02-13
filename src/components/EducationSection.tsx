import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, Shield } from 'lucide-react';

const education = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'Integral University, Lucknow',
    period: '2023 - 2027',
    description: 'Focus on Web Development, AI, and Data Structures.',
    type: 'current',
  },
  {
    degree: 'Intermediate (12th)',
    institution: 'Maharishi Vidya Mandir, Lucknow',
    period: 'Completed',
    score: '89.6%',
    description: 'Higher secondary with distinction in Science.',
    type: 'completed',
  },
  {
    degree: 'High School (10th)',
    institution: 'Maharishi Vidya Mandir, Lucknow',
    period: 'Completed',
    description: 'Strong academic foundation.',
    type: 'completed',
  },
];

const certifications = [
  { title: 'Data Structure using Advanced C', issuer: 'Integral University' },
  { title: 'AI/ML for Geodata Analysis', issuer: 'ISRO' },
  { title: 'Data Analytics in Python', issuer: 'IIT BHU' },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-24 relative" ref={ref}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-[200px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs text-primary/60 tracking-widest">// 04. EDUCATION</span>
          <h2 className="section-heading mt-2">
            <span className="gradient-text">ACADEMIC_LOG</span>
          </h2>
          <div className="data-line max-w-xs mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Timeline */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              className="flex items-center gap-2 mb-8"
            >
              <GraduationCap className="text-primary" size={20} />
              <span className="font-cyber text-sm tracking-wider text-primary/80">EDUCATION</span>
            </motion.div>

            <div className="relative">
              <div className="absolute left-[5px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-primary/20 shadow-[0_0_5px_hsl(var(--neon-cyan))]" />

              <div className="space-y-6">
                {education.map((item, index) => (
                  <motion.div
                    key={item.degree}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="relative pl-8"
                  >
                    <div className="absolute left-0 top-3 timeline-dot" />

                    <div className="holo-panel neon-border p-5">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h4 className="font-semibold text-foreground font-body">{item.degree}</h4>
                        {item.type === 'current' && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                            CURRENT
                          </span>
                        )}
                        {item.score && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent/10 text-accent border border-accent/20">
                            {item.score}
                          </span>
                        )}
                      </div>
                      <p className="text-primary text-sm font-mono">{item.institution}</p>
                      <p className="text-muted-foreground text-xs font-mono mt-1">{item.period}</p>
                      <p className="text-muted-foreground text-sm font-body mt-2">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              className="flex items-center gap-2 mb-8"
            >
              <Shield className="text-accent" size={20} />
              <span className="font-cyber text-sm tracking-wider text-accent/80">CERTIFICATIONS</span>
            </motion.div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="holo-panel neon-border p-5 group hover:border-accent/40 transition-all duration-500"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded flex items-center justify-center bg-accent/10 border border-accent/20 group-hover:glow-purple transition-all">
                      <Award className="text-accent" size={18} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground font-body">{cert.title}</h4>
                      <p className="text-muted-foreground text-sm font-mono">Issued by {cert.issuer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-8 holo-panel neon-border p-6 grid grid-cols-3 gap-4 text-center"
            >
              {[
                { val: '3+', label: 'Projects' },
                { val: '3', label: 'Certs' },
                { val: '89.6%', label: '12th Score' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-cyber text-2xl text-primary text-glow-cyan">{stat.val}</div>
                  <div className="text-muted-foreground text-xs font-mono">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
