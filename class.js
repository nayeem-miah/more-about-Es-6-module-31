const products = [
    { id: 1, name: "lenovo", price: 65000 },
    { id: 2, name: "dell", price: 45000 },
    { id: 3, name: "hp", price: 40000 },
    { id: 1, name: "mac", price: 150000 },
  ];
//  has some properties , method

class Product{
    country = 'Bangladesh';
    constructor(name){
        this.name= name;
    }
    speak (talk){
        console.log(`talking about ${talk}`);
    }
}
const lenovo = new Product('le le lenovo');
// console.log(lenovo);
// lenovo.speak('kita matho ba');


class Teacher {
    constructor(name, subject){
        this.name= name;
        this.subject= subject;
    }
    lecture (){
        console.log('sir is teaching Math');
    }
}
const te= new Teacher('name is abdullah','his  subjects is Math');
console.log(te);
te.lecture();


const Muhammed = new Teacher('name is muhammed', 'physics');
console.log(Muhammed);