import React from 'react'
import Slider from 'react-slick'
import '../styles/_slick.css'
import '../styles/_slick-theme.css'
import Griesenbeck from '../images/client_griesenbeck.png'
import Pacific from '../images/client_par-pacific.png'
import Paisley from '../images/client_paisley-house.png'
import Pinch from '../images/client_pinch.png'
import Restoration from '../images/client_raus-restoration.png'
import P1 from '../images/client_p1.png'
import Launch from '../images/client_launch-students.png'
import Hawaii from '../images/client_hawaii-energy.png'

const settings = {
  infinite: true,
  speed: 30000,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  cssEase: 'linear',
  autoplaySpeed: 3000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
  ],
}

const ClientsSlider = () => {
  return (
    <div style={{ backgroundColor: '#333333' }} className="pt-20 pb-10">
      <Slider {...settings}>
        <div className="">
          <img src={Griesenbeck} />
        </div>

        <div className="">
          <img src={Pacific} />
        </div>

        <div className="">
          <img src={Paisley} />
        </div>

        <div className="">
          <img src={Pinch} />
        </div>

        <div className="">
          <img src={Restoration} />
        </div>

        <div className="">
          <img src={P1} />
        </div>

        <div className="">
          <img src={Launch} />
        </div>

        <div className="">
          <img src={Hawaii} />
        </div>
      </Slider>
    </div>
  )
}

export default ClientsSlider
