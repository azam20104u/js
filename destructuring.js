//=====array destructuring=====
let arr = [10, 20, 30];
//if you want to assign these values to variable
let a = arr[0];
let b = arr[1];
let c = arr[2];
console.log(a, b, c);
//by using destructuring is faster and more efficient
let [x, y, z] = arr;
console.log(x, y, z);

//=====object destructuring=====
let obj = { id: 101, name: "Azam" };
//traditional way
let pid = obj.id;
let pname = obj.name;
console.log(pid, pname);
//by using destructuring is faster and more efficient
let { id:sid, name: sname } = obj;
console.log(sid, sname);

