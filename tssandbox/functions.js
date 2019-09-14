function getSum(num1, num2) {
    return num1 + num2;
}
//console.log(1,5);
var mySum = function (num1, num2) {
    if (num1 == 'string') {
        num1 = parseInt(num1);
    }
    if (num2 == 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
// console.log(mySum('5',5));
function getName(firstName, lastName) {
    if (lastName == undefined) {
        return firstName;
    }
    return firstName + '' + lastName;
}
console.log(getName('John', ''));
function myVoid() {
    return;
}
