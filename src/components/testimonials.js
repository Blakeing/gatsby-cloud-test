import React from 'react'
import Slider from 'react-slick'
import '../styles/_slick.css'
import '../styles/_slick-theme.css'

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 10000,
  pauseOnHover: true,
  dots: true,
}

const Testimonials = () => {
  return (
    <div style={{ backgroundColor: '#333333' }}>
      <Slider {...settings}>
        <div className="flex flex-col items-center justify-center p-10 md:p-16">
          <div className="flex items-center justify-center ">
            <svg
              aria-hidden="true"
              data-prefix="fas"
              data-icon="quote-left"
              className="w-6 h-6 text-white fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
              />
            </svg>
          </div>
          <div className="">
            <p className="mt-4 font-thin leading-tight text-center text-md lg:text-3xl text-orange">
              Our partnership with Coobo Media has helped us take the SandBox
              Logistics brand from concept to reality. We continue to rely on
              their support as we expand into new markets and seek to define our
              services to new audiences.
            </p>
            <p className="mt-4 font-light text-center text-white text-md lg:text-2xl">
              Josh Oren
            </p>
            <p className="mt-1 text-xs text-center text-gray-400 lg:text-xl">
              President and CEO SandBox Logistics
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-10 md:p-16">
          <div className="flex items-center justify-center">
            <svg
              aria-hidden="true"
              data-prefix="fas"
              data-icon="quote-left"
              className="w-6 h-6 text-white fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
              />
            </svg>
          </div>
          <div className="">
            <p className="mt-4 font-thin leading-tight text-center text-md lg:text-3xl text-orange">
              Coobo Media’s work is creative and brilliant! Coobo Media takes
              the time to understand client needs and deliver award-winning
              results. Team is very professional, attentive, and wonderful to
              work with. Couldn’t ask for a better marketing firm partner.
            </p>
            <p className="mt-4 font-light text-center text-white text-md lg:text-2xl">
              Carrie Criado, J.D.
            </p>
            <p className="mt-1 text-xs text-center text-gray-400 lg:text-xl">
              Executive Director of Communications and Marketing The Unviersity
              of Houston Law Center
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-10 md:p-16">
          <div className="flex items-center justify-center">
            <svg
              aria-hidden="true"
              data-prefix="fas"
              data-icon="quote-left"
              className="w-6 h-6 text-white fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
              />
            </svg>
          </div>
          <div className="">
            <p className="mt-4 font-thin leading-tight text-center text-md lg:text-3xl text-orange">
              My Company has worked with Coobo Media over the past three years
              developing our internal and external marketing materials. They’ve
              done a wonderful job helping us build and promote the Swagelok
              brand to the Houston community, whether it’s through marketing
              materials, website development or event materials. Coobo is truly
              a partner in our business and always there to support our day to
              day marketing needs.
            </p>
            <p className="mt-4 font-light text-center text-white text-md lg:text-2xl">
              Brain H. Payne
            </p>
            <p className="mt-1 text-xs text-center text-gray-400 lg:text-xl">
              Swagelok Central Houston
            </p>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default Testimonials
