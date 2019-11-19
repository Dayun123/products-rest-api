const faker = require('faker');
const fs = require('fs');

const products = [];
const numProducts = 1000;

for (let i = 1; i <= numProducts; i++) {
  let hackerNoun = faker.hacker.noun();
  hackerNoun = hackerNoun[0].toUpperCase() + hackerNoun.slice(1, hackerNoun.length);
  products.push({
    id: i,
    name: `${hackerNoun} ${faker.commerce.product()}`,
    price: faker.commerce.price(),
    category: faker.commerce.department(),
  });
}

const productsFileContents = 'module.exports = ' + JSON.stringify(products);
const productsPath = `${__dirname}/products.js`;

fs.writeFile(productsPath, productsFileContents, (err) => {
  if (err) throw err;
  console.log(`Created 1000 products at ${productsPath}`);
});