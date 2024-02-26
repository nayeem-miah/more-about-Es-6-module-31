// map ===> loops through each element of the array and do the operation that you passed in the callBack function and hold the result from each operation in an array finally you returns you that array 

const numbers =[ 4, 5, 6, 7];
// console.log(numbers);

const result = numbers.map(doubleIt)
// console.log(result);

function doubleIt (num){
    // console.log(num);
    return num*2 ;
}


const double2 = (x) => x*2;
const output = numbers.map(double2);
// console.log(output);

const output2 = numbers.map(n=> n*2);
console.log('double numbers is :',output2);



// const Double= [];
// for ( const num of numbers){
//     const doubleNumber = num *2;
//     Double.push(doubleNumber);
// }
// console.log(Double);
