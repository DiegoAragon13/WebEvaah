import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Eye, Activity, Brain, Bell, MessageSquare, Battery } from 'lucide-react'

const icons = [Eye, Activity, Brain, Bell, MessageSquare, Battery]

export function Features() {
  const { t } = useTranslation()
  const keys = ['f1', 'f2', 'f3', 'f4', 'f5', 'f6'] as const

  return (
    <section id="features" className="py-24 bg-[var(--background-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-display font-bold text-3xl sm:text-4xl text-center text-[var(--text-primary)] mb-16"
        >
          {t('features.title')}
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {keys.map((k, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={k}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="bg-[var(--background-surface)] border border-[var(--border-default)] rounded-2xl p-6 hover:border-[#00C8D7] hover:shadow-lg hover:shadow-[#00C8D7]/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--accent-subtle,#003F44)] flex items-center justify-center mb-4 group-hover:bg-[#00C8D7]/20 transition-colors">
                  <Icon size={22} className="text-[#00C8D7]" />
                </div>
                <h3 className="font-display font-bold text-base text-[var(--text-primary)] mb-2">{t(`features.${k}.title`)}</h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{t(`features.${k}.desc`)}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
