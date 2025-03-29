import { useState } from 'react';
import { useAddNextTermInfoMutation } from '@/src/features/nextTerm/nextTermApiSlcie';

import { toast } from 'react-toastify';

import Spinner from '@/components/Spinner';

const UpdateNextTerm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    nextTermFee: '',
    session: '',
    term: '',
    level: '',
    reOpeningDate: '',
    busFee: '',
    otherCharges: '',
  });

  const {
    nextTermFee,
    session,
    term,
    level,
    reOpeningDate,
    busFee,
    otherCharges,
  } = formData;
  const [addNextTermInfo, { isLoading, isError }] =
    useAddNextTermInfoMutation();

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await addNextTermInfo({
        nextTermFee,
        session,
        term,
        level,
        reOpeningDate,
        busFee,
        otherCharges,
      }).unwrap();
      toast.success(res);

      setFormData({
        session: '',
        term: '',
        level: '',
        reOpeningDate: '',
        nextTermFee: '',
        busFee: '',
        otherCharges: '',
      });
    } catch (err) {
      console.log(err?.data?.message || err.error);
      toast.error(err?.data?.message || err.error);
    }
  };
  const clickedUserForm = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='container mx-auto'>
        <button
          className={`${
            isOpen ? 'hidden' : 'block'
          } bg-blue-950 text-white px-2 py-2 rounded mt-4  w-full`}
          onClick={clickedUserForm}
        >
          UPLOAD NEXT TERM DETAILS
        </button>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } bg-gray-100 p-6 rounded shadow-lg`}
        >
          <form className='space-y-4' onSubmit={onSubmit}>
            <h2>Upload Details</h2>
            <div className='flex flex-col '>
              <label htmlFor='nextTermFee'>Next Term School Fee</label>
              <input
                className='bg-gray-300 rounded px-4 py-1'
                type='number'
                name='nextTermFee'
                id='nextTermFee'
                onChange={onChange}
                value={nextTermFee}
              ></input>
            </div>
            <div className='flex flex-col '>
              <label htmlFor='session'>Session</label>
              <select
                className='bg-gray-300 rounded px-4 py-1'
                name='session'
                id='session'
                onChange={onChange}
              >
                <option value=''>Select Session</option>
                <option value='2024/2025'>2024/2025</option>
                <option value='2025/2026'>2025/2026</option>
                <option value='2026/2027'>2026/2027</option>
                <option value='2027/2028'>2027/2028</option>
                <option value='2028/2029'>2028/2029</option>
                <option value='2029/2030'>2029/2030</option>
              </select>
            </div>
            <div className='flex flex-col '>
              <label htmlFor='session'>Term</label>
              <select
                className='bg-gray-300 rounded px-4 py-1'
                name='term'
                id='term'
                onChange={onChange}
              >
                <option value=''>Select Term</option>
                <option value='First'>First</option>
                <option value='Second'>Second</option>
                <option value='Third'>Third</option>
              </select>
            </div>
            <div className='flex flex-col '>
              <label htmlFor='level'>Class</label>
              <select
                className='bg-gray-300 rounded px-4 py-1'
                name='level'
                id='level'
                onChange={onChange}
              >
                <option value=''>Select Class</option>
                <option value='Lower Reception'>Lower Reception</option>
                <option value='Upper Reception'>Upper Reception</option>
                <option value='Nursery 1'>Nursery 1</option>
                <option value='Nursery 2'>Nursery 2</option>
                <option value='Grade 1'>Grade 1</option>
                <option value='Grade 2'>Grade 2</option>
                <option value='Grade 3'>Grade 3</option>
                <option value='Grade 4'>Grade 4</option>
                <option value='Grade 5'>Grade 5</option>
                <option value='JSS 1'>JSS 1</option>
                <option value='JSS 2'>JSS 2</option>
                <option value='JSS 3'>JSS 3</option>
                <option value='SSS 1'>SSS 1</option>
                <option value='SSS 2'>SSS 2</option>
                <option value='SSS 3'>SSS 3</option>
              </select>
            </div>
            <div className='flex flex-col '>
              <label htmlFor='reOpeningDate'>Resumption Date</label>
              <input
                className='bg-gray-300 rounded px-4 py-1'
                type='date'
                name='reOpeningDate'
                id='reOpeningDate'
                onChange={onChange}
                value={reOpeningDate}
              ></input>
            </div>
            <div className='flex flex-col '>
              <label htmlFor='busFee'>Bus Fee</label>
              <input
                className='bg-gray-300 rounded px-4 py-1'
                type='number'
                name='busFee'
                id='busFee'
                onChange={onChange}
                value={busFee}
              ></input>
            </div>
            <div className='flex flex-col '>
              <label htmlFor='otherCharges'>Other Charges</label>
              <input
                className='bg-gray-300 rounded px-4 py-1'
                type='number'
                name='otherCharges'
                id='otherCharges'
                onChange={onChange}
                value={otherCharges}
              ></input>
            </div>

            {isLoading ? (
              <Spinner clip={true} />
            ) : (
              <>
                <button
                  className='bg-blue-950 text-white px-2 py-1 rounded'
                  type='submit'
                >
                  Upload
                </button>
                <button
                  onClick={clickedUserForm}
                  className='bg-orange-500 text-white px-2 py-1 rounded ml-4'
                  type='button'
                >
                  Close
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateNextTerm;
