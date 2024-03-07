import React from 'react';

const ProductForm = () => {
  return (
    <div className=" pt-[7rem] bg-orange-300  ">
      <label className='flex justify-center'>
      <h1 className='text-3xl mb-3 font-bold'>Add Medicine</h1>
      </label>
      <div className='flex justify-center'>
      <form className="flex items-center mb-4">
        <label htmlFor="name" className="block text-xl " >Name :</label>
        <input type="text" id="name" name="name" placeholder="Enter Name" className="border border-gray-400 rounded py-1 px-2 m-1" />
        <label htmlFor="description" className="block text-xl ml-4">Description:</label>
        <input type="text" id="description" name="description" placeholder="Enter Description" className="border border-gray-400 rounded py-1 px-4 m-1" />
        <label htmlFor="price" className="block ml-4 text-xl">Price:</label>
        <input type="number" id="price" name="price" placeholder="Enter Price" className="border border-gray-400 rounded py-1 px-4 m-1" />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded ml-4">Submit</button>
      </form>
      </div>
    </div>
  );
};

export default ProductForm;
