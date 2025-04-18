import React from 'react';
import Link from 'next/link';

const NewUsers = () => {
  return (
    <section className='bg-gray-100 py-16 px-4 lg:px-32 text-center'>
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-3xl md:text-5xl font-extrabold text-gray-800 mb-6'>
          Welcome to Bendonalds International Schools, Calabar
        </h2>

        <p className='text-lg md:text-xl italic text-blue-950 mb-4'>
          Shaping Future Leaders, Inspiring Excellence
        </p>

        <p className='text-gray-700 text-base md:text-lg leading-relaxed mb-8'>
          Bendonalds International Schools Calabar is committed to delivering a
          world-class education in a nurturing and inspiring environment. Our
          mission is to develop tomorrow's leaders through academic excellence,
          personal growth, and global perspectives. Supported by experienced
          educators and cutting-edge facilities, we empower each child to
          realize their full potential.
        </p>

        <Link
          href='/about'
          className='inline-block bg-blue-950 text-white text-sm md:text-base font-medium px-6 py-3 rounded-full shadow-md hover:bg-cyan-800 transition duration-300'
        >
          Learn More About Us
        </Link>
      </div>
    </section>
  );
};

export default NewUsers;
