import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Experience from '../sections/Experience'
import Projects from '../sections/Projects'
import Certifications from '../sections/Certifications'
import GithubStats from '../sections/GithubStats'
import Services from '../sections/Services'
import Contact from '../sections/Contact'

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
      }
    }
  }, [location])

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <GithubStats />
      <Services />
      <Contact />
    </>
  )
}
