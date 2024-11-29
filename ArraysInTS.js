"use strict";
//Arrays in typeSript
// const arr:number[]=[1,2,3,4,5,34,2,9991,0];
const userarr = [{
        fname: "ved",
        lname: "khasbage",
        age: 19
    }, {
        fname: "vedu",
        lname: "fge",
        age: 1
    }, {
        fname: "vedant",
        lname: "khasbage",
        age: 19
    }, {
        fname: "aman",
        lname: "khasbage",
        age: 9
    }];
let ans = [];
for (let i = 0; i < userarr.length; i++) {
    if (userarr[i].age > 18)
        ans.push(userarr[i]);
}
console.log(ans);
