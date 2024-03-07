import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

const HeaderCartButton = () => {
  return (
    <button className='bg-red-300 flex items-center p-2 m-2 cursor-pointer rounded-lg font-bold'>
      <span>
      <FaShoppingCart />
      </span>
      <span className='m-2'>Your Cart</span>
      <span className='p-1 m-1 w-5 text-white bg-green-500 rounded-full'> 0 </span>
    </button>
  )
}

export default HeaderCartButton