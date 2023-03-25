import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Bag from './Icons/Bag'
import Heart from './Icons/Heart'
import Profile from './Icons/Profile'
import Search from './Icons/Search'

export default function Navbar() {
  const [navbar, setNavbar] = useState(false)

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
    window.addEventListener('scroll', changeBackground)
  })

  return (
    <header
      className={`${
        navbar
          ? 'bg-secondary/95 backdrop-blur-lg border-b border-tone4/50'
          : 'bg-none'
      } fixed w-full top-0 z-10 transition-colors duration-500`}
    >
      <nav className="w-full inline-flex items-center justify-between px-[64px] py-[32px]">
        <Link
          to="/"
          className={`${
            navbar ? 'text-textSecondary' : 'text-text'
          } text-[32px] transition-colors duration-500`}
          style={{ fontFamily: 'MIRAGE' }}
        >
          MIDNIGHT
        </Link>
        <ul
          className={`${
            navbar ? 'text-textSecondary' : 'text-text'
          } inline-flex items-center gap-4 transition-colors duration-500`}
        >
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
