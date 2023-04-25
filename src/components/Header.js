import React, { useContext } from "react"
import {SiNintendogamecube} from "react-icons/si"
import {BsCart4} from "react-icons/bs"
import './Header.css'
import { cartContext } from "../App"
import {NavLink} from "react-router-dom"

const Header=()=>{
    const {cart}=useContext(cartContext)
    return  <nav className='navbar'>
    <section className='logo'><SiNintendogamecube style={{fontSize:'2em'}}/><NavLink to='/'><h1 className="heading">M-Games</h1></NavLink></section>
    <section >
    {cart.length}
    <NavLink to='/cart'><BsCart4 className="heading" style={{fontSize:'2em'}}/></NavLink>
    </section>
    </nav>
}
export default Header