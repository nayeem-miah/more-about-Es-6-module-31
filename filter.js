// filters selects elements based on a condition and returns an array with the elements that fulfilled the condition .
const numbers =[12, 34, 56 , 65,6];
const players = [67,54,75,65];
// const selected = players.filter(x=> x>60);
// const selected = players.filter(x=> x>80);
// const selected = players.filter(x=> x>50);
// const selected= players.filter(p=> p%2===1); //odd numbers
const selected= players.filter(p=> p%2===0); // even numbers 
console.log(selected);

const friends = [ 'tom','jhon','omei', 'habib'];
const oddFriends = friends.filter(friend=> friend.length%2===0);
console.log(oddFriends);