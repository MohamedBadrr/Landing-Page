import React from 'react'
import StayProductive from '../Home/components/StayProductive'
import { Testimonials } from '../Home/components/Testimonials'
import GetStarted from '../Home/components/GetStarted'

const AboutUs = () => {
  return (
    <section className='pt-[150px]'>
        <h1 className='italic text-center text-[#62e0d9] text-[35px] md:text-[50px] font-semibold py-[30px]'>About Us & Our Productivy</h1>
        <StayProductive />
        <h1 className='italic text-center text-[#62e0d9] text-[35px] md:text-[50px] font-semibold pb-[50px]'>Our Testimonials</h1>
        <Testimonials />
       <div className='relative'>
       <h1 className='absolute top-[-300px] left-[50%] translate-x-[-50%] italic text-center text-[#62e0d9] text-[35px] md:text-[50px] font-semibold pb-[50px]'>Contact Us</h1>
       <GetStarted />
       </div>
    </section>
  )
}

export default AboutUs