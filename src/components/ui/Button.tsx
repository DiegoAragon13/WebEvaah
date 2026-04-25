import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

export function Button({ children, variant = 'primary', size = 'md', onClick, className = '', type = 'button', disabled }: ButtonProps) {
  const base = 'inline-flex items-center justify-center font-body font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#00C8D7] focus:ring-offset-2'

  const variants = {
    primary: 'bg-[#00C8D7] hover:bg-[#00A8B5] text-[#0D1117] shadow-lg shadow-[#00C8D7]/20',
    outline: 'border-2 border-[#00C8D7] text-[#00C8D7] hover:bg-[#00C8D7]/10',
    ghost: 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--background-secondary)]',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      className={`${base} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {children}
    </motion.button>
  )
}
