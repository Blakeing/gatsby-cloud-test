import React from 'react';
import Butterfly from '../../../images/bg_brand_evolve-1.png';

const BrandSlide = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${Butterfly})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundColor: 'rgb(93,37,100)',
          backgroundPosition: 'bottom',
          height: '100%'
        }}
      >
        <div
          style={{ top: '10%', left: '10%', maxWidth: '56rem' }}
          className="py-20 px-5 lg:absolute lg:max-w-md"
        >
          <h1 className=" text-5xl lg:text-7xl font-bold text-white">Brand.</h1>
          <span>
            <svg className="fill-current h-8 w-8" viewBox="0 0 45 44">
              <path d="M0 22v22h9V9h36V0H0v22z" />
            </svg>
          </span>
          <div className="pl-5 pr-10">
            <h3 className="-mt-5 lg:text-5xl font-normal leading-tight text-2xl text-white italic  tracking-wide">
              Is in the Details
            </h3>

            <p className="mt-2 leading-normal text-white font-normal text-sm lg:text-lg">
              Evolve your brand. It may start with a logo and a color scheme,
              but it will culmmnate from the principles and ideas that your
              company represents.
            </p>
          </div>
          <div className="pl-5 pr-10 mt-2 ">
            <span
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
              className="inline-block mb-1 text-xs lg:text-sm font-bold mr-1 text-white p-2"
            >
              Logo Design
            </span>
            <span
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
              className="inline-block mb-1 text-xs lg:text-sm font-bold mr-1 text-white bg-gray-900 p-2"
            >
              Logo Standards
            </span>
            <span
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
              className="inline-block mb-1 text-xs lg:text-sm font-bold mr-1 text-white bg-gray-900 p-2"
            >
              Messaging
            </span>
            <span
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
              className="inline-block mb-1 text-xs lg:text-sm font-bold mr-1 text-white bg-gray-900 p-2"
            >
              Advertising
            </span>
            <span
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
              className="inline-block mb-1 text-xs lg:text-sm font-bold mr-1 text-white bg-gray-900 p-2"
            >
              Content Development
            </span>
            <span
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
              className="inline-block mb-1 text-xs lg:text-sm font-bold mr-1 text-white bg-gray-900 p-2"
            >
              And More
            </span>
            <span className="inline-block mb-1 text-xs lg:text-sm font-bold mr-1 text-white bg-gray-900 p-2">
              Avoid the Windshield
            </span>
            <span className="inline-block mb-1 text-xs lg:text-sm font-bold text-white bg-gray-900 p-2">
              Brand Portfolio
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandSlide;
