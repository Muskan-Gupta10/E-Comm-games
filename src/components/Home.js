import React ,{useState,useEffect } from 'react'
import Card from './Card.js'
import './Home.css'


export default function  Home(){
    const [action,setAction] = useState([])
    const [racing,setRacing] = useState([])
    const [sports,setSports]=useState([])

    useEffect(
        ()=>{
        
            // fetch('http://localhost:1337/api/racings?populate=*')
            fetch('https://e-comm-games-strapi.onrender.com/api/racings?populate=*')
            .then((res)=>res.json())
            .then((result)=>{
               // console.log(typeof(result.data[0].attributes))
                setRacing(result.data)
            })

            fetch('https://e-comm-games-strapi.onrender.com/api/actions?populate=*')
            .then((res)=>res.json())
            .then((result)=>{
                //console.log(result.data)
                setAction(result.data)
            })

            fetch('https://e-comm-games-strapi.onrender.com/api/sports?populate=*')
            .then((res)=>res.json())
            .then((result)=>{
                //console.log(result.data)
                setSports(result.data)
                
            })
        },[]

    )

    return(
        <div id='container'>
        <br/>
            <h1 className='h1'>Racing</h1>
            <div className='home'>

            {
            racing.map((items,index)=>{
                return  <Card element={items}/>
            })}
            </div>
            
            <br/>
            <h1 className='h1'>Action</h1>
            <div className='home'>
           {action.map((items,index)=>{
                return  <Card element={items}/>
            })}
            </div>

            
            <br/>
            <h1 className='h1'>Sports</h1>
            <div className='home'>
           {sports.map((items,index)=>{
                return  <Card element={items}/>
            })}
            </div>
           
           
        </div>
    )
}