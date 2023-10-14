export function Hero() {
  return (
    <div>
      <h1 className=" text-3xl font-bold text-gray-800 mt-20 md:text-5 md">
          Oi, sou {'<'}EnickJhony{'/>'} !
        </h1>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/enickjhony"
        >
          <img
            className="rounded-full w-36"
            src="https://github.com/enickjhony.png"
            alt="Foto do Enick"
          />
        </a>
    </div>
  )
}