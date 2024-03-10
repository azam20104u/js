//before hosting
console.log(age);
var age = 10;

//after hosting
var age2;
console.log(age2);
age2 = 10;

//before hosting inside a function
function hoisting(){
    console.log(msg);
    var msg = "hello";
}
hoisting();

//after hosting inside a function
function hoisting2(){
    var msg;
    console.log(msg);
    msg = "hello";
}
hoisting2();
