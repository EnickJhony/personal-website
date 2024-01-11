import Link from "next/link"

export function Navigation() {
  return (
    <nav className="lg:max-w-5xl mx-auto p-4 flex justify-between items-center">
      <Link href={"/"}>
        <span className="font-bold text-5xl">e³</span>
      </Link>
      <span></span>
    </nav>
  )
}
