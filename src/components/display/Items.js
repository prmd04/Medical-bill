import React from "react";

const Items = (props) => {
  return (
    <div className="flex justify-evenly items-center mt-10 w-full mx-auto my-4">
      <div className="w-1/5">
        <h2 className="text-xl font-bold mr-4 ">{props.name}</h2>
      </div>
      <div className="w-1/3">
        <p className="text-xl text-gray-600 mr-4">{props.desc}</p>
      </div>
      <div className="w-1/6">
        <p className="font-bold text-xl">${props.price}</p>
      </div>
      <div className="w-1/6">
        <input
          type="number"
          className="border border-gray-300 p-1 w-12 mr-4"
          defaultValue={1}
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Items;
