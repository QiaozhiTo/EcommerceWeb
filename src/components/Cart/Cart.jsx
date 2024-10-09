
import React from 'react'
import './cart.css'
import { useSelector } from 'react-redux'


export default function Cart() {
  let products = useSelector((state)=>state.cartItems)
  console.log(products)
  console.log('111111');
  return (
    <div>
      {products.map((item)=>{
        return(
          <div className='price1'>
            <h1>{item.price}</h1>
            {/* <img>{item.img}</img> */}
          </div>
          )
     
      })}
    
    </div>
  )
}

