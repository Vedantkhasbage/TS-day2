interface people{
    name:string,
    age:number,
    greet:()=> string
}

const users:people={
    name:"Vedant",
    age:19,
    greet(){
        console.log("hi there!!")
        return this.name;
    }
}

function print(users:people){
    users.greet();
}
print(users)