import { motion } from 'framer-motion';
import { DollarSign, CheckCircle, TrendingUp } from 'lucide-react';
import type { Language } from '../i18n/translations';
import { translations } from '../i18n/translations';

interface CashbackProps {
  currentLang: Language;
}

export default function Cashback({ currentLang }: CashbackProps) {
  const t = translations[currentLang].cashbackPage;

  const brands = [
    'Pampers', 'Danone', 'Coca-Cola', 'Nestlé', 'L\'Oréal',
    'Unilever', 'Kellogg\'s', 'Ferrero', 'Barilla', 'Heinz'
  ];

  const steps = [
    { icon: CheckCircle, text: t.step1 },
    { icon: CheckCircle, text: t.step2 },
    { icon: CheckCircle, text: t.step3 },
    { icon: CheckCircle, text: t.step4 }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6">
            <DollarSign className="w-10 h-10 text-white" />
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
          <h2 className="text-3xl font-bold mb-8 text-foreground">{t.howItWorks}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <Icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground-secondary">{step.text}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Commission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-2xl p-8 md:p-12 mb-16"
        >
          <div className="flex items-start gap-4">
            <TrendingUp className="w-8 h-8 text-amber-600 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold mb-3 text-foreground">{t.commission}</h2>
              <p className="text-foreground-secondary">{t.commissionText}</p>
            </div>
          </div>
        </motion.div>

        {/* Partner Brands */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 text-center text-foreground">{t.partners}</h2>
          <p className="text-center text-foreground-secondary mb-12 max-w-2xl mx-auto">
            {t.partnersText}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-surface-secondary rounded-xl p-6 flex items-center justify-center font-semibold text-foreground shadow-md hover:shadow-lg transition-all"
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}