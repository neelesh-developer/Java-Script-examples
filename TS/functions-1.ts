

function multiplyNumbers(num1:number, num2:number):number{
	
	console.log("input recieved are "+num1+" and "+num2)
	let result:number = num1 * num2;
	return result;
}

let r1:number = multiplyNumbers(10, 20);
console.log("result received back is "+r1);

//multiplyNumbers(10, "java");