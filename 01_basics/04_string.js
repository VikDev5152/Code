const name = "vikas"
const repoCount = 50

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

let x = 5;
console.log(`Value is ${ x * 2}`);

const gameName =  new String('vikas')

console.log(gameName[0]);
console.log(gameName.__Proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('k'));

const newString = gameName.substring(0,3)
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newStringOne= "    vikas       "
console.log(newStringOne.trim());

const url = "https://vikas.com/vikas%20dawar"
console.log(url.replace('%20',' _'))

let text = "HTML CSS JS";
let result = text.split("  ");
console.log(result);

let text1 = "vikas";
console.log(text1.repeat(7));

let a = "hello";
let b = "hello";
console.log(a === b);

let num = 100;
console.log(String(num));