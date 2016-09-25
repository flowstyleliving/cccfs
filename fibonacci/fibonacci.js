var num0 = 0;
var num1 = 1;
console.log("Fibonacci #0: " + num0);
console.log("Fibonacci #1: " + num1);

for (i=2; i < 34; i++){
	num2 = num0 + num1;
	num0 = num1;
  num1 = num2;
  console.log("Fibonacci #" + i + ":" + num2);
}
