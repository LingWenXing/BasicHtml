export{}
var var1 = "Welcome to TypeScript sessions, typescript rapidly grows in programming community";
console.log(var1);

var var1 = "DXC Training";
console.log(var1);

var var1 = "Front-end";
console.log(var1);

var var1 = "Typescript";
console.log(var1);

let a : number = 12345;
let b : boolean = true;
let c : string = "Hello World";

console.log(a);
console.log(b);
console.log(c);

let name : string = "Wen Xing";
let stmt : string = `Hello Everyone My Name is ${name}`;

console.log(stmt);

let n : null = null;
let m : undefined = undefined;

console.log(n);
console.log(m);

let p:number = undefined;
console.log(p);

let array1 : number[] = [1,2,3,4,5];
let array2 : Array<number> = [1,2,3,4];

console.log(array1);
console.log(array2);

let emp1 : [number,string] = [1, "ABC"];
let emp2 : [string, number, string, number] = ["DEF", 2, "Java", 1234567];

console.log(emp1);
console.log(emp2);

enum Color{Red,Green,Blue,White,Black};

let colorChoice : Color = Color.Black;
console.log(colorChoice);

let xyz : any = "WX";
console.log(xyz);
xyz = 20;
console.log(xyz);
xyz = true;
console.log(xyz);

function add(total:number, tip:number = 99){
    if(tip){
        return total+tip;
    }else{
        return total;
    }
    
}
console.log(add(100));
function disp(x){
    console.log(`${x.name} ${x.country}`);
}
let ns = {
    name : "SAR21",
    country: "Singapore"
};
disp(ns);