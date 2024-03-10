console.log("Hello World by JS");
// primitive data types or values
let age = 123; //number
let message = "Hello World"; //string
let pass = false; //boolean
let something = undefined; //undefined
let isValue = null; //null
let isObject = NaN; //NaN

console.log(age);
console.log(message);
console.log(pass);
console.log(something);
console.log(isValue);
console.log(isObject);

const regNumber = 4123;
// regNumber=321; can't re-assign const type
console.log(regNumber);

function test() {
  for (var index = 0; index < 5; index++) {
    console.log(index);
  }
  console.log(index); //var is function scope
  //we can access outside the for loop
  //but let and const we can't, they are block scope
}

test();

//operator
console.log('2'==2);//true, check only the values
console.log('2'===2);//false, check data type and values
//Note: if you compare the object reference it will check both references points same object or not

//named function
function printSomething() {
  console.log("printing Hello World");
}
printSomething();

//anonymous function
let annFun = function () {
  console.log("printing Hello World from anonymous function ");
};
annFun();

//IIFE Immediately Invoke Function Expression

(function () {
  console.log("printing Hello World from IIFE");
})();

//arrow function
let arrowFun = () => {
  console.log("printing Hello World from arrow function ");
};
arrowFun();

//JS Object
let obj = {
  name: "AZAM",
  age: 123,
  message: "Hello World",
  objDetails: function () {
    return this.name + " " + age + " " + message;
  },
};
console.log(obj);
console.log(obj.name);
console.log(obj.objDetails());

//JS simple array
let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr.length);
console.log(arr[0]);

//JS array is dynamic and heterogeneous
arr[5] = 6; //we can add over the array length
console.log(arr);
arr[6] = "hello";
console.log(arr);

//JS object array like collection

let objArr = [
  { name: "AZAM", age: 23, address: "Kolkata" },
  { name: "AMIR", age: 33, address: "Delhi" },
  { name: "RAHUL", age: 43, address: "Bangalore" },
];
//forEach method

objArr.forEach((item) => {
  console.log(item);
});

//map method
let names = objArr.map((item) => {
  return item.name;
});
console.log(names);

//filter method
let filtered = objArr.filter((item) => {
  return item.age > 30;
});
console.log(filtered);

//reduce method
let totalAge = objArr.reduce((total, item) => {
  return total + item.age;
}, 0);
console.log(totalAge);

//every method
let isAllSeniour = objArr.every((items) => {
  return items.age > 20;
});
console.log(isAllSeniour);

//some method
let isSomeSenior = objArr.some((items) => {
  return items.age > 30;
});
console.log(isSomeSenior);

//find method
let senior = objArr.find((items) => {
  return items.address == "Bangalore";
});
console.log(senior);
