import { Product, taxtCalculation } from './9-destructuring-functions-tarea';

const shoppingCart: Product[] = [
  {
    description: 'Nokia',
    price: 100,
  },
  {
    description: 'ipod',
    price: 1000,
  },
];
const tax = 0.15;
const [total, taxTotal] = taxtCalculation({
  products: shoppingCart,
  tax: tax,
});

console.log('Total', total);
console.log('Tax', taxTotal);
