const products = [
  { id: 1, name: "lenovo", price: 65000 },
  { id: 2, name: "dell", price: 45000 },
  { id: 3, name: "hp", price: 40000 },
  { id: 1, name: "mac", price: 150000 },
];
console.log(products);

// map()---->
const names = products.map((product) => product.name);
// console.log(names);
const prices = products.map((product) => product.price);
console.log(prices);

//  forEach
products.forEach((p) => console.log(p.id));

// filter
const filter = products.filter((p) => p.price > 50000);
// console.log(filter);

// find -------->
const find = products.find((x) => x.price < 50000);
console.log(find);


const total = products.reduce((p,c)=> p+c.price,0);
console.log(total);