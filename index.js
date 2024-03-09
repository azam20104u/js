console.log('Hello World by JS');
// primitive data types or values
let age = 123;//number 
let message = 'Hello World';//string
let pass = false;//boolean
let something = undefined;//undefined
let isValue = null;//null
let isObject = NaN;//NaN

console.log(age);
console.log(message);
console.log(pass);
console.log(something);
console.log(isValue);
console.log(isObject);

const regNumber = 4123;
// regNumber=321; can't re-assign const type
console.log(regNumber);

function test(){
    for (var index = 0; index < 5; index++) {
        console.log(index);
    }
    console.log(index);//var is function scope
    //we can access outside the for loop
    //but let and const we can't, they are block scope
}

test();

//JS Object
let obj = {
    name: 'AZAM',
    age: 123,
    message: 'Hello World',
    objDetails : function(){
        return this.name+" "+age+" "+message;
    }
}
console.log(obj);
console.log(obj.name);
console.log(obj.objDetails());

//JS Array

let arr = [1,2,3,4,5,6,7,8,9,10];
console.log(arr);
console.log(arr.length);
console.log(arr[0]);

