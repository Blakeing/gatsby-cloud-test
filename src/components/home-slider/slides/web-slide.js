import React from 'react';
import Dog from '../../../images/bg_web_dog.png';

import { useMediaQuery } from 'react-responsive';

const WebSlide = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  });
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${Dog})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: isDesktopOrLaptop ? '30%' : '40%',
          backgroundColor: 'rgb(181,47,47)',
          backgroundPosition: isDesktopOrLaptop
            ? 'top 50% right 20%'
            : 'bottom right',
          height: '100%'
        }}
      >
        <div
          style={{ top: '30%', left: '15%', maxWidth: '42rem' }}
          className="py-20 px-5 lg:p-0 lg:absolute lg:max-w-xl"
        >
          <h1 className="text-5xl lg:text-7xl font-bold text-white">Web</h1>
          <span>
            <svg className="fill-current h-8 w-8" viewBox="0 0 45 44">
              <path d="M0 22v22h9V9h36V0H0v22z" />
            </svg>
          </span>
          <div className="pl-5 pr-10">
            <h3 className="-mt-5 lg:text-5xl font-normal leading-tight text-2xl text-white italic  tracking-wide">
              Compete with the Big Dogs
            </h3>

            <p className="mt-2 leading-normal text-white font-normal text-sm lg:text-lg">
              whether you&apos;re a start up or an industry leader, the intenet
              levels the playing field. If you&apos;re not taking advantage of
              that , your competition thanks you.
            </p>
          </div>
          <div className="z-20 pl-5 pr-10 mt-2 ">
            <span
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
              className="inline-block mb-1 text-xs lg:text-sm font-bold mr-1 text-white p-2"
            >
              Websites
            </span>
            <span
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
              className="inline-block mb-1 text-xs lg:text-sm font-bold mr-1 text-white bg-gray-900 p-2"
            >
              Applications
            </span>
            <span
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
              className="inline-block mb-1 text-xs lg:text-sm font-bold mr-1 text-white bg-gray-900 p-2"
            >
              E-Newsletters
            </span>
            <span
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
              className="inline-block mb-1 text-xs lg:text-sm font-bold mr-1 text-white bg-gray-900 p-2"
            >
              SEO
            </span>
            <span
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
              className="inline-block mb-1 text-xs lg:text-sm font-bold mr-1 text-white bg-gray-900 p-2"
            >
              E-Commerce
            </span>
            <span
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
              className="inline-block mb-1 text-xs lg:text-sm font-bold mr-1 text-white bg-gray-900 p-2"
            >
              And More
            </span>
            <span className="inline-block mb-1 text-xs lg:text-sm font-bold mr-1 text-white bg-gray-900 p-2">
              Woof!
            </span>
            <span className="inline-block mb-1 text-xs lg:text-sm font-bold text-white bg-gray-900 p-2">
              Web Portfolio
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebSlide;
