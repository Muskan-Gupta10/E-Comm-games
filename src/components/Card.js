import React, { useState } from 'react'
import './Card.css'
import { useContext } from 'react'
import {cartContext} from "../App"

export default function  Card( {element}){
    //console.log(element.attributes.Image.data.attributes.url)
    const[toggle,setToggle]=useState(true)
    const {addToCart}=useContext(cartContext)
    const url = `${element.attributes.Image.data.attributes.url}`
    console.log(url)
    const [quantity,setQuantity]=useState(1)
    //http://localhost:1337/uploads/FORZA_HORIZON_4e2c3bbab3.png
    return(
        <div className='card'>
            <img src={url}/>
            <h2>{element.attributes.Name}</h2>
            <h5>{element.attributes.Description}</h5>
            <h5>Rs. {element.attributes.Price}</h5>   
            <label for="quantity">Quantity:</label>
            <input type="number" id="quantity" value={quantity} name="quantity" min="1" max="10" onChange={(e)=>{setQuantity(e.target.value)}}></input>   
            <br/>
            <br/>
            {toggle&& <button onClick={()=>{addToCart(element,quantity);setToggle(false)}}>Add To Cart</button> }
            {!toggle && <button>Added</button> }
            
        </div>
    )
}