let userInput1 = prompt("Write your first string:")
let userInput2 = prompt("Write your second string:")
let userInput3 = prompt("Write your third string:")

let result = userInput1 + " " + userInput2 + " " + userInput3

alert("Result: " + result)

let number = prompt("Enter a five-digit number:")

if (number.length !== 5) {
    alert("You entered an incorrect number. Please enter a five-digit number.")
} else {
    let numberString = number.toString()
    let digits = numberString.split("")
    alert("Result: " + digits.join(" "))
}
