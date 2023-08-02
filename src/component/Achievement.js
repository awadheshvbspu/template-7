import React from 'react';
import hero from '../assests/achievement.png';
import { AiOutlineSearch } from 'react-icons/ai'
import { SlGraduation } from 'react-icons/sl'
import { FiVideo } from 'react-icons/fi'
import { SlPeople } from 'react-icons/sl'


export default function Achievement() {
    return (
        <>
            <div className='w-full bg-white py-20 '>
                <div className='md:max-w-[1320px] max-w-[600px] m-auto grid md:grid-cols-2 md:px-0 px-4'>
                    <div className='flex flex-col justify-center gap-4'>
                        <h1 className='md:leading-[72px]  text-3xl font-bold '> Our <span className='text-[#20B486]'>Achievements</span> </h1>
                        <p className='text-lg text-gray-900'>Various versions have evolved over the years, sometimes by accident.</p>
                        <div className='grid grid-cols-2 py-10 '>
                            <div className=' py-6 flex'>
                                   <div className='p-4  bg-[#E9F8F3] rounded-xl'>
                                   <SlGraduation size={30} style={{color:'#1A906B'}}/>
                                   </div>
                                   <div className='px-3 '>
                                <h1 className='text-2xl font-semibold'>300</h1>
                                <p className='text-[#6D737A]'>Instructor</p>
                            </div>
                            </div>
                            <div className=' py-6 flex'>
                                   <div className='p-4  bg-[#FFFAF5] rounded-xl'>
                                   <FiVideo size={30} style={{color:'#FFC27A'}}/>
                                   </div>
                                   <div className='px-3 '>
                                <h1 className='text-2xl font-semibold'>10,000+</h1>
                                <p className='text-[#6D737A]'>Video</p>
                            </div>
                            </div>
                            <div className='py-6 flex'>
                                   <div className='p-4  bg-[#FFEEF0] rounded-xl'>
                                   <SlGraduation size={30} style={{color:'#ED4459'}}/>
                                   </div>
                                   <div className='px-3 '>
                                <h1 className='text-2xl font-semibold'>20,000+</h1>
                                <p className='text-[#6D737A]'>Students</p>
                            </div>
                            </div>
                            <div className=' py-6 flex'>
                                   <div className='p-4  bg-[#F0F7FF] rounded-xl'>
                                   <SlPeople size={30} style={{color:'#0075FD'}}/>
                                   </div>
                                   <div className='px-3 '>
                                <h1 className='text-2xl font-semibold'>1,00,000+</h1>
                                <p className='text-[#6D737A]'>User's</p>
                            </div>
                            </div>
                            

                        </div>

                    </div>
                    <div className=''>
                        <img src={hero} alt='' className='m-auto md:order-last order-first' />
                    </div>
                </div>

            </div>
        </>
    )
}
