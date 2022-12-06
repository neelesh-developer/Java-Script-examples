var Student = /** @class */ (function () {
    function Student(rollNo, name, course, fee) {
        if (rollNo === void 0) { rollNo = 0; }
        if (name === void 0) { name = ""; }
        if (course === void 0) { course = ""; }
        if (fee === void 0) { fee = 0; }
        this.rollNo = rollNo;
        this.name = name;
        this.course = course;
        this.fee = fee;
    }
    return Student;
}());
var st = new Student();
console.log(st);
var st2 = new Student(10, "vivek", "java", 9000);
console.log(st2);
