//=====without spreeds operator=====
let arr = [10, 20, 30];
let arr2 = arr; //here both references are pointing to same array
arr2[0] = 100;
console.log(arr, arr2);
//=====wit spreeds operator=====
let arr3 = [...arr]; //spreeds cloning and creating new array
arr3[0] = 1000;
console.log(arr, arr3);

//=====without rest operators=====
function add2(a, b) {
  console.log(a + b);
}
function add3(a, b, c) {
  console.log(a + b + c);
}
add2(10, 20);
add3(10, 20, 30);
//=====with rest operators=====
function addAny(...numbers) {//actualy it takes numbers as an array
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    console.log(sum);
}
addAny(10, 20);
addAny(10,20,30);