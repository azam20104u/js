function add(a,b){
    console.log("add() executed");
    return a+b;
}
function m2(x){
    let res=x(10,20);
    console.log("m2() executed",res);
}
m2(add);