import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Message sent successfully!');
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'adarshtiwari@example.com',
      href: 'mailto:adarshtiwari@example.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 XXXXXXXXXX',
      href: 'tel:+91XXXXXXXXXX',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Lucknow, Uttar Pradesh, India',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 relative" ref={ref}>
      {/* Background accents */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">05. Contact</span>
          <h2 className="section-heading mt-2">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subheading mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-card glow-border p-6">
              <h3 className="text-xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities 
                to be part of your visions.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-muted/30 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:glow-sm transition-all">
                      <info.icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm">{info.label}</p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card glow-border p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="input-glass"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="input-glass"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm text-muted-foreground mb-2">Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="input-glass"
                  placeholder="Project Collaboration"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm text-muted-foreground mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="input-glass resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
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
