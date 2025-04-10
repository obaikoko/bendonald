import React from 'react';

const ServicesCards = () => {
  return (
    <section className='bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-extrabold text-gray-800'>
            Our Core Services
          </h1>
          <p className='text-gray-600 mt-4'>
            Dedicated to nurturing well-rounded, globally aware leaders.
          </p>
        </div>

        <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
          {/* Card 1 */}
          <div className='bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300'>
            <h2 className='text-xl font-bold text-blue-950 mb-4'>
              Holistic Education
            </h2>
            <p className='text-gray-600'>
              Our curriculum balances academic excellence with creativity and
              personal growth, promoting critical thinking alongside social and
              emotional development.
            </p>
          </div>

          {/* Card 2 */}
          <div className='bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300'>
            <h2 className='text-xl font-bold text-blue-950 mb-4'>
              Experienced & Caring Teachers
            </h2>
            <p className='text-gray-600'>
              Our passionate, qualified teachers provide individualized support,
              helping each student reach their full potential in a nurturing
              environment.
            </p>
          </div>

          {/* Card 3 */}
          <div className='bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300'>
            <h2 className='text-xl font-bold text-blue-950 mb-4'>
              State-of-the-Art Facilities
            </h2>
            <p className='text-gray-600'>
              Our campus is equipped with advanced learning tools, spacious
              classrooms, science labs, a library, and sports facilities,
              creating an optimal environment for all.
            </p>
          </div>

          {/* Card 4 */}
          <div className='bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300'>
            <h2 className='text-xl font-bold text-blue-950 mb-4'>
              Safe & Supportive Environment
            </h2>
            <p className='text-gray-600'>
              Our secure campus and inclusive culture provide a welcoming space
              where students feel safe, valued, and ready to succeed.
            </p>
          </div>

          {/* Card 5 */}
          <div className='bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300'>
            <h2 className='text-xl font-bold text-blue-950 mb-4'>
              Global Citizenship Focus
            </h2>
            <p className='text-gray-600'>
              We prepare students for the global stage through leadership
              programs, community service, and cross-cultural engagement,
              fostering a strong sense of responsibility.
            </p>
          </div>

          {/* Card 6 */}
          <div className='bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300'>
            <h2 className='text-xl font-bold text-blue-950 mb-4'>
              Foundational Support for All Ages
            </h2>
            <p className='text-gray-600'>
              From nursery to secondary school, we offer continuous support,
              ensuring students are well-prepared at each stage of their
              educational journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCards;
