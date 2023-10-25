import { useEffect, useState } from 'react'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { LoadingPage } from './components/LoadingPage'
import { Navigation } from './components/Navigation'
import { Projects } from './components/Projects'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 5000)
  }, [])

  if (isLoading) {
    return <LoadingPage />
  }

  return (
    <div className="bg-gray-400 h-screen p-4">
      <Navigation />
      <Hero />
      <Projects />
      <Footer />
    </div>
  )
}
