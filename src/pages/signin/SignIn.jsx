import React, { useState } from 'react'
import { useAuth } from '../../components/Auth';
import { useLocation, useNavigate } from 'react-router-dom';

const SignIn = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const redirectPath = location.state?.path || "/";
    const [user , setUser] = useState({
        username:"",
        password:"",
    });
    const signin= (e)=>{
        e.preventDefault();
        auth.login(user);
        navigate(redirectPath , {replace : true});
    }
  return (
    <section className='h-[70vh] md:h-[100vh]'>
        <div className='absolute left-[50%] translate-x-[-50%] top-[100px] md:w-[450px] max-w-full h-[550px] rounded-[5px] mt-[120px] md:mt-[20px] border border-white shadow-[0px_0px_10px_0px_#42b0d1]'>
            <div className='text-white flex justify-center items-center flex-col p-[30px]'>
                <img src="/src/images/logo.svg" alt="logo" className='py-[50px]' />
                <h2 className='pb-[20px] font-semibold text-[25px] text-[#9de8ff] tracking-[.8px] italic'>welcome Back</h2>
                <form action="">
                   <div>
                   <label htmlFor="email" className='italic block font-sans font-semibold my-[2px] ml-[5px]'>Email</label>
                   <input onChange={(e)=>{setUser({...user,username : e.target.value})}} className='bg-inherit border border-b-[.5px] outline-none border-gray-500 w-[270px] md:w-[330px] h-[35px] rounded-[5px] pl-[15px]' type="email" placeholder="example@mail.com"/>
                   </div>
                    <div className='mt-4 mb-1'>
                    <label htmlFor="password" className='italic block font-sans font-semibold my-[2px]'>Password</label>
                    <input onChange={(e)=>{setUser({...user,password: e.target.value})}} className='bg-inherit border border-b-[.5px] outline-none border-gray-500 w-[270px] md:w-[330px] h-[35px] rounded-[5px]  pl-[15px]' type="password" placeholder='Enter Password' />
                    </div>
                    <div className=' flex justify-between'>
                        <div>
                        <input type="checkbox" className='mt-1'/>
                        <label htmlFor="checkbox" className='text-sm mx-1'>Remember me</label>
                        </div>
                        <a href="/" className='text-primary text-sm mt-1'>Forget password?</a>
                    </div>
                    <div className='flex items-center '>
                    <button onClick={signin} className='bg-[#42b0d1] hover:bg-[#8cdae4] transition-all duration-200 mx-auto mt-9 text-center py-[5px] px-[100px] border-[1px] border-[#42b0d1] text-white font-bold rounded-[10px]'>Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default SignIn