import React from 'react';
import Splash from '../../../images/bg_marketing_splash-1.png';

import { useMediaQuery } from 'react-responsive';

const MarketingSlide = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  });
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${Splash})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '50%',
          backgroundColor: 'rgb(58,175,210)',
          backgroundPosition: isDesktopOrLaptop ? 'left' : 'bottom right',
          height: '100%'
        }}
      >
        <div
          style={{ bottom: '40%', right: '5%', maxWidth: '42rem' }}
          className="py-20 px-5 lg:p-0 lg:absolute lg:max-w-xl"
        >
          <h1 className="text-5xl lg:text-7xl font-bold text-white">
            Marketing.
          </h1>
          <span>
            <svg className="fill-current h-8 w-8" viewBox="0 0 45 44">
              <path d="M0 22v22h9V9h36V0H0v22z" />
            </svg>
          </span>
          <div className="pl-5 pr-10">
            <h3 className="-mt-5 lg:text-5xl font-normal leading-tight text-2xl text-white italic  tracking-wide">
              Optimize Your Splash
            </h3>

            <p className="mt-2 leading-normal text-white font-normal text-sm lg:text-lg">
              Technology has revolutionized the way we market yo our customers.
              Using the right mix of digital marketing, advertising and pulbic
              relations, you can reach your target audience more efficiently.
            </p>
          </div>
          <div className="pl-5 pr-10 mt-2 ">
            <span
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
              className="inline-block mb-1 text-xs lg:text-sm font-bold mr-1 text-white p-2"
            >
              SEO
            </span>
            <span
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
              className="inline-block mb-1 text-xs lg:text-sm font-bold mr-1 text-white bg-gray-900 p-2"
            >
              Internet Advertising
            </span>
            <span
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
              className="inline-block mb-1 text-xs lg:text-sm font-bold mr-1 text-white bg-gray-900 p-2"
            >
              Newsletters
            </span>
            <span
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
              className="inline-block mb-1 text-xs lg:text-sm font-bold mr-1 text-white bg-gray-900 p-2"
            >
              Content Management
            </span>
            <span
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
              className="inline-block mb-1 text-xs lg:text-sm font-bold mr-1 text-white bg-gray-900 p-2"
            >
              Public Relations
            </span>
            <span
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
              className="inline-block mb-1 text-xs lg:text-sm font-bold mr-1 text-white bg-gray-900 p-2"
            >
              And More
            </span>
            <span className="inline-block mb-1 text-xs lg:text-sm font-bold mr-1 text-white bg-gray-900 p-2">
              &quot;Marco?&quot;
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketingSlide;
