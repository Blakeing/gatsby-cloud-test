import React from 'react';

const SocialNav = () => {
  return (
    <>
      <div
        style={{ left: '-10px', bottom: '50px' }}
        className="absolute z-30 hidden bg-white border-4 border-white lg:block lg:border-8 "
      >
        <button
          style={{ backgroundColor: '#EC5226' }}
          className="flex items-center px-3 py-2 text-white bg-red-500 border border-white focus:outline-none"
        >
          <svg
            aria-hidden="true"
            data-prefix="fas"
            data-icon="envelope"
            className="w-6 h-6 text-white fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
            />
          </svg>
        </button>
      </div>
      <div
        style={{ left: '-10px', bottom: '125px' }}
        className="absolute z-30 hidden bg-white border-4 border-white lg:block lg:border-8 "
      >
        <button
          style={{ backgroundColor: '#EC5226' }}
          className="flex items-center px-3 py-2 text-white bg-red-500 border border-white focus:outline-none"
        >
          <svg
            aria-hidden="true"
            data-prefix="fab"
            data-icon="linkedin-in"
            className="w-3 w-6 h-3 h-6 text-white fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 01107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
            />
          </svg>
        </button>
      </div>
      <div
        style={{ left: '-10px', bottom: '200px' }}
        className="absolute z-30 hidden bg-white border-4 border-white lg:block lg:border-8 "
      >
        <button
          style={{ backgroundColor: '#EC5226' }}
          className="flex items-center px-3 py-2 text-white bg-red-500 border border-white focus:outline-none"
        >
          <svg
            aria-hidden="true"
            data-prefix="fab"
            data-icon="facebook-f"
            className="w-3 w-6 h-3 h-6 text-white fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default SocialNav;
