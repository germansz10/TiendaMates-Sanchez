// ItemDetail.jsx
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ product }) => {
  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} className="item-image" />
      <p>${product.price}</p>
      <p>categoria: {product.category}</p>
      <ItemCount />
    </div>
  );
};

export default ItemDetail;
