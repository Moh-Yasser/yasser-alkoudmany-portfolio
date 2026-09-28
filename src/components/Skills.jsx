import { SKILLS, ADDITIONAL } from '../data.js'
import Reveal from './Reveal.jsx'

export default function Skills() {
  return (
    <section className="px-6 md:px-16 py-24 md:py-32 bg-elev">
      <Reveal><h2 className="font-display text-3xl md:text-4xl font-semibold mb-16">Technical Skills</h2></Reveal>
      <Reveal>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
          {Object.entries(SKILLS).map(([cat, list]) => (
            <div key={cat}>
              <h3 className="text-sm font-semibold text-accent mb-3">{cat}</h3>
              <div className="flex flex-wrap gap-2">
                {list.map((s) => (
                  <span key={s} className="text-sm px-3 py-1.5 rounded-full border border-line text-dim">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal className="mt-14">
        <p className="text-sm text-dim">Also: {ADDITIONAL.join(', ')}.</p>
      </Reveal>
    </section>
  )
}
