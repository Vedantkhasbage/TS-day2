// type car={
//     name:String;
//     age:number
// }

// function greeting(BMW:car){
//     return BMW.name
// }

// const BMW:car={
// name:"bmw latest edition",
// age:19
// }

// console.log(greeting(BMW));

type t1={
name:String,
parents:String,
}

type t2={
    name:String,
    money:String,
}

type t3=t1|t2

const t4:t3={
    money:"12020202020",
    name:"nj"
}