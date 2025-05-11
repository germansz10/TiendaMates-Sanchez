import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import logo from '../../assets/logo.png';

const NavBar = () => {
  return (
    <nav className="navbar">
    <div className='navbar-logo'><a href="/"><img className="logo" src={logo} alt='Logo de la tienda' /></a></div>

    
    
    
      <ul>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
