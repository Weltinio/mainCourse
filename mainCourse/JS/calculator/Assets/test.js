// John and his family went on a holiday and went to 3 different restaurants. The bills were Php 1240, Php 480 and Php 2680.
// To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than Php 500, 15% 
// when the bill is between Php 500 and Php 2000, and 10% if the bill is more than Php 2000.
// In the end, John would like to have 2 arrays:
// 1. Containing all three tips (one for each bill)
// 2. Containing all three final paid amounts (bill tip).

const bills = {
    Tips: [],
    Total: [],
    bill: [1240, 480, 2680],

}
  
for(var i = 0; i < bills.bill.length; i++) {
    let tip;
    var cost = bills.bill[i];
    if (cost < 500) {
        tip = 0.2
    }
    else if (cost >= 500 && cost < 2000) {
        tip = 0.15
    }
    else {
        tip = 0.1
    }
        bills.Tips.push(cost * tip)
        bills.Total.push(cost * tip + cost)          
    };

console.log(bills.Tips)
console.log(bills.Total)
