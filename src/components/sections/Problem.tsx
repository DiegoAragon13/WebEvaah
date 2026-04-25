import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export function Problem() {
  const { t } = useTranslation()
  const stats = [
    { emoji: '💸', key: 'stat1' },
    { emoji: '⏱️', key: 'stat2' },
    { emoji: '🔍', key: 'stat3' },
  ] as const

  return (
    <section className="py-24 bg-[var(--background-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-display font-bold text-3xl sm:text-4xl text-center text-[var(--text-primary)] mb-12"
        >
          {t('problem.title')}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.key}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-[var(--background-surface)] border border-[var(--border-default)] rounded-2xl p-8 text-center hover:border-[#00C8D7] hover:shadow-lg hover:shadow-[#00C8D7]/10 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{s.emoji}</div>
              <div className="font-display font-bold text-2xl text-[#00C8D7] mb-2">{t(`problem.${s.key}.value`)}</div>
              <p className="text-[var(--text-secondary)] text-sm">{t(`problem.${s.key}.label`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
