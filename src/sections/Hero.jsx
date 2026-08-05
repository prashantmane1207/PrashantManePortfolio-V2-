import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Link as ScrollLink } from 'react-scroll'
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi'
import { profile } from '../data/profile'
import Button from '../components/Button'
import profileImage from "../assets/images/ProfilePhoto-1.png";

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
  className="flex justify-center"
>
  <div className="relative">
    {/* Background Glow */}
    <div className="absolute inset-0 rounded-full bg-primary/30 blur-3xl"></div>

    {/* Profile Image */}
    <img
      src={profileImage}
      alt="Prashant Mane"
      className="relative h-80 w-80 rounded-full object-cover border-4 border-primary shadow-2xl"
    />
  </div>
</motion.div>
      </div>
    </section>
  )
}
