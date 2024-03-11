// console.log("=== without asyn and await ===");
// function getData() {
//   setTimeout(() => {
//     console.log("data base connected");
//     console.log("query executed");
//     console.log("data send successfully");
//   }, 2000);
// }
// function printData() {
//   console.log("hit the DB to get data");
//   getData();
//   console.log("data has arrived now");
// }
// printData();

console.log("=== with asyn and await ===");
function getData1() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("data base connected");
      console.log("query executed");
      res("data send successfully");
    }, 2000);
  });
}
async function printData1() {
  console.log("hit the DB to get data");
  await getData1().then((res)=>{
    console.log(res);
  });
  console.log("data has arrived now");
}
printData1();
