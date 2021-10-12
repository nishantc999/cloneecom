import React,{createContext, useReducer,useState,useEffect} from 'react'
import Axios from 'axios';
import {url} from './Config';
export const Context=createContext()
export const ProductData=createContext()
export const tokenState=createContext()


const StateProvider = ({children,reducer,initialState}) => {
    const [data,setdata]=useState([]);
    const [tokens,settokens]=useState(false)
    useEffect(() =>{
    Axios.get(url).then((response) =>setdata([...response.data]));
    },[])
   
    return (<>
        <div>
           <Context.Provider value={useReducer(reducer,initialState)}>
               <ProductData.Provider value={data}>
                   <tokenState.Provider value={{tokens,settokens}}>
                {children}
                </tokenState.Provider>
               </ProductData.Provider>
               </Context.Provider> 
               
        </div>

  </>  )
}

export default StateProvider
