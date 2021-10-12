import React,{useContext,useState,useEffect} from 'react'
import {url} from './Config';
import Axios from 'axios'
import {Context,ProductData} from './StateProvider';
import {Link} from 'react-router-dom'

const Product = (props) => {
   
    const [productdata,setproductdata]=useState([])
    const[state,dispatch] = useContext(Context)
    const data=useContext(ProductData)
    useEffect(() =>{
        Axios.get(url).then((response) =>setproductdata([...response.data]))
    },[])

//  ------------
let a= "dd"
let b="ee"
let c= a+b
console.log(c)
// ---------

    const addtocart=(val)=>{
        dispatch({type:"ADD_TO_CART",
        item:{
            id:val.id,
            name:val.name,
            price:val.price,
            img:val.img,
            qty:val.qty,
        }
    })
    }
    console.log(productdata)
    return (
        <>
 

        <div className="row gy-4 container-fluid m-auto">
        {productdata.filter((val)=>{
            if(val.name.toLowerCase().includes(props.searchvalue.toLowerCase())){
                return val
            }
            if(props.searchvalue==""){
                return val
            }
            
        }).map((val,index)=>{
           return  <div className="col" key={val.id}>
           <div class="card" style={{width: "18rem"}}>
             <Link to={{pathname:"/detail/"+val.id}}><img class="card-img-top" src={val.img} alt="Card image cap"/></Link>
             <div class="card-body">
               <h5 class="card-title">{val.name}</h5>
               <p class="card-text">Price: {val.price}</p>
               <button className="btn btn-outline-primary" onClick={()=>{
                   addtocart(val)
               }}>Add to Cart</button>
             </div>
           </div> 
           </div>
        })}
        </div>
  </>  )
}

export default Product
