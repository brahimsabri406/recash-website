import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import type { Language } from '../i18n/translations';
import { translations } from '../i18n/translations';

interface PrivacyProps {
  currentLang: Language;
}

export default function Privacy({ currentLang }: PrivacyProps) {
  const t = translations[currentLang].privacyPage;

  const sections = [
    { title: t.section1, text: t.section1text },
    { title: t.section2, text: t.section2text },
    { title: t.section3, text: t.section3text },
    { title: t.section4, text: t.section4text }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-4 text-foreground">{t.title}</h1>
          <p className="text-foreground-secondary">{t.intro}</p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-surface-secondary rounded-xl p-8"
            >
              <h2 className="text-2xl font-bold mb-4 text-foreground">{section.title}</h2>
              <p className="text-foreground-secondary leading-relaxed">{section.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
