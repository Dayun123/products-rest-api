const faker = require('faker');

const products = [];
const numProducts = 1000;

for (let i = 1; i <= numProducts; i++) {
  let hackerNoun = faker.hacker.noun();
  hackerNoun = hackerNoun[0].toUpperCase() + hackerNoun.slice(1, hackerNoun.length - 1);
  products.push({
    id: i,
    name: `${hackerNoun} ${faker.commerce.product()}`,
    price: faker.commerce.price(),
    category: faker.commerce.department(),
  });
}

console.log(products);