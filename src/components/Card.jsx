import React from 'react'

export default function Card() {
  return (
    <div className="w-[300px] h-[420px] bg-tone3 relative flex flex-col justify-between">
      <div></div>
      <img
        src="../../public/nike.png"
        className="-rotate-[33deg] absolute -top-20 -left-5"
      />
      <div className="flex flex-col gap-4 items-center bg-white py-10">
        <h1 className="text-[24px]" style={{ fontFamily: 'MIRAGE' }}>
          Nike Blazer mid 77
        </h1>
        <p className="text-[20px]" style={{ fontFamily: 'MIRAGE' }}>
          2 COLORS
        </p>
        <div className="inline-flex items-center gap-4 text-[24px] font-semibold">
          <h1>$150</h1>
          <h1>$99</h1>
        </div>
      </div>
    </div>
  )
}
