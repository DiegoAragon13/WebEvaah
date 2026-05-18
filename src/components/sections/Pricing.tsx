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
      id: 'b2b', tier: 'b2b' as const,
      name: t('pricing.b2b.name'), target: t('pricing.b2b.target'),
      price: t('pricing.b2b.price'), priceNote: t('pricing.b2b.priceNote'), priceNum: 2000,
      features: t('pricing.b2b.features', { returnObjects: true }) as string[],
      highlight: true,
    },
    {
      id: 'enterprise', tier: 'enterprise' as const,
      name: t('pricing.enterprise.name'), target: t('pricing.enterprise.target'),
      price: t('pricing.enterprise.price'), priceNote: t('pricing.enterprise.priceNote'), priceNum: null,
      features: t('pricing.enterprise.features', { returnObjects: true }) as string[],
      highlight: false,
    },
  ]

  return (
    <section id="pricing" className="py-28 bg-[var(--background-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#00C8D7] mb-3">
            {t('pricing.title')}
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-[var(--text-primary)]">
            {t('pricing.subtitle')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch max-w-4xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className={`relative flex flex-col rounded-3xl p-8 border transition-all duration-300 ${
                tier.highlight
                  ? 'border-[#00C8D7] bg-[var(--background-surface)] shadow-2xl shadow-[#00C8D7]/15'
                  : 'border-[var(--border-default)] bg-[var(--background-surface)] hover:border-[#00C8D7]/50 hover:shadow-lg hover:shadow-[#00C8D7]/8'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <Badge className="bg-[#00C8D7] text-white px-4 py-1 text-xs font-bold tracking-wide">
                    {t('pricing.popular')}
                  </Badge>
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <h3 className="font-display font-bold text-xl text-[var(--text-primary)]">{tier.name}</h3>
                <p className="text-sm text-[var(--text-secondary)] mt-1">{tier.target}</p>
                <div className="mt-5">
                  <span className="font-display font-extrabold text-3xl text-[#00C8D7]">{tier.price}</span>
                  {tier.priceNote && (
                    <span className="ml-2 text-sm text-[var(--text-secondary)]">{tier.priceNote}</span>
                  )}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]">
                    <Check size={15} className="text-[#00C8D7] mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              {tier.tier === 'enterprise' ? (
                <Button variant="outline" className="w-full" onClick={() => window.open('tel:6183659548')}>
                  {t('pricing.contact')}
                </Button>
              ) : (
                <Button
                  className="w-full"
                  onClick={() => {
                    addItem({
                      id: tier.id,
                      name: tier.name,
                      nameEn: tier.name,
                      description: tier.target,
                      price: tier.priceNum,
                      quantity: 1,
                      tier: tier.tier,
                    })
                    navigate('/carrito')
                  }}
                >
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
