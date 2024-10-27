import React from 'react';

const Services = () => {
  return (
    <>
      <section className='py-12 px-4 bg-gray-50'>
        <div className='max-w-6xl mx-auto text-center mb-12'>
          <h1 className='text-3xl md:text-4xl font-extrabold text-gray-800 mb-4'>
            Educational Programs for Every Age Group
          </h1>
          <p className='text-gray-600 text-lg'>
            Empowering learners at each stage with a curriculum designed to
            inspire growth, curiosity, and academic success.
          </p>
        </div>

        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto'>
          <div className='bg-white shadow-md rounded-lg p-6 flex flex-col items-start text-left'>
            <h2 className='text-xl font-semibold text-blue-950 mb-3'>
              Early Learning Center
            </h2>
            <p className='text-gray-600 text-sm'>
              Designed for our youngest learners, this center fosters a warm,
              engaging environment where children can explore and start building
              foundational skills for their educational journey.
            </p>
          </div>
          <div className='bg-white shadow-md rounded-lg p-6 flex flex-col items-start text-left'>
            <h2 className='text-xl font-semibold text-blue-950 mb-3'>
              Elementary School (Grades 1-5)
            </h2>
            <p className='text-gray-600 text-sm'>
              Focusing on core academics, creativity, and personal growth, our
              Elementary program helps students develop essential skills in
              literacy, numeracy, and problem-solving.
            </p>
          </div>
          <div className='bg-white shadow-md rounded-lg p-6 flex flex-col items-start text-left'>
            <h2 className='text-xl font-semibold text-blue-950 mb-3'>
              High School (JSS 1 - SSS 3)
            </h2>
            <p className='text-gray-600 text-sm'>
              Our High School program prepares students for future success with
              a comprehensive curriculum that emphasizes critical thinking,
              leadership, and academic excellence.
            </p>
          </div>
        </div>
      </section>

      <section className='py-12 px-4 bg-white'>
        <div className='max-w-6xl mx-auto text-center'>
          <h1 className='text-3xl md:text-4xl font-extrabold text-gray-800 mb-6'>
            Commitment to Academic Excellence
          </h1>
          <p className='text-gray-600 mb-10 text-lg'>
            Our institution is committed to providing a robust educational
            foundation, focusing on student-centered learning with tailored
            teaching methods across all subjects.
          </p>
        </div>

        <div className='max-w-6xl mx-auto grid gap-8 md:grid-cols-3'>
          <div className='flex flex-col items-center bg-blue-100 p-8 rounded-lg shadow-lg'>
            <h2 className='text-4xl font-bold text-blue-950 mb-2'>50+</h2>
            <p className='text-gray-700 text-center'>Early Learners</p>
          </div>
          <div className='flex flex-col items-center bg-blue-100 p-8 rounded-lg shadow-lg'>
            <h2 className='text-4xl font-bold text-blue-950 mb-2'>100+</h2>
            <p className='text-gray-700 text-center'>Primary Students</p>
          </div>
          <div className='flex flex-col items-center bg-blue-100 p-8 rounded-lg shadow-lg'>
            <h2 className='text-4xl font-bold text-blue-950 mb-2'>100+</h2>
            <p className='text-gray-700 text-center'>High School Students</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
