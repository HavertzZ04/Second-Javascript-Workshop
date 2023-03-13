/*Program that requests the entry of the name and price of an item and the
quantity carried by the customer. Show what the buyer must pay
on your bill.*/

let names = []
let fullTotal = 0

do {
    names = prompt("Name of the product: ");
    let price = parseInt(prompt("Price of the product: "));
    let amount = parseInt(prompt("Amount: "));

    let total = price * amount;
    fullTotal += total;

} while (confirm("Wanna continue? "));

alert(`The total amount is: ${fullTotal}`)