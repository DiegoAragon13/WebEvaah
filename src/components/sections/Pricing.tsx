import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Check } from 'lucide-react'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'
import { useCartStore } from '../../store/cartStore'
import { useNavigate } from 'react-router-dom'

export function Pricing() {
  const { t } = useTranslation()
  const addItem = useCartStore(s => s.addItem)
  const navigate = useNavigate()

  const tiers = [
    {
      id: 'kit', tier: 'kit' as const,
      name: t('pricing.kit.name'), target: t('pricing.kit.target'),
      price: t('pricing.kit.price'), priceNum: 3499,
      features: t('pricing.kit.features', { returnObjects: true }) as string[],
      highlight: false,
    },
    {
      id: 'b2b', tier: 'b2b' as const,
      name: t('pricing.b2b.name'), target: t('pricing.b2b.target'),
      price: t('pricing.b2b.price'), priceNum: 1299,
      features: t('pricing.b2b.features', { returnObjects: true }) as string[],
      highlight: true,
    },
    {
      id: 'enterprise', tier: 'enterprise' as const,
      name: t('pricing.enterprise.name'), target: t('pricing.enterprise.target'),
      price: t('pricing.enterprise.price'), priceNum: null,
      features: t('pricing.enterprise.features', { returnObjects: true }) as string[],
      highlight: false,
    },
  ]

  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[var(--text-primary)]">{t('pricing.title')}</h2>
          <p className="mt-3 text-[var(--text-secondary)]">{t('pricing.subtitle')}</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`relative rounded-2xl p-8 border transition-all duration-300 ${
                tier.highlight
                  ? 'border-[#00C8D7] bg-[var(--background-surface)] shadow-2xl shadow-[#00C8D7]/20'
                  : 'border-[var(--border-default)] bg-[var(--background-surface)] hover:border-[#00C8D7] hover:shadow-lg hover:shadow-[#00C8D7]/10'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-[#00C8D7] text-[#0D1117]">⭐ {t('pricing.popular')}</Badge>
                </div>
              )}
              <div className="mb-6">
                <h3 className="font-display font-bold text-xl text-[var(--text-primary)]">{tier.name}</h3>
                <p className="text-sm text-[var(--text-secondary)] mt-1">{tier.target}</p>
                <div className="mt-4 font-display font-extrabold text-3xl text-[#00C8D7]">{tier.price}</div>
              </div>
              <ul className="space-y-3 mb-8">
                {tier.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <Check size={16} className="text-[#00C8D7] mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              {tier.tier === 'enterprise' ? (
                <Button variant="outline" className="w-full" onClick={() => window.open('tel:6183659548')}>
                  {t('pricing.contact')}
                </Button>
              ) : (
                <Button className="w-full" onClick={() => {
                  addItem({ id: tier.id, name: tier.name, nameEn: tier.name, description: tier.target, price: tier.priceNum, quantity: 1, tier: tier.tier })
                  navigate('/carrito')
                }}>
                  {t('pricing.addToCart')}
                </Button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
