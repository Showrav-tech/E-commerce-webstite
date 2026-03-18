import React from 'react'

const Collection = () => {
  const {products}=useContext(ShopContext);
  return (
    <div>
      <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'></div>
    </div>
  )
}

export default Collection
