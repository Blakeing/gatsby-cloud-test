import { Link, graphql } from 'gatsby'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Img from 'gatsby-image'

const Web = ({ data }) => {
  const items = data.allContentfulPortfolioItem.edges

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
          <button className="z-40 flex items-center block px-1 py-1 text-white rounded focus:outline-none lg:hidden">
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
          backgroundImage: 'https://source.unsplash.com/1920x300',
          backgroundSize: isDesktopOrLaptop ? 'cover' : 'auto 80%',
          backgroundPosition: isDesktopOrLaptop ? '' : 'left 3rem bottom -1rem',
          backgroundColor: '#7F7F7F',
          boxShadow: '0 3000px rgba(51, 51, 51, 0.3) inset',
        }}
      >
        <div className="fixed top-0 right-0 z-30 hidden lg:block ">
          <button
            style={{ backgroundColor: '#EC5226' }}
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
            Web
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
              to="/web"
            >
              Web
            </Link>
          </li>
          <li>
            <Link
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
              className="px-3 py-2 text-2xl font-thin text-white hover:text-orange "
              to="/print"
            >
              Print
            </Link>
          </li>
          <li>
            <Link
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
              className="px-3 py-2 text-2xl font-thin text-white hover:text-orange "
              to="/brand"
            >
              Brand
            </Link>
          </li>
          <li>
            <Link
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
              className="px-3 py-2 text-2xl font-thin text-white hover:text-orange "
              to="/marketing"
            >
              Marketing
            </Link>
          </li>
        </ul>
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
          <h2 className="pb-6 text-3xl font-bold leading-tight text-gray-900">
            The Perfect Sales Pitch, Every Time
          </h2>
          <p className="pb-6 text-gray-700">
            Imagine training a sales person to present your company in the most
            perfect way. They would consistently deliver a succinct, yet
            strategic message that fully explains the benefits and features of
            your product/service; PLUS they would be available, on demand, 24
            hours a day, 365 days a year to answer questions or to close the
            deal. This… should be your website.
          </p>
          <p className="pb-6 text-gray-700">
            Our web designers are skilled in UX, UI with a range of experiences
            in HTML, CSS, PHP, Javascript, WordPress, AfterEffects, Premiere and
            the entire Adobe Creative Suite.
          </p>
          <p className="pb-6 text-xl font-bold">
            <q>Websites should be the perfect sales pitch, every time.</q>
            <br />
            -Blake Harrison
          </p>
          <ul className="pb-6">
            <li className="p-2 mb-2 text-gray-900 border-l-4 border-orange bg-steel">
              Responsive Website Design
            </li>
            <li className="p-2 mb-2 text-gray-900 border-l-4 border-orange bg-steel">
              WordPress Development
            </li>
            <li className="p-2 mb-2 text-gray-900 border-l-4 border-orange bg-steel">
              Website Hosting
            </li>
            <li className="p-2 mb-2 text-gray-900 border-l-4 border-orange bg-steel">
              E-commerce
            </li>
            <li className="p-2 mb-2 text-gray-900 border-l-4 border-orange bg-steel">
              Blogs
            </li>
            <li className="p-2 mb-2 text-gray-900 border-l-4 border-orange bg-steel">
              Web Applications
            </li>
            <li className="p-2 text-gray-700 border-l-4 border-orange bg-steel">
              Explainer Videos
            </li>
          </ul>
          <button className="px-10 py-3 text-sm font-semibold tracking-wider text-white uppercase bg-orange">
            Contact Us
          </button>
        </div>
        <div style={{ backgroundColor: '#2e2e2e' }} className=" md:w-1/2">
          <div className="flex flex-col justify-between ">
            <div className="flex flex-wrap">
              {items.map(({ node, index }) => (
                <div
                  key={index}
                  className="relative w-full h-auto sm:max-w-1/2 xl:max-w-1/3"
                >
                  <Img fluid={node.image.fluid} />

                  <div
                    style={{ backgroundColor: `${node.overlayColor}` }}
                    className="absolute inset-0 h-full opacity-0 cursor-pointer hover:opacity-75 -w-full"
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
            </div>

            <div className="py-10 mx-auto">
              <button className="px-10 py-3 text-sm font-semibold tracking-wider text-white uppercase bg-orange">
                View More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Web

export const pageQuery = graphql`
  query CooboItemQuery {
    allContentfulPortfolioItem {
      edges {
        node {
          overlayColor
          image {
            fluid(maxWidth: 1000, maxHeight: 671, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
