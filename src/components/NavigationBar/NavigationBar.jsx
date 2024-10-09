import React from "react";
import './navigationbar.css';
import {Link} from 'react-router-dom'
import Cart from "../Cart/Cart";
// import Cart from "../Cart/Cart"
// import MenuIcon from '@mui/icons-material/Menu';
// import IconButton from '@mui/material/IconButton';

export default function NavigationBar() {
  return (
    <div className= 'NaviBar'>
      <div className= "logo">
        <a href = '/'>
          <img alt='logo' src='https://salinaka-ecommerce.web.app/images/logo-full.059e10fa5fedbfb65165e7565ed3936f.png'></img>
        </a>
      </div>

      <div className="mainMenu">
        <Link className="naviName" to='/'>Home</Link>

        <Link className='naviName'to='/glasses'>Shop</Link>
        {/* <Cart></Cart> */}
        <Link className='naviName' to = '/cart'>Cart</Link>
        {/* <Link className='naviName' to = '/shopcart'>Cart</Link> */}


        
        {/* <div onClick={toggleDrawer(true)}/> */}
        
      </div>
    </div>
  )
}



