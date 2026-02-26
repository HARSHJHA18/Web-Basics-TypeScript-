class bankAccount{
    public accHolderName : string;
    private balance : number;
    protected accType : string;
    
    constructor(holder : string, balance : number, type : string){
        this.accHolderName=holder;
        this.balance=balance;
        this.accType=type;
    }

    deposit(amount : number):void{
        this.balance += amount;
    }

    getBalance():number{
        return this.balance;
    }

}

let acc = new bankAccount("Harsh",500,"savings");
acc.deposit(500);
console.log(acc.getBalance());