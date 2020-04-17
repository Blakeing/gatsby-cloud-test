import React, { useState } from 'react'
import Testimonials from '../components/testimonials'
import CooboColor from '../images/coobomedia_logo_color.png'
import { Link } from 'gatsby'
import SideNav from '../components/side-nav'

const Test = () => {
  const [isNavOpen, setNavOpen] = useState(false)
  return (
    <>
      <header
        style={{ marginBottom: '.25rem' }}
        className="fixed z-40 w-full bg-white shadow lg:hidden"
      >
        <div className="flex flex-wrap items-center justify-between p-4 mx-auto ">
          <Link className="flex items-center text-white no-underline" to="/">
            <img className="h-6" src={CooboColor} />
          </Link>
          <button
            className="z-40 flex items-center block px-1 py-1 text-white rounded focus:outline-none lg:hidden"
            onClick={() => setNavOpen(!isNavOpen)}
          >
            <svg
              className="w-6 h-6 text-gray-500 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </header>
      <SideNav isOpen={isNavOpen} />
      <div className="mt-6">
        <Testimonials />
      </div>
    </>
  )
}

export default Test
