import { motion } from 'framer-motion';
import { Scan, DollarSign, Shield, BarChart3, ArrowRight } from 'lucide-react';
import type { Language } from '../i18n/translations';
import { translations } from '../i18n/translations';

interface HomeProps {
  currentLang: Language;
}

export default function Home({ currentLang }: HomeProps) {
  const t = translations[currentLang];

  const features = [
    {
      icon: Scan,
      title: t.features.scan.title,
      desc: t.features.scan.desc,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: DollarSign,
      title: t.features.cashback.title,
      desc: t.features.cashback.desc,
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: t.features.health.title,
      desc: t.features.health.desc,
      color: 'from-teal-500 to-cyan-500'
    },
    {
      icon: BarChart3,
      title: t.features.compare.title,
      desc: t.features.compare.desc,
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const steps = [
    { number: 1, title: t.steps.step1, desc: t.steps.step1desc },
    { number: 2, title: t.steps.step2, desc: t.steps.step2desc },
    { number: 3, title: t.steps.step3, desc: t.steps.step3desc },
    { number: 4, title: t.steps.step4, desc: t.steps.step4desc }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(30,127,94,0.15),transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {t.hero.tagline}
            </h1>
            <p className="text-xl sm:text-2xl text-foreground-secondary mb-8">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                {t.hero.cta}
              </motion.button>
              <span className="text-foreground-secondary">{t.hero.platforms}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl" />
            <img
              src="/images/hero-scan.jpg"
              alt="Recash App"
              className="relative rounded-2xl shadow-2xl mx-auto max-w-3xl w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-center mb-16 text-foreground"
          >
            {t.features.title}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-surface-primary rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-foreground-secondary">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-center mb-16 text-foreground"
          >
            {t.steps.title}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-foreground-secondary">{step.desc}</p>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-8 -right-4 w-8 h-8 text-primary/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-7xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-white"
          >
            {t.trust}
          </motion.p>
        </div>
      </section>
    </div>
  );
}