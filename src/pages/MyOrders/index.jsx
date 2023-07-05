import React, { useContext } from 'react';
import { FaChevronLeft } from 'react-icons/fa6';
import OrdersCard from '../../components/OrdersCard';
import { ProductsContext } from '../../context/ProductsContext';
import { Link } from 'react-router-dom';

function MyOrders() {
  const { orders } = useContext(ProductsContext);
  const emptyOrders = !orders?.length;

  return (
    <>
      <div className='relative mb-7 flex w-80 items-center justify-center'>
        <h1 className='text-2xl font-medium'>My Orders</h1>
      </div>
      <div>
        {emptyOrders && (
          <p className='text-light mt-5 text-sm'>You don't have any orders.</p>
        )}
        <div>
          {orders?.map((order, index) => (
            <Link key={index} to={`/my-orders/${index}`}>
              <OrdersCard data={order} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default MyOrders;
