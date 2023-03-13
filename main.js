/*Given a number indicate if it is even or odd and if it is greater than 10*/

let n = parseInt(prompt("Write a number: "));

    if (n % 2 == 0 && n > 10) {
        alert("The number is even and greater than 10")
    }
    else if (n % 2 == 0 && n < 10) {
        alert("The number is even and less than 10")
    }
    else if (n % 2 == 0 && n == 10) {
        alert("The number is even")
    }
    else if (n > 10) {
        alert("The number is odd and greater than 10")
    }
    else if (n < 10) {
        alert("The number is odd and less than 10")
    }
    else if (n == 10) {
        alert("The number is odd")
    }
    else {
        alert("You didn't write a number :(")
    }