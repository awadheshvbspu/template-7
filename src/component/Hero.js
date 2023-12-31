import React from 'react';
import hero from '../assests/heroImg.png';
import  {AiOutlineSearch} from 'react-icons/ai'

export default function Hero() {
  return (
    <>
        <div className='w-full bg-white py-20 '>
        <div className='md:max-w-[1420px] max-w-[600px] m-auto grid md:grid-cols-2 md:px-0 px-4'>
        <div className='flex flex-col justify-start gap-4'>
            <p className='py-2 text-2xl text-[#20B486] font-bold'>START TO SUCCESS</p>
            <h1 className='md:leading-[72px] py-2 md:text-6xl text-5xl font-semibold '>Access To <span className='text-[#20B486]'>5000+</span> Courses
                    from <span  className='text-[#20B486]'>300</span> Instructors 
                    & Institutions</h1>
            <p className='py-2 text-lg text-gray-900'>Various versions have evolved over the years, sometimes by accident.</p>
            <form className='bg-white border max-w-[500px] p-4 shadow-lg rounded-md flex justify-between input-box-shadow'>
                <input type='text' className='bg-white border ' placeholder='What do you wnat to learn?' />
                <button>

                <AiOutlineSearch size={20} className='icon' style={{color:'black'}}/>
                </button>
            </form>
        </div>
        <img src={hero} alt='' className='md:order-last order-first' />

        </div>

        </div>
    </>
  )
}
