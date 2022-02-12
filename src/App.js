import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemCount from './components/ClassCounter/ItemCount';

function App() {
  return (
    <div className="App">
     <NavBar title="Bienvenidos a ecommerce"/>
     <ItemCount/>
    </div>
  );
}

export default App;
