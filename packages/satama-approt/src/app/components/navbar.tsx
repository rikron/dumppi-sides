'use client'
import { useEffect, useState } from 'react'

type Props = {
  sections: any
}

const Navbar = ({ sections }: Props) => {
  const [navItems, setNavItems] = useState([])
  useEffect(() => {
    setNavItems(
      sections.map((section: any) => {
        if (window !== undefined) {
          return {
            title: section.navTitle.fi,
            anchor: document.getElementById(section._key)
          }
        }
      })
    )
  }, [])

  return (
    <div className="bg-white text-black fixed w-full flex flex-row justify-evenly md:justify-center items-center">
      {navItems.map((item: any, index: number) => {
        return (
          <button
            className="md:px-6 px-0 py-3 text-lg md:text-2xl hover:text-blue-700"
            key={index}
            onClick={() => item.anchor.scrollIntoView({ behavior: 'smooth' })}
          >
            {item.title}
          </button>
        )
      })}
    </div>
  )
}

export default Navbar
