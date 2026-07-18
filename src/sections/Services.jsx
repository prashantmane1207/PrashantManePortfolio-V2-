import { motion } from 'framer-motion'
import { FiCode, FiLayout, FiServer, FiLink, FiSmartphone, FiPenTool } from 'react-icons/fi'
import { services } from '../data/social'
import SectionHeading from '../components/SectionHeading'

import { Laptop, Code2, Database, Server, BrainCircuit, Coffee, } from "lucide-react";
const icons = [ Laptop,Code2,Server, Database, BrainCircuit, Coffee,];
export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading eyebrow="// services.map" title="What I Build" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const Icon = icons[i % icons.length]
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group rounded-2xl border border-white/5 bg-card/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-xl text-accent transition-colors group-hover:bg-primary group-hover:text-white">
                <Icon />
              </div>
              <h3 className="font-display text-lg font-semibold text-text">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{s.description}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
