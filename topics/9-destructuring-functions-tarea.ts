export interface Product {
  description: string;
  price: number;
}

interface TaxCalculationsOptions {
  tax: number;
  products: Product[];
}

const phone: Product = {
  description: 'Nokia A1',
  price: 150.0,
};

const tablet: Product = {
  description: 'ipad Air',
  price: 250.0,
};

const shopingCart = [phone, tablet];
const tax = 0.15;

export function taxtCalculation(
  options: TaxCalculationsOptions
): [number, number] {
  let total = 0;
  const { tax, products } = options;
  products.forEach(({ price }) => {
    total += price;
  });
  return [total, tax];
}

const [total, taxTotal] = taxtCalculation({
  products: shopingCart,
  tax: tax,
});

console.log('Total', total);
console.log('Taxt', taxTotal);
