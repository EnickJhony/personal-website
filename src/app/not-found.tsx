import Link from "next/link"

export default function Custom404() {
  return (
    <main className="lg:max-w-5xl mx-auto p-4 flex flex-col justify-center items-center h-[500px]">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
        Vish, eu não fiz essa página...
      </h1>
      <p className="text-xl underline m-8">
        <Link href={"/"}>Voltar pra home</Link>
      </p>
    </main>
  )
}
