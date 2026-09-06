import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowLeft, FiGithub } from 'react-icons/fi'

import Button from '../components/Button'

import homeImage from '../assets/images/home.png'
import summaryImage from '../assets/images/summary.png'
import itinaryDay1 from '../assets/images/itinerary-day1.png'
import itinaryDay2 from '../assets/images/itinerary-day2.png'

const sections = [
  {
    title: 'Overview',
    body: 'AI-Based Trip Planner is a full-stack web application that turns a destination, budget and trip duration into a complete, personalized travel itinerary — removing the hours normally spent researching routes, stops and schedules by hand.',
  },
  {
    title: 'Problem',
    body: "Planning a trip manually means juggling dozens of tabs — destinations, budgets, hotel options, day-by-day scheduling — and most of that research doesn't translate cleanly into an actual day-wise plan.",
  },
  {
    title: 'Solution',
    body: 'A React frontend collects trip preferences and sends them to a Java/Spring Boot backend, which integrates with the OpenRouter AI API to generate structured, day-wise itineraries. Trip data is persisted in MongoDB so users can revisit their saved plans.',
  },
  {
    title: 'Architecture',
    body: 'React Frontend → Spring Boot Backend → MongoDB for storage and OpenRouter AI for itinerary generation → structured itinerary returned to the UI. The frontend and backend communicate through REST APIs.',
  },
  {
    title: 'Results',
    body: 'The application generates personalized day-wise itineraries from user preferences and provides a responsive interface for viewing and managing trip plans across different screen sizes.',
  },
  {
    title: 'Challenges',
    body: 'Structuring prompts so the OpenRouter AI API reliably returns clean, parseable, day-wise data rather than freeform text was an important challenge. This was handled by carefully constructing the prompt and processing the API response before displaying the itinerary.',
  },
  {
    title: 'Learning',
    body: 'This project strengthened my understanding of full-stack development, Spring Boot REST APIs, React frontend integration, MongoDB data handling, and integrating a generative AI API into a real-world application.',
  },
]

export default function ProjectDetailAITrip() {
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
        AI-Based Trip Planner
      </motion.h1>

      <p className="mt-2 text-primary">
        AI-powered travel planning platform using Generative AI
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {[
          'React.js',
          'Java',
          'Spring Boot',
          'MongoDB',
          'REST APIs',
          'OpenRouter AI',
        ].map((t) => (
          <span
            key={t}
            className="rounded bg-white/5 px-2.5 py-1 text-xs text-text-muted"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6">
        <Button
          href="https://github.com/prashantmane1207/AI-Based-Trip-Planner"
          variant="outline"
        >
          <FiGithub />
          View Source on GitHub
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
            Features
          </h2>

          <ul className="mt-3 space-y-2">
            {[
              'AI-generated personalized travel itineraries',
              'OpenRouter AI API integration',
              'Spring Boot REST API backend',
              'MongoDB trip data persistence',
              'React.js frontend integration',
              'Responsive user interface',
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

      <div className="mt-12">
        <h2 className="font-display text-xl font-semibold text-text">
          Project Screenshots
        </h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <img
            src={homeImage}
            alt="Trip Planner Home"
            className="rounded-2xl border border-white/10"
          />

          <img
            src={summaryImage}
            alt="Trip Planner Summary"
            className="rounded-2xl border border-white/10"
          />

          <img
            src={itinaryDay1}
            alt="AI Generated Itinerary Day 1"
            className="rounded-2xl border border-white/10"
          />

          <img
            src={itinaryDay2}
            alt="AI Generated Itinerary Day 2"
            className="rounded-2xl border border-white/10"
          />
        </div>
      </div>
    </article>
  )
}
