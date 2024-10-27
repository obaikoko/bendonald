'use client';
import React, { useState, useEffect } from 'react';
const images = [
  {
    url: '/images/building1.jpg',
    text1: 'Bendonald International School',
  },
  {
    url: '/images/building3.jpg',
    text1: 'Excellence in Education',
    text2: 'Empowering Future Leaders Through Knowledge',
  },
  {
    url: '/images/exam.jpg',
    text1: 'Unlock Your Child’s Potential',
    text2: 'An Investment in Education Lasts a Lifetime',
  },
  {
    url: '/images/building2.jpg',
    text1: 'Discover Bendonald’s Community',
    text2: 'Shaping Bright Futures in a Caring Environment',
  },
];


const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(slideInterval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  return (
    <div className='relative w-full h-[450px] md:h-[600px] lg:h-[700px] overflow-hidden'>
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image.url})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white p-4 md:p-6 space-y-3 md:space-y-4'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide'>
              {image.text1}
            </h1>
            {image.text2 && (
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl font-light'>
                {image.text2}
              </p>
            )}
          </div>
        </div>
      ))}
      <div className='absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3'>
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`h-3 w-3 rounded-full transition-all ${
              currentSlide === idx ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentSlide(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
