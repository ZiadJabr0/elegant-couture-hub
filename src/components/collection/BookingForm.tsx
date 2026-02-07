import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    style: '',
    date: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Appointment request submitted! We will contact you shortly.');
    setFormData({ name: '', email: '', style: '', date: '' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-xl mx-auto"
    >
      <div className="text-center mb-10">
        <p className="section-heading">Book Now</p>
        <h2 className="font-serif text-3xl md:text-4xl">Private Consultation</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="text-sm tracking-wider uppercase text-muted-foreground mb-2 block">Full Name</label>
          <Input
            required
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            placeholder="Your full name"
            maxLength={100}
          />
        </div>
        <div>
          <label className="text-sm tracking-wider uppercase text-muted-foreground mb-2 block">Email</label>
          <Input
            required
            type="email"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            placeholder="your@email.com"
            maxLength={255}
          />
        </div>
        <div>
          <label className="text-sm tracking-wider uppercase text-muted-foreground mb-2 block">Preferred Style</label>
          <Input
            required
            value={formData.style}
            onChange={e => setFormData({ ...formData, style: e.target.value })}
            placeholder="e.g., Classic, Modern, Avant-garde"
            maxLength={200}
          />
        </div>
        <div>
          <label className="text-sm tracking-wider uppercase text-muted-foreground mb-2 block">Appointment Date</label>
          <Input
            required
            type="date"
            value={formData.date}
            onChange={e => setFormData({ ...formData, date: e.target.value })}
          />
        </div>
        <Button type="submit" className="w-full" size="lg">
          Request Appointment
        </Button>
      </form>
    </motion.div>
  );
};

export default BookingForm;