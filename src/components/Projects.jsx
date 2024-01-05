import Image from "next/image"
import { GithubLogo } from "@phosphor-icons/react/dist/ssr"
import AnselImg from "../assets/projects/Ansel.png"
import CoffeeDeliveryImg from "../assets/projects/CoffeeDelivery.png"
import DoctorCareImg from "../assets/projects/DoctorCare.png"
import ToDoListImg from "../assets/projects/ToDoList.png"

export function Projects() {
  return (
    <div className="lg:max-w-5xl m-auto">
      <div className="text-3xl font-bold underline mb-8">Projects</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div>
          <div className="hover:scale-105 transform transition-all duration-500">
            <a
              href="https://todo.enick.dev.br/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className="w-full rounded-lg object-cover"
                src={ToDoListImg}
                alt=""
              />
            </a>
          </div>
          <div className="flex justify-center items-center">
            <a
              className="p-4"
              title="Repositório do projeto"
              href="https://github.com/EnickJhony/todo"
              target="_blank"
              rel="noreferrer"
            >
              <GithubLogo size={32} />
            </a>
          </div>
        </div>
        <div>
          <div className="hover:scale-105 transform transition-all duration-500">
            <a
              href="https://coffee-delivery.enick.dev.br/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className="w-full rounded-lg object-cover"
                src={CoffeeDeliveryImg}
                alt=""
              />
            </a>
          </div>
          <div className="flex justify-center items-center">
            <a
              className="p-4"
              title="Repositório do projeto"
              href="https://github.com/EnickJhony/coffee-delivery"
              target="_blank"
              rel="noreferrer"
            >
              <GithubLogo size={32} />
            </a>
          </div>
        </div>
        <div>
          <div className="hover:scale-105 transform transition-all duration-500">
            <a
              href="https://doctor-care.enick.dev.br/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className="w-full rounded-lg object-cover"
                src={DoctorCareImg}
                alt=""
              />
            </a>
          </div>
          <div className="flex justify-center items-center">
            <a
              className="p-4"
              title="Repositório do projeto"
              href="https://github.com/EnickJhony/NWL-Origin-2022"
              target="_blank"
              rel="noreferrer"
            >
              <GithubLogo size={32} />
            </a>
          </div>
        </div>
        <div>
          <div className="hover:scale-105 transform transition-all duration-500">
            <a
              href="https://portfolio-ansel.enick.dev.br/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className="w-full rounded-lg object-cover"
                src={AnselImg}
                alt=""
              />
            </a>
          </div>
          <div className="flex justify-center items-center">
            <a
              className="p-4"
              title="Repositório do projeto"
              href="https://github.com/EnickJhony/portfolio-ansel"
              target="_blank"
              rel="noreferrer"
            >
              <GithubLogo size={32} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
