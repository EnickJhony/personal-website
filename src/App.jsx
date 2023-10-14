import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navigation } from "./components/Navigation";
import { Projects } from "./components/Projects";

export default function App() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Projects />
      <Footer />
    </main>
  )
}
