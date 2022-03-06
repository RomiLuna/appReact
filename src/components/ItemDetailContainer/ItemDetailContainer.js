import './ItemDetailContainer.css'
import { useEffect,useState } from "react";
import { getProduct } from "../../asynmock"; 
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
const ItemDetailContainer=()=>{
const [product,setProducts]=useState([])
const {productId} = useParams()
      useEffect(()=>{
        getProduct(productId).then(product =>{
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