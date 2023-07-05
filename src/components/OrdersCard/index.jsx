import React, { useContext } from 'react';
import {
  FaChevronRight,
  FaRegCalendar,
  FaBagShopping,
  FaDollarSign,
} from 'react-icons/fa6';

function OrdersCard({ data }) {
  const { date, totalPrice, totalProducts } = data;

  return (
    <div className='mb-3 flex w-80 items-center justify-between rounded-lg border border-black/20 p-4 shadow-md shadow-black/20'>
      <div className='flex w-full justify-between'>
        <p className='flex flex-col'>
          <span className='flex items-center justify-center gap-2'>
            <FaRegCalendar className='text-blue-500 ' /> {date}
          </span>
          <span className='flex items-center justify-center gap-2'>
            <FaBagShopping className=' text-orange-500' />
            {totalProducts} articles
          </span>
        </p>
        <p className='flex items-center justify-center gap-2'>
          <FaDollarSign className='mr-[-6px] text-black/40' size={16} />
          <span className='pb-1 text-2xl font-medium'>{totalPrice}</span>
          <FaChevronRight />
        </p>
      </div>
    </div>
  );
}

export default OrdersCard;
