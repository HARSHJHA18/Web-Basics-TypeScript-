class Employee {
    name;
    salary;
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    getEmpInfo() {
        console.log(`${this.name} earns ${this.salary}`);
    }
}
class Manager extends Employee {
    department;
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }
    getDeptInfo() {
        console.log(`${this.name} manages ${this.department}`);
    }
}
let mng = new Manager("Harsh", 80000, "IT");
mng.getEmpInfo();
mng.getDeptInfo();
export {};
