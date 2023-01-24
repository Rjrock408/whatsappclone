import React from 'react'
import { FiSearch } from 'react-icons/fi'

const Search = () => {
  return (
    <div className='relative flex items-center bg-[#f8f2f2] py-2 border pt-1'>
        <div className='absolute left-6'>
            <FiSearch/>
        </div>
      <input type='search' placeholder='Search for friends' className='w-full pl-8 m-2 border mt-4 outline-0 rounded-[1rem] p-1' />
    </div>
  );
};

export default Search
