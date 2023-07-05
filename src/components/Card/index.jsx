import React, { useContext } from 'react';
import { FaCheck } from 'react-icons/fa6';
import { BiPlus } from 'react-icons/bi';
import { BiCartAdd } from 'react-icons/bi';
import { ProductsContext } from '../../context/ProductsContext';

function Card({ data }) {
  const {
    openProductDetail,
    setProductToShow,
    addProductToCart,
    cartProducts,
  } = useContext(ProductsContext);

  const renderIcon = (id) => {
    if (isInCart) {
      return (
        <div
          className='absolute right-0 top-0 m-2 flex h-7 w-7 items-center justify-center rounded-full bg-green-700 p-1 shadow-lg transition-all'
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <FaCheck size={13} className=' text-white' />
        </div>
      );
    } else {
      return (
        <div
          className='absolute right-0 top-0 m-2 flex h-7 w-7 items-center justify-center rounded-full bg-blue-700 p-1 shadow-lg transition-all'
          onClick={(e) => {
            e.stopPropagation();
            addProductToCart(data);
          }}
        >
          <BiCartAdd size={17} className=' text-white' />
        </div>
      );
    }
  };

  const showProduct = () => {
    openProductDetail();
    setProductToShow(data);
  };
  const isInCart = cartProducts.some((product) => product.id === data.id);
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
          className={`${
            isInCart ? 'bg-green-500' : 'bg-white'
          } absolute right-0 top-0 m-2 flex h-7 w-7 items-center justify-center rounded-full p-1 shadow-md shadow-black transition-all ease-linear`}
          onClick={(e) => {
            e.stopPropagation();
            if (!isInCart) addProductToCart(data);
          }}
        >
          {isInCart ? <FaCheck size={13} /> : <BiPlus size={17} />}
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
