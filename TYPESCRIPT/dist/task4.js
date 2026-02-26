class bankAccount {
    accHolderName;
    balance;
    accType;
    constructor(holder, balance, type) {
        this.accHolderName = holder;
        this.balance = balance;
        this.accType = type;
    }
    deposit(amount) {
        this.balance += amount;
    }
    getBalance() {
        return this.balance;
    }
}
let acc = new bankAccount("Harsh", 500, "savings");
acc.deposit(500);
console.log(acc.getBalance());
export {};
