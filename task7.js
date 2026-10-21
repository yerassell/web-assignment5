document.getElementById("add").addEventListener("click", function () { calc('+'); });
document.getElementById("substract").addEventListener("click", function () { calc('-'); });
document.getElementById("multiply").addEventListener("click", function () { calc('*'); });
document.getElementById("divide").addEventListener("click", function () { calc('/'); });

function calc(operator) {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    let output;

    if (operator === '+'){ 
        output = a + b; 
    }
    else if (operator === '-'){
        output = a - b; 
    }
    else if (operator === '*'){
        output = a * b; 
    }
    else if (operator === '/') {
        output = a / b;
    }
    document.getElementById("output").innerHTML = "Result: " + output;
}
