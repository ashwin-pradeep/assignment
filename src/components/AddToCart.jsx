import React, { useState } from "react";

const AddToCart = ({ data, cartData ,AddToCart}) => {
  // State to store the count, with initial value of 1
  const [cart, setCart] = useState(1);

  const addToCart = (inputValue) => {
    const prevCartCount = cartData;
    setCart((prevCount) => prevCartCount + inputValue);
    AddToCart();
  };

  const handleInputChange = (event) => {
    const inputValue = parseInt(event.target.value);
    if (!isNaN(inputValue)) {
      setCart(inputValue);
    }
  };

  return (
    <>
      <div className="pce-container">
        <input
          type="number"
          defaultValue={data.minimum_order_quantity}
          min={1}
          onChange={handleInputChange}
        />
        {data.unit}
      </div>
      <button className="cart__add-to-cart" onClick={() => addToCart(1)}>
        Add to cart
      </button>
    </>
  );
};

export default AddToCart;
