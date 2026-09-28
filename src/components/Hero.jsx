import { BIO, CONTACT } from '../data.js'
import { Icon } from './Icons.jsx'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-16 overflow-hidden">
      <div className="glow absolute w-[520px] h-[520px] -top-40 -right-40" />
      <div className="relative max-w-3xl">
        <p className="hero-in text-accent font-medium mb-4" style={{ animationDelay: '.05s' }}>
          Front-End Developer
        </p>
        <h1 className="hero-in font-display text-5xl md:text-7xl font-semibold leading-[1.05] mb-6" style={{ animationDelay: '.15s' }}>
          {CONTACT.name}
        </h1>
        <p className="hero-in text-dim text-lg leading-relaxed max-w-[60ch] mb-8" style={{ animationDelay: '.3s' }}>
          {BIO}
        </p>
        <div className="hero-in flex gap-5 text-dim" style={{ animationDelay: '.45s' }}>
          <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors">
            <Icon.linkedin />
          </a>
          <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors">
            <Icon.github />
          </a>
        </div>
      </div>
    </section>
  )
}
