import React from 'react';
import profile from '../assets/profile1.jpg';
import profile2 from '../assets/profile2.jpeg';
import profile3 from '../assets/profile3.jpg';
import profile4 from '../assets/profile3.jpg';
import Contact from './Contact';

const Contacts = () => {
        const contacts = [
            {img: profile, 
            name:"cool kid",
            message:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
            {img: profile2, name:"Sister", 
            message:'How are you and typesetting industry'},
            {img: profile3, name:"Briter", 
            message:'This is the first message lorem'},
            {img: profile4,
            name:"Sandy",
            message:'Hello'},
            {img: profile,
            name:"Pradeep",
            message:'This is the first message'},
            {img: profile, 
                name:"cool kid",
                message:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
                {img: profile2, name:"Sister", 
                message:'How are you and typesetting industry'},
                {img: profile3, name:"Briter", 
                message:'This is the first message lorem'},
        ];
  return (
    <div>
      <div className='md:w-[20rem] lg:w-[30rem] md:px-4'>
        {contacts.map((contact) => (
        <Contact 
        img={contact.img} 
        name={contact.name} 
        message={contact.message} 
        />
        ))}
      </div>
    </div>
  );
};

export default Contacts;