class student {
    name;
    roll;
    constructor(name, roll) {
        this.name = name;
        this.roll = roll;
    }
    greet() {
        console.log(`Hi, I am ${this.name}`);
    }
}
let stud = new student("Harsh", 1);
console.log(stud.roll);
stud.greet();
export {};
