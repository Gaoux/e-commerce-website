import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaCircleXmark } from 'react-icons/fa6';
import './styles.css';
import { ProductsContext } from '../../context/ProductsContext';
import OrderCard from '../OrderCard';
import { totalPrice } from '../../utils';

function CheckoutSideMenu() {
  const {
    showCheckoutSideMenu,
    closeCheckoutSideMenu,
    cartProducts,
    addOrder,
  } = useContext(ProductsContext);

  const handleCheckout = () => {
    const orderToAdd = {
      date: '01.02.23',
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts),
    };
    addOrder(orderToAdd);
  };

  const emptyCart = !cartProducts.length;

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
        {emptyCart && (
          <p className='text-light mt-5 text-sm'>
            You don't have any products in your cart.
          </p>
        )}
        {cartProducts?.map((product) => (
          <OrderCard key={product.id} data={product} />
        ))}
      </div>
      <div className='mx-3 mb-2 rounded-lg border border-black/20 bg-slate-100 px-6 shadow-md shadow-black/20'>
        <p className='flex items-center justify-between py-1'>
          <span>Total: </span>
          <span className='text-2xl font-medium'>
            ${totalPrice(cartProducts)}
          </span>
        </p>
      </div>
      <Link
        to={`/my-orders/0`}
        className='m-2 flex w-[340px] items-center justify-center'
      >
        <button
          className={`${
            emptyCart ? 'bg-black/75' : 'bg-black'
          } w-full rounded-lg py-3 text-white shadow-md shadow-black/50`}
          onClick={handleCheckout}
          disabled={emptyCart}
        >
          Checkout
        </button>
      </Link>
    </aside>
  );
}

export default CheckoutSideMenu;
