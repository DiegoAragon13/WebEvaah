import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Trash2, ShoppingBag, Plus, Minus } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useCartStore } from '../store/cartStore'
import { Button } from '../components/ui/Button'
import { Modal } from '../components/ui/Modal'

export function Cart() {
  const { t } = useTranslation()
  const { items, removeItem, updateQuantity, total, clearCart } = useCartStore()
  const navigate = useNavigate()
  const [modalOpen, setModalOpen] = useState(false)

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-16 px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <ShoppingBag size={64} className="text-[var(--text-secondary)] mx-auto mb-6 opacity-40" />
          <h2 className="font-display font-bold text-2xl text-[var(--text-primary)] mb-3">{t('cart.empty')}</h2>
          <p className="text-[var(--text-secondary)] mb-8">{t('cart.emptyDesc')}</p>
          <Button onClick={() => navigate('/productos')}>{t('cart.browse')}</Button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display font-bold text-3xl text-[var(--text-primary)] mb-10">
          {t('cart.title')}
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                className="bg-[var(--background-surface)] border border-[var(--border-default)] rounded-2xl p-5 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00C8D7]/20 flex items-center justify-center flex-shrink-0">
                  <ShoppingBag size={20} className="text-[#00C8D7]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-[var(--text-primary)] truncate">{item.name}</h3>
                  <p className="text-sm text-[var(--text-secondary)]">{item.description}</p>
                  <p className="text-[#00C8D7] font-bold mt-1">
                    {item.price ? `$${(item.price * item.quantity).toLocaleString('es-MX')} MXN` : t('pricing.quote')}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-7 h-7 rounded-lg border border-[var(--border-default)] flex items-center justify-center hover:border-[#00C8D7] transition-colors">
                    <Minus size={12} />
                  </button>
                  <span className="w-6 text-center text-sm font-semibold">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-7 h-7 rounded-lg border border-[var(--border-default)] flex items-center justify-center hover:border-[#00C8D7] transition-colors">
                    <Plus size={12} />
                  </button>
                </div>
                <button onClick={() => removeItem(item.id)} className="p-2 text-[var(--text-secondary)] hover:text-red-500 transition-colors" aria-label={t('cart.remove')}>
                  <Trash2 size={16} />
                </button>
              </motion.div>
            ))}
          </div>

          {/* Summary */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-[var(--background-surface)] border border-[var(--border-default)] rounded-2xl p-6 h-fit">
            <h3 className="font-display font-bold text-lg text-[var(--text-primary)] mb-6">Resumen</h3>
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-[var(--border-default)]">
              <span className="text-[var(--text-secondary)]">{t('cart.subtotal')}</span>
              <span className="font-bold text-[#00C8D7] text-xl">${total().toLocaleString('es-MX')} MXN</span>
            </div>
            <div className="space-y-3">
              <Button className="w-full" onClick={() => setModalOpen(true)}>{t('cart.checkout')}</Button>
              <Button variant="outline" className="w-full" onClick={() => navigate('/productos')}>{t('cart.continueShopping')}</Button>
            </div>
          </motion.div>
        </div>
      </div>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <div className="text-center">
          <div className="text-5xl mb-4">🚀</div>
          <h3 className="font-display font-bold text-xl text-[var(--text-primary)] mb-3">{t('cart.modalTitle')}</h3>
          <p className="text-[var(--text-secondary)] text-sm mb-6">{t('cart.modalDesc')}</p>
          <div className="space-y-3">
            <Button className="w-full" onClick={() => window.open('tel:6183659548')}>{t('cart.modalContact')}</Button>
            <Button variant="ghost" className="w-full" onClick={() => { setModalOpen(false); clearCart(); navigate('/') }}>{t('cart.modalClose')}</Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
