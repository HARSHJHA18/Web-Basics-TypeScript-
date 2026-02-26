class Shape {
}
class Circle extends Shape {
    radius;
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape {
    width;
    height;
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    calArea() {
        return this.width * this.height;
    }
}
let circle = new Circle(5);
console.log(circle.calArea());
let rect = new Rectangle(10, 5);
console.log(rect.calArea());
export {};
