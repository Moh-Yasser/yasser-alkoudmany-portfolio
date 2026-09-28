import { projects } from '../data.js'
import { Icon } from './Icons.jsx'
import Reveal from './Reveal.jsx'

function ProjectImages({ p }) {
  const images = p.images ?? []

  if (images.length >= 2) {
    return (
      <div className="relative h-56 md:h-72">
        <img src={images[0]} alt={`${p.title} screenshot 1`} className="absolute top-0 left-0 w-[80%] h-[75%] object-cover rounded-xl border border-line shadow-2xl" />
        <img src={images[1]} alt={`${p.title} screenshot 2`} className="absolute bottom-0 right-0 w-[62%] h-[62%] object-cover rounded-xl border border-line shadow-2xl bg-elev" />
      </div>
    )
  }

  if (images.length === 1) {
    return (
      <div className="relative h-56 md:h-72">
        <img src={images[0]} alt={`${p.title} screenshot`} className="w-full h-full object-cover object-top rounded-xl border border-line shadow-2xl" />
      </div>
    )
  }

  return (
    <div className="h-56 md:h-72 rounded-xl border border-line bg-elev flex flex-col items-center justify-center gap-2">
      <span className="font-display text-5xl text-dim">{p.initials}</span>
      <span className="text-xs text-dim">Screenshots coming soon</span>
    </div>
  )
}

function ProjectCard({ p, i }) {
  const reverse = i % 2 === 1
  return (
    <div className={`flex flex-col md:flex-row gap-8 md:gap-14 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <div className="flex-1 w-full">
        <span className="text-sm font-medium text-accent">{p.tag}</span>
        <h3 className="font-display text-2xl md:text-3xl font-semibold mt-2 mb-4">{p.title}</h3>
        <p className="text-dim leading-relaxed max-w-[56ch]">{p.desc}</p>
        <div className="flex flex-wrap gap-2 mt-5">
          {p.tech.map((t) => (
            <span key={t} className="text-xs px-2.5 py-1 rounded-full border border-line text-dim">{t}</span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 mt-6">
          {p.demo && (
            <a href={p.demo} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-white bg-accent">
              View demo <Icon.ext s={14} />
            </a>
          )}
          {p.code && (
            <a href={p.code} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-line text-sm">
              View code <Icon.github s={15} />
            </a>
          )}
        </div>
        {p.note && (
          <p className="flex items-center gap-1.5 mt-3 text-xs text-dim">
            <Icon.monitor s={14} />
            {p.note}
          </p>
        )}
      </div>
      <div className="flex-1 w-full">
        <ProjectImages p={p} />
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section className="px-6 md:px-16 py-24 md:py-32">
      <Reveal><h2 className="font-display text-3xl md:text-4xl font-semibold mb-16">Experience &amp; Projects</h2></Reveal>
      <div className="flex flex-col gap-20 md:gap-28">
        {projects.map((p, i) => (
          <Reveal key={p.title}><ProjectCard p={p} i={i} /></Reveal>
        ))}
      </div>
    </section>
  )
}