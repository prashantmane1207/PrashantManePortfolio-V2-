import { motion } from 'framer-motion'
import { skillCategories } from '../data/skills'
import SectionHeading from '../components/SectionHeading'

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="// skills.json"
        title="Skills & Technologies"
        subtitle="A working toolkit spanning frontend interfaces, Java backends, databases and the tools that hold it all together."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, ci) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: ci * 0.08 }}
            className="group rounded-2xl border border-white/5 bg-card/50 p-6 transition-colors duration-300 hover:border-accent/30"
          >
            <h3 className="font-display text-lg font-semibold text-text">{cat.label}</h3>
            <div className="mt-5 space-y-4">
              {cat.skills.map((s) => (
                <div key={s.name}>
                  <div className="mb-1.5 flex justify-between text-sm">
                    <span className="text-text-muted">{s.name}</span>
                    <span className="font-mono text-xs text-accent">{s.level}%</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
