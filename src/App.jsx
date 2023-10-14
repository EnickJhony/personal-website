import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navigation } from "./components/Navigation";
import { Projects } from "./components/Projects";

export default function App() {
  return (
    <div className="bg-gray-400 h-screen p-4">
      <Navigation />
      <Hero />
      <Projects />
      <Footer />
    </div>
  )
}
