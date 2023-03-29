import React, { useState, useRef } from 'react'
import Search from './Icons/Search'

export default function SearchForm() {
  const [focus, setFocus] = useState(false)
  const ref = useRef(null)

  const handleSubmit = e => {
    e.preventDefault()
  }

  const handleFocus = () => {
    ref.current.focus()
    setFocus(current => !current)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="items-center gap-2 relative flex flex-col w-max"
    >
      <button
        onClick={handleFocus}
        type="submit"
        className={`${
          focus
            ? '-translate-x-[220px] text-textSecondary top-1'
            : 'translate-x-0 top-0'
        } z-10 absolute right-0 transition-transform duration-200`}
      >
        <Search className={`${focus ? 'w-[24px] h-[24px]' : null}`} />
      </button>
      <input
        ref={ref}
        onBlur={() => setFocus(false)}
        placeholder="Search Movie"
        className={`${
          focus ? 'opacity-100' : 'opacity-0'
        } bg-transparent focus:shadow-search focus:border-[#EB454F] w-[150px] focus:w-[250px] focus:bg-zinc-900 focus:text-white rounded-full focus:pl-8 box-border py-1 outline-none placeholder:text-[#58586a] transition-all duration-200`}
      />
    </form>
  )
}
