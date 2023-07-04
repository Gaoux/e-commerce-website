import React, { useContext } from 'react';
import { FaXmark } from 'react-icons/fa6';
import { ProductsContext } from '../../context/ProductsContext';

function OrderCard({ data, isOrder }) {
  const { deleteProductToCart } = useContext(ProductsContext);
  const { title, price, image } = data;

  return (
    <div className='min mb-3 flex justify-between'>
      <div className='flex items-center gap-2'>
        <figure className='h-20 w-20 '>
          <img
            className='h-full w-full rounded-lg object-cover'
            src={image}
            alt={title}
          />
        </figure>
        <p className='text-sm font-light'>{title}</p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-lg font-medium'>${price}</p>
        {!isOrder && (
          <FaXmark
            className=' text-black'
            size={17}
            onClick={() => deleteProductToCart(data)}
          />
        )}
      </div>
    </div>
  );
}

export default OrderCard;
