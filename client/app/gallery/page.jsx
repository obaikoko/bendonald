import Footer from '@/components/Footer';
import React from 'react';

const GalleryPage = () => {
  const images = [
    { src: 'images/independence2.jpg', title: 'Indepence Day Calabar' },
    { src: 'images/independence3.jpg', title: 'Indepence Day Calabar' },
    { src: 'images/independence5.jpg', title: 'Indepence Day Calabar' },
    {
      src: 'images/excorsion3.jpg',
      title: 'Excorsion At Marina Resort Calabar',
    },
    {
      src: 'images/excorsion.jpg',
      title: 'Excorsion At Marina Resort Calabar',
    },
    {
      src: 'images/excorsion2.jpg',
      title: 'Excorsion At Marina Resort Calabar',
    },
    { src: 'images/seminar.jpg', title: 'Seminar Session' },
    { src: 'images/presentation5.jpg', title: 'Graduation Day Presentaion' },
    { src: 'images/dance.jpg', title: 'Dancing Session' },
    { src: 'images/birthday.jpg', title: 'Birthday Celebration' },
    { src: 'images/practicals.jpg', title: 'Home Economics Practical' },
  ];

  return (
    <>
      <div className='bg-blue-950 h-20'></div>
      <div className='min-h-screen bg-gray-100 py-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl font-bold text-gray-900 text-center mb-8'>
            Gallery
          </h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {images.map((image, index) => (
              <div
                key={index}
                className='relative overflow-hidden rounded-lg shadow-lg group'
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out'
                />
                <div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center'>
                  <span className='text-white font-bold text-lg'>
                    {image.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GalleryPage;
