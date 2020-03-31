/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import City from '../images/page_title_bg_city2.jpg'
import SEO from '../components/seo'
import Coobo from '../images/coobo_3d_houston_2.png'
import CooboLogo from '../images/coobo-logo-white.png'
import SideNav from '../components/side-nav'
import { Link } from 'gatsby'
import Footer from '../components/footer'
import GoogleMapReact from 'google-map-react'
import { useMediaQuery } from 'react-responsive'
import CooboColor from '../images/coobomedia_logo_color.png'
import MapStyles from '../components/map-styles'

const Marker = () => (
  <svg
    className="w-10 h-10 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 145 149.03"
  >
    <path
      d="M96.55 100.2c-4.5 3.29-10.69 5.53-16.78 5.53-7.8 0-14.24-2.69-19.33-8.03-5.1-5.36-7.64-12.35-7.64-21 0-8.39 2.57-15.29 7.73-20.68 5.15-5.38 11.6-8.08 19.34-8.08 6.1 0 11.35 1.59 15.77 4.76 3.23-6.72 7.71-13.69 14.21-18.68-1.62-1.17-2.19-1.48-3.97-2.5-8.24-4.69-17.06-7.03-26.43-7.03C66.5 24.49 55.03 29 45.05 38 33.67 48.35 27.98 61.28 27.98 76.79c0 14.48 5.04 26.79 15.11 36.92 10.07 10.13 22.23 15.19 36.46 15.19 9.67 0 18.52-2.29 26.56-6.88 1.71-.98 2.4-1.39 3.95-2.52-5.39-4.49-10.8-13.16-13.51-19.3z"
      fill="#ffffff"
    />
    <path
      d="M65.28 63.03h7.99l6.56 21.99 6.56-21.99h7.94v28.93H89.4V69.13h-.58l-6.48 21.66h-5.02L70.8 69.13h-.63v22.83h-4.89V63.03z"
      fill="#ffffff"
    />
  </svg>
)

const ContactPage = () => {
  const [isNavOpen, setNavOpen] = useState(false)

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)',
  })

  return (
    <>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
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

      <div
        className="relative flex h-32 bg-center bg-cover border-t-8 border-white md:h-48 xl:h-64"
        style={{
          backgroundImage: `url(${City})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: isDesktopOrLaptop ? '300px' : '200px',
        }}
      >
        <Link to="/">
          <img
            style={{ top: '2rem', left: '2rem' }}
            className="absolute top-0 left-0 hidden bg-transparent lg:block "
            src={CooboLogo}
          />
        </Link>
        <div className="fixed top-0 right-0 z-30 hidden lg:block ">
          <button
            style={{ backgroundColor: '#EC5226' }}
            onClick={() => setNavOpen(!isNavOpen)}
            className="px-3 py-2 text-white border-b-4 border-l-4 border-white focus:outline-none lg:border-l-8 lg:border-b-8"
          >
            <svg
              className="w-10 h-10 text-white fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div style={{ bottom: '25%', left: '5%' }} className="absolute">
          <h2 className="pl-5 text-3xl font-bold text-white lg:pl-16 md:text-5xl">
            Contact Us
          </h2>
        </div>
      </div>
      <SideNav isOpen={isNavOpen} />
      <div className="flex flex-wrap">
        <div
          style={{ height: isDesktopOrLaptop ? '500px' : '300px' }}
          className="w-full bg-gray-500 md:w-1/2"
        >
          <GoogleMapReact
            bootstrapURLKeys={{
              key: 'AIzaSyA9gI4BBQUBKM2i8Tm_aLp9LOjhX19kKAk',
            }}
            defaultCenter={{ lat: 29.78269, lng: -95.527908 }}
            defaultZoom={11}
            options={MapStyles}
          >
            <Marker />
          </GoogleMapReact>
        </div>
        <div
          style={{ backgroundColor: '#3a3a3a' }}
          className="w-full p-10 lg:py-16 lg:px-20 md:w-1/2"
        >
          <h1 className="text-3xl font-bold text-white ">Coobo Media</h1>
          <h2 className="text-lg italic font-thin text-white">
            Located Near Memorial City Mall
          </h2>
          <p className="mt-2 text-white ">
            9525 Katy Freeway, Suite 230
            <br /> Houston, Texas 77024
          </p>
          <div className="mt-6">
            <svg
              aria-hidden="true"
              data-prefix="fas"
              data-icon="mobile-alt"
              className="inline-block w-6 h-6 text-white fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"
              />
            </svg>

            <span className="ml-2 font-light text-white">281.206.0022</span>
          </div>

          <div className="mt-6">
            <span>
              <svg
                aria-hidden="true"
                data-prefix="fas"
                data-icon="mobile-alt"
                className="inline-block w-6 h-6 text-white fill-current "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"
                />
              </svg>
            </span>
            <span className="inline-block ml-2 text-white ">
              info@coobomedia.com
            </span>
          </div>
          <button
            style={{ backgroundColor: '#ea542b' }}
            className="px-8 py-3 mt-8 text-sm font-semibold tracking-widest text-white uppercase"
          >
            Send us a message
          </button>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${Coobo})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundColor: '#252525',
        }}
        className="flex flex-wrap"
      >
        <div className="hidden lg:block lg:w-1/2"></div>
        <div className="w-full lg:w-1/2">
          <div
            style={{ background: 'rgba(58,58,58, .8)' }}
            className="max-w-2xl p-10 lg:py-16 lg:px-20 "
          >
            <form className="max-w-lg">
              <h1 className="mb-2 text-3xl font-bold text-white">Contact Us</h1>

              <label
                className="block mb-2 font-light text-white text-ms"
                htmlFor="first-name"
              >
                Your Name (required)
              </label>

              <input
                style={{ border: '1px solid white ' }}
                className="w-full px-3 py-4 mb-6 text-white bg-transparent outline-none"
                id="first-name"
                type="text"
              />

              <label
                className="block mb-2 font-light text-white text-ms"
                htmlFor="last-name"
              >
                Your Email (required)
              </label>

              <input
                style={{ border: '1px solid white ' }}
                className="w-full px-3 py-4 mb-6 text-white bg-transparent outline-none"
                id="last-name"
                type="text"
              />

              <label
                className="block mb-2 font-light text-white text-ms"
                htmlFor="message"
              >
                Your Message
              </label>

              <textarea
                style={{ border: '1px solid white ' }}
                className="w-full px-3 py-4 mb-6 text-white bg-transparent outline-none"
                id="message"
                rows="8"
              />
              <button
                style={{ backgroundColor: '#ea542b' }}
                className="px-8 py-3 mt-8 text-sm font-semibold tracking-widest text-white uppercase"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ContactPage
