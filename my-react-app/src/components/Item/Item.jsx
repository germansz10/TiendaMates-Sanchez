// Item.jsx
import { Link } from 'react-router-dom';
import './Item.css';
const Item = ({ product }) => {
  return (
    <div>
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <img src={product.image} alt={product.title} className="item-image" />
      <p>categoria: {product.category}</p>
      <Link to={`/item/${product.id}`}>Ver detalle</Link>
    </div>
  );
};

export default Item;
