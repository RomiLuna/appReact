const products=[
    {   id:1, name:'Hamburguesa',price:'$500',category:'salado',img:'https://unsplash.com/photos/B1KuLO3NoRg',desc:'Una hamburguesa es un sándwich hecho a base de carne molida o de origen vegetal, aglutinada en forma de filete cocinado a la parrilla o a la plancha, aunque también puede freírse u hornearse. ... Forma parte de uno de los alimentos icono de la cocina estadounidense (junto al pollo frito y la tarta de manzana).'},
    {   id:2, name:'Torta de chocolate',price:'$500',category:'dulce',img:'https://unsplash.com/photos/B1KuLO3NoRg',desc:'Torta deliciosa'},
    {  id:3, name:'Pizza',price:'$500',category:'salado',img:'https://unsplash.com/photos/B1KuLO3NoRg',desc:'Puedes elegir los ingredientes de la pizza' }
    ]
     
    
    
    const categories = [
        {id: 'salado', description: 'Comida'},
        {id: 'dulce', description: 'Tortas'}
        
    ]
    
    export const getProducts = (idCategory) => {
        return new Promise ((resolve) => {
            const productsToResolve = idCategory ? products.filter(item => item.category === idCategory) : products
            setTimeout(() => {
                resolve(productsToResolve);
            },500);
        });
    }
    
    export const getProduct = (id) => {
        return new Promise((resolve) => {
            const prod = products.find(p => p.id === parseInt(id))
            setTimeout(() => {
                resolve(prod)
            }, 500)
        })
    }
    
    export const getCategories = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(categories)
            }, 500)
        })
    }
    