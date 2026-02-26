;
function getPaymentProcess(Payment) {
    console.log(`Processing ${Payment.amount} via ${Payment.method}`);
}
getPaymentProcess({ amount: 500, method: "upi" });
export {};
