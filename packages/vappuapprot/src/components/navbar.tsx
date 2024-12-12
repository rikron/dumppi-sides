'use client'
import { useEffect, useState } from 'react'
import TicketButton from 'components/TicketButton'

type Props = {
  sections: any
  ticketUrl?: string
  saleStart?: Date
}

const Navbar = ({ sections, ticketUrl, saleStart }: Props) => {
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
  }, [sections])

  return (
    <div className="fixed w-full">
      <div className="bg-white text-black w-full flex flex-row justify-evenly md:justify-center items-center">
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
      {ticketUrl && saleStart && (
        <div className="w-full text-center bg-white text-blue-700 h-14 flex flex-col items-center justify-center">
          <TicketButton url={ticketUrl} saleStart={saleStart} />
        </div>
      )}
    </div>
  )
}

export default Navbar
