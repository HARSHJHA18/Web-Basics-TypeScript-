abstract class Vehicle {
    brand : string;
    constructor(brand : string){
        this.brand = brand;
    };

    abstract start():void;

    stop():void{
        console.log(`${this.brand} stopped`);

    }
}

class car extends Vehicle{
    start():void{
        console.log(`${this.brand} started`);
    }
}

let newCar = new car("BMW");
newCar.start();
newCar.stop();