const products=[
    {   id:1, name:'Hamburguesa',price:'$500',category:'salado',img:'https://unsplash.com/photos/B1KuLO3NoRg'},
    {   id:2, name:'Torta de chocolate',price:'$500',category:'dulce',img:'https://unsplash.com/photos/B1KuLO3NoRg'},
    {  id:3, name:'Pizza',price:'$500',category:'salado',img:'https://unsplash.com/photos/B1KuLO3NoRg' }
    ]
    
   export const getProducts=()=>{
        return new Promise((resolve)=>{
            setTimeout(()=>{resolve(products)},3000)
        })
    
    }

    export const getProduct=()=>{
        return new Promise((resolve)=>{
            setTimeout(()=>{resolve(products[0])},3000)
        })
    
    }