import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi'
import { profile } from '../data/profile'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'

const initialForm = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [sending, setSending] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Please enter your name.'
    if (!form.email.trim()) e.email = 'Please enter your email.'
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Enter a valid email address.'
    if (!form.subject.trim()) e.subject = 'Please add a subject.'
    if (!form.message.trim() || form.message.trim().length < 10)
      e.message = 'Message should be at least 10 characters.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      toast.error('Contact form is not configured yet — add EmailJS keys to .env')
      return
    }

    setSending(true)
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        publicKey
      )
      toast.success('Message sent! I will get back to you soon.')
      setForm(initialForm)
    } catch (err) {
      toast.error('Something went wrong sending your message. Please try again.')
    } finally {
      setSending(false)
    }
  }

  const contactCards = [
    { icon: FiMail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: FiPhone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { icon: FiMapPin, label: 'Location', value: profile.location, href: null },
    { icon: FiGithub, label: 'GitHub', value: 'prashantmane1207', href: profile.github },
    { icon: FiLinkedin, label: 'LinkedIn', value: 'prashant-mane', href: profile.linkedin },
  ]

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="// contact.send()"
        title="Let's Work Together"
        subtitle="Open to Internship and Full-Time opportunities — reach out and I'll respond as soon as I can."
      />

      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="grid gap-4">
          {contactCards.map((c) => (
            <div key={c.label} className="flex items-center gap-4 rounded-xl border border-white/5 bg-card/50 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-accent">
                <c.icon />
              </div>
              <div>
                <p className="text-xs text-text-muted">{c.label}</p>
                {c.href ? (
                  <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="focus-ring text-sm text-text hover:text-accent">
                    {c.value}
                  </a>
                ) : (
                  <p className="text-sm text-text">{c.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          noValidate
          className="rounded-2xl border border-white/5 bg-card/50 p-6 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-xs text-text-muted">Name</label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="focus-ring w-full rounded-lg border border-white/10 bg-base px-4 py-2.5 text-sm text-text placeholder:text-text-muted"
                placeholder="Your name"
              />
              {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs text-text-muted">Email</label>
              <input
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="focus-ring w-full rounded-lg border border-white/10 bg-base px-4 py-2.5 text-sm text-text placeholder:text-text-muted"
                placeholder="you@example.com"
              />
              {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="subject" className="mb-1.5 block text-xs text-text-muted">Subject</label>
            <input
              id="subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="focus-ring w-full rounded-lg border border-white/10 bg-base px-4 py-2.5 text-sm text-text placeholder:text-text-muted"
              placeholder="What's this about?"
            />
            {errors.subject && <p className="mt-1 text-xs text-red-400">{errors.subject}</p>}
          </div>

          <div className="mt-5">
            <label htmlFor="message" className="mb-1.5 block text-xs text-text-muted">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="focus-ring w-full resize-none rounded-lg border border-white/10 bg-base px-4 py-2.5 text-sm text-text placeholder:text-text-muted"
              placeholder="Tell me a bit about the opportunity or project..."
            />
            {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
          </div>

          <Button type="submit" variant="primary" className="mt-6 w-full sm:w-auto" onClick={undefined}>
            <FiSend /> {sending ? 'Sending...' : 'Send Message'}
          </Button>
        </motion.form>
      </div>
    </section>
  )
}
