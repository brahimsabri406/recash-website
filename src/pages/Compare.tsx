import { motion } from 'framer-motion';
import { BarChart3, TrendingDown, MapPin } from 'lucide-react';
import type { Language } from '../i18n/translations';
import { translations } from '../i18n/translations';

interface CompareProps {
  currentLang: Language;
}

export default function Compare({ currentLang }: CompareProps) {
  const t = translations[currentLang].comparePage;

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mx-auto mb-6">
            <BarChart3 className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-4 text-foreground">{t.title}</h1>
          <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">{t.subtitle}</p>
        </motion.div>

        {/* How it Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-surface-secondary rounded-2xl p-8 md:p-12 mb-16"
        >
          <div className="flex items-start gap-4 mb-6">
            <MapPin className="w-8 h-8 text-cyan-500 flex-shrink-0" />
            <div>
              <h2 className="text-3xl font-bold mb-3 text-foreground">{t.howItWorks}</h2>
              <p className="text-foreground-secondary text-lg">{t.text}</p>
            </div>
          </div>
        </motion.div>

        {/* Example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">{t.example}</h2>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-surface-primary rounded-xl p-6 mb-6 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center text-foreground">{t.product}</h3>
              
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex justify-between items-center p-4 bg-surface-secondary rounded-lg"
                >
                  <span className="font-semibold text-foreground">Carrefour</span>
                  <span className="text-xl font-bold text-foreground">{t.carrefour.split(': ')[1]}</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex justify-between items-center p-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg border-2 border-primary"
                >
                  <span className="font-semibold text-foreground">Lidl</span>
                  <span className="text-xl font-bold text-primary">{t.lidl.split(': ')[1]}</span>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-6 p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/30"
              >
                <div className="flex items-center justify-center gap-2">
                  <TrendingDown className="w-5 h-5 text-green-600" />
                  <span className="font-bold text-green-700">{t.saving}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 text-center"
        >
          <p className="text-foreground-secondary italic">{t.note}</p>
        </motion.div>
      </div>
    </div>
  );
}