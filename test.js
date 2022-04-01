"use strict";
exports.__esModule = true;
var var1 = "Welcome to TypeScript sessions, typescript rapidly grows in programming community";
console.log(var1);
var var1 = "DXC Training";
console.log(var1);
var var1 = "Front-end";
console.log(var1);
var var1 = "Typescript";
console.log(var1);
var a = 12345;
var b = true;
var c = "Hello World";
console.log(a);
console.log(b);
console.log(c);
var name = "Wen Xing";
var stmt = "Hello Everyone My Name is ".concat(name);
console.log(stmt);
var n = null;
var m = undefined;
console.log(n);
console.log(m);
var p = undefined;
console.log(p);
var array1 = [1, 2, 3, 4, 5];
var array2 = [1, 2, 3, 4];
console.log(array1);
console.log(array2);
var emp1 = [1, "ABC"];
var emp2 = ["DEF", 2, "Java", 1234567];
console.log(emp1);
console.log(emp2);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["White"] = 3] = "White";
    Color[Color["Black"] = 4] = "Black";
})(Color || (Color = {}));
;
var colorChoice = Color.Black;
console.log(colorChoice);
var xyz = "WX";
console.log(xyz);
xyz = 20;
console.log(xyz);
xyz = true;
console.log(xyz);
function add(total, tip) {
    if (tip === void 0) { tip = 99; }
    if (tip) {
        return total + tip;
    }
    else {
        return total;
    }
}
console.log(add(100));
function disp(x) {
    console.log("".concat(x.name, " ").concat(x.country));
}
var ns = {
    name: "SAR21",
    country: "Singapore"
};
disp(ns);
