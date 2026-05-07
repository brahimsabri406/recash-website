import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import type { Language } from '../i18n/translations';
import { translations } from '../i18n/translations';

interface PricingProps {
  currentLang: Language;
}

export default function Pricing({ currentLang }: PricingProps) {
  const t = translations[currentLang].pricingPage;

  const plans = [
    {
      name: t.free,
      price: '0',
      color: 'from-gray-500 to-gray-600',
      features: [
        { text: t.features.scanProduct, included: true },
        { text: `10 ${t.features.ticketsLimit}`, included: true },
        { text: t.features.cashback, included: true },
        { text: t.features.family, included: false },
        { text: t.features.support, included: false },
        { text: t.features.api, included: false }
      ]
    },
    {
      name: t.premium,
      price: '6.99',
      color: 'from-primary to-accent',
      popular: true,
      features: [
        { text: t.features.scanProduct, included: true },
        { text: t.features.unlimited, included: true },
        { text: t.features.cashback, included: true },
        { text: t.features.family, included: true },
        { text: t.features.support, included: true },
        { text: t.features.api, included: false }
      ]
    },
    {
      name: t.business,
      price: '19.99',
      color: 'from-purple-500 to-pink-500',
      features: [
        { text: t.features.scanProduct, included: true },
        { text: t.features.unlimited, included: true },
        { text: t.features.cashback, included: true },
        { text: t.features.family, included: true },
        { text: t.features.support, included: true },
        { text: t.features.api, included: true }
      ]
    }
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
          <h1 className="text-5xl font-bold mb-4 text-foreground">{t.title}</h1>
          <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">{t.subtitle}</p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative bg-surface-secondary rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all ${
                plan.popular ? 'ring-2 ring-primary' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-accent rounded-full text-white text-sm font-semibold">
                  Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent">
                    ${plan.price}
                  </span>
                  <span className="text-foreground-secondary">{t.month}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-5 h-5 text-foreground-tertiary flex-shrink-0 mt-0.5" />
                    )}
                    <span className={feature.included ? 'text-foreground' : 'text-foreground-tertiary'}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:shadow-xl'
                    : 'bg-surface-tertiary text-foreground hover:bg-surface-primary'
                }`}
              >
                {t.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
