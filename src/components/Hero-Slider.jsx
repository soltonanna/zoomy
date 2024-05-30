import React from 'react';
import { motion } from 'framer-motion';
import CentralImage from '../images/01.png';
import SmallImage1 from '../images/02.png';
import SmallImage2 from '../images/03.png';
import CircleBg from '../images/earth-bg.svg';

import SmallImage3 from '../images/02.svg';
import SmallImage4 from '../images/04.svg';
import SmallImage5 from '../images/zigzg-1.svg';
import SmallImage6 from '../images/06.svg';
import SmallImage7 from '../images/01.svg';
import SmallImage8 from '../images/dot-box-1.svg';



const smallImages = [
  { src: SmallImage3, alt: 'Small 3', style: { top: '20%', left: '10%' } },
  { src: SmallImage4, alt: 'Small 4', style: { bottom: '10%', left: '3%' } },
  { src: SmallImage5, alt: 'Small 5', style: { bottom: '3%', left: '85%' } },
  { src: SmallImage6, alt: 'Small 6', style: { top: '15%', left: '90%' } },
  { src: SmallImage7, alt: 'Small 7', style: { bottom: '5%', left: '50%' } },
  { src: SmallImage8, alt: 'Small 8', style: { top: '5%', left: '50%' } },
];

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
};

const HeroSlider = () => {
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      className="hero-slider my-10 relative"
    >
      {smallImages.map((image, index) => (
        <img 
          key={index} 
          src={image.src} 
          alt={image.alt} 
          className={`hero-slider__small-image hero-slider__small-image--${index + 3} absolute w-25 h-25`} 
          style={image.style} 
        />
      ))}
      
      <div className="container mx-auto hero-slider__container grid grid-cols-2 gap-4 py-10">
        <div className="hero-slider__images relative flex justify-center items-center">
          <img src={CentralImage} alt="Central" className="relative z-5 bottom-10" />
          <img src={SmallImage2} alt="Small 1" className="hero-slider__small-image hero-slider__small-image--1 absolute bottom-20 left-0 w-22 h-22" />
          <img src={SmallImage1} alt="Small 2" className="hero-slider__small-image hero-slider__small-image--2 absolute bottom-0 right-0 w-25 h-25" />
          <img src={CircleBg} alt="Circle Bg" className="hero-slider__background-circle absolute bottom-0 left-0 w-1/1 h-auto" />
        </div>
        <div className="hero-slider__content flex flex-col justify-center ml-20">
          <motion.h1
            custom={1} 
            variants={animation} 
            className="hero-slider__title text-6xl font-bold leading-tight mb-4"
          >
            Learn Everyday & Any New Skills Online with Top Instructors.
          </motion.h1>
          <motion.p 
            custom={2} 
            variants={animation} 
            className="hero-slider__description text-lg"
          >
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSlider;
