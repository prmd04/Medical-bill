import React from 'react'

const CartItem = (props) => {
  return (
    <li className="max-h-[300px] flex justify-between items-center border-b border-gray-300 py-2 overflow-y-auto">
      <div>
        <h2 className="text-lg font-bold">{props.item.name}</h2>
        <div className=" ">
          <span className="">${props.item.price}</span>
          <span className="m-2">x {props.item.amount}</span>
        </div>
      </div>
      <div className="flex items-center">
        <button className="bg-green-500 text-white px-4 py-1
         rounded-2xl hover:bg-green-600 mr-2" onClick={props.onAdd}>+</button>
        <button className="bg-[#a881af] text-white px-4 py-1 rounded-2xl hover:bg-red-600" onClick={props.onRemove}>-</button>
      </div>
    </li>
  );
};


export default CartItem