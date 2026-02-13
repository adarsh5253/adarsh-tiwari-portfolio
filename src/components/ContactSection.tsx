import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, Radio } from 'lucide-react';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Message transmitted successfully!');
  };

  const contactInfo = [
    { icon: Mail, label: 'EMAIL', value: 'adarshtiwari@example.com', href: 'mailto:adarshtiwari@example.com' },
    { icon: Phone, label: 'PHONE', value: '+91 XXXXXXXXXX', href: 'tel:+91XXXXXXXXXX' },
    { icon: MapPin, label: 'LOCATION', value: 'Lucknow, UP, India', href: '#' },
  ];

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[200px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs text-primary/60 tracking-widest">// 05. CONTACT</span>
          <h2 className="section-heading mt-2">
            <span className="gradient-text">TRANSMIT_MSG</span>
          </h2>
          <div className="data-line max-w-xs mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="holo-panel neon-border p-6">
              <div className="flex items-center gap-2 mb-6">
                <Radio size={16} className="text-primary animate-neon-pulse" />
                <h3 className="font-cyber text-sm tracking-wider text-primary/80">COMM_CHANNELS</h3>
              </div>
              <p className="text-muted-foreground mb-6 font-body text-lg">
                Open to discussing projects, creative ideas, or collaboration opportunities.
              </p>

              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 p-3 rounded hover:bg-primary/5 transition-colors group border border-transparent hover:border-primary/10"
                  >
                    <div className="w-10 h-10 rounded flex items-center justify-center bg-primary/10 border border-primary/20 group-hover:glow-cyan transition-all">
                      <info.icon className="text-primary" size={16} />
                    </div>
                    <div>
                      <p className="text-primary/40 text-[10px] font-mono">{info.label}</p>
                      <p className="font-body text-foreground">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="holo-panel neon-border p-6 md:p-8">
              <div className="font-mono text-[10px] text-primary/30 mb-6">{'>'} compose_message()</div>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-mono text-primary/40 mb-2">NAME</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="input-cyber"
                    placeholder="user.name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-primary/40 mb-2">EMAIL</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="input-cyber"
                    placeholder="user@domain.com"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-xs font-mono text-primary/40 mb-2">SUBJECT</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="input-cyber"
                  placeholder="msg.subject"
                />
              </div>

              <div className="mb-6">
                <label className="block text-xs font-mono text-primary/40 mb-2">MESSAGE</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="input-cyber resize-none"
                  placeholder="// Write your message here..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="cyber-btn w-full flex items-center justify-center gap-2 disabled:opacity-50"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin relative z-10" />
                    <span className="relative z-10">TRANSMITTING...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} className="relative z-10" />
                    <span className="relative z-10">SEND_MESSAGE</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
