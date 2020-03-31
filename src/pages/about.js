import { Link } from 'gatsby'
import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import Footer from '../components/footer'
import SideNav from '../components/side-nav'
import Coobo from '../images/coobo-logo-white.png'
import Mark from '../images/header_bg_mark.jpg'
import Harrison from '../images/staff_abt_blake_harrison.jpg'
import Ingenthron from '../images/staff_abt_blake_ingenthron.jpg'
import Brewer from '../images/staff_abt_brian_brewer.jpg'
import Fox from '../images/staff_abt_justin_fox.jpg'
import Johnson from '../images/staff_abt_lisa_johnson.jpg'
import Phillips from '../images/staff_abt_lisa_phillips.jpg'
import Sullivan from '../images/staff_abt_quinn_sullivan.jpg'
import Chu from '../images/staff_abt_victoria_chu.jpg'
import CooboColor from '../images/coobomedia_logo_color.png'

const About = () => {
  const [isNavOpen, setNavOpen] = useState(false)

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)',
  })
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
      <div
        className="relative flex bg-no-repeat border-t-8 border-white h-184 sm:h-300 "
        style={{
          backgroundImage: `url(${Mark})`,
          backgroundSize: isDesktopOrLaptop ? 'cover' : 'auto 70%',
          backgroundPosition: isDesktopOrLaptop ? '' : 'left 6rem bottom 0',
          backgroundColor: '#7F7F7F',
          boxShadow: '0 3000px rgba(51, 51, 51, 0.3) inset',
        }}
      >
        <Link to="/">
          <img
            style={{ top: '2rem', left: '2rem' }}
            className="absolute top-0 left-0 hidden bg-transparent lg:block "
            src={Coobo}
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
        <SideNav isOpen={isNavOpen} />
        <div style={{ bottom: '25%', left: '5%' }} className="absolute">
          <h2 className="pl-5 text-3xl font-bold text-white lg:pl-16 md:text-5xl">
            About Us
          </h2>
        </div>
      </div>
      <div style={{ backgroundColor: '#2B2B2B' }} className="flex lg:hidden ">
        <Link
          className="py-3 pl-5 pr-6 text-sm font-light tracking-wide text-white "
          to="/web"
        >
          Web
        </Link>
        <Link
          className="py-3 pr-6 text-sm font-light tracking-wide text-white"
          to="/print"
        >
          Print
        </Link>
        <Link
          className="py-3 pr-6 text-sm font-light tracking-wide text-white"
          to="/brand"
        >
          Brand
        </Link>
        <Link
          className="py-3 text-sm font-light tracking-wide text-white "
          to="/marketing"
        >
          Marketing
        </Link>
      </div>
      <div className="flex flex-wrap">
        <div
          style={{ backgroundColor: '#F7F7F7' }}
          className="p-5 md:w-1/2 lg:p-16"
        >
          <p className="pb-6 text-gray-700">
            Coobo Media takes pride in the partnerships we form with all of our
            clients. Our mantra is “Be Thoughtful in Everything You Do.” We
            believe that if you put an extra measure of considered thought into
            every design, plan and interaction, the results will exceed
            expectations.
          </p>
          <p className="pb-6 text-gray-700">
            Our branding, marketing and web design experience spans a wide
            variety of industries. We work with clients in our building, our
            neighborhoods, across Houston, around Texas, the U.S. and even the
            U.K. Our current client list includes consumer brands as well as
            business-to-business marketers. With Coobo Media, you get all of the
            services of a big agency with the personal, principal-level
            attention of a small firm.
          </p>

          <ul className="pb-5">
            <li className="p-2 mb-2 text-gray-700 border-l-4 bg-steel border-orange">
              Energy (oil and gas and oilfield equipment/services)
            </li>
            <li className="p-2 mb-2 text-gray-700 border-l-4 bg-steel border-orange">
              Manufacturing
            </li>
            <li className="p-2 mb-2 text-gray-700 border-l-4 bg-steel border-orange">
              Logistics
            </li>
            <li className="p-2 mb-2 text-gray-700 border-l-4 bg-steel border-orange">
              Construction
            </li>
            <li className="p-2 mb-2 text-gray-700 border-l-4 bg-steel border-orange">
              Architecture
            </li>
            <li className="p-2 mb-2 text-gray-700 border-l-4 bg-steel border-orange">
              Law
            </li>
            <li className="p-2 mb-2 text-gray-700 border-l-4 bg-steel border-orange">
              Health Care
            </li>
            <li className="p-2 mb-2 text-gray-700 border-l-4 bg-steel border-orange">
              Insurance
            </li>
            <li className="p-2 mb-2 text-gray-700 border-l-4 bg-steel border-orange">
              Private Schools
            </li>
            <li className="p-2 mb-2 text-gray-700 border-l-4 bg-steel border-orange">
              Universities
            </li>
            <li className="p-2 mb-2 text-gray-700 border-l-4 bg-steel border-orange">
              Retail
            </li>
            <li className="p-2 mb-2 text-gray-700 border-l-4 bg-steel border-orange">
              Churches
            </li>
            <li className="p-2 mb-2 text-gray-700 border-l-4 bg-steel border-orange">
              Food and Beverage
            </li>
            <li className="p-2 mb-2 text-gray-700 border-l-4 bg-steel border-orange">
              Software
            </li>
            <li className="p-2 mb-2 text-gray-700 border-l-4 bg-steel border-orange">
              Non-Profits
            </li>
            <li className="p-2 mb-2 text-gray-700 border-l-4 bg-steel border-orange">
              Home Builders
            </li>
            <li className="p-2 mb-2 text-gray-700 border-l-4 bg-steel border-orange">
              Interior Design
            </li>
            <li className="p-2 mb-2 text-gray-700 border-l-4 bg-steel border-orange">
              Professional Athletes
            </li>
            <li className="p-2 mb-2 text-gray-700 border-l-4 bg-steel border-orange">
              Book Publishing
            </li>
          </ul>
          <button className="px-10 py-3 text-sm font-semibold tracking-wider text-white uppercase bg-orange">
            Contact Us
          </button>
        </div>
        <div className="w-full md:w-1/2 ">
          <div className="flex flex-wrap">
            <div
              style={{
                backgroundImage: `url(${Harrison})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '400px',
                boxShadow: '0 3000px rgba(51, 51, 51, 0.3) inset',
              }}
              className="relative w-full hover:opacity-75 md:w-1/2 "
              alt="A dog relaxing"
            >
              <span
                style={{ top: '10%', left: '10%' }}
                className="absolute p-2 text-lg font-semibold tracking-wide text-white"
              >
                Blake Harrison
              </span>
              <Link to="/staff/blake-harrison">
                <div
                  style={{ bottom: '10%', left: '10%' }}
                  className="absolute"
                >
                  <div className="inline-block p-2 text-sm font-semibold tracking-wider text-white uppercase ">
                    View Bio
                    <span>
                      <svg
                        aria-hidden="true"
                        data-prefix="far"
                        data-icon="arrow-alt-circle-right"
                        className="inline-block w-10 h-10 pb-1 pl-3"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            <div
              style={{
                backgroundImage: `url(${Phillips})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '400px',
                boxShadow: '0 3000px rgba(51, 51, 51, 0.3) inset',
              }}
              className="relative w-full hover:opacity-75 md:w-1/2 "
              alt="A dog relaxing"
            >
              <span
                style={{ top: '10%', left: '10%' }}
                className="absolute p-2 text-lg font-semibold tracking-wide text-white"
              >
                Lisa Phillips
              </span>
              <Link to="/staff/lisa-phillips">
                <div
                  style={{ bottom: '10%', left: '10%' }}
                  className="absolute"
                >
                  <div className="inline-block p-2 text-sm font-semibold tracking-wider text-white uppercase ">
                    View Bio
                    <span>
                      <svg
                        aria-hidden="true"
                        data-prefix="far"
                        data-icon="arrow-alt-circle-right"
                        className="inline-block w-10 h-10 pb-1 pl-3"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            <div
              style={{
                backgroundImage: `url(${Brewer})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '400px',
                boxShadow: '0 3000px rgba(51, 51, 51, 0.3) inset',
              }}
              className="relative w-full hover:opacity-75 md:w-1/2 "
              alt="A dog relaxing"
            >
              <span
                style={{ top: '10%', left: '10%' }}
                className="absolute p-2 text-lg font-semibold tracking-wide text-white"
              >
                Brian Brewer
              </span>
              <Link to="/staff/brian-brewer">
                <div
                  style={{ bottom: '10%', left: '10%' }}
                  className="absolute"
                >
                  <div className="inline-block p-2 text-sm font-semibold tracking-wider text-white uppercase ">
                    View Bio
                    <span>
                      <svg
                        aria-hidden="true"
                        data-prefix="far"
                        data-icon="arrow-alt-circle-right"
                        className="inline-block w-10 h-10 pb-1 pl-3"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            <div
              style={{
                backgroundImage: `url(${Chu})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '400px',
                boxShadow: '0 3000px rgba(51, 51, 51, 0.3) inset',
              }}
              className="relative w-full hover:opacity-75 md:w-1/2 "
              alt="A dog relaxing"
            >
              <span
                style={{ top: '10%', left: '10%' }}
                className="absolute p-2 text-lg font-semibold tracking-wide text-white"
              >
                Victoria Chu
              </span>
              <Link to="/staff/victoria-chu">
                <div
                  style={{ bottom: '10%', left: '10%' }}
                  className="absolute"
                >
                  <div className="inline-block p-2 text-sm font-semibold tracking-wider text-white uppercase ">
                    View Bio
                    <span>
                      <svg
                        aria-hidden="true"
                        data-prefix="far"
                        data-icon="arrow-alt-circle-right"
                        className="inline-block w-10 h-10 pb-1 pl-3"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            <div
              style={{
                backgroundImage: `url(${Fox})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '400px',
                boxShadow: '0 3000px rgba(51, 51, 51, 0.3) inset',
              }}
              className="relative w-full hover:opacity-75 md:w-1/2 "
              alt="A dog relaxing"
            >
              <span
                style={{ top: '10%', left: '10%' }}
                className="absolute p-2 text-lg font-semibold tracking-wide text-white"
              >
                Justin Fox
              </span>
              <Link to="/staff/justin-fox">
                <div
                  style={{ bottom: '10%', left: '10%' }}
                  className="absolute"
                >
                  <div className="inline-block p-2 text-sm font-semibold tracking-wider text-white uppercase ">
                    View Bio
                    <span>
                      <svg
                        aria-hidden="true"
                        data-prefix="far"
                        data-icon="arrow-alt-circle-right"
                        className="inline-block w-10 h-10 pb-1 pl-3"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            <div
              style={{
                backgroundImage: `url(${Ingenthron})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '400px',
                boxShadow: '0 3000px rgba(51, 51, 51, 0.3) inset',
              }}
              className="relative w-full hover:opacity-75 md:w-1/2 "
              alt="A dog relaxing"
            >
              <span
                style={{ top: '10%', left: '10%' }}
                className="absolute p-2 text-lg font-semibold tracking-wide text-white"
              >
                Blake Ingenthron
              </span>
              <Link to="/">
                <div
                  style={{ bottom: '10%', left: '10%' }}
                  className="absolute"
                >
                  <div className="inline-block p-2 text-sm font-semibold tracking-wider text-white uppercase ">
                    View Bio
                    <span>
                      <svg
                        aria-hidden="true"
                        data-prefix="far"
                        data-icon="arrow-alt-circle-right"
                        className="inline-block w-10 h-10 pb-1 pl-3"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            <div
              style={{
                backgroundImage: `url(${Johnson})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '400px',
                boxShadow: '0 3000px rgba(51, 51, 51, 0.3) inset',
              }}
              className="relative w-full hover:opacity-75 md:w-1/2 "
              alt="A dog relaxing"
            >
              <span
                style={{ top: '10%', left: '10%' }}
                className="absolute p-2 text-lg font-semibold tracking-wide text-white"
              >
                Lisa Johnson
              </span>
              <Link to="/">
                <div
                  style={{ bottom: '10%', left: '10%' }}
                  className="absolute"
                >
                  <div className="inline-block p-2 text-sm font-semibold tracking-wider text-white uppercase ">
                    View Bio
                    <span>
                      <svg
                        aria-hidden="true"
                        data-prefix="far"
                        data-icon="arrow-alt-circle-right"
                        className="inline-block w-10 h-10 pb-1 pl-3"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            <div
              style={{
                backgroundImage: `url(${Sullivan})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '400px',
                boxShadow: '0 3000px rgba(51, 51, 51, 0.3) inset',
              }}
              className="relative w-full hover:opacity-75 md:w-1/2 "
              alt="A dog relaxing"
            >
              <span
                style={{ top: '10%', left: '10%' }}
                className="absolute p-2 text-lg font-semibold tracking-wide text-white"
              >
                Quinn Sullivan
              </span>
              <Link to="/">
                <div
                  style={{ bottom: '10%', left: '10%' }}
                  className="absolute"
                >
                  <div className="inline-block p-2 text-sm font-semibold tracking-wider text-white uppercase ">
                    View Bio
                    <span>
                      <svg
                        aria-hidden="true"
                        data-prefix="far"
                        data-icon="arrow-alt-circle-right"
                        className="inline-block w-10 h-10 pb-1 pl-3"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About
