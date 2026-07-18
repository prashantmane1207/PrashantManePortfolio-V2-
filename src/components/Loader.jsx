import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-base"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="font-mono text-lg text-text">
            <span className="text-accent">const</span> developer ={' '}
            <span className="text-primary">"Prashant"</span>
            <span className="ml-1 inline-block w-2 h-5 bg-accent animate-blink align-middle" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
