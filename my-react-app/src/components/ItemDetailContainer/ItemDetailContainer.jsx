import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../data/products';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    getProductById(itemId).then(setProduct);
  }, [itemId]);

  return product ? <ItemDetail product={product} /> : <p>Cargando...</p>;
};

export default ItemDetailContainer;
