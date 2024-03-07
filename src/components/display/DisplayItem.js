import React from 'react'
import Items from './Items'

const medicineData = [
  {
    id: 1,
    name: "Paracetamol",
    description: "Fever and pain relief medication",
    price: 5.99
  },
  {
    id: 2,
    name: "Ibuprofen",
    description: "Anti-inflammatory and pain relief medication",
    price: 7.99
  },
  {
    id: 3,
    name: "Cetirizine",
    description: "Antihistamine for allergy relief",
    price: 4.50
  },
  {
    id: 4,
    name: "Omeprazole",
    description: "Acid reflux and heartburn medication",
    price: 9.99
  }
];

const DisplayItem = () => {
  return (
    <ul className='relative bottom-0 bg-slate-200 h-[250px]'>
      {medicineData.map((item) => (
        <Items key={item.id} name={item.name} desc={item.description} price={item.price} />
      ))}
    </ul>
  );
};


export default DisplayItem