import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Product from './components/Product/Product';
import GlassesNew from './components/GlassesNew/GlassesNew';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Featured from './components/Featured/Featured';
import CartNew from './components/CartNew/CartNew';
// import Shoppingcart from './components/ShoppingCart/Shoppingcart';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path ='/' element = {<App></App>}>
        <Route path='/' element = {<Home></Home>}></Route>
          <Route path='glasses' element = {<GlassesNew></GlassesNew>}></Route>
          <Route path='featured' element = {<Featured></Featured>}></Route>
          <Route path='cart' element = {<Cart></Cart>}></Route>
          <Route path='cartnew' element ={<CartNew></CartNew>}/>
          {/* <Route path='cart' element={<CartNew></CartNew>}></Route> */}
          {/* <Route path='shopcart' element = {<Shoppingcart></Shoppingcart>}></Route> */}


          <Route path='product' element = {<Product></Product>}>
              <Route path = ':productId' element ={<ProductDetails></ProductDetails>}></Route>
          </Route>


        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

