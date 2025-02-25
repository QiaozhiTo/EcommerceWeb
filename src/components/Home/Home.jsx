import './home.css'
import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
// import allDatas from '../../datas/data_origin'
import allDatas, { getData } from '../../datas/data_origin'

export default function Home() {
    let data = allDatas();
    let products = useSelector((state)=>state.products);

    function reducedData() {
        return data.filter(item => item.category === 'featured').slice(0,6);
    }

    // console.log(products);
  return (
    <div>
        <div className="contents">
            <div className="top">
                <div className="topLeft">
                    <div className="text1"><strong>See</strong> everything with <strong>Clarity</strong></div>
                    <div className="text2">Buying eyewear should leave you happy and good-looking, with money in your pocket. Glasses, sunglasses, and contacts—we’ve got your eyes covered.</div>
                    <br></br>
                    <Link className='shopBox' to='glasses'>Shop Now
                        <span className='home-arrow'>
                            <svg viewBox="64 64 896 896" focusable="false" data-icon="arrow-right" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"></path></svg>
                        
                        </span>
                    
                    </Link>
                </div>
                <div className="topRight">
                    <img src='https://salinaka-ecommerce.web.app/images/banner-girl.789f1fa6f451ad26c5039fcbc049ace7.png' alt=''></img>
                </div>
            </div>

            {/*  middle */ }

            <div className="display-middle">

                <div className="feature-product-banner">
                    <h1 className='feature-product'>Featured Products</h1>
                    <a className='see-all' href='/featured'>See All</a>
                </div>

                <div className="feature-item-display">
                    {reducedData().map((item,index) => {
                        return(
                            <Link to = {`/product/${item.parameter}`} >
                                <div className= {`feature-item  ${item.brand}`} key={index}>
                                    <img className = 'glass-img' src={item.img}></img>
                                    <div className="content">
                                        <h2 className='glass-brand2'>{item.brand}</h2>
                                        <p className= 'glass-desc'>{item.name}</p>
                                    </div>
                                </div>

                            </Link>
                        )
                    })}
                </div>
                


            </div>
        </div>

    </div>
  )
}
