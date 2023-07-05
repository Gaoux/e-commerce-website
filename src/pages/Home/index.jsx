import Card from '../../components/Card';
import React, { useContext, useEffect } from 'react';
import { ProductsContext } from '../../context/ProductsContext';
import { FaSearch } from 'react-icons/fa';
import ProductDetail from '../../components/ProductDetail';
import './styles.css';

function Home() {
  const {
    filteredProducts,
    productsLoading,
    productsError,
    searchByTitle,
    setSearchByTitle,
    setSearchByCategory,
  } = useContext(ProductsContext);

  const path = window.location.pathname;
  const category = path.substring(path.lastIndexOf('/') + 1);

  useEffect(() => {
    setSearchByCategory(category);
  }, [category]);

  const renderView = () => {
    if (productsLoading) {
      return (
        <svg className='loading-svg fixed top-[50%]' viewBox='25 25 50 50'>
          <circle r='20' cy='50' cx='50'></circle>
        </svg>
      );
    } else {
      if (!filteredProducts.length)
        return (
          <div className='fixed  top-[50%] '>
            <p className='text-center text-lg font-medium'>
              No products found.
            </p>
          </div>
        );
      else
        return (
          <div className='grid h-full w-full max-w-screen-lg grid-cols-4 gap-10 '>
            {filteredProducts?.map((product) => (
              <Card key={product.id} data={product} />
            ))}
          </div>
        );
    }
  };

  return (
    <>
      <div className='relative mb-7 flex w-80 items-center justify-center'>
        <h1 className='text-2xl font-medium'>Exclusive products</h1>
      </div>
      <div className='relative mb-5 w-80 rounded-lg border border-black/30 p-3 shadow-md shadow-black/40'>
        <FaSearch
          className='absolute left-3 top-[15px] text-blue-600/60'
          size={20}
        />
        <input
          type='text'
          placeholder={'Search products...'}
          className='w-full pl-7 focus:outline-none'
          value={searchByTitle}
          onChange={(e) => setSearchByTitle(e.target.value)}
        />
      </div>

      {renderView()}

      <ProductDetail />
    </>
  );
}

export default Home;
