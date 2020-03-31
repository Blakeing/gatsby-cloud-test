import React from 'react'
import { animated } from 'react-spring'
import { Link } from 'gatsby'

// eslint-disable-next-line react/prop-types
const Nav = ({ style }) => {
  return (
    <animated.div className="fixed inset-0 z-20 px-5 py-24" style={style}>
      <nav>
        <div>
          <Link
            className="block text-3xl font-bold tracking-wide text-left text-white hover:text-gray-400"
            to="/"
          >
            Home
          </Link>
          <Link
            className="block text-3xl font-bold tracking-wide text-left text-white hover:text-gray-400"
            to="/about"
          >
            About Us
          </Link>
          <Link
            className="block text-3xl font-bold tracking-wide text-left text-white hover:text-gray-400"
            to="/services/web"
          >
            Services
          </Link>
          <Link
            className="block text-3xl font-bold tracking-wide text-left text-white hover:text-gray-400"
            to="/our-work"
          >
            Our Work
          </Link>
          <Link
            className="block text-3xl font-bold tracking-wide text-left text-white hover:text-gray-400"
            to="/contact"
          >
            Contact Us
          </Link>
        </div>
        <div className="mt-10">
          <h3 className="text-2xl font-bold tracking-wide text-white">
            Contact Information
          </h3>
          <p className="font-thin text-white">281.206.0022</p>
          <p className="font-thin text-white">info@coobomedia.com</p>
          <p className="font-thin text-white">
            9525 Katy Freeway, Suite 230 Houston, Texas 77024
          </p>
        </div>
      </nav>
    </animated.div>
  )
}

export default Nav
