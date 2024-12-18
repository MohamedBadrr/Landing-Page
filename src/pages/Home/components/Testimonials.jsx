import React, { useState } from 'react'
import TestimonialBox from './TestimonialBox';

export const Testimonials = () => {
    const[testDate , setTestData] = useState([
        {
        id:"1",
        name:"Badr",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, dicta!ipsum dolor sit amet consectetur adipisicing elit. Eveniet, dicta! ",
        position:"Founder & CEO, Huddle",
        image:"profile-2.jpg",
        },
        {
        id:"2",
        name:"Ahmed",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, dicta!ipsum dolor sit amet consectetur adipisicing elit. Eveniet, dicta!",
        position:"Front-end Developer",
        image:"profile-1.jpg",
        },
        {
            id:"3",
            name:"Fatma",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, dicta!ipsum dolor sit amet consectetur adipisicing elit. Eveniet, dicta!",
            position:"Back-end Developer",
            image:"profile-3.jpg",
        }]);
  return (
    <section className='pb-[400px]'>
        <div className='container relative'>
            <div className='absolute left-[20px] top-[-35px] z-1'>
                <img src="/src/images/bg-quotes.png" alt="quotes"/>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] relative z-10'>
                {testDate.map((item)=>{
                    return(
                        <TestimonialBox key={item.id} name={item.name} image={item.image} desc={item.desc} position={item.position}/>
                    );
                })}
            </div>
        </div>
    </section>
  )
}
