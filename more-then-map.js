const numbers = [1, 3, 45 ,5 ,6 ,7 ];
const doubleIt = numbers.map(n=> n*2);
// console.log(doubleIt);
const fiveBonus= numbers.map(n=> n+5);
// console.log('five bonus numbers is :',fiveBonus);

const halves  = numbers.map(x=> x/2);
console.log(halves);


const friends = [ 'tom','jhon','ome', 'habib'];
const lengths = friends.map(friend=> friend.length);
// console.log(lengths);
const firstLetter = friends.map(first => first[0]);
console.log(firstLetter);
