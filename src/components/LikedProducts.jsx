import React, { useState } from 'react'
import Heart from './Icons/Heart'

export default function LikedProducts() {
  const [active, setActive] = useState(false)

  return (
    <div className="relative">
      <Heart />
      <ul className="absolute top-1 right-1">
        <li>1</li>
      </ul>
    </div>
  )
}
