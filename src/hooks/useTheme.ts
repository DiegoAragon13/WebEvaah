import { useEffect, useState } from 'react'

export function useTheme() {
  const getInitial = (): 'dark' | 'light' => {
    const saved = localStorage.getItem('nemiki-theme')
    if (saved === 'light' || saved === 'dark') return saved
    return 'light'
  }

  const [theme, setTheme] = useState<'dark' | 'light'>(getInitial)

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('nemiki-theme', theme)
  }, [theme])

  const toggle = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))

  return { theme, toggle }
}
