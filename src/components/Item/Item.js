import './Item.css'
import { Link } from 'react-router-dom'
const Item=({product})=>{
    return(
        <article className="CardItem" >
            <header className="Header">
                <h2 className="ItemHeader">
                    {product.name}
                </h2>
            </header>
            <picture>
                <img src={product.img} alt={product.name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria:{product.category}
                </p>
                <p className="Info">
                    Precio:${product.price}
                </p>
            </section>
            <footer className="ItemFooter">
                <link to={`/detail/${product.id}`}>Ver detalle</link>
            </footer>

        </article>
    )
}
export default Item