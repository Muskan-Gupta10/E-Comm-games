import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import {BrowserRouter, Routes,Route} from "react-router-dom"



 export const cartContext=React.createContext()
const CartProvider=({children})=>{
  const [cart,setCart]=useState([])
  const [total,setTotal]=useState(0)
  const addToCart=(item,quantity)=>{
    //console.log(item);
    setTotal(total+item.attributes.Price*quantity)
    //console.log(total,typeof(total),item.attributes.Price);
    item.attributes.quantity=quantity
    setCart([...cart,item])
    //console.log(cart);
  }
  const removeFromCart=(index)=>{
    
    const arr=[...cart]
    const removedItem=arr.splice(index,1)
    //console.log(removedItem);
     setTotal(total-removedItem[0].attributes.Price*removedItem[0].attributes.quantity)
    setCart(arr)
  }
  return <cartContext.Provider value={{cart,addToCart,removeFromCart,total}}>
  {children}
  </cartContext.Provider>
}
function App() {
 
  return (
    <>
   
    <BrowserRouter>
    <CartProvider>
      <Header/>
      <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/cart' element={<Checkout />} />
      
    </Routes>
    </CartProvider>
    
    </BrowserRouter>
    </>
    
  );
}

export default App;
