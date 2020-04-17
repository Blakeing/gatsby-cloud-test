import React, { useState } from 'react'
import BottomNav from '../components/bottom-nav'
import Div100vh from 'react-div-100vh'
import Slider from '../components/home-slider/slider'
import CooboColor from '../images/coobomedia_logo_color.png'
import { Link } from 'gatsby'
import SideNav from '../components/side-nav'
import SocialNav from '../components/social-nav'
import Footer from '../components/footer'
import Testimonials from '../components/testimonials'
import ClientsSlider from '../components/clients-slider'
import HCI from '../images/web_hci.jpg'
import GKH from '../images/brand_gkh-firm.jpg'

const Index = () => {
  const [isNavOpen, setNavOpen] = useState(false)

  return (
    <div className="z-0 ">
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
      <Div100vh className="relative z-10 h-screen bg-gray-500 border-8 border-white">
        <Slider />
        <SideNav isOpen={isNavOpen} />
        <SocialNav />
        <BottomNav />
        <div className="fixed top-0 right-0 z-30 hidden lg:block ">
          <button
            style={{ backgroundColor: '#EC5226' }}
            className="px-3 py-2 text-white border-b-4 border-l-4 border-white focus:outline-none lg:border-l-8 lg:border-b-8"
            onClick={() => setNavOpen(!isNavOpen)}
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
      </Div100vh>
      <div style={{ backgroundColor: '#F6F6F6' }} className="flex flex-wrap ">
        <div className="p-5 mx-auto md:w-1/2 lg:px-20 xl:py-16">
          <h2 className="text-2xl font-bold tracking-wide text-gray-800 lg:text-5xl">
            Transforming Ideas
          </h2>
          <p className="text-gray-700">
            Whether you’re launching a new business or want to modernize an
            established brand, the team at Coobo Media can help bring your ideas
            to life. By listening and understanding your goals, Coobo Media can
            help you develop a strategy that blends the appropriate design,
            technology and user experience into successful outcomes.
          </p>
          <Link to="/about">
            <button
              style={{ backgroundColor: 'rgb(236, 82, 38)' }}
              className="px-12 py-3 mt-4 mr-2 text-xs font-bold tracking-widest text-white uppercase bg-red-500 hover:bg-gray-700 "
            >
              Our Team
            </button>
          </Link>
          <Link to="/contact">
            <button
              style={{ backgroundColor: 'rgb(236, 82, 38)' }}
              className="px-12 py-3 mt-4 text-xs font-bold tracking-widest text-white uppercase bg-red-500 hover:bg-gray-700 "
            >
              Contact Us
            </button>
          </Link>
        </div>
        <div className="p-5 mx-auto md:w-1/2 lg:px-16 xl:py-16">
          <p className="text-2xl font-bold tracking-wide text-gray-800 lg:text-3xl">
            Recent Projects
          </p>
          <div className="flex flex-wrap lg:flex-no-wrap">
            <div className="relative w-full h-auto mt-2 md:mr-2 sm:max-w-1/2 ">
              <img className="block w-full h-auto" src={GKH} />
              <Link to="/services/brand">
                <div className="absolute inset-0 h-full opacity-0 cursor-pointer bg-gkh hover:opacity-75 -w-full">
                  <div
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                    className="absolute text-center text-white"
                  >
                    <svg
                      aria-hidden="true"
                      data-prefix="fas"
                      data-icon="plus-circle"
                      className="w-10 h-10 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
            <div className="relative w-full h-auto mt-2 md:mr-2 sm:max-w-1/2 ">
              <img className="block w-full h-auto" src={HCI} />
              <Link to="/services/web">
                <div className="absolute inset-0 h-full opacity-0 cursor-pointer bg-hci hover:opacity-75 -w-full">
                  <div
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                    className="absolute text-center text-white"
                  >
                    <svg
                      aria-hidden="true"
                      data-prefix="fas"
                      data-icon="plus-circle"
                      className="w-10 h-10 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Index
