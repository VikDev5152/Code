let fruits = ["Apple","Mango","Orange","Pineapple"]
console.log(fruits)

//array length
console.log(fruits.length);

//change array value
fruits[1] = "lassi";
console.log(fruits);

//Add elements at end (push)
fruits.push("grapes");
console.log(fruits);

//Remove last elemnt (pop)

fruits.pop();
console.log(fruits);

//add element at start(unshift)
fruits.unshift("Banana");
console.log(fruits);

//remove first elemnt
fruits.shift();
console.log(fruits);

//convert array to string
console.log(fruits.join(","));

//slice
let myArr =[ "A", "B", "C","D" ,"E" ,"F"];
console.log("1",myArr);

console.log("2",myArr.slice(1,3));

//splice
let myArr2 = ["A", "B", "C","D" ,"E" ,"F"];
myArr2.splice(1,3);
console.log("3",myArr2);