'use client';
import React, { useState } from 'react';
import ConfirmationModal from './ConfirmationModal';
import { useGraduateStudentsMutation } from '@/src/features/students/studentApiSlice';
import Spinner from './Spinner';
import { toast } from 'react-toastify';

const GraduateStudents = () => {
  const [showModal, setShowModal] = useState(false);
  const [graduateStudent, { isLoading }] = useGraduateStudentsMutation();
  const handleGraduateStudents = async () => {
    try {
      const res = await graduateStudent().unwrap();
      toast.success(res);
      setShowModal(false); // Close the modal after deletion
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  const confirmGraduateStudents = () => {
    setShowModal(true); // Show the confirmation modal
  };
  return (
    <div>
      <button
        className='bg-red-600 my-2 w-40 text-white p-3 rounded'
        onClick={confirmGraduateStudents}
      >
        {isLoading ? <Spinner clip={true} size={25} /> : 'Graduate students'}
      </button>
      <ConfirmationModal
        isOpen={showModal}
        message='Are you sure you want to move all students to their next classes? This action is irreversible'
        onConfirm={handleGraduateStudents} // Confirm action
        onCancel={() => setShowModal(false)} // Cancel action
      />
    </div>
  );
};

export default GraduateStudents;
