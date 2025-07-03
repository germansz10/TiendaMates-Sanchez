const products = [
   { id: '1', title: 'Mate Imperial Clásico', category: 'imperial', price: 12000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6odp7TzgygwXFumwPGiXZf_QcVMCjNB4raQ&s' },
  { id: '2', title: 'Mate Imperial Premium', category: 'imperial', price: 18000, image: 'https://acdn-us.mitiendanube.com/stores/001/388/150/products/4247219d-7bbe-48f3-86d0-93040e0f25d0-bfa1ec8eeb7bbfc7e417118140643404-1024-1024.jpeg' },
  { id: '3', title: 'Mate Imperial Forrado', category: 'imperial', price: 15000, image: 'https://tiendachemate.com.ar/wp-content/uploads/2024/10/Mate_Imperial_VirolaAcero_4.jpg' },
  { id: '4', title: 'Mate Camionero Negro', category: 'camionero', price: 9500, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSDT2ML1lAkzRIwSZfaTDLYUsP8Te3rIRChA&s' },
  { id: '5', title: 'Mate Camionero XL', category: 'camionero', price: 10500, image: 'https://http2.mlstatic.com/D_NQ_NP_972388-MLA84667089826_052025-O.webp' },
  { id: '6', title: 'Mate Camionero Grabado', category: 'camionero', price: 11000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4oxhOjouqlYmueykEzL32lQvvNm4QjahC4Q&s' },
  { id: '7', title: 'Mate Tradicional de Algarrobo', category: 'tradicional', price: 7000, image: 'https://acdn-us.mitiendanube.com/stores/997/442/products/algarrobo-bab7d41b063be9f76517249527054192-1024-1024.jpg' },
  { id: '8', title: 'Mate Tradicional Liso', category: 'tradicional', price: 6500, image: 'https://jaquealmate.com/wp-content/uploads/2024/10/mate-torpedo-liso-interior-con-base-bolitas.jpg' },
  { id: '9', title: 'Mate Tradicional con Virola', category: 'tradicional', price: 8000, image: 'https://argentinow.com//imagenes/archivos/2021-02/1667-2ho_1612446699.jpg' },
  { id: '10', title: 'Mate Tradicional de Calabaza', category: 'tradicional', price: 7200, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Ryz2ZxQ9xV7FZhVSqDEYNhU2sDC7tihTqA&s' },
];

const TiempoDeEspera = 1000; 

export const getProducts = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(products);
    }, TiempoDeEspera);
  });

export const getProductById = (id) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id === id));
    }, TiempoDeEspera);
  });

export const getProductsByCategory = (category) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(products.filter(prod => prod.category === category));
    }, TiempoDeEspera);
  });
