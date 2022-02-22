import { useEffect,useState } from "react";
import { getProduct } from "../../asynmock"; 
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer=()=>{
const [product,setProducts]=useState([])
      useEffect(()=>{
        getProduct().then(product =>{
             setProducts(product)
        })
     } ,[])  
    
   
    return(
        <div >            
                <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer