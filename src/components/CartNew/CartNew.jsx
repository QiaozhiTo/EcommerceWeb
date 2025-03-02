import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./cartnew.css";
import { Link } from "react-router-dom";
import { clearCart,decreaseCart,increaseCart, removeItem } from "../../Redux/Action/action";


const CartNew = ({isOpen, toggleCart}) => {
    let products = useSelector((state)=>state.cartItems)  
//   for clear cart
    const dispatch = useDispatch();

// moved below to NavigationBar.jsx
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleCart = () => {
//     setIsOpen(!isOpen);
//   };

    const [notEmpty, setNotEmpty] = useState(false);


    const calculateTotal = () => {
        return products.reduce((total, item) => {
            return total + (item.unitPrice * item.quantity);
        }, 0).toFixed(2);
    };

    const calculateDistinctBrands = () => {
        const uniqueBrands = new Set(products.map(item => item.id));
        return uniqueBrands.size;
    };
    // update notEmpty when products change;
    useEffect(() => {
        setNotEmpty(products.length > 0); //Update state based on products
    }, [products]);// Only run when products changes

    const handleClearBasket = () => {
        dispatch(clearCart()); //Dispatch updated clearCart
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
                <div className="my-basket">My Basket ({calculateDistinctBrands()} item)</div>
                <div className="close" onClick = {toggleCart}>Close</div>
                <button className="clear" 
                     onClick = {handleClearBasket}
                     disabled = {!notEmpty} // disabled when empty;
                >Clear Basket
                </button>
            {/* <button className="close-button" onClick={toggleCart}>
                ✖
            </button> */}
            </div>

            {products.map((item)=> {
                return(

                    <div className= "basket-item" >

                        <div className="item-control">
                            <button className="increase-button" type="button" 
                            onClick ={ () => dispatch(increaseCart(item.id))}>
                                <span role="img" aria-label="plus" className="anticon anticon-plus" style={{fontSize: "9px"}}><svg viewBox="64 64 896 896" focusable="false" data-icon="plus" width="1em" height="1em" fill="currentColor" aria-hidden="true"><defs><style></style></defs><path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"></path><path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"></path></svg></span>
                            </button>
                            <button className="decrease-button" type ="button"
                            onClick={() => dispatch(decreaseCart(item.id))}>
                                <span role="img" aria-label="minus" className="anticon anticon-minus" style= {{fontSize: "9px"}}><svg viewBox="64 64 896 896" focusable="false" data-icon="minus" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg></span>
                            </button>
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
                            <button className="basket-item-remover"
                            onClick={() => dispatch(removeItem(item.id))}
                            >
                                <span role="img" aria-label="close" className="anticon anticon-close"><svg viewBox="64 64 896 896" focusable="false" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg></span>
                            </button>
                            
                        </div>
                    
                   
                    </div>


                )

            })}
             
            <div className= "empty-area" >
                <div className={`text-middle ${notEmpty ? "not-empty" : ""}`} >Your basket is empty</div>
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
