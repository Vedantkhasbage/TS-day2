"use strict";
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
class persons {
    constructor(age) {
        this.age = age;
    }
    hello() {
        console.log("hi there");
    }
}
class emp extends persons {
    constructor(age) {
        super(1);
        this.age = age;
    }
    greet() {
        return "hi there";
    }
}
