type user={
    name:String,
    post:String
}


type admin={
    name:String,
    post:String

}

const u:user={
    name:"vedant",
    post:"user"
}

const ad:admin={
    name:"ved",
    post:"admin"
}
type newuser=admin|user

function greetouser(arg:newuser){
    return arg.name 
}

console.log(greetouser(u))