interface payment{
    amount : number;
    method : "creditCard" | "debitCard" | "upi";
};

function getPaymentProcess(Payment : payment): void{
    console.log(`Processing ${Payment.amount} via ${Payment.method}`);

}

getPaymentProcess({amount : 500,method : "upi"});