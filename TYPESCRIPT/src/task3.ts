class student{
    name : string;
    roll : number;

    constructor(name : string, roll : number){
        this.name= name;
        this.roll=roll;
    }

    greet():void{
        console.log(`Hi, I am ${this.name}`);
    }
}

let stud = new student("Harsh",1);
console.log(stud.roll);
stud.greet();
