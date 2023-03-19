import React from 'react'
import Bag from './Icons/Bag'
import Heart from './Icons/Heart'
import Profile from './Icons/Profile'
import Search from './Icons/Search'

export default function Navbar() {
  return (
    <header className="fixed w-full top-0 z-10">
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
