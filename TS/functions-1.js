function multiplyNumbers(num1, num2) {
    console.log("input recieved are " + num1 + " and " + num2);
    var result = num1 * num2;
    return result;
}
var r1 = multiplyNumbers(10, 20);
console.log("result received back is " + r1);
multiplyNumbers(10, "java");
