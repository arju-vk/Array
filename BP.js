let PD = {};

let products = PD.products;
console.log(products.length);

let BP = [];
for (let product of products) {
  if (products.category === "beauty") {
    BP.push(product);
  }
}
console.log(BP.length);
