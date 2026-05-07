import { motion } from 'framer-motion';
import { Users, UserCircle, Wallet } from 'lucide-react';
import type { Language } from '../i18n/translations';
import { translations } from '../i18n/translations';

interface FamilyProps {
  currentLang: Language;
}

export default function Family({ currentLang }: FamilyProps) {
  const t = translations[currentLang].familyPage;

  const features = [
    {
      icon: Users,
      title: t.shared,
      desc: t.sharedText,
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: UserCircle,
      title: t.profiles,
      desc: t.profilesText,
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Wallet,
      title: t.wallet,
      desc: t.walletText,
      color: 'from-rose-500 to-red-500'
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
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-6">
            <Users className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-4 text-foreground">{t.title}</h1>
          <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">{t.subtitle}</p>
        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                className="bg-surface-secondary rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{feature.title}</h3>
                <p className="text-foreground-secondary text-lg">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}