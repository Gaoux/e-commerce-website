import Card from '../../components/Card';
import React, { useContext } from 'react';
import { ProductsContext } from '../../context/ProductsContext';
import ProductDetail from '../../components/ProductDetail';

function Home() {
  const { products } = useContext(ProductsContext);

  return (
    <>
      <div className='grid h-full w-full max-w-screen-lg grid-cols-4 gap-10 '>
        {products?.map((product) => (
          <Card key={product.id} data={product} />
        ))}
      </div>
      <ProductDetail />
    </>
  );
}

export default Home;
