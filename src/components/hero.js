import React from 'react'
import Img from 'gatsby-image'

export default ({ data }) => (
  <div className="relative bg-black text-white text-center">
    <Img
      style={{ height: '61.8vh', maxHeight: '400px' }}
      alt={data.name}
      fluid={data.heroImage.fluid}
    />
    <div
      style={{
        background: 'rgba(0,0,0,0.7)',
        left: '50%',
        bottom: '0',
        transform: 'translate(-50%,0)',
      }}
      className="absolute py-1"
    >
      <h3 className="m-0 text-4xl">{data.name}</h3>
      <p className="m-0 text-xl font-bold">{data.title}</p>
      <p>{data.shortBio.shortBio}</p>
    </div>
  </div>
)
