/*N athletes have advanced to triple jump finals at the games
2022 Women's Olympians. Design a program that asks for
keyboard the names of each finalist athlete and in turn, their
marks of the jump in meters. Inform the name of the athlete
champion to keep the gold medal and if she broke
record, report the payment that will be 500 million. the record
It is at 15.50 meters*/

let athleteName = [];
let score = [];

do {
    athleteName.push(prompt("Athlete Name: "));
    score.push(parseFloat(prompt("Athlete Score (Meters / Ex: 10.2): ")));
    
} while (confirm("Wanna add another one?"));

let record = 15.20;
let maxScore = score.indexOf(Math.max(...score));

if(maxScore > record){
    alert(`The competitor ${athleteName[maxScore]} won the championship and broke the world record jumping ${Math.max(...score)} meters, she just earned 500 millions.`);
} else if(maxScore <= record) {
    alert(`The competitor ${athleteName[maxScore]} won the championship and her score was: ${Math.max(...score)}`);
}