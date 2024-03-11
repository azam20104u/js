function m1(){
    let x = 10;
    console.log("m1() executed",x);
    function m2(){
        console.log("m2() executed",x);
    }
    m2();
}
m1();