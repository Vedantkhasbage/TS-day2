// interface employee{
//     name:String;
//     age:number;
// }

// class Manager implements employee{
//     name:String;
//     age:number;

//     constructor(name:String,age:number){
//         this.name=name;
//         this.age=age
//     }
// }

// let user1=new Manager("vedant",19);
// console.log(user1.name)



abstract class persons{
    age:number;
    constructor(age:number){
        this.age=age;
    }
    hello(){
        console.log("hi there")
    }
   abstract greet():string;
}

class emp extends persons{
    age:number;
    constructor(age:number){
        super(1)
        this.age=age;
    }
    greet(): string {
       return "hi there"
    }
}