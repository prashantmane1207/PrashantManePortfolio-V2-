import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowLeft, FiGithub } from 'react-icons/fi'
import Button from '../components/Button'

const sections = [
  {
    title: 'Overview',
    body: "A menu-driven Ride Booking Application built with Java, Hibernate, and PostgreSQL, with pgAdmin for database management and verification — an end-to-end backend systems project focused on entity relationships, layered architecture, and consistent ride booking workflows.",
  },
  {
    title: 'Features',
    body: null,
    list: [
      'User and driver authentication with role-based menu workflows',
      'Vehicle registration and driver-vehicle management',
      'End-to-end ride booking with driver assignment and ride status updates',
      'Ride history retrieval for users and drivers',
      'PostgreSQL integration through Hibernate/JPA for persistent data storage',
      'Transaction handling to maintain consistency across related entities',
    ],
  },
  {
    title: 'Architecture',
    body: 'Java application → Service layer → DAO layer → Hibernate/JPA → PostgreSQL database. The application follows a layered DAO-Service-Entity architecture, keeping business logic, persistence operations, and entity models separated for cleaner and maintainable code.',
  },
  {
    title: 'Database Design',
    body: 'The application models Users, Drivers, Vehicles, and Rides as related entities in PostgreSQL. Hibernate/JPA mappings handle one-to-many and many-to-one relationships, while pgAdmin is used for database management, query verification, and inspecting persisted ride and user data.',
  },
  {
    title: 'Object-Oriented & Hibernate Design',
    body: 'The project applies object-oriented principles through entity classes, encapsulation, and service-based business logic. Hibernate/JPA annotations are used to map Java entities to database tables and manage relationships between users, drivers, vehicles, and rides, while DAO classes handle persistence operations.',
  },
  {
    title: 'Learning',
    body: 'This project strengthened practical Java backend development skills — Hibernate ORM, JPA entity relationships, PostgreSQL, DAO-Service-Entity architecture, transaction handling, CRUD operations, and designing an end-to-end booking workflow with multiple related entities.',
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
        Ride Booking Application
      </motion.h1>

      <p className="mt-2 text-primary">Java + Hibernate + PostgreSQL ride booking system</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {['Java', 'Hibernate', 'PostgreSQL', 'JPA', 'pgAdmin'].map((t) => (
          <span key={t} className="rounded bg-white/5 px-2.5 py-1 text-xs text-text-muted">{t}</span>
        ))}
      </div>

      <div className="mt-6">
        <Button href="https://github.com/prashantmane1207" variant="outline">
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
