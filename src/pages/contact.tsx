import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { useState } from 'react';
import type { Language } from '../i18n/translations';
import { translations } from '../i18n/translations';

interface ContactProps {
  currentLang: Language;
}

export default function Contact({ currentLang }: ContactProps) {
  const t = translations[currentLang].contactPage;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6">
            <Mail className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-4 text-foreground">{t.title}</h1>
          <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">{t.subtitle}</p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-surface-secondary rounded-2xl p-8 md:p-12 shadow-lg"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <Send className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-2">Message envoyé !</h2>
              <p className="text-foreground-secondary">Nous vous répondrons rapidement.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-foreground">
                  {t.name}
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-surface-primary border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-foreground">
                  {t.email}
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-surface-primary border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-foreground">
                  {t.message}
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-surface-primary border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                {t.send}
              </motion.button>
            </form>
          )}

          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-foreground-secondary">
              {t.direct}{' '}
              <a href="mailto:contact@recash.shop" className="text-primary font-semibold hover:underline">
                contact@recash.shop
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
