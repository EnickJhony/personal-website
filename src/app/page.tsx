import { Hero } from '../components/Hero'
import { Navigation } from '../components/Navigation'
import { Projects } from '../components/Projects'
import { Technologies } from '../components/Technologies'
import { Footer } from '../components/Footer'
import { Analytics } from '@vercel/analytics/react'

export default function Home() {
  return (
    <main className="min-h-screen p-4 bg-slate-950 text-slate-300">
      <Navigation />
      <Hero />
      <Technologies />
      <Projects />
      <Footer />
      <Analytics />
    </main>
  )
}
