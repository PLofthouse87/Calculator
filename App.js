// alert("Hello World!")

let firstNum = +prompt("Please enter first number.");
let operIn = prompt("Please enter operator");
let secNum = +prompt("Please enter second number.");



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
        case "%" :
            result = number1 % number2;
            break;
        
      }
    return result;
};

alert("The result is " + calculator(firstNum, secNum, operIn));