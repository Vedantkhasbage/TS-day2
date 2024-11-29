//Arrays in typeSript
// const arr:number[]=[1,2,3,4,5,34,2,9991,0];

// function findmax(arr:number[]){
//     let max=-1;
//     for(let i=0;i<arr.length;i++){
//         max=Math.max(max,arr[i]);
//     }
//     return max;
// }


// console.log(findmax(arr))

interface users{
    fname:String,
    lname:String,
    age:number
}

const userarr:users[]=[{
    fname:"ved",
    lname:"khasbage",
    age:19
},{
    fname:"vedu",
    lname:"fge",
    age:1
},{
    fname:"vedant",
    lname:"khasbage",
    age:19
},{
    fname:"aman",
    lname:"khasbage",
    age:9
}]

// const ans:users[]=userarr.filter((data)=>data.age>18)
// console.log(ans)


// let ans=[];

// for(let i=0;i<userarr.length;i++){
//     if(userarr[i].age>18) ans.push(userarr[i]);
// }
// console.log(ans);