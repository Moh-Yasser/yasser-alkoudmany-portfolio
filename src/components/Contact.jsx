import { CONTACT } from '../data.js'
import { Icon } from './Icons.jsx'
import Reveal from './Reveal.jsx'

export default function Contact() {
  return (
    <section className="px-6 md:px-16 py-24 md:py-32">
      <Reveal>
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">Get in touch</h2>
        <p className="text-dim mb-10 max-w-[50ch]">Open to front-end roles. Reach out directly or find me online.</p>
        <div className="flex flex-col gap-4 text-lg">
          <a href={CONTACT.phoneHref} className="flex items-center gap-3 w-fit hover:text-accent transition-colors">
            <Icon.phone /> {CONTACT.phone}
          </a>
          <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 w-fit hover:text-accent transition-colors">
            <Icon.linkedin /> LinkedIn
          </a>
          <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 w-fit hover:text-accent transition-colors">
            <Icon.github /> GitHub
          </a>
        </div>
      </Reveal>
    </section>
  )
}
