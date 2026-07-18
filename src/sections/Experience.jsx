import { motion } from 'framer-motion'
import { experience, education } from '../data/experience'
import SectionHeading from '../components/SectionHeading'
import { FiBriefcase, FiBookOpen } from 'react-icons/fi'

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading eyebrow="// experience.log" title="Experience & Education" />

      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h3 className="mb-6 flex items-center gap-2 font-display text-lg font-medium text-text">
            <FiBriefcase className="text-accent" /> Internship
          </h3>
          {experience.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/5 bg-card/50 p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="font-display text-xl font-semibold text-text">{exp.role}</h4>
                <span className="font-mono text-xs text-accent">{exp.duration}</span>
              </div>
              <p className="mt-1 text-sm text-text-muted">{exp.org}</p>
              <ul className="mt-4 space-y-2.5">
                {exp.points.map((p, i) => (
                  <li key={i} className="flex gap-2 text-sm leading-relaxed text-text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div>
          <h3 className="mb-6 flex items-center gap-2 font-display text-lg font-medium text-text">
            <FiBookOpen className="text-accent" /> Education
          </h3>
          {education.map((edu) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl border border-white/5 bg-card/50 p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="font-display text-xl font-semibold text-text">{edu.degree}</h4>
                <span className="font-mono text-xs text-accent">{edu.duration}</span>
              </div>
              <p className="mt-1 text-sm text-text-muted">{edu.school}</p>
              <p className="mt-3 inline-block rounded-full border border-accent/30 px-3 py-1 font-mono text-xs text-accent">
                {edu.score}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
