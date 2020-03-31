import FsLightbox from 'fslightbox-react'
import { Link } from 'gatsby'
import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import Footer from '../../components/footer'
import SideNav from '../../components/side-nav'
import Coobo from '../../images/coobo-logo-white.png'
import CooboColor from '../../images/coobomedia_logo_color.png'
import Mark from '../../images/header_bg_mark.jpg'

const images = [
  {
    url: require('../../images/mark-alitek_thumb.jpg'),
    color: 'bg-edge',
    alt: 'hi',
    route: '/',
  },
  {
    url: require('../../images/mark-iarch_thumb.jpg'),
    color: 'bg-hci',
    alt: 'hi',
    route: '/',
  },
  {
    url: require('../../images/first-tire.jpg'),
    color: 'bg-gkh',
    alt: 'work',
    route: '/contact',
  },
  {
    url: require('../../images/mark-auc_thumb.jpg'),
    color: 'bg-holland',
    alt: 'work',
    route: '/contact',
  },
  {
    url: require('../../images/mark-marks-clothiers_thumb.jpg'),
    color: 'bg-hookie',
    alt: 'hi',
    route: '/',
  },
  {
    url: require('../../images/mark-cert-crane-rig-thumb.jpg'),
    color: 'bg-martinez',
    alt: 'hi',
    route: '/',
  },
]

const Marketing = () => {
  const [isNavOpen, setNavOpen] = useState(false)

  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  })

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    })
  }

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
        className="relative flex bg-no-repeat border-t-8 border-white h-184 sm:h-300"
        style={{
          backgroundImage: `url(${Mark})`,

          backgroundSize: isDesktopOrLaptop ? 'cover' : 'auto 70%',
          backgroundPosition: isDesktopOrLaptop ? '' : 'left 0 bottom 0',
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
            Marketing
          </h2>
        </div>

        <ul className="hidden pr-40 lg:w-full lg:flex lg:items-center lg:justify-end">
          <li className="px-3 py-1 text-2xl font-thin text-white border-l-4 border-white bg-dark-steel ">
            Services
          </li>
          <li>
            <Link
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
              className="px-3 py-2 text-2xl font-thin text-white hover:text-orange"
              to="/services/web"
            >
              Web
            </Link>
          </li>
          <li>
            <Link
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
              className="px-3 py-2 text-2xl font-thin text-white hover:text-orange "
              to="/services/print"
            >
              Print
            </Link>
          </li>
          <li>
            <Link
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
              className="px-3 py-2 text-2xl font-thin text-white hover:text-orange "
              to="/services/brand"
            >
              Brand
            </Link>
          </li>
          <li>
            <Link
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
              className="px-3 py-2 text-2xl font-thin text-white hover:text-orange "
              to="/services/marketing"
            >
              Marketing
            </Link>
          </li>
        </ul>
      </div>
      <div style={{ backgroundColor: '#2B2B2B' }} className="flex lg:hidden ">
        <Link
          className="py-3 pl-5 pr-6 text-sm font-light tracking-wide text-white "
          to="/services/web"
        >
          Web
        </Link>
        <Link
          className="py-3 pr-6 text-sm font-light tracking-wide text-white"
          to="/services/print"
        >
          Print
        </Link>
        <Link
          className="py-3 pr-6 text-sm font-light tracking-wide text-white"
          to="/services/brand"
        >
          Brand
        </Link>
        <Link
          className="py-3 text-sm font-light tracking-wide text-white "
          to="/services/marketing"
        >
          Marketing
        </Link>
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
      <div className="flex flex-wrap ">
        <div
          style={{ backgroundColor: '#F7F7F7' }}
          className="p-5 md:w-1/2 lg:p-16"
        >
          <h2 className="pb-6 text-3xl font-bold leading-tight text-gray-900">
            It starts with a plan...
          </h2>
          <p className="pb-6 text-gray-700">
            From the origin of your company to your most recent “win” lies a
            marketing strategy. Coobo Media understands where it lives and how
            to make it shine. When marketing gets lost or put aside, we help you
            refocus.
          </p>
          <p className="pb-6 text-gray-700">
            With the advent of Digital Marketing, companies can now reach
            customers and prospects with precise messaging and targeted offers
            using budgets of all sizes. Now you have the ability to analyze
            results in real-time and to continually optimize your message,
            audience and spending.
          </p>

          <p className="pb-6 text-xl font-bold">
            <q>By failing to prepare, you are preparing to fail.</q>
            <br />- Benjamin Franklin
          </p>
          <ul className="pb-5">
            <li className="p-2 mb-2 text-gray-700 border-l-4 border-orange bg-steel">
              Marketing
            </li>
            <li className="p-2 mb-2 text-gray-700 border-l-4 border-orange bg-steel">
              Digital Marketing
            </li>
            <li className="p-2 mb-2 text-gray-700 border-l-4 border-orange bg-steel">
              Content Planning
            </li>
            <li className="p-2 mb-2 text-gray-700 border-l-4 border-orange bg-steel">
              Pay-Per-Click Advertising (PPC)
            </li>
            <li className="p-2 mb-2 text-gray-700 border-l-4 border-orange bg-steel">
              Email Marketing
            </li>
            <li className="p-2 mb-2 text-gray-700 border-l-4 border-orange bg-steel">
              Blog Content Management
            </li>
            <li className="p-2 mb-2 text-gray-700 border-l-4 border-orange bg-steel">
              Social Media Posts
            </li>
            <li className="p-2 mb-2 text-gray-700 border-l-4 border-orange bg-steel">
              Social Media Advertising
            </li>
            <li className="p-2 mb-2 text-gray-700 border-l-4 border-orange bg-steel">
              Search Engine Optimization (SEO)
            </li>
            <li className="p-2 mb-2 text-gray-700 border-l-4 border-orange bg-steel">
              Public Relations
            </li>
            <li className="p-2 mb-2 text-gray-700 border-l-4 border-orange bg-steel">
              Print Advertising
            </li>
            <li className="p-2 mb-2 text-gray-700 border-l-4 border-orange bg-steel">
              Video
            </li>
          </ul>
          <button className="px-10 py-3 text-sm font-semibold tracking-wider text-white uppercase bg-orange">
            Contact Us
          </button>
        </div>
        <div style={{ backgroundColor: '#2e2e2e' }} className=" md:w-1/2">
          <div className="flex flex-col justify-between ">
            <div className="flex flex-wrap">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative w-full h-auto sm:max-w-1/2 xl:max-w-1/3"
                  onClick={() => openLightboxOnSlide(index + 1)}
                >
                  <img
                    className="block w-full h-auto"
                    alt={image.alt}
                    src={image.url}
                  />

                  <div
                    className={`${image.color} cursor-pointer absolute hover:opacity-75 inset-0 h-full -w-full opacity-0`}
                  >
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
                </div>
              ))}
              <FsLightbox
                toggler={lightboxController.toggler}
                sources={[
                  require('../../images/mark-alitek_thumb.jpg'),
                  require('../../images/mark-iarch_thumb.jpg'),
                  require('../../images/first-tire.jpg'),
                  require('../../images/mark-auc_thumb.jpg'),
                  require('../../images/mark-marks-clothiers_thumb.jpg'),
                  require('../../images/mark-cert-crane-rig-thumb.jpg'),
                ]}
                slide={lightboxController.slide}
              />
            </div>
            <div className="py-10 mx-auto">
              <button className="px-10 py-3 text-sm font-semibold tracking-wider text-white uppercase bg-orange">
                View More
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Marketing
