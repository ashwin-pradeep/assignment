import './App.css';
import React, { useState } from 'react';
import jsonData from "./data.json";
import Header from './components/Header';
import ProductDescriptionPage from './components/ProductDescriptionPage';

const  App = () =>{
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="App">
      <Header isVisible={isVisible} data={jsonData.article} cartData={jsonData.cart.items}/>
      <ProductDescriptionPage setIsVisible={setIsVisible} data={jsonData.article} cartData={jsonData.cart.items}/>
    </div>
  );
}

export default App;
