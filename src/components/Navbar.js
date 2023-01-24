import React from 'react';
import profile from '../assets/profile1.jpg';
import { AiFillMessage } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx'
const Navbar = () => {
  return (
    <div className='flex item-center justify-between px-4 pt-2 pb-2 bg-[#eeedef] h-[4.5rem] w-screen md:w-full md:rounded-tl-[2rem]'>
        {/* Header */}
        <div className='w-12 h-12 flex'>
            <img src={profile} alt='Profile' className='object-cover rounded-full' />
        </div>
        <div className='flex items-center gap-6'>
            <AiFillMessage className='w-6 h-6'/>
            <RxHamburgerMenu className='w-6 h-6'/>
        </div>
    </div>
  )
}

export default Navbar
