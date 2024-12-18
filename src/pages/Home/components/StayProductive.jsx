import React from 'react'

const StayProductive = () => {
  return (
     <section className='pb-[200px]'>
        <div className='container grid grid-cols-1 md:grid-cols-2 gap-[30px] place-items-center'>
            <div className='img'>   
                <img src="/src/images/illustration-stay-productive.png" alt="illustration-stay-productive image" />
            </div>
            <div className='text-white'>
                <h3 className='font-medium text-[35px] leading-[50px]'>
                    Stay Productive,
                    <br />
                    wherever you are
                </h3>
                <div className='my-[15px] font-normal text-sm tracking-[.8px]'>
                    <p className='mb-[15px]'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Natus, adipisci? Dolorum possimus vel tempore
                        sapiente ipsam culpa ut aliquam amet?
                    </p>
                    <p className='mb-[15px]'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Natus, adipisci? Dolorum possimus vel tempore
                        sapiente ipsam culpa ut aliquam amet?
                    </p>
                    <a href='/' className='text-[#67dbda] hover:text-[#42b0d1] border-b-[2px] border-[#67dbda] border-solid gap-[8px] transition-all duration-200 pb-[3px] flex items-center w-fit '>
                    See how Fylo works
                    <img src="/src/images/icon-arrow.svg" alt="" className='w-[20px] h-[20px] object-contain animate-moveRight'/>
                    </a>
                </div>
            </div>
        </div>
     </section>
  )
}

export default StayProductive