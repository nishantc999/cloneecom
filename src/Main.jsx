import React,{useState} from 'react'
import Product from "./Product"
import StateProvider from './StateProvider'
import { initialState,reducer } from './reducer'
import Navbars from './Navbars';
import {Route,Switch} from 'react-router-dom'
import Cart from "./Cart"
import Detail from './Detail';
import SignIn from './SignIn';
import Sidebar from './Sidebar'

const Main = () => {
    const[searchvalue,setsearchvalue] = useState("")
    console.log(searchvalue.toLowerCase())
    return (
        <div>
          <StateProvider reducer={reducer} initialState={initialState}>
              <Navbars setsearchvalue={setsearchvalue}/>
              <Sidebar/>
          <Switch>
         <Route  exact path="/"> <Product searchvalue={searchvalue} /></Route>
          <Route exact path="/cart"><Cart/></Route>
          <Route exact path="/detail/:id" component={Detail}/>
         <Route exact path="/signin" component={SignIn}/>
          </Switch>
              </StateProvider> 
        </div>
    )
}

export default Main
