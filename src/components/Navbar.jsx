import React, { useState, useEffect } from 'react'
import Bag from './Icons/Bag'
import Heart from './Icons/Heart'
import Profile from './Icons/Profile'
import Search from './Icons/Search'

export default function Navbar() {
  const [navbar, setNavbar] = useState(false)

  //navbar scroll changeBackground function
  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener('scroll', changeBackground)
  })

  return (
    <header
      className={`${
        navbar ? 'bg-tone1' : 'bg-none'
      } fixed w-full top-0 z-10 transition-colors duration-500`}
    >
      <nav className="w-full inline-flex items-center justify-between px-[64px] py-[32px]">
        <div className="text-[32px] text-text" style={{ fontFamily: 'MIRAGE' }}>
          MIDNIGHT
        </div>
        <ul className="inline-flex items-center gap-4 text-text">
          <button>
            <Search />
          </button>
          <button>
            <Profile />
          </button>
          <button>
            <Heart />
          </button>
          <button>
            <Bag />
          </button>
        </ul>
      </nav>
    </header>
  )
}
