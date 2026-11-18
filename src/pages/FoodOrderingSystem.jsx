
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowLeft, FiGithub } from 'react-icons/fi'

import Button from '../components/Button'

const sections = [
  {
    title: 'Overview',
    body: 'Food Ordering System is a full-stack web application currently under development. It is designed to manage food ordering operations, including users, restaurants, food items, carts, orders, payments, and customer reviews through a structured backend.',
  },
  {
    title: 'Problem',
    body: 'Managing food orders involves multiple operations, such as maintaining restaurant details, managing food items, handling customer orders, and tracking order-related information. These operations need a centralized system to manage data consistently.',
  },
  {
    title: 'Solution',
    body: 'The application uses Java and Spring Boot to develop REST APIs for different modules. PostgreSQL is used for relational data storage, while Spring Data JPA and Hibernate simplify database interaction and entity management.',
  },
  {
    title: 'Architecture',
    body: 'The backend follows a layered architecture with REST controllers, service logic, data access, entities, and DTOs. Spring Boot handles application development, Spring Data JPA manages persistence, and PostgreSQL stores application data.',
  },
  {
    title: 'Database Design',
    body: 'PostgreSQL is used to manage structured application data. The backend includes entities and repositories for users, restaurants, food items, categories, carts, orders, payments, addresses, and reviews.',
  },
  {
    title: 'Challenges',
    body: 'Organizing multiple related modules and maintaining consistent data flow between application layers are important development challenges. Working with entities, DTOs, validation, and database relationships has helped me understand how to structure a backend application.',
  },
  {
    title: 'Learning',
    body: 'This project is helping me improve my understanding of Spring Boot application architecture, REST API development, PostgreSQL database design, Hibernate, Spring Data JPA, DTOs, and backend development practices.',
  },
]

export default function FoodOrderingSystem() {
  return (
    <article className="mx-auto max-w-4xl px-6 pb-28 pt-32">
      <Link
        to="/#projects"
        className="focus-ring inline-flex items-center gap-2 font-mono text-sm text-accent hover:underline"
      >
        <FiArrowLeft />
        Back to projects
      </Link>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-6 font-display text-3xl font-semibold text-text sm:text-4xl"
      >
        Food Ordering System
      </motion.h1>

      <p className="mt-2 text-primary">
        Backend-focused food ordering application built with Java and Spring Boot
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {[
          'Java',
          'Spring Boot',
          'Spring Data JPA',
          'Hibernate',
          'PostgreSQL',
          'REST APIs',
        ].map((t) => (
          <span
            key={t}
            className="rounded bg-white/5 px-2.5 py-1 text-xs text-text-muted"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Button
          href="https://github.com/prashantmane1207"
          variant="outline"
        >
          <FiGithub />
          View GitHub Profile
        </Button>
      </div>

      <div className="mt-8 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
        <p className="text-sm text-primary">
          Project Status: In Development
        </p>
        <p className="mt-1 text-sm text-text-muted">
          This project is currently being developed. Features and modules are
          being implemented and improved.
        </p>
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
            <h2 className="font-display text-xl font-semibold text-text">
              {s.title}
            </h2>

            <p className="mt-2 leading-relaxed text-text-muted">
              {s.body}
            </p>
          </motion.div>
        ))}

        <div>
          <h2 className="font-display text-xl font-semibold text-text">
            Modules
          </h2>

          <ul className="mt-3 space-y-2">
            {[
              'User management',
              'Restaurant management',
              'Food item and category management',
              'Cart management',
              'Order management',
              'Payment management',
              'Address management',
              'Customer reviews',
            ].map((f) => (
              <li
                key={f}
                className="flex gap-2 text-sm text-text-muted"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}
