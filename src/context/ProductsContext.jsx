import React, { createContext, useEffect, useMemo, useState } from 'react';
import useFetch from '../hooks/useFetch';
import useLocalStorage from '../hooks/useLocalStorage';
import { PRODUCTS_API_URL } from '../api/ProductsAPI';

const ProductsContext = createContext();

function ProductsProvider({ children }) {
  // Close all menus
  const closeMenus = () => {
    closeCheckoutSideMenu();
    closeProductDetail();
  };
  //Get products
  const {
    data: products,
    loading: productsLoading,
    error: productsError,
  } = useFetch(PRODUCTS_API_URL, []);

  // Search input value
  const [searchByTitle, setSearchByTitle] = useState('');
  // Get
  const [searchByCategory, setSearchByCategory] = useState('');
  //Filtered products
  const [filteredProducts, setFilteredProducts] = useState([]);

  //Get products by inpput search value
  useEffect(() => {
    const filterProductsByTitle = (products, searchValue) => {
      return products?.filter(
        (product) =>
          product.title.toLowerCase().includes(searchValue.toLowerCase()) ||
          product.category.toLowerCase().includes(searchValue.toLowerCase())
      );
    };
    const filterProductsByCategory = (products, searchValue) => {
      return products?.filter((product) =>
        product.category.toLowerCase().includes(searchValue.toLowerCase())
      );
    };
    const filterBy = (
      searchType,
      products,
      searchByTitle,
      searchByCategory
    ) => {
      if (searchType === 'BY_SEARCH_INPUT')
        return filterProductsByTitle(products, searchByTitle);
      else if (searchType === 'BY_CATEGORY')
        return filterProductsByCategory(products, searchByCategory);
      else if (searchType === 'BY_SEARCH_INPUT_AND_CATEGORY')
        return filterProductsByTitle(
          filterProductsByCategory(products, searchByCategory),
          searchByTitle
        );
      else if (!searchType) {
        return products;
      }
    };

    if (searchByTitle && searchByCategory)
      setFilteredProducts(
        filterBy(
          'BY_SEARCH_INPUT_AND_CATEGORY',
          products,
          searchByTitle,
          searchByCategory
        )
      );
    else if (!searchByCategory && searchByTitle)
      setFilteredProducts(
        filterBy('BY_SEARCH_INPUT', products, searchByTitle, searchByCategory)
      );
    else if (searchByCategory && !searchByTitle)
      setFilteredProducts(
        filterBy('BY_CATEGORY', products, searchByTitle, searchByCategory)
      );
    else {
      setFilteredProducts(filterBy(null, products, searchByCategory));
    }
  }, [products, searchByTitle, searchByCategory]);

  // Product Detail - Open/Close
  const [showProductDetail, setShowProductDetail] = useState(false);
  const openProductDetail = () => {
    closeMenus();
    setShowProductDetail(true);
  };
  const closeProductDetail = () => setShowProductDetail(false);

  //Product Detail - Show product
  const [productToShow, setProductToShow] = useState({});

  // Shoppping cart - products
  const [cartProducts, setCartProducts] = useLocalStorage('CART_V1', []);
  // Shoppping cart - Order
  const [orders, setOrders] = useLocalStorage('ORDERS_V1', []);
  // Shoppping cart - Add Order
  const addOrder = (newOrder) => {
    setCartProducts([]);
    setOrders([newOrder, ...orders]);
  };
  // Checkout Side Menu - Open/Close
  const [showCheckoutSideMenu, setShowCheckoutSideMenu] = useState(false);
  const openCheckoutSideMenu = () => {
    closeMenus();
    setShowCheckoutSideMenu(true);
  };
  const closeCheckoutSideMenu = () => setShowCheckoutSideMenu(false);
  const toggleCheckoutSideMenu = () => {
    if (showCheckoutSideMenu) closeCheckoutSideMenu();
    else openCheckoutSideMenu();
  };
  // Shoppping cart - Add products to cart
  const addProductToCart = (productData) => {
    setCartProducts([...cartProducts, productData]);
    openCheckoutSideMenu();
  };
  // Shoppping cart - Delete product to cart
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
        searchByTitle,
        setSearchByTitle,
        setSearchByCategory,
        filteredProducts,
        showProductDetail,
        openProductDetail,
        closeProductDetail,
        productToShow,
        setProductToShow,
        cartProducts,
        orders,
        addOrder,
        addProductToCart,
        deleteProductToCart,
        showCheckoutSideMenu,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        toggleCheckoutSideMenu,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export { ProductsContext, ProductsProvider };
