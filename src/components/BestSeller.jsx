import React, { useEffect, useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'

const BestSeller = () => {

  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(()=>{
    const bestProduct = products.filter((item)=> item.bestseller);
    setBestSeller(bestProduct.slice(0,5))
  },[products])

  return (
    <div className='my-10'>

      <div className='text-center py-8 text-3xl'>
         <Title text1={'BEST '} text2={'SELLERS'} />
      </div>

    </div>
  )
}

export default BestSeller