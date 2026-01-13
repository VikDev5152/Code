//iife with parameter
(function(name){
    console.log("hello" +name);
})("vikas");

//IIfe with return value
const result = (function(){
    return 10 + 5;
})();
console.log(result);