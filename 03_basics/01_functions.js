function sayHello(){
    console.log("Hello world");
}
sayHello();

function addTwoNumbers(number1 ,number2){
    console.log(number1 + number2)
}
addTwoNumbers(3,5)

//return
function multiply( x , y){
    return(x * y);
}
let result = multiply(4,5)
console.log(result);

//Arrow Function]
const square = (n) => n * n;
console.log(square(4));

//calulatCartPrice

function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(200,400,500));

//************************* */

function calculateCartPrice1(...num1){
    return num1
}
console.log(calculateCartPrice1(200,400,500));

