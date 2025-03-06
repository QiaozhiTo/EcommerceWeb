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
import Featured from './components/Featured/Featured';
// import CartNew from './components/CartNew/CartNew';
import Recommended from './components/Recommended/Recommended';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path ='/' element = {<App></App>}>
        <Route path='/' element = {<Home></Home>}></Route>
          <Route path='glasses' element = {<GlassesNew></GlassesNew>}></Route>
          <Route path='featured' element = {<Featured></Featured>}></Route>
          <Route path = 'recommended' element = {<Recommended></Recommended>}/>
          <Route path='signIn' element ={<SignIn></SignIn>}/>
          <Route path='signUp' element ={<SignUp></SignUp>}/>

          <Route path='product' element = {<Product></Product>}>
              <Route path = ':productId' element ={<ProductDetails></ProductDetails>}></Route>
          </Route>


        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

