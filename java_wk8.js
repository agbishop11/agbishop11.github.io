function greaterNum(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

function updateComparisonResult() {
  var num1 = document.getElementById("number1")
  var num2 = document.getElementById("number2")
  var resultString = greaterNum(num1, num2) + " is greater.";
  document.getElementById("result").textContet = resultString;
}