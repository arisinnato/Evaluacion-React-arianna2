import logo from './logo.svg';
import './App.css';
import BotonAlert from './components/BotonAlert';'./components/BotonAlert';
import ComponentePadre from './components/ComponentePadre'; 
import Contador from './components/Contador';            
import Producto from './components/Producto';              
import ProductoImmer from './components/ProductoImmer';   
import Animales from './components/Animales';              
import ProductoModificado from './components/ProductoModificado';

function App() {
  return (
    <div className="App">
     {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  </header>*/}
  <BotonAlert texto="Presióname para ver el alert" />
  <ComponentePadre />
  <Contador/>
  <Producto/>
  <ProductoImmer/>
  <ProductoModificado/>
  <Animales/>

  </div>
  );
}

export default App;
