"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(id, name, gender) {
        if (id === void 0) { id = 0; }
        if (name === void 0) { name = ""; }
        if (gender === void 0) { gender = ""; }
        this.id = id;
        this.name = name;
        this.gender = gender;
    }
    Employee.prototype.toString = function () {
        return "id - " + this.id + ", name - " + this.name + ", gender - " + this.gender;
    };
    return Employee;
}());
exports.Employee = Employee;
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(id, name, gender, noOfIssuesAssigned, noOfIssuesResolved) {
        if (id === void 0) { id = 0; }
        if (name === void 0) { name = ""; }
        if (gender === void 0) { gender = ""; }
        if (noOfIssuesAssigned === void 0) { noOfIssuesAssigned = 0; }
        if (noOfIssuesResolved === void 0) { noOfIssuesResolved = 0; }
        var _this = _super.call(this, id, name, gender) || this;
        _this.noOfIssuesAssigned = noOfIssuesAssigned;
        _this.noOfIssuesResolved = noOfIssuesResolved;
        return _this;
    }
    Developer.prototype.toString = function () {
        return _super.prototype.toString.call(this) + ", noOfIssuesAssigned - " + this.noOfIssuesAssigned + ", noOfIssuesResolved - " + this.noOfIssuesResolved;
    };
    return Developer;
}(Employee));
var emp = new Employee();
emp.id = 90;
emp.name = "harsha";
emp.gender = 'M';
var dev = new Developer();
dev.noOfIssuesAssigned = 20;
dev.noOfIssuesResolved = 10;
dev.id = 80;
dev.name = "harika";
dev.gender = 'F';
console.log("data in emp object is " + emp.toString());
console.log("data in dev object is " + dev.toString());
console.log(" ------------------------------------ ");
var emp2 = new Employee(30, "vivek", 'M');
var dev2 = new Developer(40, "kiran", 'M', 30, 25);
console.log("data in emp2 object is " + emp2.toString());
console.log("data in dev2 object is " + dev2.toString());
