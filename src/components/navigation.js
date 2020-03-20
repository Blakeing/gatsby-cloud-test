import React from 'react'
import { Link } from 'gatsby'

export default () => (
  <nav role="navigation">
    <ul
      style={{ height: '20vh', maxHeight: '100px' }}
      className="flex justify-center list-none p-0 m-0 text-xl"
    >
      <li className="inline-flex items-center mx-2 my-0">
        <Link to="/">Home</Link>
      </li>
      <li className="inline-flex items-center mx-2 my-0">
        <Link to="/blog/">Blog</Link>
      </li>
    </ul>
  </nav>
)
