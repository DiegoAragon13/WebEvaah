import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Eye, Activity, Brain, Bell, MessageSquare, Battery } from 'lucide-react'

const cards: {
  key: 'f1' | 'f2' | 'f3' | 'f4' | 'f5' | 'f6'
  Icon: typeof Eye
  accent: string
  role: 'hero' | 'wide' | 'tall' | 'small'
  stat?: string
  statLabel?: string
}[] = [
  { key: 'f1', Icon: Eye,           accent: '#00C8D7', role: 'hero',  stat: '0.721', statLabel: 'mAP50 on-device' },
  { key: 'f2', Icon: Activity,      accent: '#3EBF7A', role: 'tall' },
  { key: 'f3', Icon: Brain,         accent: '#A78BFA', role: 'small' },
  { key: 'f4', Icon: Bell,          accent: '#F5A623', role: 'small' },
  { key: 'f5', Icon: MessageSquare, accent: '#00C8D7', role: 'wide' },
  { key: 'f6', Icon: Battery,       accent: '#3EBF7A', role: 'small' },
]

export function Features() {
  const { t } = useTranslation()

  return (
    <section id="features" className="py-24 bg-[var(--background-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#00C8D7]">
              {t('features.label')}
            </span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-[var(--text-primary)] mt-2">
              {t('features.title')}
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] text-sm leading-relaxed sm:max-w-xs">
            {t('features.subtitle')}
          </p>
        </div>

        {/* Mobile: 1-col stack
            Tablet (sm): 2-col, auto height — NO bento spans to avoid orphan cards
            Desktop (lg): 3-col true bento with fixed height */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 lg:h-[640px]">
          {cards.map((card, i) => {
            const Icon = card.Icon
            const isHero = card.role === 'hero'

            return (
              <motion.div
                key={card.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className={`
                  group relative rounded-3xl p-6 sm:p-7
                  border border-[var(--border-default)]
                  bg-[var(--background-surface)]
                  overflow-hidden flex flex-col
                  transition-all duration-300 hover:shadow-xl
                  ${card.role === 'hero'  ? 'lg:col-span-2 lg:row-span-2 justify-between' : 'justify-center'}
                  ${card.role === 'wide'  ? 'lg:col-span-2' : ''}
                  ${card.role === 'tall'  ? 'lg:row-span-2' : ''}
                  ${isHero ? 'min-h-[220px] lg:min-h-0' : 'min-h-0'}
                `}
                style={isHero ? { borderColor: `${card.accent}40` } : {}}
              >
                {/* Hover glow */}
                <div
                  className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none"
                  style={{ background: card.accent }}
                />

                <div>
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center mb-4"
                    style={{ background: `${card.accent}18` }}
                  >
                    <Icon size={20} style={{ color: card.accent }} />
                  </div>

                  <h3 className={`font-display font-bold text-[var(--text-primary)] mb-2 ${isHero ? 'text-xl' : 'text-base'}`}>
                    {t(`features.${card.key}.title`)}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {t(`features.${card.key}.desc`)}
                  </p>
                </div>

                {/* Hero stat */}
                {isHero && card.stat && (
                  <div className="mt-6 pt-5 border-t border-[var(--border-default)]">
                    <p className="font-display font-extrabold text-4xl sm:text-5xl" style={{ color: card.accent }}>
                      {card.stat}
                    </p>
                    <p className="text-sm text-[var(--text-secondary)] mt-1">{card.statLabel}</p>
                  </div>
                )}

                {/* Bottom accent line on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{ background: card.accent }}
                />
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
