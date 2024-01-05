import { useContext,useCallback } from "react"
import { cartContext } from "../App"
import useRazorpay from 'react-razorpay'
import './Checkout.css'
export default function Checkout(){
    const Razorpay=useRazorpay()
    const showpayment=useCallback(async(total)=>{
      const options={
        key:"rzp_test_l2Si5adjJnFynG",
        name:"M-Games",
        amount:total*100,
        currency:"INR",
        handler:(err)=>{
            console.log(err)
        },
        theme:{
            color:"3399cc"
        }
      }
      const pay=new Razorpay(options);
      pay.open()
    },[Razorpay])
    const{cart,removeFromCart,total}=useContext(cartContext)
    return(<div id='checkout_container'>
        <div id="cart">
        <table >
        <thead>
        <th>Product Image</th>
        <th>Product Title</th>
        <th>Product Price<br/>(Rs.)</th>
        <th>Quantity</th>
        <th>Remove Product</th>
        </thead>
        
        <tbody>
        {cart.map((item,index)=>{
            const url = `http://localhost:1337${item.attributes.Image.data.attributes.url}`
    
            return <tr key={index}>
            <td><img height='200px' src={url}/></td>
            <td>{item.attributes.Title}</td>
            <td>{item.attributes.Price}</td>
            <td>{item.attributes.quantity}</td>
            <td onClick={()=>{removeFromCart(index)}} style={{color:'red',cursor:"pointer"}}>Remove</td></tr>
        })}
        </tbody>
        </table>
        <br/>
        </div>
        <div className="details"><h3><span>Total Amount(Rs.): </span>
        <span>{total}</span> </h3></div>
        <br/>
        <div className="details"><button onClick={()=>showpayment(total)} style={{fontSize: '20px'}}> Proceed to Checkout </button>
       
        </div>
        <br/>
        <br/>
        </div>
    )
}
