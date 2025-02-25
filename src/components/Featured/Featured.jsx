import React from 'react'
import './featured.css'
import allDatas, { getData } from '../../datas/data_origin'
import { Link,useParams } from "react-router-dom"


export default function Featured() {
    let data = allDatas()
    let array = []
    // data.map((item,index)=>{
        // item.category == 'featured'?array.push(item):''
    // })
    // console.log(array);
    function reduceddata() {
        return data.filter(item=>item.category=='featured')
    }
    console.log(reduceddata());

    // let params = useParams()
    // console.log(params);
    // let featuredProduct = 
  return (
    <div className='featureContainer'>
        <div className="banner">
            <div className="topL">
                <h1>Featured Product</h1>
            </div>
            <div className="topR">
                <img src="https://salinaka-ecommerce.web.app/images/banner-guy.fbf4f0f7396fe31ca288dc1dd9822342.png"></img>
            </div>
        </div>


        <div className="bottom">
            <div className="eachGlass">
                {reduceddata().map((item, index)=>{
                    return(
                        // if(item.category=='featured'){}
                        <Link to ={`/product/${item.parameter}`}>
                            <div className= {`feature-item ${item.brand}`} key = {index}>
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
