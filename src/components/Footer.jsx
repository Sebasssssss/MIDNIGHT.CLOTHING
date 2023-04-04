import React from 'react'
import Email from './Icons/Email'
import Facebook from './Icons/Facebook'
import Instagram from './Icons/Instagram'
import Location from './Icons/Location'
import Phone from './Icons/Phone'
import Twitter from './Icons/Twitter'

export default function Footer() {
  return (
    <footer className="w-full bg-secondary py-8 px-16 mt-24">
      <div className="w-full border-b border-tone4 pb-4">
        <div className="inline-flex items-center justify-between w-full">
          <ul className="inline-flex items-center text-textSecondary gap-8">
            <li>
              <Facebook />
            </li>
            <li>
              <Twitter />
            </li>
            <li>
              <Instagram />
            </li>
          </ul>
          <h1
            className="text-[48px] text-textSecondary"
            style={{ fontFamily: 'MIRAGE' }}
          >
            MIDNIGHT
          </h1>
          <div className="invisible">PAYMENT METHODS</div>
        </div>
      </div>
      <div className="inline-flex items-center gap-32 py-8 w-full justify-center text-textSecondary">
        <li className="grid place-items-center">
          <Email />
          <h1 className="text-[32px]" style={{ fontFamily: 'MIRAGE' }}>
            Mail
          </h1>
          <p className="text-[20px]" style={{ fontFamily: 'MIRAGE' }}>
            examplemail@gmail.com
          </p>
        </li>
        <li className="grid place-items-center">
          <Phone />
          <h1 className="text-[32px]" style={{ fontFamily: 'MIRAGE' }}>
            Number
          </h1>
          <p className="text-[20px]" style={{ fontFamily: 'MIRAGE' }}>
            +94 346 912
          </p>
        </li>
        <li className="grid place-items-center">
          <Location />
          <h1 className="text-[32px]" style={{ fontFamily: 'MIRAGE' }}>
            Location
          </h1>
          <p className="text-[20px]" style={{ fontFamily: 'MIRAGE' }}>
            Av. 85 de Mar 1220
          </p>
        </li>
      </div>
    </footer>
  )
}
