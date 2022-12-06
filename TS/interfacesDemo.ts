
interface Atm {
	
	validatePin(pinNo:number):boolean ;

	balanceInquiry():number;

}

class Bank implements Atm {
	
	validatePin(pinNo:number):boolean {
	   console.log("pinNo received is "+pinNo);
	   return true;
	}

	balanceInquiry():number {
	   return 9000;
	}

}

let bankObj:Bank = new Bank();

let r1:boolean = bankObj.validatePin(2323);
console.log("result of validatePin method is "+r1);

let r2:number = bankObj.balanceInquiry();
console.log("result of balanceInquiry method is "+r2);