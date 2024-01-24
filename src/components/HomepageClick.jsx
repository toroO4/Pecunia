import { useState } from 'react';

export const useHomepageClick = (totalSlides) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const onClickLeft = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
  };

  const onClickRight = () => {
    setCurrentSlide((prevSlide) => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1));
  };

  return {
    currentSlide, 
    onClickLeft,
    onClickRight,
  };
};
