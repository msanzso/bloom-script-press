import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const ContactSection = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t.contact.success);
    setForm({ name: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-warm">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">{t.contact.title}</h2>
          <p className="font-body text-muted-foreground mt-4 text-lg">{t.contact.subtitle}</p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <div>
            <label className="font-body text-sm text-muted-foreground block mb-2">{t.contact.name}</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 bg-background border border-border font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label className="font-body text-sm text-muted-foreground block mb-2">{t.contact.phone}</label>
            <input
              type="tel"
              required
              value={form.phone}
              onChange={e => setForm({ ...form, phone: e.target.value })}
              className="w-full px-4 py-3 bg-background border border-border font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label className="font-body text-sm text-muted-foreground block mb-2">{t.contact.message}</label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 bg-background border border-border font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors"
            >
              {t.contact.send}
            </button>
            <a
              href="https://wa.me/34616935443"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-6 py-3 border border-primary text-primary font-body text-sm tracking-widest uppercase text-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {t.contact.whatsapp}
            </a>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
