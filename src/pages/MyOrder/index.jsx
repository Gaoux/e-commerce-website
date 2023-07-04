import React, { useContext } from 'react';
import { ProductsContext } from '../../context/ProductsContext';
import OrderCard from '../../components/OrderCard';

function MyOrder() {
  const { orders } = useContext(ProductsContext);
  const lastOrder = orders?.slice(-1)[0];
  return (
    <div>
      <div className='mb-2 text-center text-2xl font-medium'>My order</div>
      <div className='rounded-lgpx-2 mt-4 flex w-80 flex-col '>
        {lastOrder?.products?.map((product) => (
          <OrderCard key={product.id} data={product} isOrder={true} />
        ))}
      </div>
      <div className='mx-3 mb-2 w-full rounded-lg border border-black/20 bg-slate-100 px-6 shadow-md shadow-black/20'>
        <p className='flex items-center justify-between py-1'>
          <span>Total: </span>
          <span className='text-2xl font-medium'>${lastOrder.totalPrice}</span>
        </p>
      </div>
    </div>
  );
}

export default MyOrder;
