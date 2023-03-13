/*Build the algorithm in Javascript for a program
for any number of students reading the name,
the sex and the final grade and find the student with the highest
grade and the student with the lowest grade and how many were
men and how many women.*/

let namesList = [];
let sex = "";
let gradelist = [];
let m = [];
let f = [];

do {
    namesList.push(prompt("Student name: "));

    sex = (prompt("Student gender (M or F): "));

    if(sex == "M" || sex == "m"){
        m.push(1);
    } else if(sex == "F" || sex == "f"){
        f.push(1);
    }

    gradelist.push(parseFloat(prompt("Definitive grade (0.0 - 5.0): ")));

} while(confirm("Wanna continue? "));

let maxStudent = gradelist.indexOf(Math.max(...gradelist));
let minStudent = gradelist.indexOf(Math.min(...gradelist));

alert(`${namesList[maxStudent]} had the best grade: ${Math.max(...gradelist)} and ${namesList[minStudent]} had the worst grade was ${Math.min(...gradelist)}. There were ${m.length} boys and ${f.length} girls`);
