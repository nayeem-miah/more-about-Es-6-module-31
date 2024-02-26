// data access :
const data = [{ name: "abul", id: 1, address: "kochu keath" }];
console.log(data[0].address);

const product = {
  count: 5000,
  data: [
    { id: 1, name: "lenovo laptop", price: 65000 },
    { id: 2, name: "mackbook", price: 165000 },
  ],
};
// second product price
console.log(product.data[1].name);

const user = {
  id: 5001,
  name: "soriful islam",
  address: {
    street: {
      first: "54/1 uttot side ",
      second: "poribag goli",
      third: "mymensingh",
    },
    city: "Dhaka",
  },
};
const user2 = {
  id: 5433,
  name: "pori beber majer",
  address: {
    city: "chittagong",
    country: "Bangladesh",
  },
};

//  access street second numbers :
console.log(user.address.street?.second);
console.log(user2.address.street?.second);
