import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <div className="hero-section">
        <div className="uppercase px-20" style={{ fontFamily: 'MIRAGE' }}>
          <h1 className="uppercase text-[352px] text-tone4 opacity-70">
            midnight
          </h1>
          <div className="z-10">
            <h1 className="text-[160px] text-text">clothing</h1>
            <button
              className="uppercase px-12 py-4 bg-brand text-[32px] text-textSecondary"
              style={{ fontFamily: 'MIRAGE-THIN' }}
            >
              shop now
            </button>
          </div>
          <img
            src="../public/hero2.png"
            className="object-cover absolute bottom-0 right-[64px] h-auto"
          />
        </div>
      </div>
      <div className="w-full px-32 py-16 flex items-center gap-5">
        <div className="w-[400px] h-[550px] relative">
          <div
            className="bg-brand uppercase px-4 py-1 w-max text-textSecondary absolute top-5 left-0 text-[20px]"
            style={{ fontFamily: 'MIRAGE' }}
          >
            sale
          </div>
          <div
            className="bg-secondary uppercase px-4 py-1 w-max text-textSecondary absolute bottom-5 left-0 text-[20px]"
            style={{ fontFamily: 'MIRAGE' }}
          >
            $1999
          </div>
          <img src="../public/card.png" />
        </div>
        <div className="w-[400px] h-[550px]">
          <img src="../public/card2.jpg" />
        </div>
        <div className="w-[400px] h-[550px]">
          <img src="../public/card.png" />
        </div>
        <div className="w-[400px] h-[550px] relative">
          <div
            className="bg-brand uppercase px-4 py-1 w-max text-textSecondary absolute top-5 left-0 text-[20px]"
            style={{ fontFamily: 'MIRAGE' }}
          >
            sale
          </div>
          <div
            className="bg-secondary uppercase px-4 py-1 w-max text-textSecondary absolute bottom-5 left-0 text-[20px]"
            style={{ fontFamily: 'MIRAGE' }}
          >
            $1999
          </div>
          <img src="../public/card2.jpg" />
        </div>
      </div>
      <div className="w-full px-32 py-36 grid grid-cols-2 gap-16">
        <div
          className="bg-tone2 text-[48px] uppercase relative h-[383px]"
          style={{ fontFamily: 'MIRAGE' }}
        >
          <div className="w-max p-16 text-left">
            <h1>men&apos;s</h1>
            <h1>clothes</h1>
            <button className="text-[24px] bg-brand uppercase px-5 py-3 text-textSecondary">
              see more -->
            </button>
          </div>
          <div className="absolute -top-[120px] -left-12 w-[400px] h-auto">
            <img src="../public/3dcard1.png" className="object-cover" />
          </div>
        </div>
        <div
          className="bg-tone2 text-[48px] uppercase relative h-[383px]"
          style={{ fontFamily: 'MIRAGE' }}
        >
          <div className="w-max text-left p-16">
            <h1>women&apos;s</h1>
            <h1>clothes</h1>
            <button className="text-[24px] bg-brand uppercase px-5 py-3 text-textSecondary">
              see more -->
            </button>
          </div>
          <div className="absolute -top-[170px] -right-12">
            <img src="../public/3dcard.png" className="object-cover" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
