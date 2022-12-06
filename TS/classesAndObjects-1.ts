
class Student {
	
	rollNo:number;
	name:string;
	course:string;
	fee:number;

}

let obj:Student = new Student();
obj.rollNo = 90;
obj.name = "harsha";
obj.course = "java";
obj.fee = 9000;

let obj2:Student = new Student();
obj2.rollNo = 80;
obj2.name = "vivek";
obj2.course = "html";
obj2.fee = 8000;

console.log(obj.rollNo+" -- "+obj.name+" -- "+obj.course+" -- "+obj.fee);
console.log(obj2.rollNo+" -- "+obj2.name+" -- "+obj2.course+" -- "+obj2.fee);