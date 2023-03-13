/*Develop a cyclical program that captures a data
number each time, and accumulate them. The program will
stops when the user types a zero. The program must
show: THE SUM OF THE VALUES, THE VALUE OF THE
AVERAGE, HOW MANY VALUES WERE ENTERED, GREATER
VALUE AND LESS VALUE.*/

let listNumbers = [];

while(true){
    let numbers = (parseInt(prompt("Enter a number: ")));
    listNumbers.push(numbers);
    if (numbers == 0){
        listNumbers.pop();
        if (true){
            break;
        }
    }
}

let sum = listNumbers.reduce(function(a, b){
    return a + b; }, 0);

let average = parseInt((sum / (listNumbers.length)));
let maxValue = listNumbers.indexOf(Math.max(...listNumbers));
let minValue = listNumbers.indexOf(Math.min(...listNumbers));

alert(`The sum of all the values is: ${sum}, the average of the values is: ${average}, the number of total added values were: ${listNumbers.length}, the greater number is: ${listNumbers[maxValue]} and the  lesser number is: ${listNumbers[minValue]}`)



