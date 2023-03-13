/*Build the algorithm that requests the name and age of 3
people and determine the name of the oldest person.*/

let person1 = prompt("Name of the first person: ");
let age1 = prompt("Age of the first person: ");
let person2 = prompt("Name of the second person: ");
let age2 = prompt("Age of the second person: ");
let person3 = prompt("Name of the third person: ");
let age3 = prompt("Age of the third person: ");

let total = Math.max(age1, age2, age3);

if(total == age1){
    alert(`${person1} is ${age1} years old and for that reason is the oldest`)
}
else if (total == age2){
    alert(`${person2} is ${age2} years old and for that reason is the oldest`)
}
else {
    alert(`${person3} is ${age3} years old and for that reason is the oldest`)
}