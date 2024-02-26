class Vehicle {
    constructor(name, price){
        this.name= name;
        this.price= price;
    }
    mave(){
        console.log('gari chole na chole nah re');
    }
}

class Bus extends Vehicle{
    constructor (name , price, seat ,ticketPrice){
        super ( name, price);
        this.seat= seat;
        this.ticketPrice=ticketPrice;
    }
}

class Track extends Vehicle{
    constructor(name, price, load){
        super(name, price);
        this.load= load;
    } 
}