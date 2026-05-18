import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { DollarSign, Clock, Search } from 'lucide-react'

export function Problem() {
  const { t } = useTranslation()

  const stats = [
    { key: 'stat1', Icon: DollarSign, color: '#F5A623', bg: '#F5A62312' },
    { key: 'stat2', Icon: Clock,      color: '#00C8D7', bg: '#00C8D712' },
    { key: 'stat3', Icon: Search,     color: '#3EBF7A', bg: '#3EBF7A12' },
  ] as const

  return (
    <section className="py-24 bg-[var(--background-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top: full-width headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-14"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-[#00C8D7]">
            {t('problem.title')}
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[var(--text-primary)] mt-3 leading-tight max-w-3xl">
            En México, un paro de línea cuesta hasta{' '}
            <span className="text-[#F5A623]">$500K MXN</span>{' '}
            por hora.
          </h2>
        </motion.div>

        {/* Bottom: two columns — context left, stats right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Left: context text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
              Las industrias mexicanas siguen operando con mantenimiento correctivo:
              esperan a que algo se rompa para actuar. El diagnóstico depende de la
              experiencia del técnico y de instrumentos que solo miden, no interpretan.
            </p>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed mt-4">
              NEMIKI cambia eso. Monitorea, interpreta y anticipa — antes de que la
              falla ocurra.
            </p>

            {/* Divider with accent */}
            <div className="mt-8 flex items-center gap-3">
              <div className="h-px flex-1 bg-[var(--border-default)]" />
              <span className="text-xs font-semibold text-[#00C8D7] tracking-widest uppercase">
                El problema que resolvemos
              </span>
              <div className="h-px flex-1 bg-[var(--border-default)]" />
            </div>
          </motion.div>

          {/* Right: stat cards */}
          <div className="space-y-3">
            {stats.map((s, i) => (
              <motion.div
                key={s.key}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                className="flex items-center gap-5 p-5 rounded-2xl bg-[var(--background-surface)] border border-[var(--border-default)] hover:border-[var(--border-default)] transition-colors group"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 duration-300"
                  style={{ background: s.bg }}
                >
                  <s.Icon size={22} style={{ color: s.color }} />
                </div>
                <div>
                  <p className="font-display font-extrabold text-2xl leading-tight" style={{ color: s.color }}>
                    {t(`problem.${s.key}.value`)}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] mt-0.5">
                    {t(`problem.${s.key}.label`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
