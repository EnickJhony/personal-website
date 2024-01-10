"use client"
import { useRouter } from "next/navigation"

export default function Hobbies() {
  const route = useRouter()

  route.replace("/underConstruction")
  return (
    <div>
      <h1>Hobbies</h1>
    </div>
  )
}
