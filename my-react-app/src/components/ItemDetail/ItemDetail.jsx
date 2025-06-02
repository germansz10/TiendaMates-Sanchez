// ItemDetail.jsx
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ product }) => {
  return (
    <div>
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <p>categoria: {product.category}</p>
      <ItemCount />
    </div>
  );
};

export default ItemDetail;
