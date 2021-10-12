import React,{useContext} from 'react'
import { withRouter,useParams,Link } from 'react-router-dom';
// ----- withRouter(Detail) is tarike se b default export kr skte hai jab history wala props na mile-----------

import { Context,ProductData } from "./StateProvider";
import "./detail.scss"


const Detail = (props) => {
  const data = useContext(ProductData)
    const[state,dispatch] = useContext(Context)
    let {id}=useParams()
    console.log(props)
    let findproduct={}
    findproduct=data.find((val)=>{
      return val.id==id
    })
    console.log(findproduct)
    if(findproduct==undefined){
      findproduct={}
    }
const addtocart=(e,findproduct) => {
  dispatch({type:"ADD_TO_CART",
  item:{
    id:findproduct.id,
    name:findproduct.name,
    price:findproduct.price,
    img:findproduct.img,
    qty:findproduct.qty,
}
})
}
  
    return (
      <>
   
  
  
    <main>
      <div class="card_div">
        <div class="card__title">
          <div class="icon">
            <Link to="/"><i class="fa fa-arrow-left"></i></Link>
          </div>
          <h3>product Details</h3>
        </div>
        <div class="card__body">
          <div class="half">
            <div class="featured_text">
              <h1></h1>
              <p class="sub">{findproduct.name}</p>
              <p class="price">₹ {findproduct.price}</p>
            </div>
            <div class="image">
              <img src={findproduct.img} alt=""/>
              
            </div>
          </div>
          <div class="half">
            <div class="description">
              <p>description description description description description description description description</p>
            </div>
            <span class="stock"><i class="fa fa-pen"></i> In stock</span>
            <div class="reviews">
              <ul class="stars">
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star-o"></i></li>
              </ul>
              <span>(64 reviews)</span>
            </div>
          </div>
        </div>
        <div class="card__footer">
          <div class="recommend">
            <p>Recommended by</p>
            <h3>Ecommerce</h3>
          </div>
          <div class="action">
            <button type="button" onClick={(e)=>{addtocart(e, findproduct)}}>Add to cart</button>
          </div>
        </div>
      </div>
    </main>
 
  

      </>
    )
}

export default Detail;
