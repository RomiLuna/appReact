
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
//import ItemDetail from './components/ItemDetail/ItemDetail';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar title="Bienvenidos a ecommerce"/>
     <Routes>
       <Route path='/' element={<ItemListContainer/>}/>
       <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
       <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>      
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
