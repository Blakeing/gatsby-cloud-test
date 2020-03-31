import React from 'react';
import Print from '../../../images/bg_print_tree.png';

const PrintSlide = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${Print})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundColor: 'rgb(67,135,75)',
          backgroundPosition: 'bottom',
          height: '100%'
        }}
      >
        <div
          style={{ bottom: '40%', right: '5%', maxWidth: '42rem' }}
          className="py-20 px-5 lg:absolute lg:max-w-xl"
        >
          <h1 className="text-5xl lg:text-7xl font-bold text-white">Print.</h1>
          <span>
            <svg className="fill-current h-8 w-8" viewBox="0 0 45 44">
              <path d="M0 22v22h9V9h36V0H0v22z" />
            </svg>
          </span>
          <div className="pl-5 pr-10">
            <h3 className="-mt-5 lg:text-5xl font-normal leading-tight text-2xl text-white italic  tracking-wide">
              Use our trees wisely
            </h3>

            <p className="mt-2 leading-normal text-white font-normal text-sm lg:text-lg">
              It&apos;`s not okay to leave jsut anything behind. If you&apos;`re
              going to print it, make it count. Aplogoizing as you hand over the
              do-it-yourself tri-fold, reiterating everything you just said in
              your meeting is not okay.
            </p>
          </div>
          <div className="pl-5 pr-10 mt-2 ">
            <span
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
              className="inline-block mb-1 text-xs lg:text-sm font-bold mr-1 text-white p-2"
            >
              Package Design
            </span>
            <span
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
              className="inline-block mb-1 text-xs lg:text-sm font-bold mr-1 text-white bg-gray-900 p-2"
            >
              Brochures
            </span>
            <span
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
              className="inline-block mb-1 text-xs lg:text-sm font-bold mr-1 text-white bg-gray-900 p-2"
            >
              Business Cards
            </span>
            <span
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
              className="inline-block mb-1 text-xs lg:text-sm font-bold mr-1 text-white bg-gray-900 p-2"
            >
              Billboards
            </span>
            <span
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
              className="inline-block mb-1 text-xs lg:text-sm font-bold mr-1 text-white bg-gray-900 p-2"
            >
              Annual Reports
            </span>
            <span
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
              className="inline-block mb-1 text-xs lg:text-sm font-bold mr-1 text-white bg-gray-900 p-2"
            >
              And More
            </span>
            <span className="inline-block mb-1 text-xs lg:text-sm font-bold mr-1 text-white bg-gray-900 p-2">
              Make our trees proud
            </span>
            <span className="inline-block mb-1 text-xs lg:text-sm font-bold text-white bg-gray-900 p-2">
              Print Portfolio
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrintSlide;
