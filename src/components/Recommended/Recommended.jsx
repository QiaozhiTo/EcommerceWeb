import React from 'react'
import './recommended.css'
import allDatas, { getData } from '../../datas/data_origin'
import { Link } from 'react-router-dom'

// type rcf to have the basic structure
export default function Recommended() {
    let data = allDatas();
    function reduceddata() {
        return data.filter(item => item.category === 'recommended').slice(0,8) // use slice(0,8) to only display the first 8 recommended items
    }
  return (
    <div className='recommended-container'>
        <div className="banner">
            <div className="topL">
                <h1>Recommended Products</h1>
            </div>
            <div className="topR">
                <img src="https://salinaka-ecommerce.web.app/images/banner-girl-1.24e9b8f48d5a0ac32680edd194503695.png"></img>
            </div>
        </div>


        <div className="bottom">
            <div className="eachGlass">
                {reduceddata().map((item, index)=>{
                    return(
                        // if(item.category=='featured'){}
                        <Link to ={`/product/${item.parameter}`}>
                            <div className= {`recommended-item ${item.brand}`} key = {index}>
                                <img className='glass-img' src = {item.img}></img>
                                <div className="content">
                                    <h2 className='glass-brand2'>{item.brand}</h2>
                                    <p className="glass-desc">{item.name}</p>
                                </div>
                            </div>

                        </Link>
                    )
                })}
            </div>
        </div>

    </div>
  )
}
