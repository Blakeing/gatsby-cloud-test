import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import Nav from '../components/nav';

// eslint-disable-next-line react/prop-types
const SideNav = ({ isOpen }) => {
  const { x } = useSpring({
    x: isOpen ? 0 : 100,
    config: config.slow
  });
  return (
    <div
      className="fixed inset-0 z-20 flex"
      style={{
        pointerEvents: isOpen ? 'all' : 'none'
      }}
    >
      <animated.div
        style={{
          transform: x.interpolate(x => `translate3d(${x * -1}%, 0, 0)`)
        }}
        className="w-1/4 h-full lg:w-3/4"
      />
      <animated.div
        style={{
          backgroundColor: '#EC5226',
          transform: x.interpolate(x => `translate3d(${x}%, 0, 0)`)
        }}
        className="w-3/4 h-full border-white lg:border-r-8 lg:border-l-8 lg:border-t-8 lg:border-b-8 lg:w-1/4"
      >
        <Nav />
      </animated.div>
    </div>
  );
};

export default SideNav;
