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
      <div className='max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12'>
        <div>
          <h2 className='text-4xl font-bold mb-6 text-gray-800'>
            Our Mission & Vision
          </h2>
          <p className='text-lg leading-relaxed text-gray-600'>
            Bendonald International School is committed to fostering a holistic,
            globally-oriented education...
          </p>
          <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='bg-blue-50 p-4 rounded-lg shadow-md'>
              <h3 className='text-xl font-semibold text-blue-800'>Our Motto</h3>
              <p className='text-md text-gray-700'>
                "Citadel for future leaders"
              </p>
            </div>
            <div className='bg-blue-50 p-4 rounded-lg shadow-md'>
              <h3 className='text-xl font-semibold text-blue-800'>
                Our Belief
              </h3>
              <p className='text-md text-gray-700'>
                God is the giver of knowledge.
              </p>
            </div>
          </div>
        </div>
        {/* Administrator */}
        <div className='bg-gradient-to-b from-blue-100 to-blue-200 py-12'>
          <div className='max-w-5xl mx-auto px-6 py-8 bg-white shadow-lg rounded-lg'>
            <h2 className='text-3xl font-bold text-center text-blue-800'>
              The Proprietress
            </h2>
            <img
              src='https://res.cloudinary.com/dzajrh9z7/image/upload/v1706941053/Bendonalds/MrsEsther_copy_1011x782_u42jan.jpg'
              alt='Head of Administration'
              className='w-full h-64 object-cover rounded-lg mt-6 mb-6 transform transition hover:scale-105'
            />
            <p className='text-gray-700 text-lg leading-relaxed'>
              Mrs. Agiye Esther brings a wealth of experience to Bendonald...
            </p>
          </div>
        </div>
      </div>

      <About />
      <Footer />
    </div>
  );
};

export default AboutPage;
