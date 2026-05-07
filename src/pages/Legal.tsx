import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import type { Language } from '../i18n/translations';
import { translations } from '../i18n/translations';

interface LegalProps {
  currentLang: Language;
}

export default function Legal({ currentLang }: LegalProps) {
  const t = translations[currentLang].legalPage;

  const sections = [
    { title: t.editor, text: t.editorText },
    { title: t.hosting, text: t.hostingText },
    { title: t.property, text: t.propertyText }
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
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-500 to-gray-600 flex items-center justify-center mx-auto mb-6">
            <FileText className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-4 text-foreground">{t.title}</h1>
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
              <p className="text-foreground-secondary whitespace-pre-line leading-relaxed">{section.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}