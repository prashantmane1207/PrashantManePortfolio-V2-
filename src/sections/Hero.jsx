import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Link as ScrollLink } from 'react-scroll'
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi'
import { profile } from '../data/profile'
import Button from '../components/Button'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16 grid-bg"
    >
      {/* ambient shapes */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/20 blur-[100px] animate-float-slow" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/10 blur-[120px] animate-float" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          <h1 className="font-display text-4xl font-semibold leading-tight text-text sm:text-5xl lg:text-6xl">
            Hi, I'm <span className="text-primary">Prashant Mane</span>
          </h1>

          <div className="mt-4 font-mono text-xl text-accent sm:text-2xl">
            <TypeAnimation
              sequence={[
                'Java Full Stack Developer',
                2000,
                'Frontend Developer',
                2000,
                'AI-Powered Web Developer',
                2000,
                'AI Enthusiast',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="mt-6 max-w-xl leading-relaxed text-text-muted">{profile.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={profile.resumeUrl} variant="primary">
              <FiDownload /> Download Resume
            </Button>
            <ScrollLink to="projects" smooth duration={500} offset={-80}>
              <Button variant="outline">View Projects</Button>
            </ScrollLink>
            <ScrollLink to="contact" smooth duration={500} offset={-80}>
              <Button variant="ghost">Contact Me</Button>
            </ScrollLink>
          </div>

          <div className="mt-10 flex gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="focus-ring text-xl text-text-muted hover:text-accent transition-colors"
            >
              <FiGithub />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="focus-ring text-xl text-text-muted hover:text-accent transition-colors"
            >
              <FiLinkedin />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Send email"
              className="focus-ring text-xl text-text-muted hover:text-accent transition-colors"
            >
              <FiMail />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto w-full max-w-sm"
        >
          <div className="glass rounded-2xl p-1 shadow-card">
            <div className="flex items-center gap-1.5 rounded-t-xl bg-card/80 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              <span className="ml-3 font-mono text-xs text-text-muted">profile.js</span>
            </div>
            <div className="rounded-b-xl bg-card/60 p-6 font-mono text-sm leading-relaxed text-text-muted">
              <p><span className="text-accent">const</span> dev = {'{'}</p>
              <p className="pl-4">name: <span className="text-primary">'Prashant Mane'</span>,</p>
              <p className="pl-4">based: <span className="text-primary">'Sangli, maharashtra India'</span>,</p>
              <p className="pl-4">stack: [<span className="text-primary">'Java'</span>, <span className="text-primary">'React'</span>, <span className="text-primary">'OracleSQL'</span>],</p>
              <p className="pl-4">focus: <span className="text-primary">'Full Stack Development + AI'</span>,</p>
              <p className="pl-4">currently: <span className="text-primary">'Learning Spring Boot'</span>,</p>
              <p className="pl-4">status: <span className="text-primary">'open to work'</span></p>
              <p>{'}'}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
