//singleton

const tinderUser = {}
     tinderUser.id = "123Vikas"
     tinderUser.name = " vikas dawar"
     tinderUser.isloggedIn = false

     console.log(tinderUser);


     const regularuser = {
           email: "vikasdawar12.vd@gmail.com",
             fullName : {
                userfullName:{
                firstName : "vikas",
                lastName  :"Dawar"
             }
         }
     }
     console.log(regularuser.fullName.userfullName.firstName);


     const obj1 = {1:"a",2:"b"}
     const obj2 = {3:"a",4:"b"}

    //const obj3 = Object.assign({},obj1,obj2)
    const obj3 = {...obj1,...obj2}
    console.log(obj3);
    

    //object De-structure
    