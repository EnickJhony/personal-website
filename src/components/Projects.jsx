import { GithubLogo, Info } from '@phosphor-icons/react'
import AnselImg from '../assets/Ansel.png'
import CoffeeDeliveryImg from '../assets/CoffeeDelivery.png'
import DoctorCareImg from '../assets/DoctorCare.png'
import ToDoListImg from '../assets/ToDoList.png'

export function Projects() {
  return (
    <div className="lg:max-w-5xl m-auto">
      <div className="text-3xl font-bold underline mb-8">
        Projects
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div>
          <div className="hover:scale-105 transform transition-all duration-500">
            <img
              className="w-full rounded-lg object-cover"
              src={ToDoListImg}
              alt=""
            />
          </div>
          <div className="flex justify-center items-center">
            <a title="Informações do projeto" href="#">
              <Info size={32} />
            </a>
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
            <img
              className="w-full rounded-lg object-cover"
              src={CoffeeDeliveryImg}
              alt=""
            />
          </div>
          <div className="flex justify-center items-center">
            <a title="Informações do projeto" href="#">
              <Info size={32} />
            </a>
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
            <img
              className="w-full rounded-lg object-cover"
              src={DoctorCareImg}
              alt=""
            />
          </div>
          <div className="flex justify-center items-center">
            <a title="Informações do projeto" href="#">
              <Info size={32} />
            </a>
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
            <img
              className="w-full rounded-lg object-cover"
              src={AnselImg}
              alt=""
            />
          </div>
          <div className="flex justify-center items-center">
            <a title="Informações do projeto" href="#">
              <Info size={32} />
            </a>
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
      </div>
    </div>
  )
}
