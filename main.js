const a = prompt("Enter first number: ");
const x = parseInt(a);
const op = prompt("Enter operation ");
const b = prompt("Enter second number ");
const y = parseInt(b);
let res = 0;

if (
  !isNaN(x) &&
  !isNaN(y) &&
  (op == "+" || op == "-" || op == "*" || op == "/")
) {
  switch (op) {
    case "+":
      res = x + y;
      document.write("Result is: " + res);
      break;
    case "-":
      res = x - y;
      document.write("Result is: " + res);
      break;
    case "*":
      res = x * y;
      document.write("Result is: " + res);
      break;
    case "/":
      if (y == 0) {
        document.write("Division with zero is impossible");
        break;
      } else {
        res = x / y;
        document.write("Result is: " + res);
      }
      break;
  }
} else if (isNaN(x)) {
  document.write("First number is not a number!!! It was: " + a);
} else if (isNaN(y)) {
  document.write("Second number is not a number!!! It was: " + b);
} else if (op != "+" || op != "-" || op != "*" || op != "/") {
  document.write(op + " is not a valid operator!!!");
}
