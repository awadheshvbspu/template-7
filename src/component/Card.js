import React from 'react';
import blog from '../assests/blog-1.png';
import StartRating from './StartRating';

export default function Card({course}) {
  return (
    <>
        <div className='bg-white drop-shadow-md overflow-hidden rounded-2xl mx-3 my-4 '>
        <img src={course.linkImg} alt='' className='h-40 w-full object-cover' />
        <div className='p-5 border border-b'>
        <h1 className='py-2 truncate'>{course.title}</h1>
       <StartRating rating={course.rating}/>
        </div>
        <h3 className='p-5 text-xl'>{course.price}</h3>
        <div className='absolute top-0 bg-white m-3 px-2 py-[2.5px] rounded font-bold'>
            {course.category}
        </div>
        </div>
    </>
  )
}
