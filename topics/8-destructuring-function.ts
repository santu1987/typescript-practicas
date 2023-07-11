interface Product {
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

function taxtCalculation(options: TaxCalculationsOptions): number[] {
  let total = 0;

  options.products.forEach((product) => {
    total += product.price;
  });
  return [total, options.tax];
}

const result = taxtCalculation({
  products: shopingCart,
  tax: tax,
});

console.log('Total', result[0]);
console.log('Tax', result[1]);
export {};
