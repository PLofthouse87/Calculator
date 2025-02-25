// alert("Hello World!")

let firstNum = prompt("Please enter first number.");
let secNum = prompt("Please enter second number.");
let operIn = prompt("Please enter operator");


calculator = (number1, number2, operator) => {
    let result = 0
    switch(operator) {
        case "+": 
            result = number1 + number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "/" :
            result = number1 / number2;
            break;
        
      }
    return result;  
};

console.log(calculator(firstNum, secNum, operIn));