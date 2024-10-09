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

                    <div className={item.brand} key={index}>

                        <img className = "glassImage" src={item.img} alt=" "/>
                        <div className='name'>{item.name}</div>
                        <div className = 'glass-brand'>{item.brand}</div>
                        <div className='price'>{item.price}</div>

                    </div>
                    
                    </Link>

            )


            })

            }
        

        </div>

    </div>
  )
}
