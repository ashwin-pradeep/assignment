import React, { useState } from "react";

const AddToCart = ({ data, cartData ,AddToCart}) => {

  // eslint-disable-next-line
  const [cart, setCart] = useState(cartData);
  const [inputValue, setInputValue] = useState(data.minimum_order_quantity);

  const addToCart = () => {
    const quantityToAdd = parseInt(inputValue) || 0;
    setCart(prevCount => 
      prevCount > cart || prevCount === cart ?  quantityToAdd + prevCount :  cart + quantityToAdd 
      );
    AddToCart(quantityToAdd);
  };

  const handleInputChange = (event) => {
      setInputValue(event.target.value);
  };

  return (
    <>
      <div className="pce-container">
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
        />
        {data.unit}
      </div>
      <button className="cart__add-to-cart" onClick={() => addToCart()}>
        Add to cart
      </button>
    </>
  );
};

export default AddToCart;
