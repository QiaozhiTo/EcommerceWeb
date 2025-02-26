import React from 'react'
import logo from './logo.svg';
import './App.css';
import ProductDetails from './components/ProductDetails/ProductDetails';
import GlassesNew from './components/GlassesNew/GlassesNew';
import { Outlet } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Home from './components/Home/Home';
import {Provider} from 'react-redux'
import store from './Redux/Store/store'
import Cart from './components/Cart/Cart';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <NavigationBar></NavigationBar>
    <Outlet></Outlet>
    
      
    </div>

    </Provider>
  );
}

export default App;

