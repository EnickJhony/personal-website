"use client"
import { useRouter } from "next/navigation"

export default function Work() {
  const route = useRouter()

  route.replace("/underConstruction")
  return (
    <div>
      <h1>Work</h1>
    </div>
  )
}
