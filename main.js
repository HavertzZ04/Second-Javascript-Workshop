/*Build the algorithm that reads two numbers from the keyboard,
If the first is greater than the second, report their sum and
difference, otherwise, inform the product and the
division of the first by the second.*/

let n1 = parseInt(prompt("First number: "));
let n2 = parseInt(prompt("Second number: "));

if(n1 > n2){
    alert(`${n1} is greater than ${n2}, their sume is ${(n1 + n2)} and their difference is ${(n1 - n2)}`)
}
else {
    alert(`${n1} is less than ${n2}, their product is ${n1 * n2} and their division is ${n2 / n1}`)
}