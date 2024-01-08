import {
  Campfire,
  DesktopTower,
  ProjectorScreen,
  SmileyWink,
} from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"

export function Cards() {
  return (
    <div className="lg:max-w-5xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div>
          <Link href="#" target="_blank" rel="noreferrer">
            <div className="hover:scale-105 transform transition-all duration-500 bg-slate-900 rounded-lg h-40 md:h-44 lg:h-36 flex justify-center items-center text-2xl">
              <p className="pl-4">Sobre mim &nbsp;</p>
              <p className="pr-4">
                <SmileyWink size={36} />
              </p>
            </div>
          </Link>
        </div>
        <div>
          <Link href="#" target="_blank" rel="noreferrer">
            <div className="hover:scale-105 transform transition-all duration-500 bg-slate-900 rounded-lg h-40 md:h-44 lg:h-36 flex justify-center items-center text-2xl">
              <p className="pl-4">Meus projetos &nbsp;</p>
              <p className="pr-4">
                <ProjectorScreen size={36} />
              </p>
            </div>
          </Link>
        </div>
        <div>
          <Link href="#" target="_blank" rel="noreferrer">
            <div className="hover:scale-105 transform transition-all duration-500 bg-slate-900 rounded-lg h-40 md:h-44 lg:h-36 flex justify-center items-center text-2xl">
              <p className="pl-4">Educação / Trabalho &nbsp;</p>
              <p className="pr-4">
                <DesktopTower size={36} />
              </p>
            </div>
          </Link>
        </div>
        <div>
          <Link href="#" target="_blank" rel="noreferrer">
            <div className="hover:scale-105 transform transition-all duration-500 bg-slate-900 rounded-lg h-40 md:h-44 lg:h-36 flex justify-center items-center text-2xl">
              <p className="pl-4">Hobbies &nbsp; </p>
              <p className="pr-4">
                <Campfire size={36} />
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
