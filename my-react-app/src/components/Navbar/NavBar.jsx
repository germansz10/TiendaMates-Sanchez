import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <nav className="navbar">
    <div className='navbar-logo'><a href="/"><img className="logo" src={logo} alt='Logo de la tienda' /></a></div>

    
    
    
      <ul>
        <Link to="/">Inicio</Link>
        
        <li className='submenu'>Productos
          <ul className='submenu-list'>
            <li><Link to="/category/imperial">Imperial</Link></li>
            <li><Link to="/category/camionero">Camionero</Link></li>
            <li><Link to="/category/tradicional">Tradicional</Link></li>
          </ul>
        </li>
        
        <li>Contacto</li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
