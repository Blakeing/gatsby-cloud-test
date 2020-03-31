import React, { useState } from 'react';
import Chu from '../../images/staff_victoria_chu.jpg';
import Div100vh from 'react-div-100vh';
import { useMediaQuery } from 'react-responsive';
import SideNav from '../../components/side-nav';
import { Link } from 'gatsby';
import Footer from '../../components/footer';

const VictoriaChu = () => {
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
            backgroundImage: `url(${Chu})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: isDesktopOrLaptop ? 'calc(100rvh - 6.5rem)' : '380px'
          }}
          className="w-full md:w-1/4"
        />
        <div
          style={{ backgroundColor: '#C94646' }}
          className="flex flex-col items-center justify-center md:w-3/4"
        >
          <div className="w-full px-5 py-6 lg:p-10 ">
            <h1 className="mb-2 text-4xl font-bold leading-none text-white lg:text-6xl">
              Victoria Chu
            </h1>
            <h2 className="text-lg font-bold tracking-wide text-white">
              Web Designer / Developer
            </h2>
          </div>
          <div style={{ backgroundColor: '#A43A3A' }} className="p-5 lg:p-10">
            <p className="mb-6 font-light text-white">
              Victoria joined Coobo in 2015, bringing with her considerable web
              design talents. Originally from Taiwan, she attended school in the
              states and graduated from the University of Houston with a
              Bachelor of Arts in Art Education. After graduation, Victoria
              spent 1½ years working with middle school computer and art
              students at the Harmony School of Science. But the self-proclaimed
              geek found her true passion during an internship at a web design
              startup. Victoria, who also answers to, Vickie, was a bit of
              tomboy as a child and now she channels her athletic tendencies
              into outdoor activities and cheering for our Houston Astros.
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

export default VictoriaChu;
