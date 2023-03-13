/*Build a algorithm for a program that inputs three
grades of a student, if the average is less than or equal to 3.9
display a message "Study", otherwise a message that
say "scholarship"*/

let first = parseInt(prompt("Add the first qualification (0.0 - 5.0): "));
let second = parseInt(prompt("Add the second qualification (0.0 - 5.0): "));
let third = parseInt(prompt("Add the third qualification (0.0 - 5.0): "));

let average = ((first + second + third) / 3);

if(average >= 4.0){
    alert("Scholarship")
}
else {
    alert("Study more next time")
}