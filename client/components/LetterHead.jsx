import { FaMailBulk, FaPhone } from 'react-icons/fa';
import style from './styles/letterHead.module.css';

const LetterHead = ({ image }) => {
  return (
    <div className={style.container}>
      <main className={style.main}>
        <div className={style.logo}>
          <img
            src='https://res.cloudinary.com/dzajrh9z7/image/upload/v1721855840/Bendonalds/m5eqmos5mf6tq1pg7lrg.jpg'
            alt='logo'
          />
        </div>
        {image && (
          <div className={style.profile}>
            <img className='rounded' src={image} alt='profile' />
          </div>
        )}

        <div className={style.mainHeader}>
          <h1 className='md:text-4xl'>Bendonals International Schools</h1>
          <h4 className='text-pink-600'>
            NO. 9 BY MTN MAST, ODUKPANI CLOSE, IKOT ENEOBONG
          </h4>
          <h4 className='text-pink-600'>
            F.H.E 8 MILES, CALABAR, C.R.S NIGERIA
          </h4>
          <p>
            <FaMailBulk className='inline-block mb-1 mr-2 text-blue-900' />
            bendonaldsschools@gmail.com{' '}
            <FaPhone className='inline-block mb-1 mx-2 text-blue-900' />
            TEL: 07038307768, 08169866808
          </p>
        </div>
      </main>
    </div>
  );
};

export default LetterHead;
