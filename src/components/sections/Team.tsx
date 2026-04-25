import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Badge } from '../ui/Badge'

function Avatar({ name }: { name: string }) {
  const initials = name.split(' ').map(n => n[0]).slice(0, 2).join('')
  return (
    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00C8D7] to-[#00A8B5] flex items-center justify-center font-display font-bold text-lg text-[#0D1117] mx-auto mb-4">
      {initials}
    </div>
  )
}

export function Team() {
  const { t } = useTranslation()
  const members = t('team.members', { returnObjects: true }) as { name: string; role: string; desc: string }[]
  const advisors = t('team.advisors', { returnObjects: true }) as { name: string; role: string; desc: string }[]

  return (
    <section id="team" className="py-24 bg-[var(--background-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-4">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[var(--text-primary)]">{t('team.title')}</h2>
        </motion.div>
        <div className="flex justify-center mb-12">
          <Badge className="bg-[#00C8D7]/20 text-[#00C8D7] border border-[#00C8D7]/30">{t('team.badge')}</Badge>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {members.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="bg-[var(--background-surface)] border border-[var(--border-default)] rounded-2xl p-6 text-center hover:border-[#00C8D7] transition-all duration-300"
            >
              <Avatar name={m.name} />
              <h3 className="font-display font-bold text-base text-[var(--text-primary)]">{m.name}</h3>
              <p className="text-[#00C8D7] text-sm font-medium mt-1">{m.role}</p>
              <p className="text-[var(--text-secondary)] text-xs mt-2">{m.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {advisors.map((a, i) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-[var(--background-surface)] border border-[var(--border-default)] rounded-2xl p-5 text-center hover:border-[#00C8D7]/50 transition-all duration-300"
            >
              <Avatar name={a.name} />
              <h3 className="font-display font-bold text-sm text-[var(--text-primary)]">{a.name}</h3>
              <p className="text-[#00C8D7] text-xs font-medium mt-1">{a.role}</p>
              <p className="text-[var(--text-secondary)] text-xs mt-1">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
