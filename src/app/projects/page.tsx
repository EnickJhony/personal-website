"use client"
import { useRouter } from "next/navigation"

export default function Projects() {
  const route = useRouter()

  route.replace("/underConstruction")
  return (
    <div>
      <h1>Projects</h1>
    </div>
  )
}
