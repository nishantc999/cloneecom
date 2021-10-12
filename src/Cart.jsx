import React,{useContext,useState, useEffect} from 'react'
import {Context} from "./StateProvider";
const Cart = () => {
    const[state,dispatch] =useContext(Context)
    const[total,settotal]=useState(0)
    console.log("Cart")
    const removeItem=(id) =>{
        dispatch({type:"REMOVE_ITEM",id})
    }
    
    useEffect(()=>{
    settotal(state.reduce((accumulator,val)=>{
return accumulator+=val.qty*val.price
      },0))
    },[state])
    return (<>
        {state.length==0?<h1>empty</h1>:
            <div class="row m-3" >
              <div class="col-lg-8">
            {state.map((val)=>{
                const{id}=val;
                return <div class="card mb-3" style={{maxWidth: "540px"}}>
                <div class="row g-0">
                  <div class="col-4">
                    <img src={val.img} class="img-fluid rounded-start" alt="..."/>
                  </div>
                  <div class="col-8">
                    <div class="card-body">
                      <h5 class="card-title">{val.name}</h5>
                      <h5 class="card-title text-danger">price : ₹ {val.price}</h5>
                      <h6 class="card-title">qty:{val.qty}* ₹{val.price}</h6>
                      <div>
                      <button class="btn btn-primary d-inline" onClick={(e)=>dispatch({type:"QTY_INC",id:val.id})}>inc</button>
                      <h6 class="d-inline p-3">{val.qty}</h6>
                      <button class="btn btn-primary d-inline" onClick={(e)=>dispatch({type:"QTY_DEC",id:val.id})}>dec</button>
                      </div>
                      <button class="btn btn-warning my-2 px-4" onClick={(e)=>{removeItem(id)}}>remove item</button>
                    </div>
                  </div>
                </div>
              </div>
    })}
    </div>
    <div class="col-lg-4 col-xl-4 ">
      <h2 class="bg-white text-center" style={{lineHeight:"200%"}}>subtotal: ₹ {total} </h2>
      <button class=" text-center btn btn-warning w-100" style={{lineHeight:"200%"}}>Checkout </button>
    </div>
              </div>
    }</>
    )
}

export default Cart
