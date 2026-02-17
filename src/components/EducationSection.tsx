import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, Shield } from 'lucide-react';

const education = [
  { degree: 'B.Tech in Computer Science & Engineering', institution: 'Integral University, Lucknow', period: '2023 - 2027', description: 'Focus on Web Development, AI, and Data Structures.', type: 'current' },
  { degree: 'Intermediate (12th)', institution: 'Maharishi Vidya Mandir, Lucknow', period: 'Completed', score: '89.6%', description: 'Higher secondary with distinction in Science.', type: 'completed' },
  { degree: 'High School (10th)', institution: 'Maharishi Vidya Mandir, Lucknow', period: 'Completed', description: 'Strong academic foundation.', type: 'completed' },
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
    <section id="education" className="py-28 relative" ref={ref}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[250px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <span className="text-xs font-mono text-primary/50 tracking-widest uppercase">Education</span>
          <h2 className="section-heading mt-3">
            <span className="gradient-text">Academic Journey</span>
          </h2>
          <div className="data-line max-w-xs mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Timeline */}
          <div>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-primary/10 border border-primary/15">
                <GraduationCap className="text-primary" size={20} />
              </div>
              <span className="font-display font-semibold text-foreground">Education</span>
            </motion.div>

            <div className="relative">
              <div className="absolute left-[5px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-primary/10" />

              <div className="space-y-7">
                {education.map((item, index) => (
                  <motion.div
                    key={item.degree}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="relative pl-8"
                  >
                    <div className="absolute left-0 top-3 timeline-dot" />
                    <div className="glass-card p-6">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h4 className="font-display font-semibold text-foreground">{item.degree}</h4>
                        {item.type === 'current' && (
                          <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">Current</span>
                        )}
                        {item.score && (
                          <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">{item.score}</span>
                        )}
                      </div>
                      <p className="text-primary/80 text-sm font-body">{item.institution}</p>
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
            <motion.div initial={{ opacity: 0, x: 20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-accent/10 border border-accent/15">
                <Shield className="text-accent" size={20} />
              </div>
              <span className="font-display font-semibold text-foreground">Certifications</span>
            </motion.div>

            <div className="space-y-5">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="glass-card float-3d p-6 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-accent/10 border border-accent/15 group-hover:glow-purple transition-all duration-500 flex-shrink-0">
                      <Award className="text-accent" size={18} />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-foreground">{cert.title}</h4>
                      <p className="text-muted-foreground text-sm font-body">Issued by {cert.issuer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="mt-8 glass-card p-7 grid grid-cols-3 gap-4 text-center"
            >
              {[
                { val: '3+', label: 'Projects' },
                { val: '3', label: 'Certs' },
                { val: '89.6%', label: '12th Score' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-2xl font-bold text-primary text-glow">{stat.val}</div>
                  <div className="text-muted-foreground text-xs font-body mt-1">{stat.label}</div>
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