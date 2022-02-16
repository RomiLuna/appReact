import { useEffect,useState } from "react";
//import ItemCount from "../ItemCount/ItemCount";

import { getProducts } from "../../asynmock"; 
import ItemList from "../ItemList/ItemList";

const ItemListContainer=({greeting='Hello'})=>{
const [products,setProducts]=useState([])
      useEffect(()=>{
        getProducts().then(products =>{
           // console.log(products)
            setProducts(products)
        })
     } ,[])  
    
    
    /* const handleOnAdd=(quantity)=>{
        console.log(`se agregaron ${quantity} productos`)
    } */

    return(
        <div className="ItemListContainer">
            <h1>{greeting}</h1>
           {/*  <ItemCount stock={10} initial={2} onAdd={handleOnAdd}/> */}
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer