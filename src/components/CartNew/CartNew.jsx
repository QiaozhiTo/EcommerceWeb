import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./cartnew.css";
import { Link } from "react-router-dom";

const CartNew = () => {
  let products = useSelector((state)=>state.cartItems)

  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Button to toggle the cart */}
      <button className="cart-button" onClick={toggleCart}>
        🛒 Open Cart
      </button>

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
                        <button className="increase-button" type="button">
                        </button>
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
                                    <div className="detail-quantity">
                                        <span className="spec-title">Quantity</span>
                                        <h5>{item.quantity}</h5>
                                    </div>

                                    <div className="detail-size">
                                        <span className="spec-title">Size</span>
                                        <h5>{item.size}</h5>
                                    </div>
                                    <div className="detail-color">
                                        <span className="spec-title">Color</span>
                                        <h5>{item.color}</h5>
                                    </div>

                                    </div>

                                </div>
                                <h4 className="basket-item-price">${item.price}</h4>
                                <div className="basket-item-remover"></div>
                        </div>
                    
                   
                    </div>


                )

            })}
             
          
            <div className="cart-footer">
            <button className="checkout-button">Checkout</button>
            </div>

        </div>
        
      </div>

      {/* Background overlay when cart is open */}
      {isOpen && <div className="cart-overlay" onClick={toggleCart}></div>}
    </div>
  );
};

export default CartNew;
