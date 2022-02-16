
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  
  return (
    <div className="App">
     <NavBar title="Bienvenidos a ecommerce"/>
      <ItemListContainer  greeting='Lun@'   />
    </div>
  );
}

export default App;
