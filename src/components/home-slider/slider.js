import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import { animated, config, useTransition } from 'react-spring';
import Coobo from '../../images/coobo-logo-white.png';
import Brand from './slides/brand-slide';
import Home from './slides/home-slide';
import Marketing from './slides/marketing-slide';
import Print from './slides/print-slide';
import Web from './slides/web-slide';

const slides = [
  {
    id: 0,
    slide: <Home />
  },
  {
    id: 1,
    slide: <Web />
  },
  {
    id: 2,
    slide: <Print />
  },
  {
    id: 3,
    slide: <Brand />
  },
  {
    id: 4,
    slide: <Marketing />
  }
];

const Slider = () => {
  const [index, set] = useState(0);
  const transitions = useTransition(slides[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.gentle
  });
  useEffect(
    () => void setInterval(() => set(state => (state + 1) % 5), 265000),
    []
  );
  return transitions.map(({ item, props, key }) => (
    <animated.div
      key={key}
      className="absolute inset-y-0 z-0 w-full h-full overflow-hidden bg-center"
      style={{
        ...props,
        willChange: 'opacity'
      }}
    >
      <Link to="/">
        <img
          style={{ top: '2rem', left: '2rem' }}
          className="absolute top-0 left-0 hidden bg-transparent lg:block "
          src={Coobo}
        />
      </Link>
      {item.slide}

      <button
        className={`${
          index === 0 ? `bg-white` : `opacity-50 bg-gray-100`
        } absolute rounded-full h-4 w-4`}
        style={{
          right: '2rem',
          top: 'calc(50% - 3rem)'
        }}
        onClick={() => set(0)}
      />
      <button
        className={`${
          index === 1 ? `bg-white` : `opacity-50 bg-gray-100`
        } absolute rounded-full h-4 w-4`}
        style={{
          right: '2rem',
          top: 'calc(50% - 1.5rem)'
        }}
        onClick={() => set(1)}
      />
      <button
        className={`${
          index === 2 ? `bg-white` : `opacity-50 bg-gray-100`
        } absolute rounded-full h-4 w-4`}
        style={{
          right: '2rem',
          top: '50%'
        }}
        onClick={() => set(2)}
      />
      <button
        className={`${
          index === 3 ? `bg-white` : `opacity-50 bg-gray-100`
        } absolute rounded-full h-4 w-4`}
        style={{
          right: '2rem',
          top: 'calc(50% + 1.5rem)'
        }}
        onClick={() => set(3)}
      />
      <button
        className={`${
          index === 4 ? `bg-white` : `opacity-50 bg-gray-100`
        } absolute rounded-full h-4 w-4`}
        style={{
          right: '2rem',
          top: 'calc(50% + 3rem)'
        }}
        onClick={() => set(4)}
      />
    </animated.div>
  ));
};

export default Slider;
