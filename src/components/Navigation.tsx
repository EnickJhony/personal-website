"use client"
import { List } from "@phosphor-icons/react/dist/ssr/List"
import { X } from "@phosphor-icons/react/dist/ssr/X"
import Link from "next/link"

function openMenu() {
  document.getElementsByClassName("buttonClose")[0].classList.remove("hidden")
  document.getElementsByClassName("menu")[0].classList.remove("hidden")

  document.getElementsByClassName("buttonOpen")[0].classList.add("hidden")
  document
    .getElementsByClassName("menu")[0]
    .classList.add(
      "bg-slate-900",
      "p-4",
      "fixed",
      "top-4",
      "right-4",
      "w-3/4",
      "rounded",
      "text-xl",
      "underline",
      "flex",
      "flex-col",
      "items-center",
    )
  document
    .getElementsByClassName("menuList")[0]
    .classList.add("flex", "flex-col", "items-center", "gap-4")
}

function closeMenu() {
  document.getElementsByClassName("buttonClose")[0].classList.add("hidden")
  document.getElementsByClassName("menu")[0].classList.add("hidden")

  document.getElementsByClassName("buttonOpen")[0].classList.remove("hidden")
  document
    .getElementsByClassName("menu")[0]
    .classList.remove(
      "bg-slate-900",
      "p-4",
      "fixed",
      "top-4",
      "right-4",
      "w-3/4",
      "rounded",
      "text-xl",
      "underline",
      "flex",
      "flex-col",
      "items-center",
    )
  document
    .getElementsByClassName("menuList")[0]
    .classList.remove("flex", "flex-col", "items-center", "gap-4")
  document
    .getElementsByClassName("menuList")[0]
    .classList.add("md:flex", "gap-4")
}

export function Navigation() {
  return (
    <nav className="lg:max-w-5xl mx-auto p-4 flex justify-between items-center w-">
      <Link href={"/"}>
        <span className="font-bold text-5xl">e³</span>
      </Link>
      <div>
        <button
          type="button"
          onClick={() => openMenu()}
          className="buttonOpen md:hidden"
        >
          <List size={32} />
        </button>
        <div className="menu hidden md:flex">
          <button
            type="button"
            onClick={() => closeMenu()}
            className="buttonClose hidden md:hidden fixed top-5 right-4"
          >
            <X size={32} />
          </button>
          <div className="menuList md:flex gap-4">
            <Link href={"/about"} onClick={() => closeMenu()}>
              Sobre
            </Link>
            <Link href={"/projects"} onClick={() => closeMenu()}>
              Projetos
            </Link>
            <Link href={"/work"} onClick={() => closeMenu()}>
              Formação
            </Link>
            <Link href={"/hobbies"} onClick={() => closeMenu()}>
              Hobbies
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
