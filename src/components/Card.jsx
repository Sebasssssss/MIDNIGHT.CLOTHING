import React from 'react'
import Plus from './Icons/Plus'

export default function Card({ img, sale = false }) {
  return (
    <div className="w-[300px] h-[420px] bg-tone3 relative flex flex-col justify-between">
      <div></div>
      {sale && (
        <div
          className="bg-brand uppercase px-4 py-1 w-max text-textSecondary absolute top-5 left-0 text-[20px]"
          style={{ fontFamily: 'MIRAGE' }}
        >
          sale
        </div>
      )}
      <img
        src={`../../public/${img}`}
        className="-rotate-[33deg] absolute -top-20 -left-5"
      />
      <div className="w-12 h-12 rounded-full bg-white grid place-items-center absolute top-[44%] left-[40%]">
        <button className="w-max h-max bg-brand rounded-full text-textSecondary p-1 hover:scale-125 active:scale-95 transition-transform duration-200">
          <Plus />
        </button>
      </div>
      <div className="flex flex-col gap-4 items-center bg-white py-10">
        <h1 className="text-[24px]" style={{ fontFamily: 'MIRAGE' }}>
          Nike Blazer mid 77
        </h1>
        <p className="text-[20px]" style={{ fontFamily: 'MIRAGE' }}>
          2 COLORS
        </p>
        <div className="inline-flex items-center gap-4 text-[24px] font-semibold">
          <h1 className="line-through text-text opacity-50">$150</h1>
          <h1>$99</h1>
        </div>
      </div>
    </div>
  )
}
