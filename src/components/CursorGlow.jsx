import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const ref = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    const el = ref.current
    const move = (e) => {
      el.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 w-[400px] h-[400px] rounded-full z-0 hidden md:block"
      style={{
        background: 'radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 70%)',
        willChange: 'transform',
      }}
    />
  )
}
