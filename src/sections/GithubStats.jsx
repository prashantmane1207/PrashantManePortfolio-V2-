import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiStar, FiUsers, FiGitBranch, FiBookOpen } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import { profile } from '../data/profile'

const USERNAME = 'prashantmane1207'

export default function GithubStats() {
  const [stats, setStats] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    let cancelled = false
    async function fetchStats() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${USERNAME}`),
          fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100`),
        ])
        if (!userRes.ok || !reposRes.ok) throw new Error('GitHub API error')
        const user = await userRes.json()
        const repos = await reposRes.json()

        const stars = repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0)
        const langCount = {}
        repos.forEach((r) => {
          if (r.language) langCount[r.language] = (langCount[r.language] || 0) + 1
        })
        const topLanguages = Object.entries(langCount)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([lang]) => lang)

        if (!cancelled) {
          setStats({
            public_repos: user.public_repos,
            followers: user.followers,
            following: user.following,
            stars,
            topLanguages,
          })
        }
      } catch (e) {
        if (!cancelled) setError(true)
      }
    }
    fetchStats()
    return () => {
      cancelled = true
    }
  }, [])

  const cards = stats
    ? [
      { icon: FiGitBranch, label: 'Public Repositories', value: stats.public_repos },
      { icon: FiStar, label: 'GitHub Stars', value: stats.stars },
    ]
    : []

  return (
    <section id="github" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        title="GitHub Profile"
        subtitle="Showcasing my projects, code quality, and continuous learning through practical software development."
      />

      {error && (
        <p className="text-sm text-text-muted">
          Couldn't reach the GitHub API right now — visit the profile directly at{' '}
          <a href={profile.github} target="_blank" rel="noreferrer" className="text-accent underline">
            {profile.github.replace('https://', '')}
          </a>.
        </p>
      )}

      {!error && (
        <div className="grid gap-6">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {(stats ? cards : Array.from({ length: 4 })).map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-2xl border border-white/5 bg-card/50 p-6 text-center"
              >
                {stats ? (
                  <>
                    <c.icon className="mx-auto mb-2 text-2xl text-accent" />
                    <p className="font-display  text-5xl font-bold text-text">{c.value}</p>
                    <p className="mt-1 text-xs text-text-muted">{c.label}</p>
                  </>
                ) : (
                  <div className="h-16 animate-pulse rounded bg-white/5" />
                )}
              </motion.div>
            ))}
          </div>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid gap-6 lg:grid-cols-2"
          >
            <img
              src={`https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${USERNAME}&theme=github_dark`}
              alt="GitHub Profile Summary"
              className="w-full h-64 rounded-2xl border border-white/10"
            />

            <div className="rounded-2xl border border-white/10 bg-card/50 p-6">
              <h2 className="font-display text-xl font-semibold text-text">
                Technologies I Work With
              </h2>

              <div className="mt-5 flex flex-wrap gap-3">
                {[
                  'Java',
                  'React.js',
                  'Spring Boot',
                  'JDBC',
                  'Hibernate',
                  'Oracle Database',
                  'SQL',
                  'REST APIs',
                  'Tailwind CSS',
                  'Git & GitHub',
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex w-fit items-center gap-2 font-mono text-sm text-accent hover:underline"
          >
            <FiGithub /> Explore My GitHub  →
          </a>
        </div>
      )}
    </section>
  )
}
