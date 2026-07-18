import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { Link as ScrollLink } from 'react-scroll'
import { profile } from '../data/profile'
import { navLinks } from '../data/social'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-base">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-display text-xl font-semibold text-text">
              <span className="text-primary">&lt;</span>Prashant<span className="text-primary">/&gt;</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-text-muted">
              {profile.tagline}
            </p>
          </div>

          <div>
            <ul className="space-y-2">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.to}>
                  <ScrollLink
                    to={link.to}
                    smooth
                    duration={500}
                    offset={-90}
                    className="cursor-pointer text-sm text-text-muted hover:text-accent"
                  >
                    {link.label}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="focus-ring flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-text-muted hover:border-accent hover:text-accent transition-colors"
              >
                <FiGithub />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="focus-ring flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-text-muted hover:border-accent hover:text-accent transition-colors"
              >
                <FiLinkedin />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="focus-ring flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-text-muted hover:border-accent hover:text-accent transition-colors"
              >
                <FiMail />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-6 text-center font-mono text-xs text-text-muted">
          © {new Date().getFullYear()} Prashant Mane. Built with React & Tailwind CSS.
        </div>
      </div>
    </footer>
  )
}
