import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const services = [
  { id: 'personal-styling', label: 'Personal Styling' },
  { id: 'hair-styling', label: 'Hair Styling' },
  { id: 'makeup', label: 'Makeup' },
] as const;

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    style: '',
    date: '',
  });
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(s => s !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedServices.length === 0) {
      toast.error('Please select at least one service.');
      return;
    }
    toast.success('Appointment request submitted! We will contact you shortly.');
    setFormData({ name: '', email: '', style: '', date: '' });
    setSelectedServices([]);
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
          <label className="text-sm tracking-wider uppercase text-muted-foreground mb-3 block">Services</label>
          <div className="space-y-3">
            {services.map(service => (
              <div key={service.id} className="flex items-center gap-3">
                <Checkbox
                  id={service.id}
                  checked={selectedServices.includes(service.id)}
                  onCheckedChange={() => toggleService(service.id)}
                />
                <Label
                  htmlFor={service.id}
                  className="text-sm tracking-wide cursor-pointer"
                >
                  {service.label}
                </Label>
              </div>
            ))}
          </div>
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
