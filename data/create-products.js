const faker = require('faker');

const products = [];
const numProducts = 1000;

for (let i = 0; i < numProducts; i++) {
  products.push({
    id: i,
    name: `${faker.hacker.noun()} ${faker.commerce.product()}`,
    price: faker.commerce.price(),
    category: faker.commerce.department(),
  });
}

console.log(products);