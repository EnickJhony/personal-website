import Image from "next/image"
import heroImg from "../assets/heroImg.svg"

export function Hero() {
  return (
    <div className="lg:max-w-5xl mx-auto p-4 flex flex-col items-center py-20 lg:py-8 md:flex-row">
      <div className="flex flex-col items-center">
        <h1 className="py-1 lg:py-4 text-3xl sm:text-4xl lg:text-5xl font-bold">
          Oi, sou {"<"}EnickJhony {"/>"}!
        </h1>
        <div className="text-xl sm:text-2xl sm:w-4/5 lg:text-3xl lg:w-full text-slate-400 py-1 lg:py-4 text-center">
          <p>
            Full Stack Developer, seja bem vindo(a) ao meu pedacinho de
            internet!
          </p>
          <p>Sou apaixonado por interfaces responsivas e funcionais.</p>
        </div>
      </div>
      <Image className="w-full sm:w-3/4 md:w-2/5" src={heroImg} alt="" />
    </div>
  )
}
