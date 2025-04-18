'use client';
import React, { useRef, useState, useEffect } from 'react';
import DeleteStudentBtn from '@/components/Student/DeleteStudentBtn';
import Spinner from '@/components/Spinner';
import UpdateStudentBtn from '@/components/Student/UpdateStudentBtn';
import { useParams } from 'next/navigation';
import style from '../../../components/styles/profile.module.css';
import ReactToPrint from 'react-to-print';
import {
  useGetStudentQuery,
  useUpdateStudentMutation,
} from '@/src/features/students/studentApiSlice';
import LetterHead from '@/components/LetterHead';
import Profile from '@/components/StudentProfile';
import { FaArrowLeft, FaPrint } from 'react-icons/fa';
import GenerateResult from '@/components/GenerateResult';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import ChangePasswordBtn from '@/components/ChangePassword';
import { toast } from 'react-toastify';
const StudentProfile = React.forwardRef(() => {
  const { id } = useParams();
  const componentRef = useRef();
  const { user } = useSelector((state) => state.auth);
  const [studentId, setStudentId] = useState('');

  useEffect(() => {
    if (id) {
      setStudentId(id);
    }
  }, [id]);

  const [updateStudent, { isLoading: loadingUpdateFees }] =
    useUpdateStudentMutation();

  const { data, isLoading, error, refetch } = useGetStudentQuery(studentId, {
    skip: !studentId,
  });

  if (isLoading) return <Spinner clip={true} size={150} />;
  if (error) return <div>Error: {error.message}</div>;

  const handleFees = async () => {
    try {
      await updateStudent({
        studentId: data._id,
        fees: data.isPaid ? 'notPaid' : 'paid',
      }).unwrap();
      refetch();
      toast.success('Updated Successfully');
    } catch (error) {
        toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <div>
      <div className='bg-blue-950 h-20'></div>
      {data && (
        <div className={style.container}>
          <div ref={componentRef}>
            <LetterHead image={data?.image?.url} />
            <Profile student={data} />
          </div>
          <div className='mb-2'>
            {user?.isStudent ? (
              <ChangePasswordBtn />
            ) : (
              <>
                <GenerateResult />
                <UpdateStudentBtn student={data} />
              </>
            )}
            {user?.isAdmin && (
              <div>
                <ReactToPrint
                  trigger={() => (
                    <button className='border-black border-2 rounded mx-2 px-2'>
                      <FaPrint className='inline-block mr-1 mb-1' />
                      Print
                    </button>
                  )}
                  content={() => componentRef.current}
                />
                <button
                  onClick={handleFees}
                  className={
                    data.isPaid
                      ? 'bg-orange-500 text-white px-3 py-2 rounded'
                      : 'bg-green-500 text-white px-3 py-2 rounded'
                  }
                >
                  {loadingUpdateFees
                    ? 'Updating...'
                    : data.isPaid
                    ? 'Set fees to not paid'
                    : 'Set fees to paid'}
                </button>
                <DeleteStudentBtn student={data} />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
});

export default StudentProfile;
