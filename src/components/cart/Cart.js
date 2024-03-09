import React, { useContext } from 'react';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import CartContext from '../store/CartContext';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount =  `$${cartCtx.totalAmount.toFixed(2)}`;

  const hasItem = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item,amount:1})
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  return (
    <Modal onClose={props.onClose}>
      {cartCtx.items.map(item => (
        <CartItem key={item.id} item={item} onAdd={cartItemAddHandler.bind(null,item)} onRemove={cartItemRemoveHandler.bind(null,item.id)} />
      ))}
      <div className='flex justify-between items-center font-bold text-2xl my-4'>
        <span>Total Amount</span>
        <span className='text-[#ad5502]'>${cartCtx.totalAmount.toFixed(2)}</span>
      </div>
      <div className='text-black flex justify-end'>
        <button className='m-2 py-2 px-6 border border-black rounded-3xl hover:bg-red-700' onClick={props.onClose}>Close</button>
        {hasItem && <button className='m-2 py-2 px-6 border border-black rounded-3xl hover:bg-red-700'>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
