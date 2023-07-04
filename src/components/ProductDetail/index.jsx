import React, { useContext } from 'react';
import { FaCircleXmark } from 'react-icons/fa6';
import { ProductsContext } from '../../context/ProductsContext';
import './styles.css';

function ProductDetail() {
  const { showProductDetail, closeProductDetail, productToShow } =
    useContext(ProductsContext);
  return (
    <aside
      className={`${
        showProductDetail && 'product-detail--active '
      } product-detail fixed right-0 top-[68px] flex  w-[360px] flex-col rounded-l-lg border border-black/20 bg-white shadow-md shadow-black/50 `}
    >
      <div className='flex items-center justify-between p-6'>
        <h2 className='text-xl font-medium'>Details</h2>
        <div onClick={closeProductDetail} className='cursor-pointer'>
          <FaCircleXmark className=' text-black' size={27} />
        </div>
      </div>
      <figure className='px-6'>
        <img
          className='h-full w-full'
          src={productToShow.image}
          alt={productToShow.title}
        />
      </figure>
      <p className='flex flex-col p-6'>
        <span className='mb-2 text-2xl font-medium'>
          ${productToShow.price}
        </span>
        <span className='text-md mb-2 font-medium'>{productToShow.title}</span>
        <span className='text-md font-light'>{productToShow.description}</span>
      </p>
    </aside>
  );
}

export default ProductDetail;
