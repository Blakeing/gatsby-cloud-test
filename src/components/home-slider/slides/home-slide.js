import React from 'react'
import Tilt from '../../../images/tilt_houston.jpg'
import { animated, useSpring, config } from 'react-spring'
import Typical from 'react-typical'

import { useMediaQuery } from 'react-responsive'

const steps = [
  '',
  3000,
  'Search Engine Optimization',
  3000,
  'Brand Development',
  3000,
  'Social Media Marketing',
  3000,
  'Graphic Design',
  3000,
]

const HomeSlide = () => {
  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1000,
    config: config.molasses,
  })

  const focus = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 3000,
    config: config.molasses,
  })

  const type = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 5000,
    config: config.molasses,
  })

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)',
  })

  return (
    <div
      style={{
        backgroundImage: `url(${Tilt})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100%',
        boxShadow: '0 3000px rgba(51, 51, 51, 0.3) inset',
      }}
    >
      <div className="flex h-full lg:items-center lg:justify-center">
        <div className="inline-block w-full px-6 mt-40 text-left lg:w-auto lg:mt-0 lg:px-0">
          <animated.h1
            style={{
              ...fade,
            }}
            className="text-3xl font-bold tracking-wide text-white sm:text-5xl md:text-6xl lg:text-7xl lg:font-extrabold"
          >
            A Creative Agency
          </animated.h1>
          <span>
            <svg
              className="w-8 h-8 -mb-6 fill-current text-orange"
              viewBox="0 0 45 44"
            >
              <path d="M0 22v22h9V9h36V0H0v22z" />
            </svg>
          </span>
          <animated.span
            style={focus}
            className="pl-4 text-xl italic font-thin text-white lg:text-4xl"
          >
            Focused on{''}
          </animated.span>
          {isDesktopOrLaptop ? '' : <br />}
          <animated.span style={type}>
            <Typical
              wrapper="span"
              steps={steps}
              loop={Infinity}
              className={'pl-4 text-white text-xl lg:text-4xl italic font-thin'}
            />
          </animated.span>
        </div>
      </div>
    </div>
  )
}

export default HomeSlide
