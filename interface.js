"use strict";
let user = {
    name: "vedant",
    age: 19,
    address: {
        country: "India",
        pincode: 442001
    }
};
function greet(user) {
    return (user.age > 18);
}
console.log(greet(user));
