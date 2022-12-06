export class Employee {
	
	id:number;
	name:string;
	gender:string;

	constructor(id:number=0, name:string="", gender:string=""){
	   this.id = id;
	   this.name = name;
	   this.gender = gender;
	}

	toString():string{
	   return "id - "+this.id+", name - "+this.name+", gender - "+this.gender;
	}

}

class Developer extends Employee {
	
	noOfIssuesAssigned:number;
	noOfIssuesResolved:number;

	constructor(id:number=0, name:string="", gender:string="", noOfIssuesAssigned:number=0,noOfIssuesResolved:number=0 ){
	      super(id, name, gender);
	      this.noOfIssuesAssigned = noOfIssuesAssigned;
	      this.noOfIssuesResolved = noOfIssuesResolved;
	}

	toString():string {
	   return super.toString() +", noOfIssuesAssigned - "+this.noOfIssuesAssigned+", noOfIssuesResolved - "+this.noOfIssuesResolved;
	}
}


let emp:Employee = new Employee();
emp.id = 90;
emp.name = "harsha";
emp.gender = 'M';

let dev:Developer = new Developer();
dev.noOfIssuesAssigned = 20;
dev.noOfIssuesResolved = 10;
dev.id = 80;
dev.name = "harika";
dev.gender = 'F';

console.log("data in emp object is "+emp.toString());
console.log("data in dev object is "+dev.toString());

console.log(" ------------------------------------ ")

let emp2 : Employee = new Employee(30, "vivek", 'M');
let dev2 : Developer = new Developer(40, "kiran", 'M', 30, 25);

console.log("data in emp2 object is "+emp2.toString());
console.log("data in dev2 object is "+dev2.toString());