import React, { useContext } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { ShoppingCartContext } from '../../context/ShoppingCartContext';
import { ProductsContext } from '../../context/ProductsContext';

function Card({ data }) {
  const { addProductToCart } = useContext(ShoppingCartContext);
  const { openProductDetail, setProductToShow } = useContext(ProductsContext);

  const showProduct = () => {
    openProductDetail();
    setProductToShow(data);
  };

  return (
    <div
      className='mr-3 h-60 w-56 cursor-pointer overflow-hidden rounded-2xl bg-neutral-200 shadow-md'
      onClick={showProduct}
    >
      <figure className='relative mb-2 h-4/5 w-full'>
        <span className='absolute bottom-0 left-0 m-2 rounded-lg bg-cyan-950/70 px-3 py-0.5 text-xs text-white first-letter:uppercase'>
          {data.category}
        </span>
        <img
          className='h-full w-full object-cover'
          src={data.image}
          alt={data.title}
        />
        <div
          className='absolute right-0 top-0 m-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-700 p-1 shadow-lg'
          onClick={(e) => {
            e.stopPropagation();
            addProductToCart(data);
          }}
        >
          <FaPlus size={13} className=' text-white' />
        </div>
      </figure>
      <p className='flex justify-between'>
        <span className='px-3 text-sm font-light'>{data.title}</span>
        <span className='px-3 text-lg font-medium'>{`$${data.price}`}</span>
      </p>
    </div>
  );
}

export default Card;
