//without default value
function multiply(a,b){
    console.log(a*b);//NaN
}
multiply();

//with default parameter value
function multiply2(a=0,b=0){
    console.log(a*b);//0
}
multiply2();
//if you pass only value, it will assign to the first var
multiply2(10); // 10 will assign to a
multiply2(10,20);// now 10 assign to a and 20 assign to b
