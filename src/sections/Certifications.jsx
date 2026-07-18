import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'
import { certifications, extracurricular } from '../data/experience'
import SectionHeading from '../components/SectionHeading'

export default function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading title="Certifications & Activities" />

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl border border-white/5 bg-card/50 p-6 transition-colors hover:border-accent/30"
            >
              <FiAward className="mb-3 text-2xl text-accent transition-transform group-hover:scale-110" />
              <h3 className="font-display text-base font-semibold text-text">{c.title}</h3>
              <p className="mt-1 text-sm text-text-muted">{c.issuer}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-white/5 bg-card/50 p-6"
        >
          <h3 className="font-display text-base font-semibold text-text">Learning & Activities</h3>
          <ul className="mt-4 space-y-3">
            {extracurricular.map((item, i) => (
              <li key={i} className="flex gap-2 text-sm leading-relaxed text-text-muted">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
