function calculate(){
    event.preventDefault();
var x = parseInt(document.getElementById("num1").value);
console.log(x)
var y = parseInt(document.getElementById("num2").value);
console.log(y)
var operator = document.getElementById("op").value;
console.log(operator)
var result = 0
if (operator == "+") {
    result = x + y;
}
else if (operator == "-") {
    result = x - y;
}
else if (operator == "*") {
    result = x * y;
}
else {
    result = x / y;
}
document.getElementById("result-text").innerText=result;

}