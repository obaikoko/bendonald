import About from '@/components/About';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'About Us - Bendonald International School Calabar',
  description:
    'Learn more about Bendonald International School Calabar, its mission, vision, values, and the excellent education provided to students in Calabar, Cross River State.',
  keywords:
    'About Bendonald International Schools, Calabar school, school mission, school values, education in Calabar, Cross River State',
};

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className='relative'>
        <img
          src='/images/band.jpg'
          className='w-full h-[500px] object-cover'
          alt='Bendonald International School'
        />
      </div>

      {/* Main Content Section */}
      <div className='max-w-7xl mx-auto px-8 py-16 space-y-12'>
        {/* Founding Story */}
        <div className='bg-white p-8 rounded-lg shadow-lg'>
          <h2 className='text-4xl font-bold text-gray-800 mb-4'>Our Story</h2>
          <p className='text-lg text-gray-700 leading-relaxed'>
            Bendonalds International Schools was founded in 2020 by Mrs. and
            Mrs. Celestine Atsu. Originally a COVID-19 lesson center, it has
            evolved into the thriving institution we know today, dedicated to
            nurturing young minds in a supportive environment.
          </p>
        </div>

        {/* School Mission & Vision */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          <div>
            <h2 className='text-4xl font-bold mb-6 text-gray-800'>
              Our Mission & Vision
            </h2>
            <p className='text-lg leading-relaxed text-gray-600'>
              Bendonalds International Schools is committed to fostering a
              holistic, globally-oriented education, integrating the British,
              Jolly Phonics, and Nigerian curricula across Crèche, Pre-Nursery,
              Nursery, Primary and Secondary classes.
            </p>
            <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='bg-blue-50 p-4 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold text-blue-800'>
                  Our Motto
                </h3>
                <p className='text-md text-gray-700'>
                  "Citadel for future leaders"
                </p>
              </div>
              <div className='bg-blue-50 p-4 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold text-blue-800'>Vision</h3>
                <ul>
                  <li className='list-disc'>To help the child dream </li>
                  <li className='list-disc'>Remember the dream </li>
                  <li className='list-disc'>Actualize the dream </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Proprietress Section */}
          <div className='bg-gradient-to-b from-blue-100 to-blue-200 py-12 rounded-lg'>
            <div className='max-w-5xl mx-auto px-6 py-8 bg-white shadow-lg rounded-lg'>
              <h2 className='text-3xl font-bold text-center text-blue-800'>
                The Proprietress
              </h2>
              <img
                src='/images/admin.jpg'
                alt='Head of Administration'
                className='w-80 h-64 object-fit rounded-lg mt-6 mb-6 transform transition hover:scale-105'
              />
              <p className='text-gray-700 text-lg leading-relaxed'>
                Mrs. Agiye Esther brings a wealth of experience to Bendonald,
                shaping a future-oriented education for our pupils.
              </p>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className='bg-white p-8 rounded-lg shadow-lg'>
          <h2 className='text-4xl font-bold text-gray-800 mb-6'>
            Achievements & Programs
          </h2>
          <ul className='space-y-4 text-lg text-gray-700'>
            <li>
              <strong>
                Center for Universal Learning Education Programme:
              </strong>{' '}
              Bendonalds was selected for this training program, aiming to
              upskill teachers with modern teaching techniques for improved
              learning outcomes.
            </li>
            <li>
              <strong>Competitions:</strong> Our students have excelled in the
              Royal National Mathematics Competition and other inter-school
              events, consistently achieving top placements.
            </li>
            <li>
              <strong>Expansion to Secondary Education:</strong> In September
              2022, Bendonalds International Secondary Schools opened its doors,
              marking a new chapter in providing quality education.
            </li>
          </ul>
          <p className='text-md text-gray-600 mt-4'>
            We invite you to join the Bendonalds community for an enriching
            academic experience and holistic development.
          </p>
        </div>
      </div>

      <About />
      <Footer />
    </div>
  );
};

export default AboutPage;
