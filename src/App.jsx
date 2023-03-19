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
      <Footer />
    </>
  )
}

export default App
