/*
Build the algorithm to determine the voltage of a
circuit based on resistance and current.*/

let i = parseInt(prompt("Write the current intensity: "));
let r = parseInt(prompt("Write the resistance: "));
let v = (i * r);

alert(`The voltage is ${v}`);