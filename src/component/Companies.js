import React from 'react';
import comp1 from '../assests/company-logo-1.png';
import comp2 from '../assests/company-logo-2.png';
import comp3 from '../assests/company-logo-3.png';
import comp4 from '../assests/company-logo-4.png';

export default function Companies() {
  return (
    <>
        <div className='bg-white w-full py-[15px]'>
        <div className='md:max-w-[1420px] m-auto max-w-[600px]'>
            <h1 className='text-center text-2xl font-bold text-[#536E96]'>Trusted by over 25,000 teams around the world.</h1>
            <p className='text-center text-[#536E96] text-2xl'>Leading companies use the same courses to help employees keep their skills fresh.</p>
            <div className='flex items-center justify-center py-8 md:gap-8'>
            <div className='grid md:grid-cols-4 grid-cols-2 gap-2'>
                <img src={comp1} alt='' />
                <img src={comp2} alt='' />
                <img src={comp3} alt='' />
                <img src={comp4} alt='' />
                </div>
            </div>
        </div>
        </div>
    </>
  )
}
