import {useState} from "react";
import AddToCart from "./AddToCart";

const Header = ({ isVisible, data , cartData}) => {

  const [cart, setCart] = useState(cartData);

  const addToCart = (inputValue) => {
    const quantityToAdd = parseInt(inputValue) || 0;
    setCart(prevCount => 
      prevCount > cart || prevCount === cart ?  quantityToAdd + prevCount :  cart + quantityToAdd 
      );
  };

  return (
    <>
      {data && (
        <div className="cmp-header">
          <div className="cmp-header__container">
            <div className="cmp-header__container-left">
              {data.title && (
                <div className="cmp-header__title">{data.title}</div>
              )}
            </div>
            <div className="cmp-header__container-right">
              {isVisible && (
                <div className="cart-container">
                    <AddToCart data={data} cartData={cartData} AddToCart={addToCart} />
                </div>
              )}
              <div className="cmp-header__fav-icon"></div>
              <div className="cmp-header__static-icon"></div>
              <div className="cmp-header__cart-icon"><div className="cmp-header__cart-suffix">{cart} </div></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
