class Employee{
    name : string;
    salary : number;

    constructor(name:string,salary:number){
        this.name=name;
        this.salary=salary;
    }

    getEmpInfo():void{
        console.log(`${this.name} earns ${this.salary}`)
    }
}

class Manager extends Employee{
    department : string;
    constructor(name : string, salary : number, department :string){
        super(name,salary);
        this.department=department;
    }

    getDeptInfo():void{
        console.log(`${this.name} manages ${this.department}`)
    }
}

let mng = new Manager("Harsh",80000,"IT");
mng.getEmpInfo();
mng.getDeptInfo();