import React, { useRef, useState } from 'react'
import Search from './Icons/Search'

export default function SearchForm() {
  const [active, setActive] = useState(false)
  const ref = useRef(null)

  const handleSubmit = e => {
    e.preventDefault()
  }

  const handleClick = e => {
    setActive(current => !current)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`${
        active ? 'bg-secondary text-textSecondary' : 'bg-transparent'
      } inline-flex items-center gap-2 rounded transition-colors duration-300 px-2 py-1 hover:bg-tone2 hover:text-text`}
    >
      <button
        onClick={handleClick}
        className={`${
          active ? 'translate-x-0' : 'translate-x-[200px]'
        } transition-transform duration-300`}
        type="submit"
      >
        <Search />
      </button>
      <input
        placeholder="Search Products"
        className={`${
          active
            ? 'visible opacity-100 duration-500'
            : 'invisible opacity-0 duration-100'
        } bg-transparent outline-none transition-all`}
      />
    </form>
  )
}
