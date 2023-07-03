import React from 'react';

function Card() {
  return (
    <div className='h-60 w-56 cursor-pointer overflow-hidden rounded-lg bg-white'>
      <figure className='relative mb-2 h-4/5 w-full'>
        <span className='absolute bottom-0 left-0 m-2 rounded-lg bg-white/60 px-3 py-0.5 text-xs text-black'>
          Electronics
        </span>
        <img
          className='h-full w-full object-cover'
          src='https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='headphones'
        />
        <div className='absolute right-0 top-0 m-2 flex h-6 w-6 items-center justify-center rounded-full bg-white p-1'>
          +
        </div>
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light'>Headphones</span>
        <span className='text-lg font-medium'>$300</span>
      </p>
    </div>
  );
}

export default Card;
