let arr = [10,20,,30,40,50];
arr['extra'] = 60;//all three loops ignore except for in
console.log("Simple for loop");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log("forEach loop");
arr.forEach((element) =>{
  console.log(element);
});

console.log("for of loop");
for (let element of arr) {
  console.log(element);
}

console.log("for in loop");
for (let key in arr) {
  console.log(arr[key]);
}

let obj = {id:101, name:'Azam'};
console.log("for in loop for object iteration");
for (const key in obj) {
   console.log(key, obj[key]);
}//Note: we can use only for in, other loops can't 
