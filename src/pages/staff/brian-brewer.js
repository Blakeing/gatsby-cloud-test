import React, { useState } from 'react';
import Brewer from '../../images/staff_brian_brewer.jpg';
import Div100vh from 'react-div-100vh';
import { useMediaQuery } from 'react-responsive';
import SideNav from '../../components/side-nav';
import { Link } from 'gatsby';
import Footer from '../../components/footer';

const BrianBrewer = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  });

  const [isNavOpen, setNavOpen] = useState(false);
  return (
    <>
      <div className="z-0 flex flex-wrap bg-white border-t-8 border-white">
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
        <SideNav isOpen={isNavOpen} />
        <Div100vh
          style={{
            backgroundImage: `url(${Brewer})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: isDesktopOrLaptop ? 'calc(100rvh - 6.5rem)' : '380px'
          }}
          className="w-full md:w-1/4"
        />
        <div
          style={{ backgroundColor: '#77AB3C' }}
          className="flex flex-col items-center justify-center md:w-3/4"
        >
          <div className="w-full px-5 py-6 lg:p-10 ">
            <h1 className="mb-2 text-4xl font-bold leading-none text-white lg:text-6xl">
              Brian Brewer
            </h1>
            <h2 className="text-lg font-bold tracking-wide text-white">
              Art Director-Web
            </h2>
          </div>
          <div style={{ backgroundColor: '#628B33' }} className="p-5 lg:p-10">
            <p className="mb-6 font-light text-white">
              Those who are both visual artists and musicians find that skills
              learned for one often apply to the other. Victor Wooten’s approach
              to music as a language is a good example. The job of a designer is
              not just to make clients look good, but to speak through a visual
              language that helps the customer understand content and
              establishes a feel that is appropriate to the brand. This quote is
              a reminder never to fall in to the category of the designer who
              forgets to achieve this in his work.
            </p>
            <p className="mb-6 font-light text-white">
              Brian began working as a graphic designer on a contract basis with
              Coobo Media in April 2012. His contribution to our creative
              product, including his work on hihowareyou.com, spindletap.com
              alitek.com and many others, has helped shape the firm’s overall
              portfolio. A graduate of Oklahoma Christian University with a
              degree in Graphic Design.
            </p>
          </div>
          <div className="flex items-center justify-center py-10 ">
            <Link to="/about">
              <button className="px-10 py-3 text-sm font-medium tracking-wider text-white uppercase bg-transparent border-2 border-white focus:outline-none">
                Back to About Us Page
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BrianBrewer;
