import React, { useContext } from 'react';
import { FaCircleXmark } from 'react-icons/fa6';
import './styles.css';
import { ProductsContext } from '../../context/ProductsContext';
import { totalPrice } from '../../utils';
import OrderCard from '../OrderCard';

function CheckoutSideMenu() {
  const { showCheckoutSideMenu, closeCheckoutSideMenu, cartProducts } =
    useContext(ProductsContext);

  return (
    <aside
      className={`${
        showCheckoutSideMenu && 'checkout-menu--active '
      } checkout-menu fixed	 right-0 top-[68px] flex w-[360px] flex-col rounded-l-lg border border-black/20 bg-white shadow-md shadow-black/50 `}
    >
      <div className='flex items-center justify-between p-6'>
        <h2 className='text-xl font-medium'>My order</h2>
        <div onClick={closeCheckoutSideMenu} className='cursor-pointer'>
          <FaCircleXmark className=' text-black' size={27} />
        </div>
      </div>
      <div className=' max-h-[500px] min-h-[70px] overflow-y-scroll px-6'>
        {!cartProducts.length && (
          <p className='text-light mt-5 text-sm'>
            You don't have any products in your cart yet.
          </p>
        )}
        {cartProducts?.map((product) => (
          <OrderCard key={product.id} data={product} />
        ))}
      </div>
      <div className='mx-2 mb-2 rounded-lg border border-black/20 bg-slate-100 px-6 shadow-md shadow-black/50'>
        <p className='flex items-center justify-between py-1'>
          <span>Total: </span>
          <span className='text-2xl font-medium'>
            ${totalPrice(cartProducts)}
          </span>
        </p>
      </div>
    </aside>
  );
}

export default CheckoutSideMenu;
