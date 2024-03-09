import React, { useContext } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import CartContext from '../store/CartContext';


const HeaderCartButton = (props) => {
  const cartCtx  = useContext(CartContext)
  const len = cartCtx.items.length;
  return (
    <button className='bg-red-300 flex items-center py-2 px-4 m-2 cursor-pointer rounded-3xl font-bold' onClick={props.onShow}>
      <span>
        <FaShoppingCart />
      </span>
      <span className='m-2'>Your Cart</span>
      <span className='py-1 px-2 m-1 text-white bg-[#ad5502] rounded-full'>{len}</span>
    </button>
  );
};

export default HeaderCartButton;
