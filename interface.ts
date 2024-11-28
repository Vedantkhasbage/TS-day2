interface usertype{
  name:string,
  age:number,
  address:{
    country:string,
    pincode:number
  }
}

let user:usertype={
    name:"vedant",
    age:19,
    address:{
        country:"India",
        pincode:442001
    }
}

function greet(user:usertype):boolean{
    return (user.age>18)
}


console.log(greet(user))