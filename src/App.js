import Header from "./components/Layout/Header";
import ProductForm from "./components/Form/ProductForm";
import DisplayItem from "./components/display/DisplayItem";
import { useState } from "react";

const medicineData = [
  {
    id: 1,
    name: "Paracetamol",
    description: "Fever and pain relief medication",
    price: 5.99,
  },
  {
    id: 2,
    name: "Ibuprofen",
    description: "Anti-inflammatory and pain relief medication",
    price: 7.99,
  },
  {
    id: 3,
    name: "Cetirizine",
    description: "Antihistamine for allergy relief",
    price: 4.5,
  },
  {
    id: 4,
    name: "Omeprazole",
    description: "Acid reflux and heartburn medication",
    price: 9.99,
  },
];

function App() {
  const[data,setData] =  useState(medicineData);

  const updateData = (updateData) =>{
    console.warn(updateData);
    setData(updateData);
  }  
  return (
    <div>
      <Header />
      <main>
        <ProductForm data={data} updateData = {updateData} />
        <DisplayItem data={data}/>
      </main>
    </div>
  );
}

export default App;
