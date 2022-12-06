class Student {
	
	rollNo:number;
	name:string;
	course:string;
	fee:number;

	constructor(rollNo:number=0, name:string="", course:string="", fee:number=0){
	    this.rollNo = rollNo;
	    this.name = name;
	    this.course = course;
	    this.fee = fee;
	}

}

let st:Student = new Student();
console.log(st);

let st2:Student = new Student(10, "vivek", "java", 9000);
console.log(st2);