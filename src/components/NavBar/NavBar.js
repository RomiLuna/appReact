import './NavBar.css'
const NavBar =()=>{
    return(
      <nav className='NavBar'>
          <div>
              <p>
                  Reflexología LUNA
              </p>
              <img className='Logo' src={'./images/logo.png'} alt='logo'/>
          </div>
        <button className='Option'>Inicio</button>
        <button className='Option'>Servicios</button>
        <button className='Option'>Promociones</button>
        <button className='Option'>Login</button>
      </nav>
    )
  }
  export default NavBar