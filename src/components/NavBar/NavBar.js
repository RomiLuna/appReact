import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget.js'
const NavBar =({title})=>{
    return(
      <nav className='NavBar'>
          <div>
              <h3>{title}</h3>
           </div>
        <div className='Categories'>
            <button className='Option'>Inicio</button>
            <button className='Option'>Dulce</button>
            <button className='Option'>Salado</button>
            <button className='Option'>Login</button>
        </div>
        <CartWidget/>
      </nav>
    )
  }
  export default NavBar