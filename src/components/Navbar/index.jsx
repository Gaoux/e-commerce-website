import React, { useContext } from 'react';
import NavItem from '../NavItem';
import { FaShoppingCart } from 'react-icons/fa';
import { ProductsContext } from '../../context/ProductsContext';

function Navbar() {
  const { toggleCheckoutSideMenu, cartProducts, showCheckoutSideMenu } =
    useContext(ProductsContext);
  const activeStyle = 'underline underline-offset-4 text-blue-900';
  return (
    <nav className='fixed top-0 z-10 flex w-full items-center justify-between bg-white px-8 py-5 text-sm shadow-md'>
      <ul className='flex items-center gap-3'>
        <li className='text-lg font-semibold'>
          <NavItem to='/'>Shopi</NavItem>
        </li>
        <li>
          <NavItem to='/all' activeStyle={activeStyle}>
            All
          </NavItem>
        </li>
        <li>
          <NavItem to='/clothes' activeStyle={activeStyle}>
            Clothes
          </NavItem>
        </li>
        <li>
          <NavItem to='/electronics' activeStyle={activeStyle}>
            Electronics
          </NavItem>
        </li>
        <li>
          <NavItem to='/furnitures' activeStyle={activeStyle}>
            Furnitures
          </NavItem>
        </li>
        <li>
          <NavItem to='/toys' activeStyle={activeStyle}>
            Toys
          </NavItem>
        </li>
        <li>
          <NavItem to='/others' activeStyle={activeStyle}>
            Others
          </NavItem>
        </li>
      </ul>

      <ul className='flex items-center gap-3'>
        <li className='text-black/60'>gustavo@example.com</li>
        <li>
          <NavItem to='/my-orders' activeStyle={activeStyle}>
            My orders
          </NavItem>
        </li>
        <li>
          <NavItem to='/my-account' activeStyle={activeStyle}>
            My account
          </NavItem>
        </li>
        <li>
          <NavItem to='/sign-in' activeStyle={activeStyle}>
            Sign in
          </NavItem>
        </li>
        <li
          className={`${
            showCheckoutSideMenu && 'text-red-600/70'
          } flex items-center gap-1 transition-colors`}
          onClick={toggleCheckoutSideMenu}
        >
          <FaShoppingCart
            size={showCheckoutSideMenu ? 23 : 20}
            className='transition-all'
          />{' '}
          {cartProducts.length}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
