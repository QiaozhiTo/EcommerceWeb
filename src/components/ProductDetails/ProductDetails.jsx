import React from "react";
import allDatas from "../../datas/data_origin";
import { getData } from "../../datas/data_origin";
import './ProductDetails.css';
import { useParams,useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeItem } from "../../Redux/Action/action";
import { useState } from "react";

export default function ProductDetails() {
    // let data = allDatas()
    let params = useParams()
    console.log(params);
    let filterProduct = getData(params.productId);
    console.log(filterProduct);
    const cartItems = useSelector((state) => state.cartItems);

    // filterProduct.size.map((item,index)=>{
        // return()
    // })
    
    // console.log(dispatch);
    let navigate = useNavigate()
    let dispatch = useDispatch()
    // add state for color and size selection 01/03/2025
    const [selectedColor, setSelectedColor] = useState("");
    const [selectedSize, setSelectedSize] = useState("");
    

    let click = ()=>{
        navigate('/glasses')
    }
    const isInCart = cartItems.some(
        (item) =>
            item.id === filterProduct.id 
        // && item.size === (selectedSize || filterProduct.size[0]) &&
        //     item.color === (selectedColor || filterProduct.color[0])
    ); // exclude size and color from isInCart to make add to cart not size/color sensitive;
     
    // let handleAddToCart = (parameter) =>{
    //     dispatch(addToCart(parameter))

    // }
    
    // 01/03/2025 update handleAddToCart and dispatch product with selected size and color
    // let handleAddToCart = () =>{
    //     dispatch(
    //         addToCart({
    //             id: filterProduct.id,
    //             parameter: filterProduct.parameter,
    //             name: filterProduct.name,
    //             brand: filterProduct.brand,
    //             desc:filterProduct.desc,
    //             price: filterProduct.price,
    //             img: filterProduct.img,
    //             size: selectedSize || filterProduct.size[0],
    //             color: selectedColor || filterProduct.color[0],
    //             category:filterProduct.category,
    //             quantity: 1,


    //         })
    //     );
    // }
    let handleAddToCart = () => {
        dispatch(
            addToCart({
                id: filterProduct.id,
                parameter: filterProduct.parameter,
                name: filterProduct.name,
                brand: filterProduct.brand,
                desc: filterProduct.desc,
                price: filterProduct.price,
                unitPrice: filterProduct.unitPrice,
                img: filterProduct.img,
                size: selectedSize || filterProduct.size[0], // Default to first size if none selected
                color: selectedColor || filterProduct.color[0], // Default to first color if none selected
                category: filterProduct.category,
                quantity: 1, // Default quantity
            })
        );
    };
    const handleBasketToggle = () => {
        if (isInCart) {
            dispatch(removeItem(filterProduct.id));
        } else {
            handleAddToCart();
        }

    };
        
    

  return (
    <div>
        <div className="mainContent">
            <div className="productView"> 
                <div className='topBar'>
                    <div className="icon">
                        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=arrow_back_ios" />
                        <span className="material-symbols-outlined">arrow_back_ios</span>
                    </div>
                    <div className="back" onClick={click}>Back To Shop </div>
                </div>



                {/* <Link to={'/glasses'}> <h3 className="backButton">Back To Shop</h3>
                </Link> */}

                <div className="productModel">
                    <div className="imgCollection">
                        <img className="imgSide" src={filterProduct.img} alt=''></img>
                    </div>
                    <div className="imgWrapper">
                        <img className='productImg' src={filterProduct.img} alt=''></img>
                    </div>

                    <div className="modelDetails">
                        <div>
                            <div className="brand">{filterProduct.brand}</div>
                        </div>
                        <h1>{filterProduct.name}</h1>
                        <div className="desc">{filterProduct.desc}</div>
                        {console.log(11111)}
                        {console.log(filterProduct)}
                        
                        <div className="optionTruck">
                            <div className="lensOption">Lens Width and Frame Size</div>
                            <select className="widthOpt" 
                                    value = {selectedSize}
                                    onChange={(e)=> setSelectedSize(e.target.value)}>

                                <option value ="">-- Select Size --</option>
                                
                                {filterProduct.size.map((size) => (
                                <option key={size} value={size}>{size}mm</option>
                                ))}
                        {console.log(11118881)}

                                {/* <option value="">{filterProduct.size[0]} mm</option>
                                <option value="">{filterProduct.size[1]} mm</option>
                                <option value="">{filterProduct.size[2]} mm</option> */}

                            </select>
                        </div>
                        <div className="colorArea">
                            <div className="colorOption">Choose Color</div>
                            
                                {/* {filterProduct.map((item, index)=>{
                                    return(
                                        <div className="colorList">
                                            <div style={{backgroundColor:item.color[index]}}> </div>
                                        </div>

                                    )
                                })}
                             */}
                            <ul className='colorList'>
                            
                                    {filterProduct.color.map((color) => (
                                        <li 
                                            key = {color}
                                            className= {selectedColor === color ? "colorItem selected" : "colorItem"}
                                            style={{backgroundColor:color}} 
                                            onClick ={() => {setSelectedColor(color)}}>
                                            {selectedColor === color && <span className="checkMark">✔</span>}
                                        </li>
                                        

                                    ))}

                            </ul>

                        </div>
                        <h1 className="price">${filterProduct.price.toFixed(2)}</h1>
                        
                        <div className="modelAction">
                            
                                <button className={`button-model ${isInCart ? "remove-button":""}`} 
                                onClick={handleBasketToggle}>
                                    {isInCart? "Remove from Basket":"Add to Basket"}
                                </button>
                                

                        </div>
                        
                    </div>
                </div>


            </div>


        </div>
    </div>
  )
}
