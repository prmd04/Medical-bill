import React from 'react'
import Items from './Items'


const DisplayItem = ({data}) => {
  return (
    <ul className='relative bottom-0 bg-slate-200 h-[350px]'>
      {data.map((item) => (
        <Items key={item.id} name={item.name} desc={item.description} price={item.price} />
      ))}
    </ul>
  );
};


export default DisplayItem