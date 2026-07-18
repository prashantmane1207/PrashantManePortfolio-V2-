import { motion } from 'framer-motion'
import { FiArrowLeft } from 'react-icons/fi'
import Button from '../components/Button'

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center grid-bg">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-mono text-8xl font-bold text-primary"
      >
        404
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-4 font-display text-2xl font-semibold text-text"
      >
        Page not found
      </motion.p>
      <p className="mt-2 max-w-sm text-sm text-text-muted">
        The route you're looking for doesn't exist, or the page has been moved.
      </p>
      <Button to="/" variant="primary" className="mt-8">
        <FiArrowLeft /> Back to Home
      </Button>
    </section>
  )
}
