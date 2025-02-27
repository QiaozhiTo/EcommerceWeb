import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./cartnew.css";
import { Link } from "react-router-dom";

const CartNew = ({isOpen, toggleCart}) => {
  let products = useSelector((state)=>state.cartItems)
// moved below to NavigationBar.jsx
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleCart = () => {
//     setIsOpen(!isOpen);
//   };
    const calculateTotal = () => {
        return products.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0).toFixed(2);
    };

  return (
    <div>
      {/* Button to toggle the cart */}
      {/* <button className="cart-button" onClick={toggleCart}>
        🛒 Open Cart
      </button> */}

      {/* Shopping Cart Drawer */}
      <div className={`shopping-cart ${isOpen ? "open" : ""}`}>

        <div className="cart-list">
            <div className="cart-header">
                <div className="my-basket">My Basket</div>
                <div className="close" onClick = {toggleCart}>Close</div>
                <div className="clear">Clear Basket</div>
            {/* <button className="close-button" onClick={toggleCart}>
                ✖
            </button> */}
            </div>

            {products.map((item)=> {
                return(

                    <div className="basket-item">

                        <div className="item-control">
                            <button className="increase-button" type="button"></button>
                            <button className="decrease-button" type ="button"></button>
                        </div>
               

                        <div className="item-wrapper">
    
                            <img className="basket-item-img" src={item.img} alt=""></img>

                            <div className="basket-item-details">
                                <div className="basket-item-specs">
                                    <Link to = {`/product/${item.parameter}`}>
                                        <h4>{item.name}</h4>
                                    </Link>
                                </div>
                                <div className="basket-item-specs-2">
                                    {/* quantity */}
                                    <div className="detail-quantity">
                                        <span className="spec-title">Quantity</span>
                                        <h5 className="my-0">{item.quantity}</h5>
                                    </div>

                                    <div className="detail-size">
                                        <span className="spec-title">Size</span>
                                        <h5 className="my-1">{item.size}mm</h5>
                                    </div>

                                    <div className="detail-color">
                                        <span className="spec-title">Color</span>
                                        <div className="my-2" style={{backgroundColor : item.color}}></div>
                                    </div>

                                </div>

                            </div>

                            <div className="basket-item-price">
                                <h4 className="my-3">${item.price}</h4>
                            </div>
                            <button className="basket-item-remover">
                                <span role="img" aria-label="close" class="anticon anticon-close"><svg viewBox="64 64 896 896" focusable="false" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg></span>
                            </button>
                            
                        </div>
                    
                   
                    </div>


                )

            })}
             
            <div className="display-area">
                <div className="text-middle">Your basket is empty</div>
            </div>


        </div>

        <div className="cart-footer">
            <div className="basket-total">
                <p className="basket-total-title">Subtotal Amount:</p>
                <h2 className="basket-total-amount">${calculateTotal()}</h2>
            </div>

            <button className="checkout-button">Check Out</button>
        </div>
        
      </div>

      {/* Background overlay when cart is open */}
      {isOpen && <div className="cart-overlay" onClick={toggleCart}></div>}
    </div>
  );
};

export default CartNew;
