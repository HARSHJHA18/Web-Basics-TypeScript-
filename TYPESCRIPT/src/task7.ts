abstract class Shape {
  abstract calArea(): number;
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  calArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }

  calArea(): number {
    return this.width * this.height;
  }
}

let circle = new Circle(5);
console.log(circle.calArea());

let rect = new Rectangle(10,5);
console.log(rect.calArea());