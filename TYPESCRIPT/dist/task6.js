class Vehicle {
    brand;
    constructor(brand) {
        this.brand = brand;
    }
    ;
    stop() {
        console.log(`${this.brand} stopped`);
    }
}
class car extends Vehicle {
    start() {
        console.log(`${this.brand} started`);
    }
}
let newCar = new car("BMW");
newCar.start();
newCar.stop();
export {};
