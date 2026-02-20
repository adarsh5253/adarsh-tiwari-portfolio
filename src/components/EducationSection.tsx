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
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="education" className="py-28 relative" ref={ref}>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[250px] pointer-events-none"
        style={{ background: 'hsl(270 100% 70% / 0.05)' }} />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: 14 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 0.85 }}
          className="text-center mb-20"
          style={{ perspective: '800px' }}
        >
          <span className="text-xs font-mono tracking-widest uppercase" style={{ color: 'hsl(190 100% 55% / 0.5)' }}>Education</span>
          <h2 className="section-heading mt-3">
            <span className="gradient-text">Academic Journey</span>
          </h2>
          <div className="data-line max-w-xs mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Timeline */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50, rotateY: -15 }}
              animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              style={{ perspective: '800px' }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'hsl(190 100% 55% / 0.12)', border: '1px solid hsl(190 100% 55% / 0.25)', boxShadow: '0 0 15px hsl(190 100% 55% / 0.15)' }}>
                <GraduationCap style={{ color: 'hsl(190 100% 65%)' }} size={20} />
              </div>
              <span className="font-display font-semibold text-foreground">Education</span>
            </motion.div>

            <div className="relative">
              <div className="absolute left-[5px] top-2 bottom-2 w-px"
                style={{ background: 'linear-gradient(to bottom, hsl(190 100% 55% / 0.7), hsl(270 100% 70% / 0.5), hsl(190 100% 55% / 0.1))' }} />

              <div className="space-y-7">
                {education.map((item, index) => (
                  <motion.div
                    key={item.degree}
                    initial={{ opacity: 0, x: -60, rotateY: -12 }}
                    animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
                    transition={{ duration: 0.75, delay: 0.3 + index * 0.15, ease: [0.23, 1, 0.32, 1] }}
                    className="relative pl-8"
                    style={{ perspective: '800px' }}
                  >
                    <div className="absolute left-0 top-3 timeline-dot" />
                    <div className="holo-card p-6 group">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h4 className="font-display font-semibold text-foreground">{item.degree}</h4>
                        {item.type === 'current' && (
                          <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full"
                            style={{ background: 'hsl(190 100% 55% / 0.1)', color: 'hsl(190 100% 65%)', border: '1px solid hsl(190 100% 55% / 0.25)' }}>
                            Current
                          </span>
                        )}
                        {item.score && (
                          <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full"
                            style={{ background: 'hsl(270 100% 70% / 0.1)', color: 'hsl(270 100% 78%)', border: '1px solid hsl(270 100% 70% / 0.25)' }}>
                            {item.score}
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-body" style={{ color: 'hsl(190 100% 65% / 0.8)' }}>{item.institution}</p>
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
              initial={{ opacity: 0, x: 50, rotateY: 15 }}
              animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 }}
              style={{ perspective: '800px' }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'hsl(270 100% 70% / 0.12)', border: '1px solid hsl(270 100% 70% / 0.25)', boxShadow: '0 0 15px hsl(270 100% 70% / 0.15)' }}>
                <Shield style={{ color: 'hsl(270 100% 78%)' }} size={20} />
              </div>
              <span className="font-display font-semibold text-foreground">Certifications</span>
            </motion.div>

            <div className="space-y-5">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: 60, rotateY: 15 }}
                  animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
                  transition={{ duration: 0.75, delay: 0.4 + index * 0.15, ease: [0.23, 1, 0.32, 1] }}
                  style={{ perspective: '800px' }}
                  className="holo-card float-3d p-6 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-110"
                      style={{ background: 'hsl(270 100% 70% / 0.12)', border: '1px solid hsl(270 100% 70% / 0.25)', boxShadow: '0 0 15px hsl(270 100% 70% / 0.1)' }}>
                      <Award style={{ color: 'hsl(270 100% 78%)' }} size={18} />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-foreground">{cert.title}</h4>
                      <p className="text-muted-foreground text-sm font-body">Issued by {cert.issuer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats panel */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: 15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.23, 1, 0.32, 1] }}
              style={{ perspective: '800px' }}
              className="mt-8 holo-card p-7 grid grid-cols-3 gap-4 text-center"
            >
              {[
                { val: '3+', label: 'Projects', color: 'hsl(190 100% 65%)' },
                { val: '3', label: 'Certs', color: 'hsl(270 100% 78%)' },
                { val: '89.6%', label: '12th Score', color: 'hsl(160 80% 55%)' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-2xl font-bold"
                    style={{ color: stat.color, textShadow: `0 0 15px ${stat.color}70` }}>
                    {stat.val}
                  </div>
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
