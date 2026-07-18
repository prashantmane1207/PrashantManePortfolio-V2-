import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import SectionHeading from '../components/SectionHeading'

const qualities = [
  'Builds responsive React applications with clean UI/UX',
  'Strong foundation in Java, SQL, JDBC, and OOP',
  'Experienced in REST API and Google Gemini API integration',
  'Writes clean, reusable, and maintainable code',
  'Problem-solving mindset with strong debugging skills',
  'Passionate about learning modern technologies',
]

const timeline = [
  {
    year: '2022',
    title: 'Started B.Tech in Electronics & Telecommunication',
    desc: "Began engineering at SVERI's College of Engineering, Pandharpur, building a strong technical foundation.",
  },
  {
    year: '2025 – Present',
    title: 'Java Full Stack Training',
    desc: 'Currently undergoing Java Full Stack training at QSpiders/JSpiders, learning Core Java, JDBC, SQL, React.js, REST APIs, and modern web development while building practical projects.',
  },
  {
    year: '2026',
    title: 'AI-Based Trip Planner',
    desc: 'Developed a full-stack AI-powered Trip Planner with 15+ reusable React components, Google Gemini API integration, MongoDB, and Java backend.',
  },
  {
    year: '2026',
    title: 'Employee Management System',
    desc: 'Built a Java & JDBC-based Employee Management System implementing CRUD operations with PostgreSQL and Object-Oriented Programming principles.',
  },
  {
    year: 'Now',
    title: 'Open to Opportunities',
    desc: 'Actively looking for Frontend Developer, React Developer, and Java Full Stack Developer roles where I can contribute to production-ready applications, learn from experienced engineers, and build software that creates real business value.',
  },
]

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading eyebrow="// about.md" title="About Me" />

      <div className="grid gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 leading-relaxed text-text-muted"
        >
          <p>
            I'm a <span className="text-text font-medium">Java Full Stack and React Developer</span> who enjoys building real-world applications that solve practical problems. My focus is creating responsive web applications, integrating REST APIs, and developing clean, user-friendly interfaces with modern technologies.
          </p>

          <p>
            I am currently undergoing Java Full Stack training at <span className="text-text font-medium">QSpiders/JSpiders</span>, where I am learning Core Java, JDBC, SQL, React.js, REST APIs, and modern web development. Alongside my training, I continuously apply these concepts by building real-world projects to strengthen my problem-solving and software development skills.
          </p>

          <p>
            My recent projects include an <span className="text-text font-medium">AI-Based Trip Planner</span> powered by Google Gemini API and a Java-based Employee Management System. These projects helped me gain hands-on experience in frontend development, backend integration, database management, and scalable application architecture.
          </p>

          <p>
            I'm currently looking for opportunities where I can contribute to production-ready software, collaborate with experienced developers, and continue growing as a React and Java Full Stack Developer by building applications that deliver real business value.
          </p>

          <div className="grid gap-3 pt-2 sm:grid-cols-2">
            {qualities.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-card/40 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative border-l border-white/10 pl-8"
        >
          {timeline.map((item) => (
            <div key={item.title} className="relative mb-10 last:mb-0">
              <span className="absolute -left-[2.32rem] top-1 h-3 w-3 rounded-full border-2 border-accent bg-base" />

              <p className="font-mono text-xs uppercase tracking-wider text-accent">
                {item.year}
              </p>

              <h3 className="mt-2 font-display text-lg font-semibold text-text">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}