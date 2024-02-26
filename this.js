class Person {
    constructor(name, age){
        this.name= name;
        this.age= age;
    }
    sleep(){
        console.log(`sleeping now ${this.name}`);
    }

}
const kodom = new Person('Kodom Ali', 21);
console.log(kodom);
kodom.sleep();
const badam=new Person('kasem ali',45);
console.log(badam);
badam.sleep();

// bejal
const lazy=kodom.sleep;
lazy();




