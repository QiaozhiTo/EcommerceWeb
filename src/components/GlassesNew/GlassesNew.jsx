import React from 'react'
import './glassesnew.css'
import allDatas from '../../datas/data_origin'
import { Link } from "react-router-dom"


export default function GlassesNew() {
    let data = allDatas()
  return (
    // <div>GlassesNew</div>

    <div className='contents'>
        <div className="glass">
            {data.map((item,index)=>{
                return(
                    
                    <Link to ={`/product/${item.parameter}`}>
                   {/* 02/22/2025 -- Add a static class to ensure all items share base styles */}

                    <div className={`productItem ${item.brand}`} key={index}>

                        <div className="img-wrapper">
                            <img className = "glassImage" src={item.img} alt=" "/>
                        </div>

                        <div className="details-wrapper"> 
                            <div className='name'>{item.name}</div>
                            <div className = 'glass-brand'>{item.brand}</div>
                            <div className='price-display-area'>${item.price.toFixed(2)}</div>
                        </div>
                    </div>
                    
                    </Link>

            )


            })

            }
        

        </div>

    </div>
  )
}
