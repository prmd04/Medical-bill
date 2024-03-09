import React, { useState } from 'react';
import Header from "./components/Layout/Header";
import ProductForm from "./components/Form/ProductForm";
import DisplayItem from "./components/display/DisplayItem";
import { medicineData } from './components/utility/RawData';
import Cart from './components/cart/Cart'
import CartProvider from './components/store/CartProvider';

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  }

  const hideCartHandler = () => {
    setShowCart(false);
  }

  const [data, setData] = useState(medicineData);

  const updateData = (updatedData) => {
    setData(updatedData);
  }

  return (
    <CartProvider>
      {showCart && <Cart onClose={hideCartHandler} />}
      <Header onShow={showCartHandler} />
      <main>
        <ProductForm data={data} updateData={updateData} />
        <DisplayItem data={data} />
      </main>
      </CartProvider>
  );
}

export default App;
