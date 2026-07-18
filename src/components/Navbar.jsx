import { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks } from '../data/social'
import { useActiveSection } from '../hooks/useActiveSection'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'
  const active = useActiveSection(navLinks.map((l) => l.to))

  const handleNavClick = (to) => {
    setOpen(false)
    if (!isHome) navigate(`/#${to}`)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="glass mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3 sm:px-8">
        <Link to="/" className="font-display text-lg font-semibold tracking-tight text-text">
          <span className="text-primary"></span>Prashant Mane<span className="text-primary"></span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) =>
            isHome ? (
              <li key={link.to}>
                <ScrollLink
                  to={link.to}
                  smooth
                  duration={500}
                  offset={-90}
                  spy
                  onSetActive={() => {}}
                  className={`focus-ring cursor-pointer rounded-lg px-4 py-2 font-mono text-sm transition-colors duration-300 ${
                    active === link.to ? 'text-accent' : 'text-text-muted hover:text-text'
                  }`}
                >
                  {link.label}
                </ScrollLink>
              </li>
            ) : (
              <li key={link.to}>
                <button
                  onClick={() => handleNavClick(link.to)}
                  className="focus-ring cursor-pointer rounded-lg px-4 py-2 font-mono text-sm text-text-muted transition-colors duration-300 hover:text-text"
                >
                  {link.label}
                </button>
              </li>
            )
          )}
        </ul>

        <button
          className="focus-ring text-2xl text-text md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="glass mx-4 mt-2 flex flex-col rounded-2xl p-4 md:hidden"
          >
            {navLinks.map((link) =>
              isHome ? (
                <li key={link.to}>
                  <ScrollLink
                    to={link.to}
                    smooth
                    duration={500}
                    offset={-90}
                    onClick={() => setOpen(false)}
                    className="focus-ring block cursor-pointer rounded-lg px-4 py-3 font-mono text-sm text-text-muted hover:text-accent"
                  >
                    {link.label}
                  </ScrollLink>
                </li>
              ) : (
                <li key={link.to}>
                  <button
                    onClick={() => handleNavClick(link.to)}
                    className="focus-ring block w-full text-left rounded-lg px-4 py-3 font-mono text-sm text-text-muted hover:text-accent"
                  >
                    {link.label}
                  </button>
                </li>
              )
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
