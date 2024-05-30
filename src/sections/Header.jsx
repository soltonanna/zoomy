import React from 'react';

import NavBar from '../components/NavBar';
import { MButton } from '../modules/Button';

import Logo from '../images/header_logo_one.svg';

import { motion } from 'framer-motion';

const animation = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
}

const Header = () => {
  return (
    <motion.header 
      initial="hidden"
      whileInView="visible"
      className="header bg-white py-2">
      <div className="container mx-auto header__container flex justify-center items-center">
        <div className="header__logo">
          <img src={Logo} alt="MyApp Logo" className="header__logo-image h-10"/>
        </div>
        <div className="header__navbar flex-1 mx-4">
          <NavBar />
        </div>
        <div className="header__contact">
          <MButton custom={5} variants={animation}>
            Try Free Now
          </MButton>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
