import React, { useEffect, useRef ,useState} from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import AddToCart from "./AddToCart";

const ProductDescriptionPage = ({ setIsVisible, data ,cartData}) => {
  const targetRef = useRef(null);
  const [cart, setCart] = useState(cartData);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      }
    );
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [setIsVisible]);


  const addToCart = (inputValue) => {
    const quantityToAdd = parseInt(inputValue) || 0;
    setCart(prevCount => 
      prevCount > cart || prevCount === cart ?  quantityToAdd + prevCount :  cart + quantityToAdd 
      );
  };


  return (
    <>
      {data && (
        <div className="cmp-productDescription">
          <div className="cmp-productDescription__container">
            <div className="cmp-productDescription__top-container">
              <div className="cmp-productDescription__left">    
                <div className="product-left-images">
                  <div className="product-image"></div>
                  <div className="product-image"></div>
                </div>
                <div className="product-main-image"></div>
              </div>
              <div className="cmp-productDescription__right">
                <div className="cmp-productDescription__title">
                  {data.title}
                </div>
                <div className="supplier-by">
                  by
                  <a className="supplier-name" href={data.supplier_link}>
                    {data.supplier_name}
                  </a>
                </div>
                <Box>
                  <Rating className="stars-ratings" name="read-only" value={data.stars} readOnly />
                </Box>
                <div className="price-container">
                  <div className="finalprice">
                    {data.price} {data.currency}
                  </div>
                  <div className="shipping_price">
                    + {data.transport_costs} {data.currency} shipping
                  </div>
                </div>
                <div className="taxes">
                    all prices incl.{data.vat_percent}%taxes
                  </div>
                <div className="cart-container">
                  <AddToCart data={data} cartData={cartData} AddToCart={addToCart} />
                </div>
              </div>
            </div>
            <div className="cmp-productDescription__bottom-container">
                <div className="cmp-productDescription__description-title">
                    Description
                </div>
              <div className="description-container">
                {data.description_long}
              </div>
              <div ref={targetRef} className="description-details-container">
                <div className="details">
                  <div className="details-title">Details</div>
                  <div className="features">
                    <div className="features-title">Features</div>
                    {Object.entries(data.features).map(([item, value]) => (
                      <li key={item}>
                        <span className="features-title" >{item}</span>: {value}
                      </li>
                    ))}
                  </div>
                  <div className="attachements">
                    <div className="attachements-title">Attachments</div>
                    {data.attachments.map((item , index) => (
                      <li key={index}>
                        <a href={item.file_link} target="_blank" >
                          {item.file_label}
                        </a>
                      </li>
                    ))}
                  </div>
                  <div className="keywords">
                    <div className="keywords-title">Keywords</div>
                    <div className="keywords-container">
                        {data.keywords.map((item , index) => (
                        <div className="keywords-tile" key={index}>{item}</div>
                        ))}
                    </div>
                  </div>
                </div>
                <div className="pricing">
                  <div className="pricing-title"> Pricing & shipping</div>
                  <div className="pricing-details">
                    <li><span className="pricing-details__title">Minimum order:</span> {data.minimum_order_quantity} {data.unit}</li>
                    <li><span className="pricing-details__title">Shipping:</span> {data.transport_costs} {data.currency}</li>
                    <li><span className="pricing-details__title">Delivery:</span> {data.delivery_time} days</li>
                  </div>
                  <div className="price-breaks">
                    <div className="price-breaks-title">price breaks</div>
                    {Object.entries(data.price_breaks).map(([item, value]) => (
                      <div className="breakdown-price" key={item}>
                       <div>ex {item} {data.unit}</div> 
                       <div>{value}{data.currency}/{data.unit} </div> 
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDescriptionPage;
