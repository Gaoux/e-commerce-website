import React, { createContext, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
// import { useLocalStorage } from '../hooks/useLocalStorage';

const ShoppingCartContext = createContext();

function ShoppingCartProvider({ children }) {
  // Shopping Cart - Increment quantity
  const [count, setCount] = useLocalStorage('CART_COUNT_V1', 0);
  // Shoppping cart - Add products to cart
  const [cartProducts, setCartProducts] = useLocalStorage('CART_V1', []);

  const addProductToCart = (productData) => {
    setCartProducts([...cartProducts, productData]);
    setCount((count) => count + 1);
  };

  return (
    <ShoppingCartContext.Provider
      value={{ count, setCount, cartProducts, addProductToCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export { ShoppingCartContext, ShoppingCartProvider };
