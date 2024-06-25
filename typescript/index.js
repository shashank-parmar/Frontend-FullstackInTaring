var num = 5;
console.log(num);
function sum(a, b) {
    return a + b;
}
console.log(sum(10, 5));
var ok = sum.toString();
console.log(ok);
var names = "shashank";
var names2 = "harsh";
var up = names.toLocaleUpperCase();
var lp = names.toLocaleLowerCase();
console.log(up, lp);
var com = names === names2;
console.log(com);
var names3 = 7;
names3 = "shashank";
var array = [1, 2, 3, 4, 5, 6, 7];
var array2 = new Array(1, 2, 3, 4, 5);
var obj = {
    name: "shashank",
    age: 20
};
console.log(obj);
var obj2 = {
    name: "shashank",
    age: 20
};
var obj3 = {
    name: "harsh",
    age: 24
};
var obj4 = {
    name: "harsh",
};
console.log(obj2, obj3, obj4);
var product = {
    price: 10,
    qty: 5,
};
var calculator = function (product) {
    return product.price * product.qty;
};
console.log(calculator(product));
//enum
var Rolse;
(function (Rolse) {
    Rolse["user"] = "user";
    Rolse["admin"] = "admin";
})(Rolse || (Rolse = {}));
var user1 = {
    name: "shashank",
    age: 20,
    role: Rolse.user,
};
var user2 = {
    name: "shashank",
    age: 20,
    role: Rolse.admin,
};
var person1 = ['shashank', 20, true];
console.log(person1);
//union
var union = function (product) {
    // return product.price * product.qty;
};
// type persondetail = person01 & person02
