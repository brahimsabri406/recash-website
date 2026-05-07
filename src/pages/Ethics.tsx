import { motion } from 'framer-motion';
import { Leaf, Clock, Mail } from 'lucide-react';
import { useState } from 'react';
import type { Language } from '../i18n/translations';
import { translations } from '../i18n/translations';

interface EthicsProps {
  currentLang: Language;
}

export default function Ethics({ currentLang }: EthicsProps) {
  const t = translations[currentLang].ethicsPage;
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
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
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-6">
            <Leaf className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-4 text-foreground">{t.title}</h1>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-700 font-semibold">
            <Clock className="w-5 h-5" />
            {t.subtitle}
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8 md:p-12 mb-12"
        >
          <p className="text-lg text-foreground-secondary text-center mb-8">
            {t.text}
          </p>

          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center text-foreground">{t.cta}</h2>
            
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-500/20 border border-green-500/30 rounded-lg p-6 text-center"
              >
                <Mail className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <p className="text-green-700 font-semibold">Merci ! Vous serez informé(e).</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.email}
                  required
                  className="flex-1 px-4 py-3 rounded-lg bg-surface-primary border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  {t.submit}
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
