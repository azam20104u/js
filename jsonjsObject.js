let jsObj = { id: 101, name: "Azam" };
console.log("js object", jsObj);
let jsonObj = JSON.stringify(jsObj); //convert js to json
console.log("json object", jsonObj);
let getJsObj = JSON.parse(jsonObj); //convert json to js
console.log("js object", getJsObj);
