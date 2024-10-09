import './home.css'
import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Home() {
    let products = useSelector((state)=>state.products)
    // console.log(products);
  return (
    <div>
        <div className="contents">
            <div className="top">
                <div className="topLeft">
                    <div className="text1">See everything with Clarity</div>
                    <div className="text2">Buying eyewear should leave you happy and good-looking, with money in your pocket. Glasses, sunglasses, and contacts—we’ve got your eyes covered.</div>
                    <Link className='shopBox' to='glasses'>Shop Now</Link>
                </div>
                <div className="topRight">
                    <img src='https://salinaka-ecommerce.web.app/images/banner-girl.789f1fa6f451ad26c5039fcbc049ace7.png' alt=''></img>
                </div>
            </div>
        </div>

    </div>
  )
}
