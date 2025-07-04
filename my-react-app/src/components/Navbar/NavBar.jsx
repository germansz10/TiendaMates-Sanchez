import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className='navbar-logo'>
        <Link to="/"><img className="logo" src={logo} alt='Logo de la tienda' /></Link>
      </div>

      <ul>
        <li><Link to="/">Inicio</Link></li>

        <li className='submenu'>Productos
          <ul className='submenu-list'>
            <li><Link to="/category/imperial">Imperial</Link></li>
            <li><Link to="/category/camionero">Camionero</Link></li>
            <li><Link to="/category/tradicional">Tradicional</Link></li>
          </ul>
        </li>

        <li>Contacto</li>
      </ul>

      <Link to="/cart">
        <CartWidget />
      </Link>
    </nav>
  );
};

export default NavBar;
