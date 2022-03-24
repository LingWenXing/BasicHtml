document.write("Hello everyone! This is an external JS file.<br>")
document.write(2022)
document.write("<br>")
document.write("The value of 4+4 is "+(4+4))
document.write("<br>")
document.write("2"+"4"+"<br>")
document.write(2,4)
document.write("<br>")
document.write("<br>")
document.write("<br>")

var a = 1000
var A = 200
document.write("a: "+a)
window.document.write("<br>")
document.write("A: "+A+"<br>")
var b = "String";
document.write("b+A: "+b+A+"<br>")
var c = true;
document.write("c: "+c+"<br>")
var d;
document.write("d: "+d+"<br>")
var isLoggedIn = true;
document.write("isLoggedIn: "+isLoggedIn+"<br>")

var x = 10;
var y = 20;
var res1 = x+y;
document.write("res1: "+res1+"<br>")
var res2 = y-x;
document.write("res2: "+res2+"<br>")
var res3 = x*y;
document.write("res3: "+res3+"<br>")
var res4 = x/y;
document.write("res4: "+res4+"<br>")
var res5 = y%3;
document.write("res5: "+res5+"<br>")
y++;
document.write("y: "+y+"<br>")
--x;
document.write("x: "+x+"<br>")
var i=1;
i+=2;
document.write("i: "+i+"<br>")
document.write("x==y: "+(x==y))
document.write("<br>")
document.write("x===y: "+(x===y))
document.write("<br>")
document.write("x!y: "+(x!=y))
document.write("<br>")
document.write("x!==y: "+(x!==y))
document.write("<br>")
document.write("x>y: "+x>y)
document.write("<br>")
document.write("x<y: "+(x<y))
document.write("<br>")
document.write("x>=y: "+(x>=y))
document.write("<br>")
document.write("x<=y: "+(x<=y))
document.write("<br>")

document.write("x==9 && y == 21: "+(x==9 && y == 21))
document.write("<br>")
document.write("(x==10) && (y == 21): "+((x==10) && (y == 21)))
document.write("<br>")
document.write("(x==9)|| (y == 21): "+(x==9)|| (y == 21))
document.write("<br>")
document.write("(x==10) || (y == 21): "+(x==10) || (y == 21))
document.write("<br>")
document.write("!(x==9): "+!(x==9))
document.write("<br>")
document.write("!(x==10): "+!(x==10))
document.write("<br>")
document.write("x=6: ",x=6)
document.write("<br>")
document.write("x+=1: ",x+=1)
document.write("<br>")
document.write("y-=1: ",y-=1)
document.write("<br>")
document.write("x*=2: ",x*=2)
document.write("<br>")
document.write("y/=2: ", y/=2)
document.write("<br>")
document.write("x%=3: ", x%=3)
document.write("<br>")
document.write("y^=3: ", y^=3)
document.write("<br>")

document.write("TypeOf x: ",typeof x)
document.write("<br>")
document.write("TypeOf y: ",typeof y)
document.write("<br>")
document.write("TypeOf c: ",typeof c)
document.write("<br>")
var text1 = "WX";
var text2 = "YZ";
var res= text1+text2;
document.write("res: ",res)
document.write("<br>")
var text3 = "Hello ";
var text4 = text3+" Everyone";
document.write("text4: ",text4)
document.write("<br>")
str = new String("Hello");
var isValid = str instanceof String;
document.write("isValid: ",isValid)
document.write("<br>")
var isValid1= str instanceof Number;
document.write("isValid1: ",isValid1)
document.write("<br>")
nu = new Number(345);
var isValid2= nu instanceof Number;
document.write("isValid2: ",isValid2)
document.write("<br>")
document.write("BitWise Operator 5&1: ",5&1)
document.write("<br>")
document.write("BitWise Operator 5|1: ",5|1)
document.write("<br>")
document.write("BitWise Operator ~5: ",~5)
document.write("<br>")
document.write("BitWise Operator 5^1: ",5^1)
document.write("<br>")
document.write("BitWise Operator 5<<1: ",5<<1)
document.write("<br>")
document.write("BitWise Operator 5>>2: ",5>>2)
document.write("<br>")
document.write("This is statement 1<br>")
document.write("This is statement 2<br>")
document.write("This is statement 3<br>")
document.write("This is statement 4<br>")
document.write("This is statement 5<br>")
document.write("This is statement 6<br>")
document.write("This is statement 7<br>")
document.write("<br>")
var a = 25;
if(a%2==0){
    document.write(a+" is a Even Number");
}else{
    document.write(a+" is a Odd Number");
}
document.write("<br>")
var marks = 61;
if(marks>85){
    document.write("Grade A");
}else if(marks>=70 && marks <85){
    document.write("Grade B");
}else if(marks>=60 && marks <70){
    document.write("Grade C");
}else if(marks>=45 && marks <=60){
    document.write("Grade D");
}else if(mark<45){
    document.write("Grade F");
}
document.write("<br>")
var day = new Date().getDay();
switch(day){
    case 1:
        document.write("Monday");
        break;
    case 2:
        document.write("Tuesday");
        break;
    case 3:
        document.write("Wednesday");
        break;
    case 4:
        document.write("Thursday");
        break;
    case 5:
        document.write("Friday");
        break;
    case 6:
        document.write("Saturday");
        break;
    case 7:
        document.write("Sunday");
        break;
    default:
        document.write("Invalid day");
        break;
}
document.write("<br>")
for(var x = 1; x<=10; x++){
    document.write(x+"<br>");
}
document.write("<br>")
var x=1;
// while(x<30){
//     if(x%3==0 && x%5==0){
//         document.write("fizzbuzz <br>");
//     }else if(x%5==0){
//         document.write("buzz <br>")
//     }else if(x%3==0){
//         document.write("fizz <br>")
//     }else{
//         document.write(x+"<br>")
//     }
//     x++;
// }
document.write("<br>")

do{
    if(x%3==0 && x%5==0){
        document.write("fizzbuzz <br>");
    }else if(x%5==0){
        document.write("buzz <br>")
    }else if(x%3==0){
        document.write("fizz <br>")
    }else{
        document.write(x+"<br>")
    }
    x++;
}while(x<=30);
document.write("<br>")
var shortName = {
    html : "HyperTextMarkupLanguage",
    css : "CascadingStyleSheet",
    js : "JavaScript",
};
for (var n in shortName){
    document.write(shortName[n]+"<br>")
}

document.write("add(10,20): "+add(10,20));
document.write("<br>")
function add(x,y) {
    return x+y;
}

var a = 50;
var b = 100;
document.write("add(a,b): "+add(a,b));
document.write("<br>")
square(9)
square(12)
function square(a) {
    var res = a*a;
    document.write("res: "+res+"<br>");
}