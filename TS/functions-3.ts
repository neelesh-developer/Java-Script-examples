
function multiplyNumbers(num1:number, num2:number, num3?:number){
	
	console.log("input recieved are "+num1+" and "+num2+" and "+num3);
	let result:number = num1 * num2;
	return result;
}

let x : number = multiplyNumbers(10, 2, 3);

multiplyNumbers(4, 5);