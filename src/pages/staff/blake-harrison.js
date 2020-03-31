import React, { useState } from 'react';
import Harrison from '../../images/staff_blake_harrison.jpg';
import Div100vh from 'react-div-100vh';
import { useMediaQuery } from 'react-responsive';
import SideNav from '../../components/side-nav';
import { Link } from 'gatsby';
import Footer from '../../components/footer';

const Blake = () => {
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
            backgroundImage: `url(${Harrison})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: isDesktopOrLaptop ? 'calc(100rvh - 6.5rem)' : '380px'
          }}
          className="w-full md:w-1/4"
        />
        <div
          style={{ backgroundColor: '#41b2bf' }}
          className="flex flex-col items-center justify-center md:w-3/4"
        >
          <div className="w-full px-5 py-6 lg:p-10 ">
            <h1 className="mb-2 text-4xl font-bold leading-none text-white lg:text-6xl">
              Blake Harrison
            </h1>
            <h2 className="text-lg font-bold tracking-wide text-white">
              Creative Director / Managing Partner
            </h2>
          </div>
          <div style={{ backgroundColor: '#3795A0' }} className="p-5 lg:p-10">
            <p className="mb-6 font-light text-white">
              Coobo Media is not only named after Blake‘s twin boys, Cooper and
              Bo, but it is also the realization of his dream to create a
              business where he gets to interact with all types of people from
              different industries. Blake’s expertise lies in helping clients
              understand and communicate their unique business “stories,”
              creating distinctive designs and utilizing technology to
              differentiate each business from their competition.
            </p>
            <p className="mb-6 font-light text-white">
              After three years in Real Estate Banking right out of college,
              Blake changed gears and spent ten years in the entertainment
              industry in Los Angeles, working on the writing staff of
              television shows such as “The Nanny,” “Grace Under Fire,” and “Mad
              About You.” His entree into Web Development started in the 90’s
              after raising funds and launching an online portal, featuring
              serialized comedy sketches. He and his wife missed Texas and moved
              back in 2002. He then spent six years heading up the marketing
              department for a manufacturer/distributor, who remains a client
              today.
            </p>
            <p className="font-light text-white">
              A graduate of Texas AM University, Blake is married to TK and has
              three kids.
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

export default Blake;
