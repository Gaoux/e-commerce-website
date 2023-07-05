import React, { useContext } from 'react';
import { FaChevronLeft } from 'react-icons/fa6';
import { ProductsContext } from '../../context/ProductsContext';
import OrderCard from '../../components/OrderCard';
import { Link } from 'react-router-dom';

function MyOrder() {
  const { orders } = useContext(ProductsContext);
  const path = window.location.pathname;
  const index = path.substring(path.lastIndexOf('/') + 1);
  const order = orders[index];
  return (
    <div>
      <div className='relative mb-7 flex w-80 items-center justify-center'>
        <Link to='/my-orders' className='absolute left-0 cursor-pointer'>
          <FaChevronLeft className=' text-black' size={23} />
        </Link>
        <h1 className='text-2xl font-medium'>My Order</h1>
      </div>
      <div className='rounded-lgpx-2 mt-4 flex w-80 flex-col '>
        {order?.products.reverse().map((product) => (
          <OrderCard key={product.id} data={product} isOrder={true} />
        ))}
      </div>
      <div className='mx-3 mb-2 w-full rounded-lg border border-black/20 bg-slate-100 px-6 shadow-md shadow-black/20'>
        <p className='flex items-center justify-between py-1'>
          <span>Total: </span>
          <span className='text-2xl font-medium'>${order?.totalPrice}</span>
        </p>
      </div>
    </div>
  );
}

export default MyOrder;
