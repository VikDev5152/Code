const mySym = Symbol();
let student = {
    name : "vikas",
    age : 25,
    course : "MCA",
    [mySym] : "myKey1",
};
 console.log(student)

 //bracket method
 console.log(student["course"]);
 console.log(student[mySym]);
 

 //Greeting method
 let user = {
  name: "Vikas",
  greet: function () {
    return "Hello " + this.name;
  }
};

console.log(user.greet());

let user1 = {
  name: "palak",
  greet(){
    return `WelCome ${this.name}`;
  }
};

console.log(user1.greet());