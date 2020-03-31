import React from 'react'
import { Link } from 'gatsby'

const BottomNav = () => {
  return (
    <div
      style={{ bottom: '0', right: '0' }}
      className="absolute z-10 bg-white border-t-4 border-l-4 border-white lg:border-l-8 lg:border-t-8"
    >
      <Link to="/services/web">
        <button className="px-3 py-2 text-sm font-semibold tracking-wider text-white bg-web hover:bg-gray-900 focus:outline-none lg:text-3xl lg:px-4 ">
          Web
        </button>
      </Link>
      <Link to="/services/print">
        <button className="px-3 py-2 ml-1 text-sm font-semibold tracking-wider text-white bg-print lg:ml-2 hover:bg-gray-900 focus:outline-none lg:text-3xl lg:px-4 ">
          Print
        </button>
      </Link>
      <Link to="/services/brand">
        <button className="px-3 py-2 ml-1 text-sm font-semibold tracking-wider text-white bg-brand lg:ml-2 hover:bg-gray-900 focus:outline-none lg:text-3xl lg:px-4 ">
          Brand
        </button>
      </Link>

      <Link to="/services/marketing">
        <button className="px-3 py-2 ml-1 text-sm font-semibold tracking-wider text-white bg-marketing lg:ml-2 hover:bg-gray-900 focus:outline-none lg:text-3xl lg:px-4 ">
          Marketing
        </button>
      </Link>
    </div>
  )
}

export default BottomNav
