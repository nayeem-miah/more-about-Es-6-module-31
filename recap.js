/**
 * 1. var let const 
 * 2. default parameter
 * 3. template string
 * 4. arrow function 
 * 5. destructuring and spread operator
 * 6. Objects.keys , Objects.values, Objects.entries
 * 7. for of loop ===>use in string and array  
 * 8. for in use in objects 
 */
var friendName='nayeem'; // it's will be don't use 
let age = 45;  // it's use sometimes let is changeable
const person = {   //i will be use all time but it is't changeable
    name : 'shakib khan',
    age : 56,
    accessLocation:'Dhaka'
};
const message = `hi, ${person.name} 
has friend Name is ${friendName}
her access location is ${person.accessLocation}`;
console.log(message);


const square = x =>x * x;
const sum = (a,b) => a+b;



const {home , name , ...others}= {name :'Habib', home : 'kolkatha', x: 34, y: 67}
console.log(others);
console.log(home);


const [first , second,...remaining]= ['han', 'can', 'ten','and'];
console.log(remaining);
console.log(first);


