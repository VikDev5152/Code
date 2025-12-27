let myDate  = new Date()
console.log(myDate.toString());

//Get Year
let d = new Date();
console.log(d.getFullYear());

//get month
let d1 = new Date();
console.log(d1.getMonth());

//get date
let d2 = new Date();
console.log(d2.getDate());

//get time
let d3 = new Date();
console.log(d3.getHours());
console.log(d3.getMinutes());
console.log(d3.getSeconds());

//custome Date Formate
let d4 = new Date();

let formateDate = d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear();
console.log(formateDate);

//TimeStamp(milliseconds)

//let d5 = new Date();

console.log(Date.now());
console.log(Date.now().toString());

//Display local Date and Time\
let d6 = new Date();

console.log(d6.toLocaleString());