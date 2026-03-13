import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  console.log(products);
  
  return (
    <div>
      {products.map((product) => (
        <div >
        </div>
      ))}
    </div>
  )
}

export default LatestCollection;