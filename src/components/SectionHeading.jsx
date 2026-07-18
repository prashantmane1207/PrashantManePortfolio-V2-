import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, subtitle, align = 'left' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${align === 'center' ? 'text-center mx-auto max-w-2xl' : ''}`}
    >
      <p className="section-eyebrow mb-3">{eyebrow}</p>
      <h2 className="font-display text-3xl sm:text-4xl font-semibold text-text tracking-tight">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-text-muted leading-relaxed">{subtitle}</p>}
    </motion.div>
  )
}
