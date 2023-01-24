import React from 'react';
import profile3 from '../assets/profile3.jpg';
import wallpaper2 from '../assets/wallpaper1.jpg';
import landscape from '../assets/landscape.jpg'
import { HiOutlineEmojiHappy } from 'react-icons/hi';
import { IoSettings } from 'react-icons/io5';
import Message from './Message';

import { AiOutlineFile } from 'react-icons/ai';

const Chats = () => {
    const messsages = [
        { 
        name:"Sandi",
        message:"Hi i am ready", 
        css1:"bg-white/80", css2:"justify-start",
        timestamp:"10:35"},
        { 
        message:"Ok nice lets go",
        css1:"bg-black text-white", css2:"justify-end",
        timestamp:"10:36"},
        {
        name:"Sandi",
        message:"See you soon", 
        css1:"bg-white/80", css2:"justify-start",
        timestamp:"10:35"},
        { 
        message:"Nice",
        css1:"bg-black text-white", css2:"justify-end",
        timestamp:"10:36"},
        { 
            name:"Sandi",
            message:"Hi i am ready", 
            css1:"bg-white/80", css2:"justify-start",
            timestamp:"10:35"},
            { 
            message:"Ok nice lets go",
            css1:"bg-black text-white", css2:"justify-end",
            timestamp:"10:36"},
            {
            name:"Sandi",
            message:"See you soon", 
            css1:"bg-white/80", css2:"justify-start",
            timestamp:"10:35"},
            { 
            message:"Nice",
            css1:"bg-black text-white", css2:"justify-end",
            timestamp:"10:36"},            
    ];
  return (
    <div className='hidden md:flex flex-col justify-between items-center w-full bg-[#eeedef] border-l relative rounded-tr-[2rem]'>
        {/* Header */}
        <div className='flex justify-between items-center px-4 w-full h-[4.5rem] z-20 bg-[#eeedef] rounded-tr-[2rem]'>
            <div className='flex  items-center'>
            <div className='flex w-[3.1rem] h-[3.1rem] bg-[#2fbb46] rounded-full shrink-0'>
                <img src={profile3} alt='' className='object-cover rounded-full p-1'/>
            </div>
            <div className='pl-2 '>
                <p className='font-bold text-back/90'>Cool kids</p>
                <p className='tex-[14px] w-[15rem] whitespace-nowrap truncate text-gray-400'>Thus is the ptofile of the cool kid
                </p>
            </div>
            </div>
            <div className='text-[22px]'>
                <IoSettings />
            </div>
        </div>
        {/* Messages */}
        <div className='absolute top-0 w-full h-full'>
            <div className='absolute flex h-full w-full lg:hidden rounded-r-[2rem]'>
                <img src={wallpaper2} alt='' className='object-cover h-full w-full rounded-r-[3rem]'/>
            </div>
            <div className='hidden lg:flex absolute h-full w-full rounded-tr-[3rem]'>
                <img src={landscape} alt='' className='object-cover h-full w-full rounded-r-[3.1rem]'/>
            </div>
            <div className='relative z-20 pt-[4.5rem] mt-3 lg:mt-4'>
                {messsages.map((message) => <Message name={message.name} message={message.message}
                css1={message.css1}
                css2={message.css2}
                timestamp={message.timestamp}
                />)}
            </div>
        </div>
        {/* Input messsage */}
        <div className='relative z-20 bottom-0 bg-[#eeedef] w-full px-4 py-2 flex items-center rounded-br-[2rem] '>
            <div className=''>
                <HiOutlineEmojiHappy className='w-8 h-8'/>
            </div>
            <input type='text' placeholder='Type a message...' className='w-full mx-4 p-2 rounded-full pl-4' />
            <div className=''>
                <AiOutlineFile className='w-7 h-7'/>
            </div>
        </div>
    </div>
  )
}

export default Chats;