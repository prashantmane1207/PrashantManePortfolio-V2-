import { useEffect, useState } from 'react'
import { FiArrowUp } from 'react-icons/fi'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="focus-ring fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-card border border-white/10 text-accent shadow-card hover:bg-primary hover:text-white transition-colors duration-300"
    >
      <FiArrowUp />
    </button>
  )
}
