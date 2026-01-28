import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'Integral University, Lucknow',
    period: '2023 - 2027',
    description: 'Currently pursuing undergraduate degree with focus on Web Development, AI, and Data Structures.',
    type: 'current',
  },
  {
    degree: 'Intermediate (12th)',
    institution: 'Maharishi Vidya Mandir, Lucknow',
    period: 'Completed',
    score: '89.6%',
    description: 'Completed higher secondary education with distinction in Science stream.',
    type: 'completed',
  },
  {
    degree: 'High School (10th)',
    institution: 'Maharishi Vidya Mandir, Lucknow',
    period: 'Completed',
    description: 'Completed secondary education with strong academic foundation.',
    type: 'completed',
  },
];

const certifications = [
  {
    title: 'Data Structure using Advanced C Programming',
    issuer: 'Integral University',
    icon: Award,
  },
  {
    title: 'AI/ML for Geodata Analysis',
    issuer: 'ISRO',
    icon: Award,
  },
  {
    title: 'Data Analytics in Python',
    issuer: 'IIT BHU',
    icon: Award,
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-20 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">04. Education</span>
          <h2 className="section-heading mt-2">
            Academic <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subheading mx-auto">
            My educational background and professional certifications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl font-bold mb-8 flex items-center gap-3"
            >
              <GraduationCap className="text-primary" />
              Education
            </motion.h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20" />

              <div className="space-y-8">
                {education.map((item, index) => (
                  <motion.div
                    key={item.degree}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="relative pl-12"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-2 top-2 timeline-dot" />

                    <div className="glass-card glow-border p-5">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h4 className="font-semibold">{item.degree}</h4>
                        {item.type === 'current' && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary">
                            Current
                          </span>
                        )}
                        {item.score && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-accent/20 text-accent">
                            {item.score}
                          </span>
                        )}
                      </div>
                      <p className="text-primary text-sm mb-1">{item.institution}</p>
                      <p className="text-muted-foreground text-sm mb-2">{item.period}</p>
                      <p className="text-muted-foreground text-xs">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl font-bold mb-8 flex items-center gap-3"
            >
              <Award className="text-accent" />
              Certifications
            </motion.h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="glass-card glow-border p-5 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:glow-sm transition-all">
                      <cert.icon className="text-accent" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{cert.title}</h4>
                      <p className="text-muted-foreground text-sm">Issued by {cert.issuer}</p>
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
              className="mt-8 glass-card p-6 grid grid-cols-3 gap-4 text-center"
            >
              <div>
                <div className="text-2xl font-bold gradient-text">3+</div>
                <div className="text-muted-foreground text-xs">Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text">3</div>
                <div className="text-muted-foreground text-xs">Certifications</div>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text">89.6%</div>
                <div className="text-muted-foreground text-xs">12th Score</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
