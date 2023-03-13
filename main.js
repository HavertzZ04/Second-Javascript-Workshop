/*Program that Enters by keyboard the value of the side of a square to show on the screen the
perimeter of it and the base and height of a rectangle to show the area of ​​the
same*/

let square = parseInt(prompt("Number of one side of the square: "));
let rectangleHight = parseInt(prompt("Hight of the rectangle"));
let rectangleWidht = parseInt(prompt("Widht of the rectangle"));

alert(`The perimeter of the square is: ${square * 4} and the rectangle area is: ${rectangleHight * rectangleWidht}`)
