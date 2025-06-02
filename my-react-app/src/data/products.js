const products = [
   { id: '1', title: 'Mate Imperial Clásico', category: 'imperial', price: 12000 },
  { id: '2', title: 'Mate Imperial Premium', category: 'imperial', price: 18000 },
  { id: '3', title: 'Mate Imperial Forrado', category: 'imperial', price: 15000 },
  { id: '4', title: 'Mate Camionero Negro', category: 'camionero', price: 9500 },
  { id: '5', title: 'Mate Camionero XL', category: 'camionero', price: 10500 },
  { id: '6', title: 'Mate Camionero Grabado', category: 'camionero', price: 11000 },
  { id: '7', title: 'Mate Tradicional de Algarrobo', category: 'tradicional', price: 7000 },
  { id: '8', title: 'Mate Tradicional Liso', category: 'tradicional', price: 6500 },
  { id: '9', title: 'Mate Tradicional con Virola', category: 'tradicional', price: 8000 },
  { id: '10', title: 'Mate Tradicional de Calabaza', category: 'tradicional', price: 7200 },
];


export const getProducts = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });

export const getProductById = (id) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id === id));
    }, 500);
  });

export const getProductsByCategory = (category) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(products.filter(prod => prod.category === category));
    }, 500);
  });
