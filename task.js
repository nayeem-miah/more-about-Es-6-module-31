// task 1-----> console log the secondary school location of sophia
let data = {
    Sophia :{
        id : 33 ,
        study: [
            {
                primary :[
                    {school_name: 'aaBc primary school'},
                    {location: 'uttra Dhaka'}
                ]
            },
            {
                secondary:[
                    {school_name: 'what is  primary school'},
                    {location: 'mirpur, Dhaka'}
        ]
            },
        ]
    }
}
console.log('sophia secondary location is :',data.Sophia.study[1].secondary[1]);



// task 2---> console.log output petersburg and herry
let students ={
    2222:{
        name: 'jack',
        section : 'c',
        class : 'IX',
        address:{
            'building no ': 12,
            'street' : 'st. joson',
            'city': 'petersburg',
            'country': 'UK'
        }
    },
    3333: {
        name :'herry',
        section: 'D',
        class : 'X'
    }
}
console.log('students jack location is :',students[2222].address['city']);
console.log('3333 student location is :',students[3333].name);

// task 3  : access and show habluder add ,show output Beginner ------>
let data2 ={
    data: [
        {
            bookId: 1,
            bookDetails: {
                name : 'habluder adda',
                category : 'XYZ',
                price : '20$',
            },
            bookCategory : 'basic',

        },
        {
            bookId : 2,
            bookDetails :{
                name : 'gabluder adda',
                category: 'ABC',
                price : '40$',
            },
            bookCategory : 'beginner',

        }
    ]
}

console.log(data2.data[0].bookDetails.name);
console.log(data2.data[1].bookCategory);



// task ----4------------>---------------------------------------------------------------
// ex ----------1
const oddNumbers = [1,3,5,7,9];
// use for loop ------>
// const evenNumbers= [];
// for(let number of oddNumbers){
//     number = number+1;
//     evenNumbers.push(number);
  
// }
// console.log(evenNumbers);
// use map -------->
const evenNumbers = oddNumbers.map(n=> n+1);
console.log(evenNumbers);

// ex -------2 use filter in array divisible by 10;
const numbers = [33, 50, 79, 78, 90, 101, 30];
const divisibleNumber = numbers.filter( n=> n%10===0);
console.log(divisibleNumber);
const findNumbers = numbers.find(n=> n%10 === 0 );
console.log(findNumbers);


// ex-3---------------->
const instructor=[
    {name : 'nabi',age:28 ,position : 'senior' },
    {name : 'akil',age:26 ,position : 'junior' },
    {name : 'sobuj',age:30 ,position : 'senior' },
]
// console.log(instructor);

// use filter :
const senior= instructor.filter(p=> p.position =='senior');
console.log(senior);

// ------------ex-4-------------->
const people = [
    {name : 'meena', age : 20},
    {name : 'rina', age : 15},
    {name : 'schrita', age : 22},
]

// use for loop use kora --------------->
// let sumOfAge = 0;
// for ( const name of people){
//     const age = name.age;
//     sumOfAge= sumOfAge+age;
// }
// console.log(sumOfAge);

// redusce() use kora 
const sumOfAge = people.reduce((p,c)=> p+c.age,0);
console.log('sum of numbers is :',sumOfAge);
