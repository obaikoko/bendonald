'use client';
import { useState } from 'react';
import { useRegisterMutation } from '@/src/features/auth/usersApiSlice';
import { toast } from 'react-toastify';
import style from '../../components/styles/register.module.css';
import { useRouter } from 'next/navigation';
import Spinner from '../Spinner';

function AddUser() {
  const router = useRouter();
  const [isUserForm, setIsUserForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    level: '',
    subLevel: '',
    email: '',
    password: '',
    password2: '',
  });

  const { firstName, lastName, level, subLevel, email, password, password2 } =
    formData;
  const [register, { isLoading }] = useRegisterMutation();

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error('Passwords do not match!');
    } else {
      try {
        const res = await register({
          firstName,
          lastName,
          level,
          subLevel,
          email,
          password,
        }).unwrap();
        if (res) {
          toast.success(
            `${res.firstName} ${res.lastName} registered successfully`
          );
        }
        setFormData({
          firstName: '',
          lastName: '',
          level: '',
          subLevel: '',
          email: '',
          password: '',
          password2: '',
        });
      } catch (err) {
        console.log(err?.data?.message || err.error);
        toast.error(err?.data?.message || err.error);
      }
    }
  };
  const clickedUserForm = () => {
    setIsUserForm(!isUserForm);
  };
  return (
    <div className='container mx-auto'>
      <button
        className={`${
          isUserForm ? 'hidden' : 'block'
        } bg-blue-950 text-white px-4 py-2 rounded mt-4 mx-auto w-10/12`}
        onClick={clickedUserForm}
      >
        Register User
      </button>
      <div
        className={`${
          isUserForm ? 'block' : 'hidden'
        } bg-gray-100 p-6 rounded shadow-lg`}
      >
        <form className='space-y-4' onSubmit={onSubmit}>
          <h2>Register User</h2>
          <div className='flex flex-col '>
            <label htmlFor='userFirstName'>First Name</label>
            <input
              className='bg-gray-300 rounded px-4 py-1'
              type='text'
              name='firstName'
              id='userFirstName'
              value={firstName}
              onChange={onChange}
            />
          </div>
          <div className='flex flex-col '>
            <label htmlFor='userLastName'>Last Name</label>
            <input
              className='bg-gray-300 rounded px-4 py-1'
              type='text'
              name='lastName'
              id='userLastName'
              value={lastName}
              onChange={onChange}
            />
          </div>
          <div className='flex flex-col '>
            <label htmlFor='selectUserLevel'>Class</label>
            <select
              name='level'
              id='selectUserLevel'
              className='bg-gray-300 rounded px-4 py-1'
              onChange={onChange}
            >
              <option value=''>Select Class</option>
              <option value='Creche'>Creche</option>
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
            <label htmlFor='userLevel'> Sub Class</label>
            <select
              name='subLevel'
              id='userSubLevel'
              onChange={onChange}
              className='bg-gray-300 rounded px-4 py-1'
            >
              <option value=''>Select sub class category</option>
              <option value='A'>A</option>
              <option value='B'>B</option>
              <option value='C'>C</option>
              <option value='D'>D</option>
            </select>
          </div>

          <div className='flex flex-col '>
            <label htmlFor='userEmail'>Email</label>
            <input
              className='bg-gray-300 rounded px-4 py-1'
              type='email'
              name='email'
              id='userEmail'
              value={email}
              onChange={onChange}
            />
          </div>
          <div className='flex flex-col '>
            <label htmlFor='userPassword'>Password</label>
            <input
              className='bg-gray-300 rounded px-4 py-1'
              type='password'
              name='password'
              id='userPassword'
              value={password}
              onChange={onChange}
            />
          </div>
          <div className='flex flex-col '>
            <label htmlFor='password2'>Confirm Password</label>
            <input
              className='bg-gray-300 rounded px-4 py-1'
              type='password'
              name='password2'
              id='password2'
              value={password2}
              onChange={onChange}
            />
          </div>
          {isLoading ? (
            <Spinner clip={true} />
          ) : (
            <>
              <button
                className='bg-blue-950 text-white px-2 py-1 rounded'
                type='submit'
              >
                Register
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
  );
}

export default AddUser;
