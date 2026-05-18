import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Target, Eye, Compass, CheckCircle2, Factory } from 'lucide-react'

export function AboutUs() {
  const { t } = useTranslation()
  const objectives = t('about.objectivesList', { returnObjects: true }) as string[]

  return (
    <section id="about" className="py-28 bg-[var(--background-secondary)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

        {/* ── Row 1: Header + Filosofía (split) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Header block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55 }}
            className="rounded-3xl p-10 bg-[#00C8D7] text-white flex flex-col justify-between min-h-[280px]"
          >
            <span className="text-xs font-semibold tracking-widest uppercase opacity-70">
              {t('about.label')}
            </span>
            <div>
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl leading-tight mt-4">
                {t('about.headline')}
              </h2>
              <p className="mt-4 text-white/80 leading-relaxed max-w-sm">
                {t('about.intro')}
              </p>
            </div>
          </motion.div>

          {/* Filosofía */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-3xl p-10 bg-[var(--background-surface)] border border-[var(--border-default)] flex flex-col justify-between min-h-[280px]"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#00C8D7]/15 flex items-center justify-center">
                <Compass size={20} className="text-[#00C8D7]" />
              </div>
              <h3 className="font-display font-bold text-xl text-[var(--text-primary)]">
                {t('about.philosophy')}
              </h3>
            </div>
            <p className="text-[var(--text-secondary)] leading-relaxed flex-1">
              {t('about.philosophyText')}
            </p>
            <div className="mt-6 pt-5 border-t border-[var(--border-default)] flex items-center gap-3">
              <Factory size={18} className="text-[#00C8D7] flex-shrink-0" />
              <span className="text-sm text-[var(--text-secondary)]">{t('about.philosophyFooter')}</span>
            </div>
          </motion.div>
        </div>

        {/* ── Row 2: Misión + Visión ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl p-8 bg-[var(--background-surface)] border border-[var(--border-default)] hover:border-[#00C8D7]/40 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-[#00C8D7]/15 flex items-center justify-center">
                <Target size={18} className="text-[#00C8D7]" />
              </div>
              <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">
                {t('about.mission')}
              </h3>
            </div>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
              {t('about.missionText')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-3xl p-8 bg-[var(--background-surface)] border border-[var(--border-default)] hover:border-[#00C8D7]/40 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-[#00C8D7]/15 flex items-center justify-center">
                <Eye size={18} className="text-[#00C8D7]" />
              </div>
              <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">
                {t('about.vision')}
              </h3>
            </div>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
              {t('about.visionText')}
            </p>
          </motion.div>
        </div>

        {/* ── Row 3: Objetivos ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-3xl p-8 sm:p-10 bg-[var(--background-surface)] border border-[var(--border-default)]"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-9 h-9 rounded-xl bg-[#00C8D7]/15 flex items-center justify-center">
              <CheckCircle2 size={18} className="text-[#00C8D7]" />
            </div>
            <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">
              {t('about.objectives')}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5">
            {objectives.map((obj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 + i * 0.06 }}
                className="flex items-start gap-3"
              >
                <span className="mt-1.5 flex-shrink-0 w-4 h-4 rounded-full bg-[#00C8D7]/20 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00C8D7]" />
                </span>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{obj}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
