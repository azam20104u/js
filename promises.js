//=== user define promis===
let promis = new Promise((res,rej)=>{
    if (true) {
        res("Promis fulfilled, sending data");
    } else {
        rej("Promis broke, can't send data now");
    }
});
promis.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
});