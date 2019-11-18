const faker = require('faker');

const products = [];
const numProducts = 1000;

for (let i = 1; i <= numProducts; i++) {
  let str = faker.hacker.noun();
  str = str[0].toUpperCase() + str.slice(1, str.length - 1);
  products.push({
    id: i,
    name: `${str} ${faker.commerce.product()}`,
    price: faker.commerce.price(),
    category: faker.commerce.department(),
  });
}

console.log(products);