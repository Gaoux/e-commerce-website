import React, { createContext, useMemo, useState } from 'react';
import useFetch from '../hooks/useFetch';
import useLocalStorage from '../hooks/useLocalStorage';
import { PRODUCTS_API_URL } from '../api/ProductsAPI';

const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const {
    data: products,
    loading: productsLoading,
    error: productsError,
  } = useFetch(PRODUCTS_API_URL, []);

  // Close all menus
  const closeMenus = () => {
    closeCheckoutSideMenu();
    closeProductDetail();
  };

  // Product Detail - Open/Close
  const [showProductDetail, setShowProductDetail] = useState(false);
  const openProductDetail = () => {
    closeMenus();
    setShowProductDetail(true);
  };
  const closeProductDetail = () => setShowProductDetail(false);

  //Product Detail - Show product
  const [productToShow, setProductToShow] = useState({});

  // Shoppping cart
  const [cartProducts, setCartProducts] = useLocalStorage('CART_V1', []);

  // Checkout Side Menu - Open/Close
  const [showCheckoutSideMenu, setShowCheckoutSideMenu] = useState(false);
  const openCheckoutSideMenu = () => {
    closeMenus();
    setShowCheckoutSideMenu(true);
  };
  const closeCheckoutSideMenu = () => setShowCheckoutSideMenu(false);

  // Add products to cart
  const addProductToCart = (productData) => {
    setCartProducts([...cartProducts, productData]);
    openCheckoutSideMenu();
  };
  //Delete product to cart
  const deleteProductToCart = (productData) => {
    const newCartProducts = cartProducts.filter(
      (product) => product.id !== productData.id
    );
    setCartProducts(newCartProducts);
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        productsLoading,
        productsError,
        showProductDetail,
        openProductDetail,
        closeProductDetail,
        productToShow,
        setProductToShow,
        cartProducts,
        addProductToCart,
        deleteProductToCart,
        showCheckoutSideMenu,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export { ProductsContext, ProductsProvider };
