import { useEffect, useState } from 'react'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { LoadingPage } from './components/LoadingPage'
import { Navigation } from './components/Navigation'
import { Projects } from './components/Projects'
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 4000)
  }, [])

  if (isLoading) {
    return <LoadingPage />
  }

  return (
    <div className="min-h-screen p-4 bg-slate-950 text-slate-300 font-manrope">
      <Navigation />
      <Hero />
      <Projects />
      <Footer />
      <Analytics />
    </div>
  )
}
