import React, { useContext } from "react";
import CartContext from "../store/CartContext";

const Items = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (item) => {
    const price = parseFloat(props.price);

    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: 1,
      price: price
    });
  
  };

  return (
    <div className="flex justify-evenly items-center mt-10 w-full mx-auto my-4">
      <div className="w-1/5">
        <h2 className="text-xl font-bold mr-4 ">{props.name}</h2>
      </div>
      <div className="w-1/3">
        <p className="text-xl text-gray-600 mr-4">{props.desc}</p>
      </div>
      <div className="w-1/6">
        <p className="font-bold text-xl text-[#ad5502]">${props.price}</p>
      </div>
      <div className="w-1/6">
        <button
          onClick={addToCartHandler}
          className="bg-[#84528d] hover:bg-[#8b209e] text-white font-bold py-1 px-2 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Items;
