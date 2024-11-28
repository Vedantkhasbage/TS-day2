interface usertype2{
    name:string,
    age:number,
    address?:{
        country:string
    }
}

const user2:usertype2={
    name:"vedant",
    age:19
}

console.log(user2.name)