import React from 'react';

const Contact = ({img, name, message}) => {
  return (
    <div className='overflow-hidden '>
      <div className='flex justify-between  pt-2 pb-2 rounded-bl-[4rem] border-b  bg-white px-4'>
      <div className='flex items-center'>
      <div className='flex w-16 h-16'>
      <img src={img} alt='' className='object-cover w-full rounded-full'/>
      </div>
      <div className='pl-3'>
          <p className='font-semibold text-[18px]'>{name}</p>
          <p className='text-gray-600 w-[20rem] md:w-[10rem] lg:w-[20rem] truncate'>{message}</p>
          </div>
      </div>
          <div className='flex h-full text-gray-400'>
            <p className=''>8:51</p>
          </div>
    </div>
    </div>
  )
}

export default Contact;
