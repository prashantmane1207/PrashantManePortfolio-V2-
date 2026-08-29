import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowLeft, FiGithub } from 'react-icons/fi'
import Button from '../components/Button'

const sections = [
  {
    title: 'Overview',
    body: "A console-driven Ride Booking Application built with Java and Hibernate/JPA, backed by PostgreSQL — a layered system modelling real-world relationships between users, drivers, vehicles, and rides, with the schema managed directly through pgAdmin.",
  },
  {
    title: 'Features',
    body: null,
    list: [
      'User and driver registration and login',
      'Vehicle management for registered drivers',
      'Ride booking with driver assignment',
      'Real-time ride status tracking',
      'Ride history retrieval for users and drivers',
    ],
  },
  {
    title: 'Architecture',
    body: 'Java console application → Service layer → DAO layer → Hibernate/JPA → PostgreSQL, managed directly through pgAdmin. The Service layer holds business logic, the DAO layer handles all persistence operations, and each entity is mapped through Hibernate annotations — keeping data access cleanly separated from business rules.',
  },
  {
    title: 'Database Design',
    body: 'Users, Drivers, Vehicles, and Rides are modelled as related entities using Hibernate/JPA one-to-many and many-to-one mappings — a driver can own multiple vehicles, and each ride links a user, a driver, and a vehicle. Schema changes and queries were verified directly through pgAdmin, with parameterized queries and transaction handling keeping data consistent across related tables.',
  },
  {
    title: 'Design & Architecture',
    body: 'The system is structured around a layered DAO-Service-Entity architecture to keep persistence, business logic, and data access cleanly separated. Entity classes use Hibernate/JPA annotations for ORM mapping instead of raw JDBC, and every booking operation — registration, vehicle management, ride assignment, status updates — flows through the same consistent layered pattern.',
  },
  {
    title: 'Learning',
    body: 'This project was a deliberate step up from raw JDBC into real ORM usage — building a working understanding of entity relationships, Hibernate mappings, and transaction management, along with how a layered architecture keeps a growing codebase maintainable as more entities and operations get added.',
  },
]

export default function ProjectDetailRideBooking() {
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
      <p className="mt-2 text-primary">Console-based Java + Hibernate/JPA + PostgreSQL ride booking system</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {['Java', 'Hibernate', 'PostgreSQL', 'pgAdmin'].map((t) => (
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
