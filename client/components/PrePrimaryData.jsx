import React from 'react';

const PrePrimaryData = ({ data }) => {
  return (
    <div className='bg-white shadow rounded-lg p-6'>
      <h3 className='text-xl font-semibold mb-4'>Pre Primary Data</h3>
      <table className='w-full table-auto'>
        <thead>
          <tr className='bg-gray-100 text-left'>
            <th className='p-3'>Class</th>
            <th className='p-3'>Male</th>
            <th className='p-3'>Female</th>
          </tr>
        </thead>
        <tbody>
          <tr className='border-b'>
            <td className='p-3'>Creche</td>
            <td className='p-3'>{data.crecheMales}</td>
            <td className='p-3'>{data.crecheFemales}</td>
          </tr>
          <tr className='border-b'>
            <td className='p-3'>Lower Reception</td>
            <td className='p-3'>{data.lowerReceptionMales}</td>
            <td className='p-3'>{data.lowerReceptionFemales}</td>
          </tr>
          <tr className='border-b'>
            <td className='p-3'>Upper Reception</td>
            <td className='p-3'>{data.upperReceptionMales}</td>
            <td className='p-3'>{data.upperReceptionFemales}</td>
          </tr>
          <tr className='border-b'>
            <td className='p-3'>Nursery 1</td>
            <td className='p-3'>{data.nursery1Males}</td>
            <td className='p-3'>{data.nursery1Females}</td>
          </tr>
          <tr className='border-b'>
            <td className='p-3'>Nursery 2</td>
            <td className='p-3'>{data.nursery2Males}</td>
            <td className='p-3'>{data.nursery2Females}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PrePrimaryData;
