import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <main className="pt-20">
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-16"
          >
            <p className="section-heading">Get In Touch</p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl">Contact Us</h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-16 h-px bg-primary mx-auto mt-4 origin-center"
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="font-serif text-xl sm:text-2xl mb-6 sm:mb-8">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs sm:text-sm tracking-wider uppercase text-muted-foreground mb-2 block">Name</label>
                    <Input
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      maxLength={100}
                    />
                  </div>
                  <div>
                    <label className="text-xs sm:text-sm tracking-wider uppercase text-muted-foreground mb-2 block">Email</label>
                    <Input
                      required
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      maxLength={255}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs sm:text-sm tracking-wider uppercase text-muted-foreground mb-2 block">Subject</label>
                  <Input
                    required
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Subject"
                    maxLength={200}
                  />
                </div>
                <div>
                  <label className="text-xs sm:text-sm tracking-wider uppercase text-muted-foreground mb-2 block">Message</label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Your message"
                    rows={5}
                    maxLength={1000}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full hover:scale-[1.02] active:scale-[0.98] transition-transform">
                  Send Message
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6 sm:space-y-8"
            >
              <h2 className="font-serif text-xl sm:text-2xl mb-6 sm:mb-8">Visit Our Atelier</h2>

              <div className="space-y-5 sm:space-y-6">
                {[
                  { icon: MapPin, title: 'Address', text: '42 Rue du Faubourg Saint-Honoré\n75008 Paris, France' },
                  { icon: Phone, title: 'Phone', text: '+33 1 42 68 00 00' },
                  { icon: Mail, title: 'Email', text: 'contact@maisonelegance.com' },
                ].map(({ icon: Icon, title, text }, i) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                    className="flex items-start gap-3 sm:gap-4 group"
                  >
                    <div className="p-2 rounded-sm bg-secondary group-hover:bg-primary/10 transition-colors">
                      <Icon size={18} className="text-primary flex-shrink-0" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1 text-sm sm:text-base">{title}</h3>
                      <p className="text-muted-foreground text-sm whitespace-pre-line">{text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="pt-6 sm:pt-8 border-t border-border">
                <h3 className="text-xs sm:text-sm tracking-[0.2em] uppercase mb-4 font-medium">Follow Us</h3>
                <div className="flex gap-4 sm:gap-6">
                  {[
                    { href: 'https://instagram.com', icon: Instagram, label: 'Instagram' },
                    { href: 'https://facebook.com', icon: Facebook, label: 'Facebook' },
                    { href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
                  ].map(({ href, icon: Icon, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                      whileHover={{ scale: 1.05, y: -1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon size={18} />
                      <span className="text-xs sm:text-sm">{label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
