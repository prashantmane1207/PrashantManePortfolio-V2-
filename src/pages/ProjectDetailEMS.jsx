import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowLeft, FiGithub } from 'react-icons/fi'
import Button from '../components/Button'
const sections = [
  {
    title: 'Overview',
    body: "A menu-driven Employee Management System built with core Java and JDBC, backed by PostgreSQL — a classic full-CRUD systems project focused on clean object-oriented design.",
  },
  {
    title: 'Features',
    body: null,
    list: [
      'Full CRUD — Create, Read, Update, Delete and Search employee records',
      'PostgreSQL integration via JDBC for persistent storage',
      'Structured exception handling for reliable data operations',
      'Menu-driven console workflow for managing records',
    ],
  },
  {
    title: 'Architecture',
    body: 'Java console application → JDBC connection layer → PostgreSQL database. Each employee operation maps to a parameterized SQL query executed through JDBC, keeping data access isolated from business logic.',
  },
  {
    title: 'Database Design',
    body: 'Employee records are modelled as a single normalized table (id, name, role, department, salary, contact details) with PostgreSQL constraints enforcing data integrity, queried and updated through JDBC prepared statements.',
  },
  {
    title: 'Object-Oriented Design',
    body: 'The system applies encapsulation (private fields with accessors), inheritance (shared employee behaviour across role types), and polymorphism (overridden methods for role-specific logic), with exception handling wrapping every database operation.',
  },
  {
    title: 'Learning',
    body: 'This project solidified core Java fundamentals — OOP principles, the Collections Framework, and JDBC — while practising how to design a normalized schema and keep CRUD logic clean and maintainable.',
  },
]

export default function ProjectDetailEMS() {
  return (
    <article className="mx-auto max-w-4xl px-6 pb-28 pt-32">
      <Link to="/#projects" className="focus-ring inline-flex items-center gap-2 font-mono text-sm text-accent hover:underline">
        <FiArrowLeft /> Back to projects
      </Link>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-6 font-display text-3xl font-semibold text-text sm:text-4xl"
      >
        Employee Management System
      </motion.h1>
      <p className="mt-2 text-primary">Menu-driven Java + JDBC + PostgreSQL CRUD system</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {['Java', 'JDBC', 'PostgreSQL', 'OOP'].map((t) => (
          <span key={t} className="rounded bg-white/5 px-2.5 py-1 text-xs text-text-muted">{t}</span>
        ))}
      </div>

      <div className="mt-6">
        <Button href="https://github.com/prashantmane1207/Employee-Management-System-JDBC" variant="outline">
          <FiGithub /> View Source on GitHub
        </Button>
      </div>

      <div className="mt-12 space-y-10">
        {sections.map((s) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-xl font-semibold text-text">{s.title}</h2>
            {s.body && <p className="mt-2 leading-relaxed text-text-muted">{s.body}</p>}
            {s.list && (
              <ul className="mt-3 space-y-2">
                {s.list.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" /> {f}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}


      </div>
    </article>
  )
}
