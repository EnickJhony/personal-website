import { Hero } from "../components/Hero"
import { Projects } from "../components/Projects"
import { Technologies } from "../components/Technologies"

export default function Home() {
  return (
    <main>
      <Hero />
      <Technologies />
      <Projects />
    </main>
  )
}
