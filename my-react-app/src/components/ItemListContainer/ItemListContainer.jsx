import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../../data/products';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ greeting }) => {
  const [productList, setProductList] = useState([]);
  const { categoryId } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true); // Comienza la carga
      let productsFromDataBase;

      if (categoryId) {
        // Si hay una categoría en la URL, trae productos de esa categoría
        productsFromDataBase = await getProductsByCategory(categoryId);
      } else {
        // Si no hay categoría, trae todos los productos
        productsFromDataBase = await getProducts();
      }

      setProductList(productsFromDataBase);
      setIsLoading(false); // Termina la carga
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <div>
      <h2>{greeting}</h2>
      {isLoading ? (<p>Cargando productos...</p>) 
      : (<ItemList products={productList} />)}
    </div>
  );
};

export default ItemListContainer;
