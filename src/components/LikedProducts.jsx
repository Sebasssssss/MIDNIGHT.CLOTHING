import React, { useState } from 'react'
import Heart from './Icons/Heart'

const likedItems = [
  {
    title: 'Nike Blazer Mid 77',
    price: '$99',
    image: 'nike.png',
    id: 1
  },
  {
    title: 'Nike Air force one',
    price: '$70',
    image: 'nike22.png',
    id: 2
  },
  {
    title: 'Nike jordan',
    price: '$150',
    image: 'nike33.png',
    id: 3
  }
]

export default function LikedProducts() {
  const [liked, setLiked] = useState(likedItems.length)
  const [active, setActive] = useState(false)

  return (
    <div className="relative">
      <div onClick={() => setActive(current => !current)}>
        <Heart />
      </div>
      <ul className="absolute -top-1 -right-1">
        <li className="rounded-full bg-white px-1.5 text-sm text-text">
          {liked}
        </li>
      </ul>
      {active ? (
        <div className="absolute top-8 right-4 bg-white shadow-2xl w-[350px] p-4 z-10">
          {likedItems.map(({ title, price, image, id }) => {
            return (
              <div
                key={id}
                className="grid grid-cols-3 gap-2 place-items-center border-b"
              >
                <img src={`../../public/${image}`} className="w-24" />
                <div className="text-text text-left">
                  <h1>{title}</h1>
                  <small>{price}</small>
                </div>
                <button>
                  <svg
                    viewBox="0 0 64 64"
                    strokeWidth="2.5"
                    stroke="#72383D"
                    fill="#72383D"
                    className="w-[32px] h-[32px]"
                  >
                    <path d="M9.06 25c-1.38-7.7 3.72-14.37 11.67-15 7-.55 10.47 7.93 11.17 9.55a.13.13 0 00.25 0c3.25-8.91 9.17-9.29 11.25-9.5 5.6-.6 13.11 3.73 11.6 13.82-2.16 14-23.12 29.81-23.12 29.81S11.79 40.05 9.06 25z"></path>
                  </svg>
                </button>
              </div>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}
