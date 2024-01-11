import Link from "next/link"

export default function UnderConstruction() {
  return (
    <main className="lg:max-w-5xl mx-auto p-4 flex flex-col justify-center items-center h-[500px]">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
        Poxa, ainda não terminei essa página...
      </h1>
      <p className="text-xl underline m-8">
        <Link href={"/"}>Voltar pra home</Link>
      </p>
    </main>
  )
}
