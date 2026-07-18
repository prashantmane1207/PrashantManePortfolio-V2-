import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiSearch } from 'react-icons/fi'
import { projects } from '../data/projects'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'

const filters = ['All', 'Frontend', 'Java', 'React', 'AI', 'Full Stack']

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesFilter = filter === 'All' || p.tags.includes(filter)
      const matchesQuery =
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.tech.join(' ').toLowerCase().includes(query.toLowerCase())
      return matchesFilter && matchesQuery
    })
  }, [filter, query])

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="// projects/"
        title="Featured Projects"
        subtitle="Real-world applications built using Java, React, databases, and modern web technologies, focusing on practical problem-solving and full-stack development."
      />

      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`focus-ring rounded-full border px-4 py-1.5 font-mono text-xs transition-colors ${
                filter === f
                  ? 'border-accent bg-accent/10 text-accent'
                  : 'border-white/10 text-text-muted hover:border-accent/40 hover:text-text'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects..."
            className="focus-ring w-full rounded-lg border border-white/10 bg-card/50 py-2 pl-9 pr-3 text-sm text-text placeholder:text-text-muted"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {filtered.map((p, i) => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
            className="glass group flex flex-col rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1.5"
          >
            <div className="mb-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full border border-white/10 px-2.5 py-0.5 font-mono text-[11px] text-accent">
                  {t}
                </span>
              ))}
            </div>

            <h3 className="font-display text-xl font-semibold text-text">{p.name}</h3>
            <p className="mt-1 text-sm text-primary">{p.tagline}</p>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">{p.description}</p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span key={t} className="rounded bg-white/5 px-2 py-0.5 text-[11px] text-text-muted">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3 pt-2">
              {p.detailPath && (
                <Button to={p.detailPath} variant="primary" className="!px-4 !py-2 text-xs">
                  View Case Study →
                </Button>
              )}
              {p.github && (
                <Button href={p.github} variant="outline" className="!px-4 !py-2 text-xs">
                  <FiGithub /> View Source Code
                </Button>
              )}
              {p.demo && (
                <Button href={p.demo} variant="ghost" className="!px-4 !py-2 text-xs">
                  <FiExternalLink /> Live Demo
                </Button>
              )}
            </div>
          </motion.article>
        ))}

        {filtered.length === 0 && (
          <p className="col-span-full py-10 text-center text-text-muted">
            No projects match that search — try a different keyword or filter.
          </p>
        )}
      </div>
    </section>
  )
}
