import wakalah1 from './assets/wakalah-1.jpg'
import wakalah2 from './assets/wakalah-2.jpg'
import medmarketSupplier1 from './assets/medmarket-supplier-1.png'
import medmarketSupplier2 from './assets/medmarket-supplier-2.png'
import medmarketPharma from './assets/medmarket-pharma.png'

export const BIO = "Front-end developer specializing in React and Next.js, focused on building secure, production-grade web applications: authentication and role-based access, real-time order tracking, and interfaces built to scale. Co-founder of a B2B marketplace startup, and a hackathon builder in fintech fraud prevention."

export const projects = [
  {
    title: "MedMarket: Supplier Platform",
    tag: "Co-founded startup",
    desc: "Co-founded and built the supplier-facing platform for MedMarket, a B2B marketplace connecting pharmaceutical suppliers with pharmacies across Syria. Suppliers manage product catalogs, track orders end-to-end, configure up to five custom offer types, and coordinate their delivery drivers, all from one dashboard. Development is currently paused due to regional infrastructure limitations, with the core platform fully functional.",
    tech: ["React", "Next.js", "MongoDB", "JWT", "RBAC"],
    demo: "https://medmarket-supplier-eight.vercel.app/",
    code: "https://github.com/Moh-Yasser/medmarket-supplier",
    images: [medmarketSupplier1, medmarketSupplier2],
    initials: "M"
  },
  {
    title: "MedMarket: Pharmacy Portal",
    tag: "Co-founded startup",
    desc: "The pharmacy-facing counterpart to MedMarket: a dedicated multi-page portal where pharmacists browse and compare live offers from multiple suppliers, place orders, and track fulfillment status in real time, replacing manual phone and WhatsApp-based ordering.",
    tech: ["React", "Next.js", "TanStack Query", "Tailwind CSS"],
    demo: "https://med-market-pharm-nu.vercel.app/",
   code: "https://github.com/Moh-Yasser/medMarket-pharm",
       images: [medmarketPharma],
     initials: "M"
  },
  {
    title: "Anti-Fraud Payments Agent",
    tag: "MENA Ignite Hackathon",
    desc: "Built at the MENA Ignite Hackathon on GSMA's Open Gateway CAMARA APIs: an agent-based system that adds a carrier-verified trust layer to digital payments, using signals like SIM-swap and number verification to flag fraudulent transactions in real time.",
    tech: ["React", "REST APIs", "CAMARA APIs"],
    demo: "https://wakalah-demo-app.vercel.app/",
    code: "https://github.com/Moh-Yasser/wakalah-Demo-app",
    images: [wakalah1, wakalah2]
  },
  {
    title: "Tic-Tac-Toe",
    tag: "Practice project",
    desc: "My first React build, completed while taking the React: The Complete Guide course on Udemy. A small project, but it's where component architecture, state, and event handling clicked for me.",
    tech: ["React", "JavaScript"],
    demo: "https://tic-tac-toe-game-dusky-iota.vercel.app/",
    code: "https://github.com/Moh-Yasser/tic-tac-toe-game",
    initials: "#",
    note: "Desktop only — not optimized for mobile screens ."
  }
]

export const SKILLS = {
  "Frontend": ["React", "Next.js (App Router)", "TypeScript", "JavaScript ES6+", "HTML5", "CSS3"],
  "State & Data": ["TanStack Query", "Redux Toolkit", "React Context", "React Hook Form", "Zod"],
  "UI & Style": ["Tailwind CSS", "Shadcn/UI", "Radix UI", "Material UI"],
  "Auth & APIs": ["REST APIs", "JWT", "HttpOnly Cookies", "RBAC", "Route Protection", "Middleware Authorization"],
  "Next.js": ["Server Components", "Client Components", "SSR", "SSG", "ISR", "Route Handlers", "Dynamic Routing"],
  "Tools": ["Git", "GitHub", "Vercel", "Cloudinary", "MongoDB", "Mongoose", "Environment Management"]
}

export const ADDITIONAL = ["Teamwork", "Responsibility", "Time management", "Problem solving (active on Codeforces)"]

export const CONTACT = {
  name: "Yasser Al-Koudmany",
  phone: "+963 940 830 950",
  phoneHref: "tel:+963940830950",
  linkedin: "https://www.linkedin.com/in/yasser-al-koudmany-180490339/",
  github: "https://github.com/Moh-Yasser"
}
