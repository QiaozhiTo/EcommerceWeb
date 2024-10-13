import React from "react";
import allDatas from "../../datas/data_origin";
import { getData } from "../../datas/data_origin";
import './ProductDetails.css';
import { useParams,useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/Action/action";
export default function ProductDetails() {
    // let data = allDatas()
    let params = useParams()
    console.log(params);
    let filterProduct = getData(params.productId)
    console.log(filterProduct);
    
    // console.log(dispatch);
    let navigate = useNavigate()
    let dispatch = useDispatch()


    let click = ()=>{
        navigate('/glasses')
    }
    let handleAddToCart = (parameter) =>{
        dispatch(addToCart(parameter))

    }

  return (
    <div>
        <div className="mainContent">
            <div className="productView"> 
                <div class='topBar'>
                    <div className="icon">
                        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=arrow_back_ios" />
                        <span class="material-symbols-outlined">arrow_back_ios</span>
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
                        
                        <div className="optionTruck">
                            <div className="lensOption">Lens Width and Frame Size</div>
                            <select className="widthOpt">
                                <option value="28 mm">{filterProduct.size[0]} mm</option>
                                <option value="36 mm">{filterProduct.size[1]} mm</option>
                                <option value="42 mm">{filterProduct.size[2]} mm</option>

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
                            <ur className='colorList'>
                                <li style={{backgroundColor:filterProduct.color[0]}}></li>
                                <li style={{backgroundColor:filterProduct.color[1]}}></li>
                                <li style={{backgroundColor:filterProduct.color[2]}}></li>
                                <li style={{backgroundColor:filterProduct.color[3]}}></li>
                                <li style={{backgroundColor:filterProduct.color[4]}}></li>
                                <li style={{backgroundColor:filterProduct.color[5]}}></li>
                                <li style={{backgroundColor:filterProduct.color[6]}}></li>

                            </ur>

                        </div>
                        <h1 className="price">${filterProduct.price}.00</h1>
                        
                        <div className="modelAction">
                            <button className="button-model" onClick={()=>{
                                handleAddToCart(filterProduct.parameter)
                            }}>Add to Basket</button>

                        </div>
                        
                    </div>
                </div>


            </div>
        {/* <img src={filterProduct.img} alt=''></img> */}
        {/* <div>{filterProduct.brand}</div> */}
        {/* <div>{filterProduct.price}</div> */}

        </div>




        
    </div>
  )
}
