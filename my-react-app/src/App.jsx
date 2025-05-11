import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';

function App() {

  return (
    <>
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a Tienda Mate!" />
    </div>
</>
  )
}

export default App