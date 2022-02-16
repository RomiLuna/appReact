import { useEffect,useState } from "react";
import { getProduct } from "../../asynmock"; 
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer=()=>{
const [products,setProducts]=useState([])
      useEffect(()=>{
        getProduct().then(products =>{
             setProducts(products)
        })
     } ,[])  
    
   
    return(
        <div >            
                <ItemDetail products={products}/>
        </div>
    )
}

export default ItemDetailContainer