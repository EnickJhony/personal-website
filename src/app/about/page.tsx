"use client"
import { useRouter } from "next/navigation"

export default function About() {
  const route = useRouter()

  route.replace("/underConstruction")
  return (
    <div>
      <h1>About</h1>
    </div>
  )
}
