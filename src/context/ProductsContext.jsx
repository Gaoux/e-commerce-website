import React, { createContext, useState } from 'react';
import useFetch from '../hooks/useFetch';
import { PRODUCTS_API_URL } from '../api/ProductsAPI';

const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const {
    data: products,
    loading: productsLoading,
    error: productsError,
  } = useFetch(PRODUCTS_API_URL, []);

  // Product Detail - Open/Close
  const [showProductDetail, setShowProductDetail] = useState(false);

  const openProductDetail = () => {
    setShowProductDetail(true);
  };
  const closeProductDetail = () => {
    setShowProductDetail(false);
  };

  //Product Detail - Show product
  const [productToShow, setProductToShow] = useState({});

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
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export { ProductsContext, ProductsProvider };
