import React, { useEffect, useState ,useRef} from 'react'
import logoPage from "../images/logo.svg";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from './Auth';
export const Header = () => {
  const [links,setLinks] = useState(["Features" , "AboutUs" , "Signin"]);
  const headerRef = useRef();
  const auth = useAuth();
  const navigate = useNavigate()
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY > 100){
        headerRef.current.style.background= "#0c1524";
        headerRef.current.style.padding= "20px 0px";
      }else{
        headerRef.current.style.background="transparent";
        headerRef.current.style.padding= "60px 0px"; 
      }
    })
  },[])

  const styleLink =({isActive})=>{
    return {
      textDecoration : isActive ? "none" : "underLine",
      fontWeight : isActive ? "bold" : "normal",
    }
  }
  const handleLogout = () =>{
    auth.logout();
    navigate("/");
  }
  return (
    <nav ref={headerRef} className='py-[60px] fixed top-0 left-0 w-full z-50 transition-all duration-500'>
      <div className='container mx-auto flex items-center justify-between px-[20px] flex-col sm:flex-row'>
        <div className='logo'>
          <Link to={"/"}><img src={logoPage} alt="logoPage" /></Link>
        </div>
        <div className='links mt-4 sm:mt-0'>
          <ul className='flex gap-[50px] '>
            <NavLink style={styleLink} to={"features"} className='text-white opacity-[.9] hover:text-[#42b0d1]  transition-all duration-200 hover:underline hover:cursor-pointer ' >Features</NavLink>
            <NavLink style={styleLink} to={"aboutus "} className='text-white opacity-[.9] hover:text-[#42b0d1]  transition-all duration-200 hover:underline hover:cursor-pointer ' >About Us</NavLink>
            {!auth.user && <NavLink style={styleLink} to={"signin"} className='text-white opacity-[.9] hover:text-[#42b0d1]  transition-all duration-200 hover:underline hover:cursor-pointer ' >Sign In</NavLink>}
            {auth.user && <button onClick={handleLogout}  className='text-center font-semibold w-[80px] h-[25px]  bg-[#42b0d1] hover:bg-[#8cdae4] transition-all duration-200 rounded-[30px]' >Logout</button>}
          </ul>
        </div>
      </div>
    </nav>
  )
}
