const products=[
    {   id:1, name:'Hamburguesa',price:'$500',category:'salado',img:'https://unsplash.com/photos/B1KuLO3NoRg',desc:'Una hamburguesa es un sándwich hecho a base de carne molida o de origen vegetal, aglutinada en forma de filete cocinado a la parrilla o a la plancha, aunque también puede freírse u hornearse. ... Forma parte de uno de los alimentos icono de la cocina estadounidense (junto al pollo frito y la tarta de manzana).'},
    {   id:2, name:'Torta de chocolate',price:'$500',category:'dulce',img:'https://unsplash.com/photos/B1KuLO3NoRg',desc:'Torta deliciosa'},
    {  id:3, name:'Pizza',price:'$500',category:'salado',img:'https://unsplash.com/photos/B1KuLO3NoRg',desc:'Puedes elegir los ingredientes de la pizza' }
    ]
    
   export const getProducts=()=>{
        return new Promise((resolve)=>{
            setTimeout(()=>{resolve(products)},3000)
        })
    
    }

    export const getProduct=()=>{
        return new Promise((resolve)=>{
            setTimeout(()=>{resolve(products[0])},2000)
        })
    
    }