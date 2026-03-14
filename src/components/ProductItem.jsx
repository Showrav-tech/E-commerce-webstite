import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const ProductItem = ({ id, image, name, price }) => {

  const { currency } = useContext(ShopContext);

  return (

    <Link className='text-balck-700 cursor-pointer' to={`/product/${id}`}>

      <div className='overflow-hidden'>
        <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
      </div>

      <p className='pt-3 pb-2 text-sm'>{name}</p>

  <p className='text-lg font-medium'>
  <span className='text-2xl'>{currency}</span>{price}
</p>

    </Link>

  )
}

export default ProductItem