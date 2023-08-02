import React, { useState } from 'react';
import logo from '../assests/logo.svg'
import lock from '../assests/lock.svg';
import menu from '../assests/hamburgerMenu.svg';
import close from '../assests/close.svg';

export default function Navbar() {
    const[toggle,setToggle] = useState(false);

    const handleOpen =()=>{
        setToggle(!toggle)
    }
  return (
    <>
        <div className='w-full h-[80px] bg-white border-b shadow-md'>
        <div className='md:max-w-[1420px] max-w-[600px] mx-auto  w-full h-full flex justify-between items-center md:px-0 px-4'>
            <img src={logo} alt='' className='h-[25px]'/>
            <div className='hidden md:flex items-center '>
            <ul className='flex gap-4 font-semibold'>
                <li className=' hover:text-[#20B486] duration-200 cursor-pointer '>Home</li>
                <li className=' hover:text-[#20B486] duration-200 cursor-pointer'>About</li>
                <li className=' hover:text-[#20B486] duration-200 cursor-pointer'>Support</li>
                <li className=' hover:text-[#20B486] duration-200 cursor-pointer'>Plateform</li>
                <li className=' hover:text-[#20B486] duration-200 cursor-pointer'>Pricing</li>
            </ul>
        </div>
        <div className='hidden md:flex'>
            <button className='flex justify-between items-center bg-transparent px-6 gap-2'>
        <img src={lock} alt='' />
            
            Login</button>
            <button className='bg-[#20B486] px-8 py-3 rounded-md text-white font-bold'>Sign up for Free</button>
        </div>
        <div className='md:hidden' onClick={handleOpen}>
            <img src={toggle ? close : menu} alt='' />
        </div>
        </div>
            <div className={toggle ? 'absolute z-10 p-4 bg-white w-full px-8 md:hidden':'hidden'}>
            <ul className=''>
                <li className='p-4 hover:bg-gray-200 rounded'>Home</li>
                <li className='p-4 hover:bg-gray-200 rounded'>About</li>
                <li className='p-4 hover:bg-gray-200 rounded'>Support</li>
                <li className='p-4 hover:bg-gray-200 rounded'>Plateform</li>
                <li className='p-4 hover:bg-gray-200 rounded'>Pricing</li>
                <div className='flex flex-col my-4 gap-4'>
                        <button className='border border-[20B486] flex justify-center items-center  bg-transparent  px-6 gap-2 py-4 rounded-md'>
                         <img src={lock}  alt=''/>
                         Login
                        </button>
                        <button className='px-8 py-5 rounded-md bg-[#20B486] text-white font-bold'>Sign Up For Free</button>
                    </div>
            </ul>
            </div>
        </div>
    </>
  )
}
