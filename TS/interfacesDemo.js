var Bank = /** @class */ (function () {
    function Bank() {
    }
    Bank.prototype.validatePin = function (pinNo) {
        console.log("pinNo received is " + pinNo);
        return true;
    };
    return Bank;
}());
var bankObj = new Bank();
var r1 = bankObj.validatePin(2323);
console.log("result of validatePin method is " + r1);
