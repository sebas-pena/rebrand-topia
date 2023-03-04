import Image from "next/image"
import Link from "next/link"
import React from "react"

const navItems = [
  {
    label: "Prólogo ",
    path: "/prologo",
  },
  {
    label: "Pago y Entrega",
    path: "/faq",
  },
  {
    label: "Mundo Topia",
    path: "/mundo-topia",
  },
]

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-5 border-b-2 border-neutral-800 mb-10">
      <Link href="/" className="inline-flex gap-3">
        <Image width={30} height={30} src="/svg/island.svg" />
        <h2 className="text-center text-3xl font-semibold text-[#333]">
          Topia
        </h2>
      </Link>
      <nav>
        <ul className="flex gap-4">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link href={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
