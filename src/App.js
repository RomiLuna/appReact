
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
//import ItemDetail from './components/ItemDetail/ItemDetail';
function App() {
  
  return (
    <div className="App">
     <NavBar title="Bienvenidos a ecommerce"/>
      <ItemListContainer  greeting='Lun@'   /> 
      <ItemDetailContainer/>      
     
    </div>
  );
}

export default App;
