import React from 'react'
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.logo} className='m-5 w-32' alt="" />
       <p className='w-full md:w-1/2 text-gray-600'>
        Stay connected with [Forever] for updates, special offers, and news on our latest collections. Founded in 2024, we are dedicated to providing the best products and excellent service. Your happiness is our top priority, and we’re always here to help.
         </p>
        </div>

      </div>
    </div>
  )
}

export default Footer
